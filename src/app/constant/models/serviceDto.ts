export interface faq {
  query: string
  ans: any
}

export interface ServiceDto {
  id: string,
  mainTitle: string
  Technologies: string
  trustedImages: string[]
  faq:faq[]
}
