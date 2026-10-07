import { useState } from 'react'
import Agecalculator from './components/Agecalculator'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Agecalculator />
    </>
  )
}

export default App
