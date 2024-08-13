export interface FaqDto {
    totalPages: number
    list: Faq[],
    totalElements: number
  }
  
  export interface Faq {
    faqQuestion: string
    faqAnswer: string
  }
  