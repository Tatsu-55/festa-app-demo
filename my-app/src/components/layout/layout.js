import Footer from "./footer";
import NavigationBar from "./navigationbar";

const Layout = ({children}) => {
  return (
    <>
     <NavigationBar />
     {children}
     <Footer />
    </>
  );
};

export default Layout;
