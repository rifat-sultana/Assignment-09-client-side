"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await authClient.signUp.email({
        name,
        email,
        password,
      });

      console.log(response);

      alert("Registration Successful");

    } catch (error) {
      console.log(error);

      alert("Registration Failed");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">
        Register
      </button>
    </form>
  );
};

export default Register;