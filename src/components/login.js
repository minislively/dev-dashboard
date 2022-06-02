import React from "react";
import {useForm} from "react-hook-form";
import './style.css'
import axios from 'axios'

const initValue = {
  userId: "",
  userPw: ""
}


export default function Login() {

  function joinHandler() {
    console.log("로그인 시도...");
  }

  const { register, handleSubmit, formState: {errors}} = useForm({
    defaultValues: initValue
  });


  const onSubmit = async(data) => {
    
    const {userId, userPw} = data; 
    axios.post('http://localhost:8080/bridge/devLogin', data, 
    {headers: {'Content-Type' : 'application/json'}["Content-Type"]},
    {userId, userPw})
    .then(response=>{console.log(response.data)
    if(userId === "choi2507" && userPw==="567890"){
        document.location.href='/footer'
        console.log('로그인 성공')

    }
    else if(userId === "koy321" && userPw==="123456"){
      // 작업 완료 되면 페이지 이동 (새로고침)
       document.location.href='/footer'
        console.log('로그인 성공')
    }
    else{
      alert('입력하신 정보가 없습니다.');
    }
  })
    .catch(error => {console.log(error.data)});
  }
  
    const loginOptions = {
      userId: { required: "Email is required" },
      userPw: {
        required: "Password is required",
      }
    };

  return (
    <form method="post" onSubmit={handleSubmit(onSubmit)}>
      <label>ID</label>
      <input name="userId" type="text"
      {...register("userId", loginOptions.userId)}/>
      {/* use role="alert" to announce the error message */}
      {errors.userId && <p>{errors.userId.message}</p>}

      <label>Password</label>
      <input type="password"  name="userPw"
      {...register("userPw", loginOptions.userPw)}/>
      {/* use role="alert" to announce the error message */}
      {errors.userPw && errors.userPw.type === "required"}
      <button type="submit" onClick={joinHandler}>Login</button>      
    </form>
  );
}