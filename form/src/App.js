import "./App.css";
import { useState } from "react";
import Email from "./components/Email";
import Password from "./components/Password";
import Cpassword from "./components/Cpassword";

function App() {
  console.log("App render");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidCpassword, setIsValidCpassword] = useState(false);
  const [password, setPassword] = useState("");

  const checkEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  };
  const checkPassword = (password) => {
    setIsValidPassword(password.length >= 8);
    setPassword(password);
  };
  const checkCpassword = (cpassword) => {
    setIsValidCpassword(password === cpassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail && isValidCpassword && isValidPassword) {
      alert("Form submitted successfully!");
    } else alert("Form cannot be submitted!");
  };
  return (
    <form onSubmit={handleSubmit} id="form">
      <Email isValidEmail={isValidEmail} checkEmail={checkEmail} />
      <Password
        isValidPassword={isValidPassword}
        checkPassword={checkPassword}
      />
      <Cpassword
        isValidCpassword={isValidCpassword}
        checkCpassword={checkCpassword}
      />
      <button className="signup-btn">Sign Up</button>
    </form>
  );
}

export default App;
