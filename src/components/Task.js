import { A } from './A'

const Task = ({ task, onDelete, onComplete }) => {
  const { name, id, complete } = task

  return (
    <tr>
      <td className='task'>
        <div className={`task-name ${complete ? 'completed' : ''}`}>{name}</div>
        <div>
          <A onClick={() => onDelete(id)}>Delete</A>
          <A onClick={() => onComplete(id)}>
            {complete ? 'Mark incomplete' : 'Mark complete'}
          </A>
        </div>
      </td>
    </tr>
  )
}

export default Task
