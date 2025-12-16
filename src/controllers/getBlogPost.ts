
import { client } from '@/libs/microcms';
import type { Post } from '@/types/microcms';
import { ROUTES } from "@/libs/microcms";

// microCMSからブログ記事単体を取得する
// 引数：ID（必須）
// 戻り値：Post
export async function getBlogPost(id: string): Promise<Post> {
    if (!id) {
        throw new Error('getBlogPost: 引数 id は必須です');
    }
    const data = await client.get({
        endpoint: `${ROUTES.blog}/${id}`, // 特定記事
    });
    return data || [];
}