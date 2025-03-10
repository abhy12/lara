import { useState, useCallback, useRef, useEffect } from "react";
import Container from "./Container";
import { route } from 'ziggy-js';
import { useForm } from "@inertiajs/react";

const cookieName = "popupFormSubmitted";
const cookieValue = "1";

const extractUserNameFromCookie = (cookieName: string) => {
   let userName = cookieName + '=';

   // Splitting cookie
   let allCookieArray = document.cookie.split(';');
   for (let i = 0; i < allCookieArray.length; i++) {

      // Extracting userName and returning the same
      let temp = allCookieArray[i].trim();
      if (temp.indexOf(userName) == 0)
         return temp.substring(userName.length, temp.length);
   }

   // Else return empty string
   return '';
}

export default function Footer() {
   const [isPopupModalActive, setIsPopupModalActive] = useState(extractUserNameFromCookie(cookieName) !== '1');
   const footerRef = useRef<null | HTMLElement>(null);
   const { post } = useForm();
   const handleCloseModal = useCallback(() => {
      setIsPopupModalActive(false);
   }, []);

   const afterFormSuccess = useCallback(() => {
      handleCloseModal();
      const daysToExpire = new Date(2147483647 * 1000).toUTCString();
      document.cookie = cookieName + '=' + cookieValue + '; expires=' + daysToExpire;
   }, []);

   const onFormSubmit = useCallback((data: any) => {
      post(route('forms.store', data), {
         onSuccess: () => {
            afterFormSuccess();
         },
      });
   }, []);

   useEffect(() => {
      if (!footerRef.current) return
      document.documentElement.style.setProperty("--footer-height", footerRef.current.getBoundingClientRect().height + "px");
   }, [footerRef]);

   return (
      <>
         <footer
            className="relative text-white text-[0.688rem] md:text-xs md:text-center pt-8
            md:pt-14 pb-6 md:pb-9 bg-foot md:bg-mdFoot bg-cover"
            ref={footerRef}
         >
            <Container>
               <img
                  src="/assets/img/folder.svg"
                  alt="Image"
                  className="w-10 md:w-16 absolute left-0.5 top-2.5 -translate-y-full"
               />
               <img
                  src="/assets/img/clouds.svg"
                  alt="Image"
                  className="absolute right-2 md:hidden top-4 -translate-y-full"
               />
               <p>The information provided here is created as a community resource and is not intended as professional advice or a recommendation by ILSS or Koita Foundation. While we strive to ensure the accuracy of the content, we do not take responsibility for any errors or omissions. Users should use their own discretion before making any decisions based on this information. ILSS or Koita Foundation assume no liability for any actions taken based on the information provided.</p>
            </Container>
         </footer>
      </>
   );
}
