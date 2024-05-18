import { FIELD_KEY } from './constants';

/**
 * 속성을 필드로 표시하고 해당 메타데이터를 저장하는 데코레이터 함수
 */
export function Field(target: any, propertyKey: string) {
  const properties = Reflect.getMetadata(FIELD_KEY, target) || [];
  properties.push(propertyKey);
  Reflect.defineMetadata(FIELD_KEY, properties, target);
}
