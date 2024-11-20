import { Modal } from "@mui/material";

interface Props {
   isActive: boolean
   onClose: CallableFunction
   children?: any
   closeOnDefault?: boolean
}

export default function PopupModal({ isActive, onClose, children, closeOnDefault = true }: Props) {
   return (
      <Modal
         open={isActive}
         //@ts-ignore
         onClose={onClose}
         disableEscapeKeyDown={!closeOnDefault}
         hideBackdrop={!closeOnDefault}
      >
         <div
            className="h-full flex justify-center items-center bg-white/35 px-4"
            onClick={e => { if (e.target === e.currentTarget && closeOnDefault) onClose() }}
         >
            {children}
         </div>
      </Modal>
   );
}
