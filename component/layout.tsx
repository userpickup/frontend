import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        // 共通のメタデータなどはここに記載
      </Head>
      <main>
        {children}　// ここにコンテンツが埋め込まれるイメージ
      </main>
    </div>
  )
}