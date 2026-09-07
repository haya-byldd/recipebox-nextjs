import Link from "next/link";
import { PiChefHat } from "react-icons/pi";
import { FiArrowLeft, FiMail } from "react-icons/fi";
import InputForm from "@/components/auth/input-form";
import RecipeBoxLogo from "@/components/layout/recipe-box-logo";

const ForgetPassword = () => {
  return (
   
      <div className="mx-auto w-full max-w-120 sm:max-w-137.5 px-6 py-10 bg-surface/90 rounded-2xl">
        <div className="mb-8">
          <RecipeBoxLogo/>
        </div>
        <div className="space-y-2 mb-8">
          <h1 className="text-2xl font-extrabold text-text-heading">Forgot your password?</h1>
          <p className="text-text-secondary text-sm">
            No worries — enter the email connected to your account and we'll
            send you a link to reset it.
          </p>
        </div>

        <form action="#" className="space-y-4">
          <InputForm
            icon={FiMail}
            type={"email"}
            placeHolder="Email Address"
            label={"Email"}
          />

          <button className="opacity-50 cursor-pointer bg-accent text-white w-full rounded-full py-3 font-medium text-sm mt-5 border border-accent">
            Send resend link
          </button>
        </form>

        <Link href="/login">
          <p className="text-center text-sm mt-5 flex items-center gap-1 justify-center text-success-dark font-medium">
            <span>
              <FiArrowLeft />
            </span>
            Back to login
          </p>
        </Link>
      </div>
   
  );
};

export default ForgetPassword;
