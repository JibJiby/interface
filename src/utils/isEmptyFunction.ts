export function isEmptyFunction(fn: Function): boolean {
  const functionString = fn.toString();
  if (functionString.includes('[native code]')) {
    return false;
  }

  // 구현이 빈 함수는 '{ }' 으로 인지
  const functionBody = functionString
    .slice(functionString.indexOf('{') + 1, functionString.lastIndexOf('}'))
    .trim();

  // 주석 제거
  const cleanedFunctionBody = functionBody
    .replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '')
    .trim();

  return cleanedFunctionBody === '';
}
