import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react'


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


ReactDOM.render(
<<<<<<< HEAD

<App />,
=======
<Auth0Provider
domain={domain}
clientId={clientId}
redirectUri={ 'http://localhost:3000/profile'}>
<App />
</Auth0Provider>,
>>>>>>> ffa78ee6445a464aa0db9b97812d66130e1a4c03
document.getElementById("root"),

);
