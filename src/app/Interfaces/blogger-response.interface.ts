export interface BloggerResponseInterface {
  kind: string
  nextPageToken: string
  items: Item[]
  etag: string
}

export interface Item {
  kind: string
  id: string
  blog: Blog
  published: string
  updated: string
  url: string
  selfLink: string
  title: string
  images: Image[]
  author: Author
  replies: Replies
  labels: string[]
  location?: Location
  etag: string
}

export interface Blog {
  id: string
}

export interface Image {
  url: string
}

export interface Author {
  id: string
  displayName: string
  url: string
  image: Image2
}

export interface Image2 {
  url: string
}

export interface Replies {
  totalItems: string
  selfLink: string
}

export interface Location {
  name: string
  lat: number
  lng: number
  span: string
}
