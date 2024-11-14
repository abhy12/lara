import Header from "./Header";
import Footer from "./Footer";

interface Props {
   children?: any
}

export default function Layout({ children }: Props) {
   return(
      <>
         <Header />
         {children}
         <Footer />
      </>
   );
}
