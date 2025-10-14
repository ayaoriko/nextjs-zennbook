import ProfileHeader from '@/components/ProfileHeader';
import ArticleBoxList from '@/components/ArticleBoxList';
import { fetchPageData } from "@/libs/fetchPageData";
import Pegnation from "@/components/Pegnation";

export default async function BlogListByPage({
  params,
}: {
  // App Router may provide params as a Promise — await before use
  params: Promise<{ page?: string[] }>
}) {
  const resolvedParams = await params;
  const { pageNum, posts, totalPages } = await fetchPageData(resolvedParams);
  return (
    <>
      <div className='px-[14px] py-[20px]  max-w-[1228px] mx-auto'>
        <ProfileHeader />
      </div>
      <div className='bg-[#F7EDF5]'>
        <div className="max-w-[1228px] mx-auto px-[14px] py-[40px]">
          <ArticleBoxList posts={posts} />
          <Pegnation currentPage={pageNum} totalPageCount={totalPages} basePath="/page" />
        </div>
      </div>
    </>
  )
}