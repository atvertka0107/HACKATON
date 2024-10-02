import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import MainContainer from './components/MainContainer/MainContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <MainContainer text='Оформление договора'>
          <Form />
        </MainContainer>
      </div>
    </>
  )
}

export default App
