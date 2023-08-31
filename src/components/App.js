import { useState } from 'react'

import Header from './Header'
import Form from './Form'
import ImageCredit from './ImageCredit'
import SortBy from './SortBy'
import TaskList from './TaskList'

import './App.css'

const initialState = [
  {
    id: new Date().getTime(),
    name: 'Fix my boombox',
    complete: false,
    dateAdded: new Date().getTime(),
  },
  {
    id: new Date().getTime() + 10,
    name: 'Watch Alf',
    complete: false,
    dateAdded: new Date().getTime(),
  },
  {
    id: new Date().getTime() + 20,
    name: 'Get photos developed',
    complete: false,
    dateAdded: new Date().getTime(),
  },
]
const App = () => {
  const [tasks, setTasks] = useState(initialState)
  const [sortBy, setSortBy] = useState('dateOldFirst')

  const handleAddTask = (newTask) => {
    setTasks((tasks) => [...tasks, newTask])
  }

  const handleDelete = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id))
  }

  const handleComplete = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : task
      )
    )
  }

  const handleChangeSortBy = (sortByString) => {
    setSortBy(sortByString)
  }

  return (
    <div className='app'>
      <table className='app-table' border='1'>
        <tbody>
          <Header />
          <Form onSubmit={handleAddTask} />
          <SortBy onChangeSortBy={handleChangeSortBy} sortBy={sortBy} />
          <TaskList
            tasks={tasks}
            onDelete={handleDelete}
            onComplete={handleComplete}
            sortBy={sortBy}
          />
        </tbody>
      </table>
      <ImageCredit />
    </div>
  )
}
export default App
