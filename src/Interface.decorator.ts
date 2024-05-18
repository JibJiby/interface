import { Constructor } from './types/constructor';
import { isEmptyFunction } from './utils/isEmptyFunction';
import { FIELD_KEY, METHOD_KEY } from './constants';

/**
 * 주어진 클래스에 대한 인터페이스 검증을 수행하는 데코레이터 함수
 * 이 함수는 클래스에 필드와 메서드의 존재를 검증한다.
 */
export function Interface<T extends Constructor>(Base: T) {
  const fieldNames = Reflect.getMetadata(FIELD_KEY, Base.prototype) || [];
  const methodNames = Object.getOwnPropertyNames(Base.prototype).filter(
    (prop) =>
      prop !== 'constructor' && typeof Base.prototype[prop] === 'function'
  );

  Reflect.defineMetadata(METHOD_KEY, methodNames, Base);

  return class extends Base {
    constructor(...args: any[]) {
      super(...args);
      /**
       * Field
       */
      const keys = Object.keys(this);
      for (const field of fieldNames) {
        if (!keys.includes(field)) {
          throw new Error(`The ${field} field has not been initialized.`);
        }
      }

      /**
       * Method
       */
      const required = Reflect.getMetadata(METHOD_KEY, Base);

      // interface 에서는 구현이 포함되면 안된다.
      required.forEach((method: string) => {
        if (!isEmptyFunction(Base.prototype[method])) {
          throw new Error(
            `Method '${method}' must not be implemented in class ${Base.name}.`
          );
        }
      });

      // interface 를 구현하는 클래스는 메소드를 구현해야 한다.
      required.forEach((method: string) => {
        if (isEmptyFunction(this[method])) {
          throw new Error(
            `Method '${method}' must be implemented in subclass of ${Base.name}.`
          );
        }
      });
    }
  };
}
