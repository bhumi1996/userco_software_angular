export interface ServiceDto {
    totalPages: number
    list: Service[]
    totalElements: number
  }
  
  export interface Service {
    serviceName: string
    description: string
    imageUrl: string
  }