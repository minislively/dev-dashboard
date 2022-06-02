import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'
import "./inputData.css";


export default function InputData() {

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // axios.post('http://localhost:8080/bridge/NHPaySession', data, 
    // {headers: {'Content-Type' : 'application/json'}})
    // .then(response=>{
    //   alert('결제를 실패하였습니다.')
    //   console.log(response.data) 
    // }
    // )
    // .catch(error => {console.log(error.data)});
    console.log(data);
  }



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>필수 입력 정보</label>
      <select {...register("sendPlatform")}>
        <option value="paypal">paypal</option>
        <option value="toss">toss</option>
        <option value="NH">NH</option>
      </select>
      <select {...register("receivePlatform")}>
        <option value="paypal">paypal</option>
        <option value="toss">toss</option>
        <option value="NH">NH</option>
      </select>

      <h3>MPesa 필수정보</h3>
      <input placeholder="MPesa 전화번호" {...register("customerIDEmail")} />
      <input placeholder="MPesa 전화번호" {...register("amount")} />
      <input placeholder="MPesa intent" {...register("receivePlatform")} />
      <input placeholder="MPesa method" {...register("receiver")} />
      <input placeholder="MPesa 국가코드" {...register("recvCurrency")} />
      <input />
      <h3>paypal 필수정보</h3>
      <input placeholder="paypal 전화번호" {...register("value")} />
      <input placeholder="paypal 전화번호" {...register("sendCurrency")} />
      <input placeholder="paypal intent" {...register("receiver")} />
      <input placeholder="paypal method" {...register("phoneNum")} />
      <input placeholder="paypal 국가코드" {...register("countryCode")} />

      <h3>toss 필수정보</h3>
      <input placeholder="수취 플랫폼" {...register("receivePlatform")}/>
      <input placeholder="수취인" {...register("receiver")}/>
      <input placeholder="금액" {...register("amount")}/>
      <input placeholder="송금측 화폐" {...register("sendCurrency")}/>
      <input placeholder="송금인" {...register("customerName")}/>
      <input placeholder="송금측 이메일" {...register("customerEmail")}/>
      <input placeholder="고유번호" {...register("identifyNumber")}/>
      <input placeholder="카드번호" {...register("cardNumber")}/>
      <input placeholder="toss 카드 유효월" {...register("cardExpirationY")} />
      <input placeholder="toss 카드 유효월" {...register("cardExpirationM")} />
      <input
        placeholder="toss 카드 비밀번호 앞 2자리"
        {...register("cardPasswd")}
      />

      <h3>NH 필수정보</h3>
      <input placeholder="송금측 이메일" {...register("customerIDEmail")} />
      <input placeholder="송금액" {...register("price")} />
      <input placeholder="수취 플랫폼" {...register("receivePlatform")} />
      <input placeholder="수취인" {...register("receiver")} />
      <select {...register("inputType")}>
        <option value="personal">personal</option>
        <option value="business">business</option>
      </select>
      <input
        placeholder="personal : 생년월일 혹은 사업자등록번호"
        {...register("nhNum")}
      />
      <input type="submit" />
    </form>
  );
}

