import { client } from '@/libs/microcms';
import { ROUTES, BLOG_LIMIT } from "@/libs/microcms";
import type { Post } from '@/types/microcms';

// microCMSからブログ記事一覧を取得
// 引数：page（必須）、limitで記事の件数指定
// 戻り値：Post[]とtotalCount
export async function getBlogPostListByPage(
    page: number,
    limit: number = BLOG_LIMIT
): Promise<{ posts: Post[]; totalCount: number }> {
    const offset = (page - 1) * limit;
    const data = await client.get({
        endpoint: ROUTES.blog,
        queries: {
            limit,
            offset,
            fields: 'id,title,category,publishedAt',
        },
    });
    // microCMS SDK の戻り値に totalCount を含められるか確認
    const totalCount = data.totalCount || 0;
    return { posts: data.contents, totalCount };
}