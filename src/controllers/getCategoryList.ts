import { client } from '@/libs/microcms';
import type { Category } from '@/types/microcms';
import { ROUTES, BLOG_LIMIT } from "@/libs/microcms";

// microCMSからカテゴリー項目一覧を取得する
// 引数：limitで記事の件数指定
// 戻り値：Category[]
export async function getCategoryList(
    limit: number = BLOG_LIMIT,
): Promise<Category[]> {
    const data = await client.get({
        endpoint: ROUTES.category,
        queries: {
            limit,  // 最新の件数を取得
        },
    });
    // API が contents を返さない場合は空配列を返して呼び出し元での例外を防ぐ
    return data.contents || [];
}