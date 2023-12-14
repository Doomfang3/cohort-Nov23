import StudentCard from '../components/StudentCard'

import { Link } from 'react-router-dom'

function HomePage({ students }) {
  return (
    <div className='border-2 border-rose-500 m-2'>
      <h1>Home Page</h1>
      <div className='flex justify-between items-center p-2 font-bold border-b w-full'>
        <span className='flex items-center justify-center' style={{ flexBasis: '20%' }}>
          Image
        </span>
        <span style={{ flexBasis: '20%' }}>Name</span>
        <span style={{ flexBasis: '20%' }}>Program</span>
        <span style={{ flexBasis: '20%' }}>Email</span>
        <span style={{ flexBasis: '20%' }}>Phone</span>
      </div>

      {students.map(student => (
        <Link to={`/students/${student._id}`} key={student._id}>
          <StudentCard {...student} />
        </Link>
      ))}
    </div>
  )
}

export default HomePage

/* const Button = ({ type = 'button', children, ...rest }) => {
  return (
    <button type={type} {...rest}>
      {children}
    </button>
  )
} */
