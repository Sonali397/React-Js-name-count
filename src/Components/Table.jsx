import React, { useState } from 'react';
import style from "./user.module.css"

const Table = () => {
  const [names, setNames] = useState([
    { name: 'John', count: 3 },
    { name: 'Emily', count: 7 },
    { name: 'Michael', count: 2 },
    { name: 'Sophia', count: 5 }
  ]);

  const [newName, setNewName] = useState('')

  const handleAddName = () => {
    if (newName.trim() !== '') {

      const existingName = names.find((item) => item.name === newName)
       if (existingName) {
        existingName.count++
        setNames([...names])
      } else {
        setNames([...names, { name: newName, count: 1 }])
      }
      setNewName('')
    }
  }

  const getRowColor = (count) => {
    if (count<=3 ) {
      return 'green'
    } else if (count>3 && count<10) {
      return 'yellow'
    } else if(count>=10) {
      return 'red'
    }
  }

  return (
    <div >
       <div id={style.a1}>
        <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Enter a name" />
        <button onClick={handleAddName}>Add Name</button>
      </div>
      <div id={style.maindiv}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {names.map((item, index) => (
            <tr key={index} style={{ backgroundColor: getRowColor(item.count) }}>
              <td>{item.name}</td>
              <td>{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
       </div>
    </div>
  )
}
export default Table