import React, { useCallback, useState } from "react";
import { useHistory } from "react-router";
import { magic, socialLogins } from "../magic";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const history = useHistory();

  /**
   * Perform login action via Magic's OAuth flow. Upon successuful
   * completion of the login flow, a user is redirected to the homepage.
   */

  const emailLogin = useCallback(async () => {
    setIsLoggingIn(true);

    try {
      await magic.auth.loginWithMagicLink({
        email,
        redirectURI: new URL("/callback", window.location.origin).href,
      });
      history.push("/");
    } catch {
      setIsLoggingIn(false);
    }
  }, [name, email]);

  /**
   * Saves the value of our email input into component state.
   */
  const handleInputOnChange = useCallback(event => {
    setEmail(event.target.value);
  }, []);

  const handleNameInput = useCallback(event => {
    setName(event.target.value);
  }, []);


  const socialLogin = useCallback(async (provider) => {
    setIsLoggingIn(true);

    try {
      await magic.oauth.loginWithRedirect({
        provider,
        redirectURI: new URL("/callback", window.location.origin).href,
      });
      history.push("/");
    } catch {
      setIsLoggingIn(false);
    }
  }, [name, email]);

  return (
    <div className="container">
      <h1>Please sign up or login</h1>
      <input 
      type = "text"
      name = "InstituteName"
      placeholder = "Organisation Name"
      onChange = {handleNameInput} 
      disabled={isLoggingIn}
      />
      <input
        type="email"
        name="email"
        required="required"
        placeholder="Enter your email"
        onChange={handleInputOnChange}
        disabled={isLoggingIn}
      />
      <button onClick={emailLogin} disabled={isLoggingIn}>Send</button>

      {socialLogins.map(provider => {
        return React.createElement(require(`../social-logins/${provider}`).default.Button, {
          onClick: () => login(provider),
          disabled: isLoggingIn,
          key: provider,
        });
      })}
    </div>
  );
}

