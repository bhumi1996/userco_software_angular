export interface ArticleDto {
    totalPages: number
    list: Article[]
    totalElements: number
  }
  
  export interface Article {
    heading: string
    title: string
    url: string
    description: string
    shortDescription: string
    imageUrl: string
    lastModifiedBy: string
    lastModifiedDate: string
  }
  