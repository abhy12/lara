import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";

interface Props {
   children?: any
}

export default function Layout({ children }: Props) {
   return (
      <div className="flex flex-col justify-between min-h-screen">
         <div>
            <Header />
            {children}
         </div>
         <Footer />
      </div>
   );
}
