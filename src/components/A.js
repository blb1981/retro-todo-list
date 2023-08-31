export const A = (props) => {
  const { children } = props
  return (
    <span className='my-link' {...props}>
      {children}
    </span>
  )
}
