interface Translation {
  title: string
  subtitle: string
  description: string
  posts: string
  bangumi: string
  //tags: string
  about: string
  toc: string
}

export const ui: Record<string, Translation> = {
  'zh-tw': {
    title: '重新編排',
    subtitle: '再現版式之美',
    description: 'Retypeset是一款基於Astro框架的靜態部落格主題，中文名為重新編排。本主題以活版印字為設計靈感，通過建立全新的視覺規範，對所有頁面進行重新編排，打造紙質書頁般的閱讀體驗，再現版式之美。所見皆為細節，方寸盡顯優雅。',
    posts: '文章',
    //tags: '標籤',
    about: '關於',
    toc: '目錄',
  },
}
