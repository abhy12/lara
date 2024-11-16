import { Modal } from "@mui/material";

interface Props {
   isActive: boolean
   onClose: CallableFunction
   children?: any
}

export default function PopupModal({ isActive, onClose, children }: Props) {
   return (
      <Modal
         open={isActive}
         //@ts-ignore
         onClose={onClose}
      >
         <div
            className="h-full flex justify-center items-center bg-white/35"
            onClick={e => { if (e.target === e.currentTarget) onClose() }}
         >
            {children}
         </div>
      </Modal>
   );
}
