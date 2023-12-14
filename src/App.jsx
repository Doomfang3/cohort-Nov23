import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import StudentDetailsPage from './pages/StudentDetailsPage'
import UserProfilePage from './pages/UserProfilePage'
import NewStudentPage from './pages/NewStudentPageg'
import studentsData from './assets/students.json'
import { useState } from 'react'

function App() {
  const [students, setStudents] = useState(studentsData)

  return (
    <div className='App relative z-20 pt-20'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage students={students} />} />
        <Route path='/profile' element={<UserProfilePage />} />
        <Route path='/students/new' element={<NewStudentPage setStudents={setStudents} />} />
        <Route path='/students/:studentId' element={<StudentDetailsPage students={students} />} />

        <Route path='*' element={<h1>404 Page</h1>} />
      </Routes>
    </div>
  )
}

export default App
