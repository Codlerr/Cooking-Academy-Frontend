import React, { useState } from "react";
import ApiInstane from "../../API/api_instance";


let Logo ="https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621453/Cooking%20Academy%20Assets/Layer_2_vmobmf.svg";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "username") {
      setUsername(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();     
      await ApiInstane.post("/auth/login",{

          username: "siraj",
          password: "1234567890",

      }).then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

    
  };

  return (
    <div className="grid place-items-center h-screen bg-cover bg-no-repeat bg-center bg-[url(https://res.cloudinary.com/dvbplh4z9/image/upload/v1672734620/Cooking%20Academy%20Assets/baaaaner_oja0kt.jpg)]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#363636b2] flex flex-col gap-8 rounded-lg border-[1px] border-primary-clr2 py-10 px-5 xs:w-[90%] md:w-[50%] lg:w-[24%]"
      >
        <img className="h-16" src={Logo} alt="logo" />
        <input
          name="username"
          value={username}
          onChange={handleChange}
          className="bg-transparent outline-none border-b-2 border-bg-darks py-2"
          type="text"
          placeholder="User name*"
          required
        />
        <input
          name="password"
          value={password}
          onChange={handleChange}
          className="bg-transparent outline-none border-b-2 border-bg-darks py-2"
          type="password"
          placeholder="Password*"
          required
        />
        <p className="text-zinc-500 flex justify-end text-sm">
          Forget Password ?
        </p>
        <button
          type="submit"
          className="bg-primary-clr2 hover:bg-primary-clr1 transition-all duration-200 rounded-md py-2"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
