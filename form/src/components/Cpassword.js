import { memo, useState } from "react";

const Cpassword = memo(({ isValidCpassword, checkCpassword }) => {
  console.log("Cpassword render");
  const [cpassword, setCpassword] = useState("");
  const borderColor = isValidCpassword ? "green" : "red";

  const handleChange = (e) => {
    setCpassword(e.target.value.trim());
    checkCpassword(e.target.value.trim());
  };
  return (
    <div>
      <label htmlFor="cpwd">Confirm Password:</label>
      <input
        style={{ borderColor }}
        onChange={handleChange}
        type="password"
        id="cpwd"
        name="cpwd"
        value={cpassword}
      />
      {!isValidCpassword && <p>Passwords do no match</p>}
    </div>
  );
});

export default Cpassword;
