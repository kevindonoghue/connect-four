import React from 'react'
import Cell from './Cell'

function Board(props) {
  const { data, modifyData } = props
  const boardStyle = {
    height: '700px',
    width: '700px',
    display: 'flex',
    flexDirection: 'column',
  }
  const rowStyle = {
    height: '100px',
    width: '700px',
    display: 'flex',
  }

  return (
    <div style={boardStyle}>
      {data.map((row, i) =>  (
        <div key={i} style={rowStyle}>
          {row.map((color, j) => (
            <Cell
              key={j}
              color={color}
              modifyData={() => modifyData(i, j, 'red')} 
            />
          ))}
        </div>
        ))}
    </div>
  )
}

export default Board;
