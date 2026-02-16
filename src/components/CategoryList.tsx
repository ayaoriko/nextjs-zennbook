import Link from 'next/link';
import { getCategoryList } from '@/controllers/getCategoryList';
import type { Category } from '@/types/microcms';

export default async function CategoryList() {
    const categories = await getCategoryList(99);
    if (!categories || categories.length === 0) {
        return <p>カテゴリーが見つかりません。</p>;
    }
    return (
        <ul className='CategoryList'>
            {categories.map((cat: Category) => (
                <li key={cat.id} className=' p-2 relative pt-[0.5em] px-[0.5em] pb-[0.5em] pl-[2.5em]'>
                    <span className="material-symbols-outlined text-[#FF3E6E] !text-[18px]  bg-[#FFCFE1] p-[0.3em] rounded-full mr-[1em] absolute left-0 top-0 bottom-0 my-auto w-[28px] h-[28px]">{cat.icon}
                    </span>
                    <Link href={`/category/${cat.id}`} className='hover:text-[#FF3E6E] transition-smooth'>{cat.name}</Link>
                </li>
            ))}
        </ul>
    );
}