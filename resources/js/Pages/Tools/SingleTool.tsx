import type { ToolsProps } from "@/util/props"
import Layout from "@/Components/Layout";
import { Head } from "@inertiajs/react";

interface Props {
   tool?: ToolsProps
}

export default function Single({ tool }: Props) {
   if( !tool ) return <></>

   return(
      <Layout>
         <Head title={tool.name} />
      </Layout>
   );
}
