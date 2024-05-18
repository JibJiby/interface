import { Field } from './Field.decorator';
import { FIELD_KEY } from './constants';

describe('Field Decorator', () => {
  it('propertyKey를 메타데이터에 추가해야 한다.', () => {
    class TestClass {
      @Field
      myProperty: string;
    }

    const properties = Reflect.getMetadata(FIELD_KEY, TestClass.prototype);
    expect(properties).toContain('myProperty');
  });

  it('여러 속성을 처리할 수 있어야 한다.', () => {
    class AnotherTestClass {
      @Field
      firstProperty: string;

      @Field
      secondProperty: string;
    }

    const properties = Reflect.getMetadata(
      FIELD_KEY,
      AnotherTestClass.prototype
    );
    expect(properties).toContain('firstProperty');
    expect(properties).toContain('secondProperty');
  });

  it('기존 메타데이터를 보존해야 한다.', () => {
    class YetAnotherTestClass {
      @Field
      existingProperty: string;

      @Field
      newProperty: string;
    }

    const properties = Reflect.getMetadata(
      FIELD_KEY,
      YetAnotherTestClass.prototype
    );
    expect(properties).toContain('existingProperty');
    expect(properties).toContain('newProperty');
  });
});
