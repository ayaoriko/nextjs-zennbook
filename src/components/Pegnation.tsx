// components/Pagination.tsx
// 参考：https://flowbite.com/docs/components/pagination/
import Link from 'next/link';

type Props = {
    currentPage: number;
    totalPageCount: number;
    basePath: string; // 例 "/microcms"
};

export default function Pegnation({ currentPage, totalPageCount, basePath }: Props) {
    if (currentPage === 1 && totalPageCount === 1) {
        return null;
    }
    // ページ番号リストを生成
    const pages = Array.from({ length: totalPageCount }, (_, i) => i + 1);

    return (
        <nav className='flex gap-2 items-center -space-x-px justify-center h-8 text-sm pt-[40px] '>
            {/* 前へボタン */}
            {currentPage > 1 && (
                <Link href={`${basePath}/${currentPage - 1}`} className='flex items-center justify-center px-3 h-8 text-sm font-medium text-[#2E2E2E] bg-white  rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
                    <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                    </svg>
                    Previous
                </Link>
            )}
            {/* ページ番号 */}
            {pages.map((page) => (
                <Link
                    key={page}
                    href={`${basePath}/${page}`}
                    className={`flex items-center justify-center px-3 h-8  rounded-lg ${page === currentPage
                        ? "bg-[#FF3E6E] text-white border-blue-500 cursor-default"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                        }`}
                >
                    {page}
                </Link>
            ))}
            {/*<span>Page {currentPage} / {totalPageCount}</span>*/}
            {/* 次へボタン */}
            {currentPage < totalPageCount && (
                <Link href={`${basePath}/${currentPage + 1}`} className='flex items-center justify-center px-3 h-8 text-sm font-medium text-[#2E2E2E] bg-white  rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
                    Next
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            )}
        </nav >
    );
}