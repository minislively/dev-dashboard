/* eslint-disable no-undef */
import axios from 'axios';

//export default axios.create({
//    baseURL: 'http://localhost:8080/bridge/login'
//});

//const LOGIN_URL = '/bridge/login';


let token;

function InfoLogin() {
    const form = document.login_form;
    const chkID = checkValidID(form);
    const chkPw = checkValidPW(form);
    const chkError = checkValidError();

    if (chkID) {
        document.getElementById('alert_userid').innerText = "";
        form.userid.style.border = '2px solid';
        form.userid.style.borderColor = '#00D000';
    } else {
        form.userid.style.border = '2px solid';
        form.userid.style.borderColor = '#FF0000';
        document.getElementById('alert_userid').style.color = '#FF0000';
    }

    if (chkPw) {
        document.getElementById('alert_userpw').innerText = "";
        form.userpw.style.border = '2px solid';
        form.userpw.style.borderColor = '#00D000';
    } else {
        form.userpw.style.border = '2px solid';
        form.userpw.style.borderColor = '#FF0000';
        document.getElementById('alert_userpw').style.color = '#FF0000';
    }
    
    if (chkID && chkPw) {

        axios({
            method: "post",
            url: "http://localhost:8080/bridge/login",
            data: {
              "UserId":`${document.getElementById("alert_userid").value}`, "UserName":`${document.getElementById("alert_userpw").value}`
            }
          })
          .then((res) => {
            const token = res.data;
            console.log(token);
            //어처피 토큰 서버에서 못 주니 get으로 유저 데이터 불러와서 그걸 대신 세션에 저장할지 고민중
            console.log(res.status);
            if (chkError) {
                console.log("complete. form.LOGIN();");
                window.location.href=''; //다음페이지로 넘어갈 코드 추가할 곳.
                //https://webaura.tistory.com/entry/Nodejs-%EB%A1%9C%EA%B7%B8%EC%9D%B8%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-%EC%84%B8%EC%85%98%EC%9C%A0%EC%A7%80%ED%8E%B8
            }
          })
          .catch((error)=>{
            if (error.response) {
                console.log(error.response);
                console.log(error.response.status);
              } else if (error.request) {
                console.log("network error");
              } else {
                console.log(error.toJSON());
              }
            });
          response.end()
    }
}

function checkValidID(form) {
    if (form.userid.value === "") {
        document.getElementById('alert_userid').innerText = "Please enter ID.";
        return false;
    }
    return true;
}

function checkValidPW(form) {
    if (form.userpw.value === "") {
        document.getElementById('alert_userpw').innerText = "Please enter Password.";
        return false;
    }
    return true;
}

function checkValidError() {
    if (token === "errorcode") {
       return false;
    } else if(token === "errormsg") {
       document.getElementById('alert_userpw').innerText = "Wrong input.";

       form.userid.style.border = '2px solid';
       form.userid.style.borderColor = '#FF0000';
       document.getElementById('alert_userid').style.color = '#FF0000';

       form.userpw.style.border = '2px solid';
       form.userpw.style.borderColor = '#FF0000';
       document.getElementById('alert_userpw').style.color = '#FF0000';
       return false;
    }
    return true;
}

export default InfoLogin