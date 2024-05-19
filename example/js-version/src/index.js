require('reflect-metadata');
const { Interface, Field } = require('@jibjiby/interface');

/**
 * ---------------------------------------
 * 선언 코드
 * ---------------------------------------
 */
@Interface
class Foo {
  @Field
  name;

  constructor(name) {
    this.name = name;
  }

  fn() {}
}

class Bar extends Foo {
  constructor(name = 'bar') {
    super(name);
  }

  fn() {
    console.log('fn');
  }
}

/**
 * ---------------------------------------
 * 사용 코드
 * ---------------------------------------
 */
// const foo = new Foo(); // Error: Method 'fn' must be implemented in subclass of Foo.
const bar = new Bar();
// field
console.log('name ', bar.name);
// method
bar.fn();
