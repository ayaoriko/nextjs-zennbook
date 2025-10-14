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
    const threeDaysAgo = dayjs().subtract(3, "day");
    return (
        <ul className='grid grid-cols-2 md:grid-cols-3 gap-6 '>
            {posts.map((post) => (
                <li key={post.id} className='rounded-[14px] bg-white overflow-hidden flex  flex-col'>
                    <Link href={`${ROUTES.categoryPath}/${post.category.id}`} className='block bg-[#FFCFE1] relative p-[25px] flex justify-center items-center'>
                        <span className=' text-white text-[10px] text-xs bg-[#FF3E6E] py-[4px] px-[6px] rounded-[8px] absolute top-[12px] left-[12px] leading-none'>{post.category.name}</span>
                        <span className=" material-symbols-outlined text-[#FF3E6E] !text-[38px]">{post.category.icon}</span>
                    </Link>
                    <Link className='block flex-1 p-[12px] pb-0 font-bold tracking-wid line-clamp-3' href={`${ROUTES.basePath}/${post.id}`}>{post.title}
                    </Link>
                    <div className='block p-[12px] text-[12px]'>{dayjs(post.publishedAt).format('YYYY.MM.DD')}</div>
                </li>
            ))}
        </ul>
    )
}

