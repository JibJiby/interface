# Jibjiby Interface

자바스크립트 환경에서 클래스를 interface 로 사용하기 위한 패키지 입니다.

## 설치

```bash
npm install --save-dev @jibjiby/interface
```

## 의존성 추가

데코레이터 문법을 사용하기 위해 바벨 세팅이 필요합니다.

```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node nodemon @babel/plugin-proposal-decorators reflect-metadata

```

자세한 세팅 방법은 [자바스크립트 사용 예제](./example/js-version/) 와 같이 사용 시 babel 관련 세팅을 진행하시면 됩니다.

## TODO

- [ ] @Field 부착된 프로퍼티를 private 으로 처리
- [ ] 생성자 직접 구현하지 않도록
- [ ] 생성자 인자 자동 타입 추론 (제네릭 관련?)
