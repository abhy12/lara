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
}
