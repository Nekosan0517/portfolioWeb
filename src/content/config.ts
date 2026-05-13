import { z, defineCollection } from 'astro:content';

/**
 * 作品（Works）のデータ構造（スキーマ）を定義します。
 * ここで定義したルールに沿わないデータがJSONにある場合、
 * ビルド時や開発時に即座にエラーとして通知されます。
 */
const worksCollection = defineCollection({
  // JSONファイルを扱うため 'data' を指定します
  type: 'data', 
  schema: z.object({
    // 作品のタイトル
    title: z.string(),
    // 作品の概要説明
    description: z.string(),
    // カテゴリを限定することで、入力ミスを防ぎます
    category: z.enum(['game', 'tool', 'video']),
    // サムネイル画像（任意項目：optional）
    thumbnail: z.string().optional(),
    // 関連タグの配列（例：["TypeScript", "Unity"]）
    tags: z.array(z.string()),
    // 外部リンク（任意項目。URL形式であることをチェック）
    url: z.string().url().optional(),
    // 並び順を制御する数値（デフォルト値 0）
    order: z.number().default(0),
  }),
});

/**
 * 定義したコレクションをAstroに登録します。
 * キー名（'works'）は、src/content/ 内のフォルダ名と一致させる必要があります。
 */
export const collections = {
  'works': worksCollection,
};