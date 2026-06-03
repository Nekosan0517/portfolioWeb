import { z, defineCollection } from 'astro:content';

/**
 * 作品（Works）のデータ構造（スキーマ）定義
 * ここで定義したルールに沿わないデータがJSONにある場合、
 * ビルド時や開発時に即座にエラーとして通知される
 */
const worksCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    /** 段落ごとの配列 */
    descriptions: z.array(z.string()),
    photos: z.array(
      z.object({
        url: z.string(),
        caption: z.string().optional(),
      })
    ).optional(),
    category: z.enum(['game', 'tool', 'video', 'photo']),
    thumbnail: z.string().optional(),
    /** 使用技術・タグ（例: ["TypeScript", "Unity"]） */
    tags: z.array(z.string()),
    /** 外部リンク（URL形式） */
    url: z.string().url().optional(),
    /** 公開年月（YYYY-MM 形式） */
    date: z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/),
  }),
});

/**
 * 自己紹介（About）のデータ構造（スキーマ）定義
 * profile.json を一元管理し、トップページの全表示データをここで型安全に保証する
 * スキル・連絡先は配列構造のため、JSON編集だけで追加・変更が可能
 */
const aboutCollection = defineCollection({
  type: 'data',
  schema: z.object({
    /** SEO用メタ情報 */
    meta: z.object({
      title: z.string(),
      description: z.string(),
    }),
    /** ヒーローセクション表示データ */
    hero: z.object({
      nameJa: z.string(),
      nameEn: z.string(),
      catchcopy: z.string(),
    }),
    /** Aboutセクション表示データ */
    about: z.object({
      profileImage: z.string(),
      paragraphs: z.array(z.string()),
    }),
    /** スキルセクション表示データ（カテゴリ別配列） */
    skills: z.array(
      z.object({
        category: z.string(),
        items: z.array(z.string()),
      })
    ),
    /** コンタクトセクション表示データ（type別にアイコン切り替え可能） */
    contact: z.array(
      z.object({
        label: z.string(),
        /** アイコン種別: "email" | "github" | "twitter" | "link" など拡張可能 */
        type: z.string(),
        value: z.string(),
        href: z.string(),
      })
    ),
  }),
});

/**
 * コレクション登録
 * キー名はsrc/content/内のフォルダ名と一致させる必要がある
 */
export const collections = {
  'works': worksCollection,
  'about': aboutCollection,
};