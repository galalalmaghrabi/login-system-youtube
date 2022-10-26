import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const URL = "http://localhost:3000"
  const navigate = useNavigate()


  const [user,setUser] = useState('')
  const [error,setError] = useState('')

  const handleChangeValue = e => {
    setUser({...user,[e.target.name]:e.target.value})
  }
  const handeUserLogin = e =>{
    e.preventDefault()
    axios.post(`${URL}/login`,user).then(res =>{
      const id = res.data.id
      const admin = res.data.admin

      if (!localStorage.getItem('id')) {
          localStorage.setItem('id',id)
          localStorage.setItem('admin',admin)
      }
      window.location.href = "/"
    }).catch(err=>{
      setError(err.response.data.msg)
    })
  }
  return (
    <section>
    <div className="formdiv">
      <form onSubmit={handeUserLogin}>
        <h3>تسجيل حساب </h3>
          {
              error ? <p className="alert alert-danger text-center">{error}</p> : null
            }
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="username"
            required
            placeholder=" اسم المستخدم اوالبريد الالكتروني "
            onChange={handleChangeValue}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="password"
            required
            placeholder="كلمه السر "
            onChange={handleChangeValue}
          />
        </div>
        <button type="submit" className="submitBtn">
          تسجيل
        </button>
      </form>
      <img src="/images/img.webp" alt="" />
    </div>
  </section>
  )
}

export default Login