import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import './App.css';

function App() {
  const responseSuccessGoogle = (response)=>{
    console.log(response);
    axios({
      method: "POST",
      url: "http://localhost/4000/api/googlelogin",
      data: {tokenId: response.tokenId}

    }).then(response =>{
      console.log(response);
    })

  }
  const responseFailureGoogle = (response)=>{

  }
  return (
    <>
      <div>
        <center>
          <h1>Login With Google Account</h1>
            <GoogleLogin
            clientId="288230362979-ak8jd5ol9jc76uq7q8bncfn3es8jg5kh.apps.googleusercontent.com"
            buttonText="Login With Your Account"
            onSuccess={responseSuccessGoogle}
            onFailure={responseFailureGoogle}
            cookiePolicy={'single_host_origin'}
          />,
        </center>
      </div>
    </>
 
  );
}

export default App;
