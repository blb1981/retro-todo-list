import Task from './Task'

const TaskList = ({ tasks, sortBy, onComplete, onDelete }) => {
  // const { tasks, sortBy, onComplete, onDelete } = props
  let sortedTasks

  if (sortBy === 'dateOldFirst') {
    sortedTasks = tasks.slice().sort((a, b) => {
      return a.dateAdded - b.dateAdded
    })
  }

  if (sortBy === 'dateNewFirst') {
    sortedTasks = tasks.slice().sort((a, b) => {
      return b.dateAdded - a.dateAdded
    })
  }

  if (sortBy === 'nameAsc') {
    sortedTasks = tasks.slice().sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
  }

  if (sortBy === 'nameDesc') {
    sortedTasks = tasks.slice().sort((a, b) => {
      return b.name.localeCompare(a.name)
    })
  }

  if (sortBy === 'completeAsc') {
    sortedTasks = tasks.slice().sort((a, b) => {
      return Number(a.complete) - Number(b.complete)
    })
  }
  return (
    <>
      {sortedTasks.length > 0 ? (
        sortedTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))
      ) : (
        <tr>
          <td>No tasks on your list right now.</td>
        </tr>
      )}
    </>
  )
}

export default TaskList
