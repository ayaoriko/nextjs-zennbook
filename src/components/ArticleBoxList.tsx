import Link from 'next/link';
import { ROUTES } from "@/libs/microcms";

import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
import 'dayjs/locale/ja';

export type Post = {
    id: string;
    title: string;
    body: string;
    publishedAt: string;
    category: { name: string, id: string, icon: string };
};

export default function BlogPostList({ posts }: { posts: Post[] }) {
    return (
        <ul className='grid grid-cols-2 md:grid-cols-3 gap-6 '>
            {posts.map((post) => (
                <li key={post.id} className='group relative rounded-[14px] bg-white overflow-hidden flex  flex-col transition-smoothhover:bg-gray-100'>
                    <Link href={`${ROUTES.basePath}${post.id}`} className='block bg-[#FFCFE1] p-[25px] flex justify-center items-center group-hover:bg-[#F3C7D8] transition-smooth'>
                        <span className=" material-symbols-outlined text-[#FF3E6E] !text-[38px]">{post.category.icon}
                        </span>
                    </Link>
                    <Link href={`${ROUTES.basePath}${ROUTES.categoryPath}/${post.category.id}`} className=' text-white text-[10px] bg-[#FF3E6E] py-[4px] px-[6px] rounded-[8px] absolute top-[12px] left-[12px] leading-none hover:bg-gray-400 transition-smooth'>{post.category.name}</Link>
                    <Link className='block flex-1 p-[12px] pb-0 font-bold tracking-wide line-clamp-3 ' href={`${ROUTES.basePath}${post.id}`}>{post.title}
                    </Link>
                    <div className='block p-[12px] text-[12px]'>
                        {post.publishedAt ? dayjs(post.publishedAt).format('YYYY.MM.DD') : '日付不明'}
                    </div>
                </li>
            ))
            }
        </ul >
    )
}

