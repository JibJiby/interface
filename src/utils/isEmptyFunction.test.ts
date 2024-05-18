import { isEmptyFunction } from './isEmptyFunction';

describe('isEmptyFunction', () => {
  test('빈 함수 테스트', () => {
    function emptyFn() {}
    expect(isEmptyFunction(emptyFn)).toBe(true);
  });

  test('내용이 있는 함수 테스트', () => {
    function nonEmptyFn() {
      console.log('Hello');
    }
    expect(isEmptyFunction(nonEmptyFn)).toBe(false);
  });

  test('네이티브 코드 함수 테스트', () => {
    const nativeFn = Function.prototype.bind.call(Function);
    expect(isEmptyFunction(nativeFn)).toBe(false);
  });

  test('단일 라인 주석만 있는 함수 테스트', () => {
    function commentedFn() {
      // 주석만 있는 함수
    }
    expect(isEmptyFunction(commentedFn)).toBe(true);
  });

  test('별표 주석만 있는 함수 테스트', () => {
    function commentedFn() {
      /* 주석만 있는 함수 */
    }
    expect(isEmptyFunction(commentedFn)).toBe(true);
  });

  test('멀티 라인 주석만 있는 함수 테스트', () => {
    function commentedFn() {
      /**
       *
       * 여러 라인 주석
       *
       **/
    }
    expect(isEmptyFunction(commentedFn)).toBe(true);
  });

  test('공백만 있는 함수 테스트', () => {
    function whitespaceFn() {}
    expect(isEmptyFunction(whitespaceFn)).toBe(true);
  });

  test('객체 메서드 빈 함수 테스트', () => {
    const obj = {
      method: function () {},
    };
    expect(isEmptyFunction(obj.method)).toBe(true);
  });

  test('ES6 화살표 함수 빈 함수 테스트', () => {
    const arrowFn = () => {};
    expect(isEmptyFunction(arrowFn)).toBe(true);
  });
});
