declare interface Message {
  id: string
  userId: string
  body: string
  username: string
  userAvatar: string
  date: number
  linkUsers: string[]
  likeChecked: boolean
  hateChecked: boolean
  likeCount: number
  hateUsers: string[]
  hateCount: number
}

declare interface UserInfo {
  id: string
  name: string
  avatar: string
  createTime: number
  themeMode: 'system' | 'light' | 'dark'
}
