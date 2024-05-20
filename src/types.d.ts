export interface Section {
  title: string
  hashtag: string
  space: number
  url: string
}

export interface Article {
  title: string
  sections: Section[]
}
