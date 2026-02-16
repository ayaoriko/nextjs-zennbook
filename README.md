# Next.js ZENNBOOK
Next.jsでブログを作りました。

## URL
実物は下記URLに掲載しています。サイトの公開にはVercelを利用しています。

https://zennbook.ayaoriko.com/

詳しい制作の経緯はブログをご覧ください。

https://ayaoriko.com/coding/react/nextjs-microcms/

Next.jsで設定したコマンドは、別リポジトリに記載しています。
https://github.com/ayaoriko/nextjs-first-app

## デザイン
[エンジニアのための情報共有コミュニティ Zenn](https://zenn.dev/)のデザインを参考にしました。

###  PCデザインカンプ
#### TOPページ
<img width="1280"  alt="Image" src="https://github.com/user-attachments/assets/76a3d4b5-29d8-4e23-9611-74338ff002b6" />
#### 詳細ページ
<img width="1280"  alt="Image" src="https://github.com/user-attachments/assets/d18b2f4b-6974-4944-877e-fa98e2e426f5" />

###  SPデザインカンプ
#### TOPページ
<img width="375"  alt="Image" src="https://github.com/user-attachments/assets/90198f4c-c504-4da2-ba59-52345dfd79c2" />
#### 詳細ページ
<img width="375"  alt="Image" src="https://github.com/user-attachments/assets/18e6a1ad-dfd5-4f70-8a0c-2af5b4f2ddd0" />

## 実装機能
- microCMSからAPIを取得して投稿する機能(記事投稿・カテゴリー編集と紐付け)
- サムネイルはカテゴリーごとにアイコンを設ける仕様
- カテゴリーページ一覧
- ページャーの実装
- TypeScript・Tailwind CSS の導入
- 記事一覧コンポーネントの共通化

## 環境
- Node.js v22.20.0
- Next.js v15.5.9
- React v19.1.0
- TypeScript v5.x
- Sass（Dart Sass）v1.93.2
- Tailwind CSS v4.x
- @tailwindcss/typography v0.5.19
- microcms-js-sdk v3.2.0
- dayjs v1.11.18