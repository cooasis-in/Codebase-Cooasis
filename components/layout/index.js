import Header from "./header";
import Footer from "./footer";

function Layout({children}) {
  return ( 
    <>
     <Header/>
     <main className="pt-[127px]">
        {children}
     </main>
     <Footer/>
    </>
   );
}

export default Layout;