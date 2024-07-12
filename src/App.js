import {LoginSocialFacebook} from "reactjs-social-login";
import {FacebookLoginButton} from "react-social-login-buttons";
import { useState } from "react";

function App() {

  const [profile,setProfile] = useState(null);
  return (
    <div>
      {!profile ? 
        <LoginSocialFacebook 
    appId="1162210558195420"
    onResolve={(response)=>{
      console.log(response);
    }}
    onReject={(error)=>{
      console.log(error);
    }}
    >

        <FacebookLoginButton />

    </LoginSocialFacebook> : ""}
    { profile ? <div>
      <h1>{profile.name}</h1> 
      <img src={profile.picture.data.url} alt="" />
      </div> : ""
    }
    </div>
   
  
  );
}

export default App;
