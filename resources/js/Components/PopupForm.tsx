import { TextField, Button } from "@mui/material";
import { useCallback, SyntheticEvent, ChangeEvent } from "react";
import { useForm } from "@inertiajs/react";
import { route } from 'ziggy-js';

interface Props {
   afterSuccess?: CallableFunction
   submitButtonText?: string
   showMessageField?: boolean
   footerText?: string
}

export default function PopupForm({ afterSuccess, submitButtonText = 'Submit', showMessageField = false, footerText }: Props) {
   const { data, setData, post } = useForm({
      name: '',
      organization: '',
      email: '',
      message: '',
   });

   const formSubmitHandler = useCallback((e: SyntheticEvent) => {
      e.preventDefault();

      post(route('forms.store', data), {
         onSuccess: () => {
            console.log('suc');
            if (typeof afterSuccess === 'function') afterSuccess();
         },
      });
   }, [post, data]);

   const inputChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      const target = e.currentTarget;
      const key = target.id;
      const value = target.value

      setData(values => ({
         ...values,
         [key]: value,
      }));
   }, [setData]);

   return (
      <div className="flex-grow bg-white w-full max-w-[500px] rounded-2xl shadow-md overflow-hidden">
         <div className="p-3 md:p-10 md:pb-6">
            <form className="flex flex-col gap-3 md:gap-5" onSubmit={formSubmitHandler}>
               <TextField
                  id="name"
                  label="Your Name"
                  variant="outlined"
                  required
                  value={data.name}
                  onChange={inputChangeHandler}
               />
               <TextField
                  id="organization"
                  label="Organization"
                  variant="outlined"
                  required
                  value={data.organization}
                  onChange={inputChangeHandler}
               />
               <TextField
                  id="email"
                  label="Email Id"
                  variant="outlined"
                  required
                  value={data.email}
                  onChange={inputChangeHandler}
               />
               {showMessageField &&
                  <TextField
                     id="message"
                     label="Message"
                     variant="outlined"
                     value={data.message}
                     onChange={inputChangeHandler}
                     multiline
                     rows={4}
                  />
               }
               <Button
                  type="submit"
                  className="!bg-primary !text-[#464646] !text-lg !font-medium !py-3 mt-2 md:!mt-3 !rounded-lg shadow-[0px_0px_9.7px_0px_#00000040]"
               >{submitButtonText}</Button>
            </form>
         </div>
         {footerText &&
            <div
               className="!bg-no-repeat !bg-cover text-white p-4 pt-12 md:pt-14 md:px-10 md:pb-6"
               style={{ backgroundImage: 'url(/assets/img/popup-form-bottom-bg.svg)' }}
            >
               <p className="text-sm">{footerText}</p>
            </div>
         }
      </div>
   )
}