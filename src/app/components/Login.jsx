"use client";
import { useForm } from "react-hook-form";
import { login } from "../services/auth";
import Cookie from "js-cookie";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await login(data);
      const { access_token } = res;
      if (access_token) {
        Cookie.set("token", access_token, { expires: 7 });
      } else {
        console.error("No access token found in response");
      }
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" {...register("email")} />
        <input type="text" {...register("password")} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
