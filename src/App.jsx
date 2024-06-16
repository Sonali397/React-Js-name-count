import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Table from './Components/Table'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <User/> */}
        <Table />
      </BrowserRouter>
    </div>
  )
}
export default App