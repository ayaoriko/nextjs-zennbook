import './globals.css';
import React from 'react'

// アプリ全体共通のレイアウト（ヘッダー・フッターなど）
//  <html> / <body> を書けるのは アプリ全体のルートレイアウトだけ
// layout.tsx は 必ず export default function Layout({ children }) の形で書く
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // <html> の直下には <head> と <body> しか置けません
  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className='tracking-wider'>
        <header className='bg-white px-[14px] py-[20px]  max-w-[1228px] mx-auto'>
          <h1 className='text-lg font-bold'>あやおり子のゼンぶっく</h1>
        </header>
        {/* ページごとのコンテンツ */}
        <main>{children}</main>
      </body>
    </html>
  )
}