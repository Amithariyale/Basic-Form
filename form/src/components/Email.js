import { memo, useState } from "react";
const Email = memo(({ isValidEmail, checkEmail }) => {
  console.log("Email render");
  const [email, setEmail] = useState("");
  const borderColor = isValidEmail ? "green" : "red";

  const handleChange = (e) => {
    setEmail(e.target.value);
    checkEmail(e.target.value);
  };
  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input
        style={{ borderColor }}
        onChange={handleChange}
        type="email"
        id="email"
        name="email"
        value={email}
      />
      {!isValidEmail && <p>Invalid email format</p>}
    </div>
  );
});

export default Email;
