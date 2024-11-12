import { ToolsProps } from "./Tool";

interface Props{
   tools: ToolsProps[]
   selectedTools?: number[]
   onChange?: CallableFunction
}

export default function ToolSelector({ tools, onChange, selectedTools }: Props) {
   return(
      <>
         {Array.isArray( tools ) &&
         <div className='max-h-32 overflow-x-auto mt-4 bg-white px-3 py-2 rounded border'>
            {tools.map( tool => {
               return(
                  <label key={tool.id} className='block'>
                     <input
                        type="checkbox"
                        name='tools[]'
                        className='mr-2'
                        value={tool.id}
                        defaultChecked={Array.isArray( selectedTools ) && selectedTools.includes( tool.id )}
                        onChange={(e) => {
                           if( typeof onChange === 'function' ) onChange( e );
                        }}
                     />
                     {tool.name}
                  </label>
               );
            })}
         </div>
         }
      </>
   );
}
