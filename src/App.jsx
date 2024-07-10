import React from 'react'
import Todo from './componets/Todo'
import Show from './componets/Show'
import { useState } from'react'

function App() {
  const [store, setStore] = useState([]);

  return (
    <>
    <Todo store={store} setStore={setStore}/>
    <Show store={store} setStore={setStore}/>
    </>
  )
}

export default App