import ProfileSideContents from '@/components/ProfileSideContents';
import ArticleBoxList from '@/components/ArticleBoxList';
import { getBlogPost } from '@/controllers/getBlogPost'
import { notFound } from 'next/navigation';
import { getBlogPostListByPage } from "@/controllers/getBlogPostListByPage";
import { ROUTES } from "@/libs/microcms";
import Link from 'next/link';
import dayjs from 'dayjs';

export default async function Single({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params; // IDを取得
    let post;

    try {
        post = await getBlogPost(slug);
    } catch {
        notFound(); // 存在しない場合は 404 ページに遷移
    }

    const { posts } = await getBlogPostListByPage(1, 3);

    // dayjsを使ってpublishedAtをYY.MM.DD形式に変換
    const formattedDate = dayjs(post.publishedAt).format('YYYY年MM月DD日に公開');
    return (
        <>
            <article className='bg-[#F7EDF5]'>
                <div className="text-center px-[20px] py-[30px]">
                    <span className="!block material-symbols-outlined text-[#FF3E6E] !text-[80px] mx-auto">{post.category.icon}
                    </span>
                    <h1 className='inline-block text-left mt-[10px] max-w-[780px]' ><span className='text-[20px] font-bold tracking-wider md:font-26 md:leading-[1.8]' >{post.title}</span></h1>
                    <time dateTime={post.publishedAt} className='block text-gray-700 text-[15px] mt-4' >{formattedDate}</time>
                </div>
                <div className='lg:flex  max-w-[1120px] mx-auto justify-between lg:gap-[15px] xl:gap-[30px]'>
                    <div className='lg:max-w-[790px] w-full'>
                        <div className="bg-white mx-auto px-[20px] py-[40px] lg:px-[40px]">
                            <div className='mb-4'>
                                <Link href={`${ROUTES.basePath}${ROUTES.categoryPath}/${post.category.id}`} className='inline-flex items-center border border-[#D9D9D9] gap-[5px]  rounded-3xl py-[0.4em] px-[0.8em]'>
                                    <span className='flex bg-[#F7EDF5] rounded-[50%] p-[0.4em]'>
                                        <span className="material-symbols-outlined !text-[18px] text-[#FF3E6E]">{post.category.icon}</span>
                                    </span>
                                    <span className='font-13'>
                                        {post.category.name}
                                    </span>
                                </Link>
                            </div>
                            {/* 記事本文を表示 */}
                            <div className="prose prose-h1:text-[1.8em] max-w-full" dangerouslySetInnerHTML={{ __html: post.body }} />
                        </div>
                    </div>
                    <div className="lg:max-w-[300px]">
                        <aside className=' bg-white'>
                            <span className='block mx-[20px] border-b border-b-[#D9D9D9] lg:hidden' ></span>
                            <section className='py-[36px] mx-[20px] lg:p-[25px] lg:m-0'>
                                <ProfileSideContents />
                            </section>
                        </aside>
                    </div>
                </div>
                <aside className='px-[20px] py-[40px] max-w-[1160px] mx-auto'>
                    <h2 className='text-[22px] font-bold tracking-wider mb-6'>最新の投稿</h2>
                    <ArticleBoxList posts={posts} />
                </aside>
            </article>
        </>
    )
}