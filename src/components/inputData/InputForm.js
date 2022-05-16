import React, { Component } from "react";
import './inputForm.css'
import axios from "axios";
class InputForm extends Component {
  
  state = {
    sendPlatform :"", // 송금 플랫폼 
    customerIDEmail : "", // 송금인 ID/이메일 혹은 계좌정보 
    receivePlatform : "", // 수취 플랫폼
    receiverIDEmail : "",  // 수취인 ID/이메일 혹은 계좌정보  
    price : "",// 송금액
    name : "",// 고객성명
    sendCurrency : "", // 송금 화폐 단위 
    receiveCurrency : "", // 수취 화폐 단위 
//  ---------------------------------------- 
    account : null, // kftc 소유계좌 
    bankSelect : null, // kftc 고객계좌은행 
    phoneNum : null, // paypal 전화번호
    countryCode : null, // paypal 국가코드 
    method : null, // paypal method
    intent : null, // paypal intent 
    description : null, // paypal description 
    TossNum : null, // toss 생년월일 6자리 또는 사업자등록번호 10자리 
    cardNumber : null, // toss 카드 번호
    cardExpirationY : null, // toss 카드 유효연도 
    cardExpirationM : null, // toss 카드 유효월
    cardPasswd : null, // toss 카드 비밀번호 앞 2자리 
    bankCode : null, // nh 은행 코드 
    nhAccount : null, // nh 계좌 번호 
    inputType : null, // if personal -> "birthDate" / business -> "businessNum" 
    nhNum : null // 생년월일 or 사업자등록번호 
    
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    //submit 후 reload 방지
    e.preventDefault();
    //부모에서 넘어온 onCreate 호출해 state 전달    
    this.props.onCreate(this.state);
    
    if(this.state.sendPlatform==="paypal"){
      axios.post('http://localhost:8080/brige/paypalInfo', this.state)
      .then(res=>console.log(res.data))
    }else if (this.state.sendPlatform==="toss"){
      axios.post('http://localhost:8080/brige/tossInfo', this.state)
      .then(res=>console.log(res.data))
    }else if (this.state.sendPlatform==="nh"){
      axios.post('http://localhost:8080/brige/NHInfo', this.state)
      .then(res=>console.log(res.data))
    }
    
    this.setState({
      sendPlatform :"", // 송금 플랫폼 
      customerIDEmail : "", // 송금인 ID/이메일 혹은 계좌정보 
      receivePlatform : "", // 수취 플랫폼
      receiverIDEmail : "",  // 수취인 ID/이메일 혹은 계좌정보  
      price : "",// 송금액
      name : "",// 고객성명
      sendCurrency : "", // 송금 화폐 단위 
      receiveCurrency : "", // 수취 화폐 단위 
  //  ---------------------------------------- 
      account : null, // kftc 소유계좌 
      bankSelect : null, // kftc 고객계좌은행 
      phoneNum : null, // paypal 전화번호
      countryCode : null, // paypal 국가코드 
      method : null, // paypal method
      intent : null, // paypal intent 
      description : null, // paypal description 
      TossNum : null, // toss 생년월일 6자리 또는 사업자등록번호 10자리 
      cardNumber : null, // toss 카드 번호
      cardExpirationY : null, // toss 카드 유효연도 
      cardExpirationM : null, // toss 카드 유효월
      cardPasswd : null, // toss 카드 비밀번호 앞 2자리 
      bankCode : null, // nh 은행 코드 
      nhAccount : null, // nh 계좌 번호 
      inputType : null, // if personal -> "birthDate" / business -> "businessNum" 
      nhNum : null // 생년월일 or 사업자등록번호 
    });
  };
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div id="">
        <input id="input1"
          name="sendPlatform"
          onChange={this.handleChange}
          value={this.state.sendPlatform || ''}
          placeholder="보내는 플랫폼"
        />
        
        <input id="input1"
          name="receivePlatform"
          onChange={this.handleChange}
          value={this.state.receivePlatform || ''}
          placeholder="받는 플랫폼"
        />
        </div>
        <div id="container">
        <input id=""
          name="customerIDEmail"
          onChange={this.handleChange}
          value={this.state.customerIDEmail || ''}
          placeholder="송금인 ID/이메일 혹은 계좌정보"
        />
        <input id=""
          name="receiverIDEmail"
          onChange={this.handleChange}
          value={this.state.receiverIDEmail || ''}
          placeholder="수취인 ID/이메일 혹은 계좌정보"
        />
       <input id=""
          name="price"
          onChange={this.handleChange}
          value={this.state.price || ''}
          placeholder="송금액"
        />   
        <input id=""
          name="name"
          onChange={this.handleChange}
          value={this.state.name || ''}
          placeholder="고객성명"
        />      
        </div>
        <div id="container">
        <input id=""
          name="sendCurrency"
          onChange={this.handleChange}
          value={this.state.sendCurrency || ''}
          placeholder="송금 화폐 단위"
        />
        <input id=""
          name="receiveCurrency"
          onChange={this.handleChange}
          value={this.state.receiveCurrency || ''}
          placeholder="수취 화폐 단위"
        /><br/>
        </div>
        <h3>kftc 부가정보</h3>
        <input
          name="account"
          onChange={this.handleChange}
          value={this.state.account || ''}
          placeholder="kftc 소유계좌"
        />
        <input
          name="bankSelect"
          onChange={this.handleChange}
          value={this.state.bankSelect || ''}
          placeholder="kftc 고객계좌은행"
        /><br/>
        <h3>paypal 부가정보</h3>
        <input
          name="phoneNum"
          onChange={this.handleChange}
          value={this.state.phoneNum || ''}
          placeholder="paypal 전화번호"
        />
        <input
          name="countryCode"
          onChange={this.handleChange}
          value={this.state.countryCode || ''}
          placeholder="paypal 국가코드"
        />        
        <input
          name="method"
          onChange={this.handleChange}
          value={this.state.method || ''}
          placeholder="paypal method"
        />
        <input
          name="intent"
          onChange={this.handleChange}
          value={this.state.intent || ''}
          placeholder="paypal intent"
        />
        <input
          name="description"
          onChange={this.handleChange}
          value={this.state.description || ''}
          placeholder="paypal description"
        /><br/>
        <h3>toss 부가정보</h3>
        <input
          name="TossNum"
          onChange={this.handleChange}
          value={this.state.TossNum || ''}
          placeholder="toss 생년월일 6자리 또는 사업자등록번호 10자리"
        />
        <input
          name="cardNumber "
          onChange={this.handleChange}
          value={this.state.cardNumber || ''}
          placeholder="toss 카드 번호"
        />
        <input
          name="cardExpirationY"
          onChange={this.handleChange}
          value={this.state.cardExpirationY || ''}
          placeholder="toss 카드 유효연도 "
        />
        <input
          name="cardExpirationM"
          onChange={this.handleChange}
          value={this.state.cardExpirationM || ''}
          placeholder="toss 카드 유효월"
        />        
        <input
          name="cardPasswd"
          onChange={this.handleChange}
          value={this.state.cardPasswd || ''}
          placeholder="toss 카드 비밀번호 앞 2자리"
        /><br/>
        <h3>nh 부가정보</h3>
        <input
          name="bankCode"
          onChange={this.handleChange}
          value={this.state.bankCode || ''}
          placeholder="nh 은행 코드"
        />
        <input
          name="nhAccount"
          onChange={this.handleChange}
          value={this.state.nhAccount || ''}
          placeholder="nh 계좌 번호"
        />
        <input
          name="inputType"
          onChange={this.handleChange}
          value={this.state.inputType || ''}
          placeholder="personal or business"
        />
        <input
          name="nhNum"
          onChange={this.handleChange}
          value={this.state.nhNum || ''}
          placeholder="생년월일 or 사업자등록번호"
        /><br/>     

        <div id="container">    
        <button id="btn" type="submit">SUBMIT</button>
        
        </div>
      </form>
      
      
    );
  }
}

export default InputForm;
