import InputForm from "@/components/auth/input-form";
import RecipeBoxLogo from "@/components/layout/recipe-box-logo";
import Link from "next/link";
import { FiLock, FiMail, FiUser } from "react-icons/fi";

const SignUp = () => {
  return (
   
      <div className="mx-auto w-full max-w-120 sm:max-w-137.5 px-6 py-10 bg-surface/90 rounded-2xl">
        <div className="mb-8">
          <RecipeBoxLogo/>
        </div>
        <div className="space-y-2 mb-8">
          <h1 className="text-2xl font-extrabold text-text-heading">Create your account</h1>
          <p className="text-text-secondary text-sm">
            Join RecipeBox and start saving recipes you love.
          </p>
        </div>

        <form action="#" className="space-y-4">
          <InputForm
            icon={FiUser}
            type={"text"}
            placeHolder={"Full Name"}
            label={"Full Name"}
          />
          <InputForm
            icon={FiMail}
            type={"email"}
            placeHolder="Email"
            label={"Email"}
          />
          <InputForm
            icon={FiLock}
            type={"password"}
            placeHolder="Password"
            label={"Password"}
          />
          <InputForm
            icon={FiLock}
            type={"password"}
            placeHolder="Confirm Password"
            label={"Confirm Password"}
          />

          <label
            htmlFor="remember-btn"
            className="flex items-center gap-1 text-text-secondary text-sm"
          >
            <input type="checkbox" name="remember-me" id="remember-btn" />I
            agree to the Terms and Privacy Policy
          </label>
          <button className="cursor-pointer bg-accent text-white w-full rounded-full py-3 font-medium text-sm mt-5 border border-accent">
            Create account
          </button>
        </form>
        <p className="text-center text-sm mt-5 text-text-secondary">
          Already have an account?{" "}
          <Link href="/login" className="text-accent font-medium">
            {" "}
            Log In
          </Link>
        </p>
      </div>

  );
};

export default SignUp;
