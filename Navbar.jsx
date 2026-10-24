import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/students">Students</Link>
      <Link to="/courses">Courses</Link>
    </nav>
  )
}

export default Navbar
