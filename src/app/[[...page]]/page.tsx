import ProfileHeader from '@/components/ProfileHeader';
import ArticleBoxList from '@/components/ArticleBoxList';
import ArticleBoxTab from '@/components/ArticleBoxTab';
import { fetchPageData } from "@/libs/fetchPageData";
import Pegnation from "@/components/Pegnation";

export default async function BlogListByPage({ params, }: {
  params: Promise<{ page?: string[] }>
}) {
  const resolvedParams = await params;
  const { pageNum, posts, totalPages } = await fetchPageData(resolvedParams);
  return (
    <>
      <div className='max-w-[880px] mx-auto py-[14px] md:pt-[60px]  md:pb-[40px]'>
        <ProfileHeader />
      </div>
      <div className='max-w-[880px] mx-auto'>
        <ArticleBoxTab tabID="index" />
      </div>
      <div className='bg-[#F7EDF5]'>
        <div className="max-w-[880px] mx-auto px-[14px] py-[40px]">
          <ArticleBoxList posts={posts} />
          <div className="pt-[40px] md:pt-[60px] ">
            <Pegnation currentPage={pageNum} totalPageCount={totalPages} basePath="/page" />
          </div>
        </div>
      </div>
    </>
  )
}