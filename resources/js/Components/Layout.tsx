import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";

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
