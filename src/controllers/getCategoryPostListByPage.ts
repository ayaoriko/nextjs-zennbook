import { client } from '@/libs/microcms';
import type { Post } from '@/types/microcms';
import { ROUTES, BLOG_LIMIT } from "@/libs/microcms";

// microCMSから指定したカテゴリーの記事一覧を取得する
// 引数：カテゴリーID(必須)、limitで記事の件数指定
// 戻り値：Post[]
export async function getCategoryPostListByPage(
    categoryID: string,
    page: number,
    limit: number = BLOG_LIMIT,
): Promise<{ posts: Post[]; totalCount: number }> {
    if (!categoryID) {
        throw new Error('getCategoryPostList: 引数 categoryID は必須です');
    }
    const offset = (page - 1) * limit;
    const data = await client.get({
        endpoint: ROUTES.blog,
        queries: {
            filters: `category[equals]${categoryID}`,
            limit,
            offset,
        },
    });
    const totalCount = data.totalCount || 0;
    return { posts: data.contents, totalCount };
}