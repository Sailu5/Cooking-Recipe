import { Link } from 'react-router-dom'

const ErrorNotFound = () => {
  return (
    <div className='text-center'>
      <h1>Sorry, that page could not be found</h1>
      <Link to="/">Back to Recipe Categories</Link>
    </div>
  )
}

export default ErrorNotFound