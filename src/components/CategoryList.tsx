import Link from 'next/link';
import { getCategoryList } from '@/controllers/getCategoryList';
import type { Category } from '@/types/microcms';

export default async function CategoryList() {
    const categories = await getCategoryList(99);
    if (!categories || categories.length === 0) {
        return <p>カテゴリーが見つかりません。</p>;
    }
    return (
        <ul>
            {categories.map((cat: Category) => (
                <li key={cat.id}>
                    <Link href={`/category/${cat.id}`}>{cat.name}</Link>
                </li>
            ))}
        </ul>
    );
}