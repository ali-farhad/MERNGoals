import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData;

  const onChange = (e) => {

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
    <section className="heading">
      <h1> <FaSignInAlt/> Login</h1>
      <p>Login and Start Setting Goals!</p>
    </section>

    <section className="form">
      <form onSubmit={onSubmit}>
       

        <div className="form-group">
        <input type="email" name="email" className="form-control" value={email} placeholder="Please Enter your Email" onChange={onChange} />
        </div>

        <div className="form-group">
        <input type="password" name="password" className="form-control" value={password} placeholder="Please Enter your password" onChange={onChange} />
        </div>
        
        <div className="form-group">
          <button type="submit" className="btn btn-block">
            Submit
          </button>
        </div>
      </form>
    </section>
    </>
  )
}

export default Login