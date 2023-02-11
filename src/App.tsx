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
