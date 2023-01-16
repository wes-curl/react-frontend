import { useAuth } from "./context/AuthProvider";
import { Home } from "./Home";


export const Tryagain = () => {
  return (
    <>
      <Home/>
      <p>Hmmm. That doesn't seem to be correct!</p>
    </>
  );
};