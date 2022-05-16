import InfoLogin from "../components/infoLogin";

function Login () {
  <InfoLogin />
  return (
    <div>
      <meta charSet="UTF-8" />
      <link rel="stylesheet" href="login.css" media="all" />
      <title>로그인 페이지</title>
      <form name="login_form" action="/cookie" method="get">
        <img src="logo.png" alt="tsmp로고" />
        <div>
          <div>
            <input type="text" name="userid" placeholder="ID" className="form_input" />
          </div>
          <div className="form_text_alert_padding">
            <div id="alert_userid" className="form_text_alert" value />
          </div>
        </div>
        <div>
          <div>
            <input type="password" name="userpw" placeholder="PW" className="form_input" />
          </div>
          <div className="form_text_alert_padding">
            <div id="alert_userpw" className="form_text_alert" value />
          </div>
        </div>
        <div style={{height: '10px'}} />
        <div>
          <button type="button" className="form_login_button" onclick="login()">login</button>
        </div>
      </form>
    </div>
  );
}

export default Login 