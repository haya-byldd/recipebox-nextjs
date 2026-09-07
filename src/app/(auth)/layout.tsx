import { ReactNode } from "react";

const AuthLayout = ({children}: {children:ReactNode}) => {
    return (
        <div className="min-h-screen px-6 w-full flex items-center justify-center bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('/bg-login.jpg')] bg-cover bg-center">
          {children}
        </div>
    )
}

export default AuthLayout;