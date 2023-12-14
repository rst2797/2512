import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

const App = () => {
    useEffect(()=>{
        axios.get("/get")
    }, [])
  return (
    <div>App</div>
  )
}

export default App