import { useState } from 'react'

const Form = ({ onSubmit }) => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text) return

    const newTask = {
      id: new Date().getTime(),
      name: text,
      complete: false,
      dateAdded: new Date().getTime(),
    }
    onSubmit(newTask)
    setText('')
  }

  return (
    <>
      <tr>
        <td>
          <p>What do you need to to?</p>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Task'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type='submit'>Add Task</button>
          </form>
        </td>
      </tr>
    </>
  )
}

export default Form
