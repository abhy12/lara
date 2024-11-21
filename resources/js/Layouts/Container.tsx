interface Props {
   children?: any
   className?: string
}

export default function Container({ children, className }: Props) {
   return(
      <div className={`max-w-screen-2xl mx-auto px-6 md:px-6 lg:px-8 xl:px-12 2xl:px-16 ${className || ''}`}>
         {children}
      </div>
   );
}
