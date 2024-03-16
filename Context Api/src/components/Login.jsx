import { useContext, useState } from 'react'
import UserContext from '../context/UserContext'


function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useContext(UserContext)

  const handleSubmit = (e) => {

  }

  return (
    <div>
      <h2>Login Here</h2>

      <input type="text"
        value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
      {"   "}
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login