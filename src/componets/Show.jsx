import React, { useContext } from 'react'
import { textContext } from '../../context/Context'

function Show() {
    const [name,setName]=useContext(textContext)
  return (
    <div>{name}</div>
  )
}

export default Show