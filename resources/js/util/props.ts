export interface Category {
   id: number
   name: string
   parent_id?: number
   subcategory?: Category[]
}

export interface ToolsProps {
   id: number
   name: string
   is_opensource?: number
   website?: string
   cost_structure?: string
   fee_amount?: string
   free_credit?: string
   support_structure?: string
   sgb_domain?: string
   ngo_ref?: string
   additional_comments?: string
   created_at?: string
   updated_at?: string
   logo?: string
   services?: ServiceProps[]
   categories?: Category[]
}

export interface FormProps {
   id: number
   name: string
   organization: string
   email: string
   message?: string
   created_at?: string
   updated_at?: string
}

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
   created_at?: string
   updated_at?: string
   logo?: string
}
