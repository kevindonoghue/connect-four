import React, { useEffect, useState } from 'react'
import Board from './Board'

function App() {
  const [data, setData] = useState([])

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
  }

  useEffect(() => {
    const temp = []
    for (let i=0; i<7; i++) {
      let row = []
      for (let j=0; j<7; j++) {
        row.push('gray')
      }
      temp.push(row)
    }
    setData(temp)
  }, [])

  function modifyData(i, j, color) {
    data[i][j] = color
    setData([...data])
  }

  return (
    <div style={style}>
      <Board data={data} modifyData={modifyData} />
    </div>
  )
}

export default App
