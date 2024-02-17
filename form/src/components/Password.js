import { memo, useState } from "react";

const Password = memo(({ isValidPassword, checkPassword }) => {
  console.log("Password render");
  const [password, setPassword] = useState("");
  const borderColor = isValidPassword ? "green" : "red";

  const handleChange = (e) => {
    setPassword(e.target.value.trim());

    checkPassword(e.target.value.trim());
  };

  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input
        style={{ borderColor }}
        onChange={handleChange}
        type="password"
        id="password"
        name="password"
        value={password}
      />
      {!isValidPassword && <p>Password must be at least 8 charactors</p>}
    </div>
  );
});

export default Password;
