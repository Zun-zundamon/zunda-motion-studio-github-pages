import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:"ずんだモーションスタジオ",description:"PSD・PNG立ち絵と音声から、自動口パク・まばたき付きの透過動画素材を作成します。",icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ja"><body>{children}</body></html>}
