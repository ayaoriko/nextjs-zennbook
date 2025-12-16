import Link from 'next/link';

const tabs = [
    { id: "index", name: "記事", url: "/" },
    { id: "category", name: "カテゴリ一覧", url: "/category" },
    //{ id: "about", name: "このサイトについて", url: "/about" },
];

export default function ArticleBoxTab({ tabID, isLink = false }: {
    tabID: string, // string 型で指定
    isLink?: boolean
}) {
    return (
        <ul className='flex overflow-x-auto whitespace-nowrap no-scrollbar'>
            {tabs.map((tab) => (
                <li key={tab.id} className={`py-[15px] px-[25px] tracking-wide ${tabID == tab.id
                    ? "border-b-1" : ""}`}>
                    <Link href={tab.url} className={` font-bold hover:text-gray-700 transition-smooth ${tabID == tab.id
                        && !isLink ? "cursor-default" : ""}`}>{tab.name}
                    </Link>
                </li>
            ))}
        </ul >
    )
}