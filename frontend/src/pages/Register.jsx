import { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"
import { FaUser } from 'react-icons/fa'

import {register, reset} from "../features/auth/authSlice"
import Spinner from '../components/Spinner'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess , message} = useSelector((state) => state.auth)

  useEffect(() => {
    
    if(isError) {
      toast.error(message)
    }

    if(isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())

  

  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if(password !== password2){
      toast.error("Passwords do not match")
    } else {
      const userData = {
        name, email, password
      }
      dispatch(register(userData))
    }
  }

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
    <section className="heading">
      <h1> <FaUser/> Register</h1>
      <p>Please Create an Account</p>
    </section>

    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
        <input type="text" name="name" className="form-control" value={name} placeholder="Please Enter your Name" onChange={onChange} />
        </div>

        <div className="form-group">
        <input type="email" name="email" className="form-control" value={email} placeholder="Please Enter your Email" onChange={onChange} />
        </div>

        <div className="form-group">
        <input type="password" name="password" className="form-control" value={password} placeholder="Please Enter your password" onChange={onChange} />
        </div>
        
        <div className="form-group">
        <input type="password" name="password2" className="form-control" value={password2} placeholder="Please Confirm Password" onChange={onChange} />
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

export default Register