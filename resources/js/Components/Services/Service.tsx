import type { ToolsProps } from "../Tools/Tool"
import type { Category } from "@/util/props"

export interface ServiceProps {
   id: number
   name?: string
   description?: string
   services_provided?: string
   services_cost?: string
   product_offered?: string
   product_cost?: string
   functional_expertise?: string
   sgb_domain?: string
   website?: string
   point_contact?: string
   designation?: string
   email?: string
   contact_number?: string
   tools?: ToolsProps[]
   categories?: Category[]
}
