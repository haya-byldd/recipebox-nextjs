import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

const MainLayout = ({children,}: {children: React.ReactNode;}) => {
    return(
<>
<Navbar/>
{children}
<Footer/>
</>
    )
}

export default MainLayout;
