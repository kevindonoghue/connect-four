import React, { useEffect, useState } from 'react'

function Cell(props) {
  const { color, modifyData } = props
  const style = {
    height: '100px',
    width: '100px',
    outline: '5px solid black',
    background: color
  }

  return (
    <div style={style} onClick={modifyData}></div>
  )
}

export default Cell
