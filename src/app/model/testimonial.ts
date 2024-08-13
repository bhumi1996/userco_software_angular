export interface TestimonialDto {
    totalPages: number
    list: Testimonial[]
    totalElements: number
  }
  
  export interface Testimonial {
    name: string
    designation: string
    comments: string
    fileName: string
  }