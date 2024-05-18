import { Interface } from './Interface.decorator';

describe('Interface Decorator', () => {
  test('interface 클래스를 직접 호출하면 예외가 발생한다.', () => {
    @Interface
    class Foo {
      fn() {}
    }

    expect(() => new Foo()).toThrow(
      `Method 'fn' must be implemented in subclass of Foo.`
    );
  });

  test('interface 의 메소드를 구현하지 않으면 예외가 발생한다.', () => {
    @Interface
    class Foo {
      fn() {}
    }

    class Bar extends Foo {}

    expect(() => new Bar()).toThrow(
      `Method 'fn' must be implemented in subclass of Foo.`
    );
  });

  test('interface 의 메소드를 구현했을 때, 예외가 발생하지 않는다.', () => {
    @Interface
    class Foo {
      fn() {}
    }

    class Bar extends Foo {
      fn() {
        console.log('fn');
      }
    }

    expect(() => new Bar()).not.toThrow();
  });
});
