const SortBy = ({ onChangeSortBy, sortBy }) => {
  return (
    <tr>
      <td>
        <span>Sort by: </span>
        <select value={sortBy} onChange={(e) => onChangeSortBy(e.target.value)}>
          <option value='dateOldFirst'>Date added (oldest first)</option>
          <option value='dateNewFirst'>Date added (newest first)</option>
          <option value='nameAsc'>Name Ascending</option>
          <option value='nameDesc'>Name Descending</option>
          <option value='completeAsc'>Incomplete First</option>
        </select>
      </td>
    </tr>
  )
}

export default SortBy
