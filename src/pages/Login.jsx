import React, { useState } from 'react'

export default function Login() {
    const [currState, setCurrState] = useState("signup");
    const [isCheck, setIsCheck] = useState(false);
    const [formData,setFormData] = useState({
        name:"",email:"", password:""
    });

    const handleFormChange = (e) =>{
        const {name,value} = e.target;
        setFormData((prev)=>({
            ...prev,[name]:value,
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            password: '',
          });
          setIsCheck(false);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1>{currState}</h1>
      {
        currState==="signup"?(<><label htmlFor='name'>Enter username</label>
        <input type='text' id='name' name='name' placeholder='Enter username' value={formData.name} onChange={handleFormChange} required/><br></br></>):null
      }
      <label htmlFor='email'>Email</label>
        <input type='text' id='email' name='email' placeholder='Enter email' value={formData.email} onChange={handleFormChange} required/>
        <br></br>
      <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' placeholder='Enter password' value={formData.password} onChange={handleFormChange} required/>
        <br></br>
        <input type="checkbox" checked={isCheck} onChange={(e) => setIsCheck(e.target.checked)} required/><span>I agree to the terms and conditions</span>
        <br></br>
      <button type='submit'>{currState==="signup"? "Create account": "Login now"}</button>

        {
            currState==="signup"?(<p>Already have an account?<button onClick={() => setCurrState("login")}>Login now</button></p>):(<p>Don't have an account?<button onClick={() => setCurrState("signup")}>Create account</button></p>)
        }

      </form>
    </div>
  )
}
