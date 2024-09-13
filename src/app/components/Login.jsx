"use client";
import { useForm } from "react-hook-form";
import { login } from "../services/auth";
import Cookie from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await login(data);
      const { access_token } = res;

      if (access_token) {
        Cookie.set("token", access_token, { expires: 7 });

        const decodedToken = jwtDecode(access_token);

        if (decodedToken.role === 1) {
          router.push("/admin");
        } else if (decodedToken.role === 2) {
          router.push("/user");
        } else {
          console.error("Role no reconocido");
        }
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
        <input type="text" {...register("email")} placeholder="Email" />
        <input
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
