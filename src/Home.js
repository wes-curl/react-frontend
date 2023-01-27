import { useAuth } from "./context/AuthProvider";


export const Home = () => {
  const { value } = useAuth();

  var handleLoginSubmit = (event) => { 
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    value.onLogin(username, password);
  };

  var handleSignupSubmit = (event) => { 
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    value.onSignup(username, password);
    value.onLogin(username, password);
  };

  return (
    <>
      <h2>Home (Public)</h2>
      <h3>Sign in</h3>
      {value.token == null &&
        <form onSubmit={handleLoginSubmit}>
        <label>
          Username: 
          <input type="text" name="username"/>
        </label>
        <label>
          Password: 
        <input type="password" name="password"/>
        </label>
        <input type="submit"/>
      </form>}
      
      <h3>Sign up</h3>
      {value.token == null &&
        <form onSubmit={handleSignupSubmit}>
        <label>
          Username: 
          <input type="text" name="username"/>
        </label>
        <label>
          Password: 
        <input type="password" name="password"/>
        </label>
        <input type="submit"/>
      </form>}
    </>
  );
};