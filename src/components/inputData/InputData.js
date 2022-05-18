import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'
import "./inputData.css";

export default function InputData() {

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    axios.post('http://localhost:8080/bridge/NHPaySession', data, 
    {headers: {'Content-Type' : 'application/json'}})
    .then(response=>{console.log(response.data)})
    .catch(error => {console.log(error.data)});
  }



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>필수 입력 정보</label>
      <select {...register("selectPlatform")}>
        <option value="kftc">kftc</option>
        <option value="paypal">paypal</option>
        <option value="toss">toss</option>
        <option value="NH">nh</option>
      </select>
      <select {...register("receivePlatform")}>
        <option value="kftc">kftc</option>
        <option value="paypal">paypal</option>
        <option value="toss">toss</option>
        <option value="NH">NH</option>
      </select>
      <input
        placeholder="송금인 ID/이메일 혹은 계좌정보"
        {...register("customerIDEmail")}
      />
      <input
        placeholder="수취인 ID/이메일 혹은 계좌정보"
        {...register("receiverIDEmail")}
      />
      <input placeholder="고객성명" {...register("name")} />
      <input placeholder="송금액" {...register("price")} />
      <input placeholder="송금 화폐 단위" {...register("sendCurrency")} />
      <input placeholder="수취 화폐 단위" {...register("receiveCurrency")} />
      <h3>kftc 필수 부가정보</h3>
      <input placeholder="kftc 소유계좌" {...register("account")} />
      <input placeholder="kftc 고객계좌은행" {...register("bankSelect")} />
      <h3>paypal 필수 부가정보</h3>
      <input placeholder="paypal 전화번호" {...register("phoneNum")} />
      <input placeholder="paypal 국가코드" {...register("countryCode")} />
      <input placeholder="paypal method" {...register("method")} />
      <input placeholder="paypal intent" {...register("intent")} />
      <input placeholder="paypal description" {...register("description")} />
      <h3>toss 필수 부가정보</h3>
      <input placeholder="toss 생년월일 6자리 또는 사업자등록번호 10자리" {...register("TossNum")}/>
      <input placeholder="toss 카드 번호" {...register("cardNumber")} />
      <input
        placeholder="toss 카드 유효연도"
        {...register("cardExpirationY")}
      />
      <input placeholder="toss 카드 유효월" {...register("cardExpirationM")} />
      <input
        placeholder="toss 카드 비밀번호 앞 2자리"
        {...register("cardPasswd")}
      />
      <h3>nh 필수 부가정보</h3>
      <input placeholder="NH 은행코드" {...register("bankCode")} />
      <input placeholder="NH 계좌번호" {...register("nhAccount")} />
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

