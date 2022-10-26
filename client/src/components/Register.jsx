import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const URL = "http://localhost:3000"
  const navigate = useNavigate()

  const [user,setUser] = useState('')
  const [error,setError] = useState('')

  const handleChangeValue = e => {
    setUser({...user,[e.target.name]:e.target.value})
  }

  const handeNewUser = e =>{
    e.preventDefault()
    axios.post(`${URL}/register`,user).then(res=>{
      alert(res.data.msg)
      navigate('/login')
    }).catch(err=>{
      setError(err.response.data.msg)
    })
  }
  return (
    <>
      <section>
        <div className="formdiv">
          <form onSubmit={handeNewUser}>
            <h3>انشاء حساب </h3>
            {
              error ? <p className="alert alert-danger text-center">{error}</p> : null
            }
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="firstname"
                required
                placeholder="اسمك"
                onChange={handleChangeValue}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="lastname"
                required
                placeholder="اسمك الاخير"
                onChange={handleChangeValue}

              />
            </div>
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
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="rePassword"
                required
                placeholder="اعاده كلمه السر"
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
    </>
  );
};

export default Register;
