import React from "react";
import {useForm} from "react-hook-form";
import './style.css'
import axios from 'axios'

export default function Login() {

  const { register, handleSubmit} = useForm({});

    // Content-Type : api 연동 시 보내는 자원을 명시화하기 위해 사용됨.
    // HTTP Header에 명시해줄 수 있도록 해주는 필드임. 
    // application/json : RestFul API를 사용하게 되며 request를 날릴 때 json을 많이 사용하게 됨에 따라 늘어남.  

  const onSubmit = async(data) => {
    axios.post('http://localhost:8080/bridge/devLogin', data, 
    {headers: {'Content-Type' : 'application/json'}})
    .then(response=>{console.log(response.data)})
    .catch(error => {console.log(error.data)});
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>ID</label>
      <input {...register("userId")}/>
      <label>Password</label>
      <input {...register("userPw")}/>
      <input type="submit" onClick={handleSubmit(onSubmit)} />
    </form>
  );
}