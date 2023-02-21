# 🗝️ React의 react-google-recaptcha 라이브러리를 이용하여 만든 ReCaptcha V2, V3 문서입니다.
 
| <img src="https://user-images.githubusercontent.com/95972251/218261135-2bb1aea4-876d-4cf1-b6bd-0a86853b7e97.png" alt="Light" /> | <img src="https://user-images.githubusercontent.com/95972251/218261134-b1d6b8bf-7d76-467d-be4b-099eb836979f.png" alt="Dark" /> |
| ------------- | ------------- |

:sparkles: 🗝️ React의 react-google-recaptcha 라이브러리를 이용하여 만든 ReCaptcha V2, V3 문서입니다. :sparkles:
## :tada: React 프로젝트 생성
- React 생성
```bash
npm create-react-app my-app
# or
yarn create react-app my-app
```

- vite를 이용하여 프로젝트를 생성하려면
```bash
npm create vite@latest
# or
yarn create vite
```
- 터미널에서 실행 후 프로젝트 이름 만든 후 React 선택, Typescirpt-SWC 선택하면 생성 완료.
## 🚠 'react-google-recaptcha-v3', 'react-google-recaptcha' 라이브러리 설치
- `ReCaptcha`를 이용하여 사용자가 사람인지 로봇인지를 알고 싶다면 `ReCaptcha`를 React에서 쉽게 사용할 수 있도록 도와주는 `react-google-recaptcha` 라이브러리를 설치해서 진행해야 한다. 그럼, 아래 명령어로 라이브러리를 설치한다.
```bash
$ npm install react-google-recaptcha-v3 react-google-recaptcha
# or
$ yarn add react-google-recaptcha-v3 react-google-recaptcha
```
## ⚙️ .env 파일 세팅
### ⚡ .env
- `.env` 파일에는 `ReCaptcha` 사이트에서 발급받은 2가지 `key`값을 넣어야 한다.
- 이에 대한 세부 사항은 <a href="https://whwp0913.me/%EA%B5%AC%EA%B8%80-reCAPTCHA-v3-%EB%B0%9C%EA%B8%89-%EB%B0%8F-%EC%A0%81%EC%9A%A9">링크</a>를 참조하기 바란다.
```bash
VITE_V2_KEY={ReCaptcha 2버전의 key 값}
VITE_V3_KEY={ReCaptcha 3버전의 key 값}
```
## ✒️ App.tsx 수정 및 작성
### ⚡ App.tsx
- `Captcha2.tsx`, `Captcha3.tsx`를 `import`하여 `div.card` 안에 위치시킨다.
```typescript
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ReCaptcha from './assets/ReCaptcha.png'
import './App.css'
import Captcha2 from '@components/Captcha2'
import Captcha3 from '@components/Captcha3'

export default function App(): JSX.Element {
  return (
    <div className="App">
      <div>
        <a href="https://www.npmjs.com/package/react-google-recaptcha" target="_blank">
          <img src={ReCaptcha} className="logo" alt="ReCaptcha" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React-ReCaptcha-Pages</h1>
      <div className="card">
        <Captcha2 />
        <Captcha3 />
      </div>
      <p className="read-the-docs">
        Click on the React and ReCaptcha logos to learn more
      </p>
    </div>
  )
}
```
## 📝 components 파일 속 Captcha2.tsx, Captcha3.tsx 수정 및 작성
### ⚡ Captcha2.tsx
- `ReCaptcha`의 2버젼 중 이미지 선택 형식을 고른 후 `import.meta.env.VITE_V2_KEY`로 `.env`의 key 값을 통해 작동시킨다.
```typescript
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Captcha2 = () => {
    const recaptchaRef = React.useRef() as React.MutableRefObject<HTMLFormElement>;

    const onSubmitWithReCAPTCHA = async () => {
        const token = await recaptchaRef.current.executeAsync();
    }

    return (
        <form onSubmit={onSubmitWithReCAPTCHA}>
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_V2_KEY}
            />
        </form>
    )

}

export default Captcha2
```
### ⚡ Captcha3.tsx
- `ReCaptcha`의 3버젼은 사용자가 자동으로 사람인지 기계인지를 판단해준다.
- 위에서 작성한 내용과 동일하게 `import.meta.env.VITE_V3_KEY`는 `.env`의 key 값을 통해 작동시킬 수 있다.
```typescript
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Captcha3 = () => {
    const recaptchaRef = React.useRef() as React.MutableRefObject<HTMLFormElement>;

    const onSubmitWithReCAPTCHA = async () => {
        const token = await recaptchaRef.current.executeAsync();
    }

    return (
        <form onSubmit={onSubmitWithReCAPTCHA}>
            <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={import.meta.env.VITE_V3_KEY}
            />
        </form>
    )

}

export default Captcha3
```
## 📎 출처
- <a href="https://velog.io/@rnrn99/reCAPTCHA-%EC%82%BD%EC%A7%88-%EA%B8%B0%EB%A1%9D">reCAPTCHA 삽질 기록</a>
- <a href="https://whwp0913.me/%EA%B5%AC%EA%B8%80-reCAPTCHA-v3-%EB%B0%9C%EA%B8%89-%EB%B0%8F-%EC%A0%81%EC%9A%A9">구글 reCAPTCHA (v3) 발급 및 적용</a>
