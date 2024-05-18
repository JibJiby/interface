// TODO: 생성자 인자 타입 추론까지 가능하도록 변경 필요
export type Constructor<T = {}> = new (...args: any[]) => T;
