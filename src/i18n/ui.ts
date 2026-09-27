interface Translation {
  title: string
  subtitle: string
  description: string
  posts: string
  bangumi: string
  about: string
  toc: string
}

export const ui: Record<string, Translation> = {
  'zh-tw': {
    title: 'kishishiken',
    subtitle: 'A normal blog.',
    description: '',
    posts: '文章',
    bangumi: '番組',
    about: '關於',
    toc: '目錄',
  },
}
