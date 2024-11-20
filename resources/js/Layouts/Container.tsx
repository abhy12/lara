interface Props {
   children?: any
   className?: string
}

export default function Container({ children, className }: Props) {
   return(
      <div className={`max-w-7xl mx-auto px-4 md:px-6 lg:px-8  ${className || ''}`}>
         {children}
      </div>
   );
}
