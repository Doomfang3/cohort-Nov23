/*   {
    "_id": "1",
    "firstName": "Christine",
    "lastName": "Clayton",
    "email": "christine.clay@example.com",
    "phone": "567-890-1234",
    "linkedinUrl": "https://linkedin.com/in/christineclaytonexample",
    "languages": ["English", "Dutch"],
    "program": "Web Dev",
    "background": "Computer Engineering",
    "image": "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-3.png",
    "cohort": "WD BER 2024-03",
    "projects": []
  }, */

const otherData = {
  phone: '567-890-1234',
  linkedinUrl: 'https://linkedin.com/in/christineclaytonexample',
  languages: ['English', 'Dutch'],
  program: 'Web Dev',
  background: 'Test Homonculus',
  image:
    'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-3.png',
  cohort: 'WD BER 2024-03',
  projects: [],
}

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const NewStudentPage = ({ setStudents }) => {
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    console.log('Submit', { firstName, lastName, email })
    const newStudentId = uuidv4()

    setStudents(prevStudents => {
      return [
        ...prevStudents,
        {
          _id: newStudentId,
          firstName: firstName,
          lastName: lastName,
          email: email,
          ...otherData,
        },
      ]
    })
    // navigate('/')
    navigate(`/students/${newStudentId}`)
  }

  return (
    <>
      <h1>New Student</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Firstname:
          <input required value={firstName} onChange={event => setFirstName(event.target.value)} />
        </label>
        <label>
          Lastname:
          <input required value={lastName} onChange={event => setLastName(event.target.value)} />
        </label>
        <label>
          Email:
          <input
            type='email'
            required
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <button type='submit'>Create</button>
      </form>
    </>
  )
}

export default NewStudentPage
