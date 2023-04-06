import NavigationBar from "./navbar";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <div >
      <NavigationBar />
      
          {props.children}
      <Footer/>
    </div>
  );
};

export default Layout;