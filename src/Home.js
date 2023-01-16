import { useAuth } from "./context/AuthProvider";


export const Home = () => {
  const { value } = useAuth();

  var handleSubmit = (event) => { 
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    value.onLogin(username, password);
  }

  return (
    <>
      <h2>Home (Public)</h2>
      {value.token == null &&
        <form onSubmit={handleSubmit}>
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