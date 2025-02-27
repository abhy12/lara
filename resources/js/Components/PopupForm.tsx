import { TextField, Button } from "@mui/material";
import { useCallback, useState, SyntheticEvent, ChangeEvent } from "react";
import { useForm } from "@inertiajs/react";
import { FormControlLabel, Checkbox } from "@mui/material";

interface Props {
   submitButtonText?: string
   showMessageField?: boolean
   footerText?: string
   onSubmit?: (data: any) => any
}

export default function PopupForm({ submitButtonText = 'Submit', showMessageField = false, footerText, onSubmit }: Props) {
   const [isCheckboxTicked, setIsCheckboxTicked] = useState(false);
   const { data, setData, errors } = useForm({
      name: '',
      organization: '',
      email: '',
      message: '',
   });

   const formSubmitHandler = useCallback((e: SyntheticEvent) => {
      e.preventDefault();

      if (typeof onSubmit === 'function') onSubmit(data);
   }, [data]);

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
      <div className="flex-grow bg-white w-full max-w-[600px] rounded-2xl shadow-md overflow-hidden">
         <div className="p-3 md:p-10 md:pb-6">
            <form className="flex flex-col gap-3 md:gap-5" onSubmit={formSubmitHandler}>
               <TextField
                  className="mui-popupform-input-field"
                  id="name"
                  label="Your Name"
                  variant="outlined"
                  required
                  value={data.name}
                  onChange={inputChangeHandler}
                  error={errors.name !== undefined}
                  helperText={errors.name}
               />
               <TextField
                  className="mui-popupform-input-field"
                  id="organization"
                  label="Organization"
                  variant="outlined"
                  required
                  value={data.organization}
                  onChange={inputChangeHandler}
                  error={errors.organization !== undefined}
                  helperText={errors.organization}
               />
               <TextField
                  className="mui-popupform-input-field"
                  id="email"
                  type="email"
                  label="Email Id"
                  variant="outlined"
                  required
                  value={data.email}
                  onChange={inputChangeHandler}
                  error={errors.email !== undefined}
                  helperText={errors.email}
               />
               {showMessageField &&
                  <TextField
                     className="mui-popupform-input-field"
                     id="message"
                     label="Queries"
                     variant="outlined"
                     value={data.message}
                     onChange={inputChangeHandler}
                     multiline
                     rows={4}
                     error={errors.message !== undefined}
                     helperText={errors.message}
                  />
               }
               <FormControlLabel
                  required
                  control={
                     <Checkbox
                        onChange={e => setIsCheckboxTicked(e.currentTarget.checked)}
                     />
                  }
                  label="I hereby consent to receiving communication from the ILSS team."
               />
               <Button
                  type="submit"
                  className={`${isCheckboxTicked ? '!bg-primary' : '!bg-gray-300'} !text-[#464646] !text-base md:!text-lg !font-medium
                  !py-2 md:!py-3 mt-2 md:!mt-3 !rounded-lg shadow-[0px_0px_9.7px_0px_#00000040]`}
                  disabled={!isCheckboxTicked}
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
