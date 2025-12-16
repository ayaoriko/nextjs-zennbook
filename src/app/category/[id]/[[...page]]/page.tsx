import ArticleBoxList from '@/components/ArticleBoxList';
import ArticleBoxTab from '@/components/ArticleBoxTab';
import { fetchCategoryPageData } from "@/libs/fetchCategoryPageData";
import Pegnation from "@/components/Pegnation";

export default async function CategoryPagedPage({ params }: { params: Promise<{ id: string; page?: string[] }> }) {
    const resolvedParams = await params;
    const { id, pageNum, posts, totalPages } = await fetchCategoryPageData(resolvedParams);
    const categoryName = posts[0] ? posts[0].category.name : '不明なカテゴリー';
    const categoryIcon = posts[0] ? posts[0].category.icon : 'coding';
    return (
        <>
            <div className='max-w-[880px] mx-auto py-[14px] md:pt-[60px]  md:pb-[40px]'>
                <div className='md:flex items-center px-[16px] lg:p-0'>
                    <div className='rounded-full w-[120px] h-[120px] bg-[#FFCFE1] flex justify-center items-center'>
                        <span className=" material-symbols-outlined text-[#FF3E6E] !text-[51px]">{categoryIcon}
                        </span>
                    </div>
                    <div className='mt-[20px] md:mt-0 md:ml-[28px]'>
                        <h2 className='text-[24px] font-bold font-bold tracking-wide'>{categoryName}</h2>
                    </div>
                </div>
            </div>
            <div className='max-w-[880px] mx-auto'>
                <ArticleBoxTab tabID="category" isLink={true} />
            </div>
            <div className='bg-[#F7EDF5]'>
                <div className="max-w-[880px] mx-auto px-[14px] py-[40px]">
                    <ArticleBoxList posts={posts} />
                    <div className="pt-[60px] ">
                        <Pegnation currentPage={pageNum} totalPageCount={totalPages} basePath={`/category/${id}/page`} />
                    </div>
                </div>
            </div>
        </>
    )
}