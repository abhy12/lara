import { ToolsProps } from "@/util/props";
import { Checkbox, FormControlLabel, Divider } from "@mui/material";

interface Props {
   tools: ToolsProps[]
   selectedTools?: number[]
   onChange?: CallableFunction
}

export default function ToolSelector({ tools, onChange, selectedTools }: Props) {
   if (!Array.isArray(tools)) return <></>;
   return (
      <div className="bg-white/5 px-3 py-2 rounded">
         <label className='text-xl my-2 inline-block'>Tools</label>
         <Divider />
         <div className='max-h-44 overflow-x-auto '>
            {tools.map(tool => {
               return (
                  <FormControlLabel
                     key={tool.id}
                     className='!block'
                     label={tool.name}
                     control={<Checkbox
                        name='tools[]'
                        className='mr-2'
                        value={tool.id}
                        defaultChecked={Array.isArray(selectedTools) && selectedTools.includes(tool.id)}
                        onChange={(e) => {
                           if (typeof onChange === 'function') onChange(e);
                        }}
                     />}
                  />
               );
            })}
         </div>
      </div>
   );
}
