"use client";
import Link from "next/link";
import { FiLock, FiMail } from "react-icons/fi";
import InputForm from "@/components/auth/input-form";
import RecipeBoxLogo from "@/components/layout/recipe-box-logo";

const Login = () => {
  return (
    
      <div className="mx-auto w-full max-w-120 sm:max-w-137.5 px-6 py-10 bg-surface/90 rounded-2xl">
        <div className="mb-8">
       <RecipeBoxLogo/>
        </div>
        <div className="space-y-2 mb-8">
          <h1 className="text-text-heading text-2xl font-extrabold">Welcome back</h1>
          <p className="text-text-secondary text-sm">
            Log in to pick up right where you left off.
          </p>
        </div>

        <form action="#" className="space-y-4">
       <InputForm icon={FiMail} type={"email"}  label={"Email"} placeHolder="Enter your email"/>
       <InputForm icon={FiLock} type={"password"}  label={"Password"} placeHolder="Enter password"/>
       
          <div className="flex justify-between items-center text-sm mt-5">
            <label
              htmlFor="remember-btn"
              className="flex items-center gap-1 text-text-secondary"
            >
              <input type="checkbox" name="remember-me" id="remember-btn" />
              Remember me
            </label>
            <Link href="/forgot-password" ><p className="text-accent font-medium">Forgot password?</p></Link>
          </div>
          <button className="cursor-pointer bg-accent text-white w-full rounded-full py-3 font-medium text-sm mt-5 border border-accent">
            Log In
          </button>
        </form>
        <p className="text-center text-sm mt-5 text-text-secondary">
          New to RecipeBox?{" "}
          <Link href="/signup" className="text-accent font-medium">
            {" "}
            Create an Account
          </Link>
        </p>
      </div>
    
  );
};
export default Login;








