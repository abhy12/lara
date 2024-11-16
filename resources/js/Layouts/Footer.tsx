import PopupModal from "@/Components/PopupModal";
import { useState, useCallback } from "react";
import PopupForm from "@/Components/PopupForm";

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

   const handleCloseModal = useCallback(() => {
      setIsPopupModalActive(false);
   }, []);

   const afterFormSuccess = useCallback(() => {
      handleCloseModal();
      const daysToExpire = new Date(2147483647 * 1000).toUTCString();
      document.cookie = cookieName + '=' + cookieValue + '; expires=' + daysToExpire;
   }, []);

   return (
      <>
         <footer
            className="text-white text-[0.688rem] md:text-xs md:text-center px-[5%] pt-8 md:pt-14 pb-6 md:pb-9 bg-foot md:bg-mdFoot bg-cover">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
               standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
               type specimen.</p>
         </footer>
         <PopupModal
            isActive={isPopupModalActive}
            onClose={handleCloseModal}
         >
            <PopupForm
               submitButtonText="Get Started"
               afterSuccess={afterFormSuccess}
               footerText="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                Lorem Ipsum is simply dummy text of the printing and typesetting."
            />
         </PopupModal>
      </>
   );
}
