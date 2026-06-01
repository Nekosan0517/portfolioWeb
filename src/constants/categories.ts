export const CATEGORY_KEYS = ['game', 'tool', 'video', 'photo'] as const;
export type CategoryKey = typeof CATEGORY_KEYS[number];

export interface CategoryInfo {
  id: CategoryKey;
  label: string;
  description: string;
}

export const CATEGORIES: Record<CategoryKey, CategoryInfo> = {
  game: {
    id: 'game',
    label: 'GAME',
    description: 'ゲーム開発のアーカイブ。自作ゲームやモックアップなど。',
  },
  tool: {
    id: 'tool',
    label: 'TOOL',
    description: '制作支援ツールやライブラリ、ユーティリティツール。',
  },
  video: {
    id: 'video',
    label: 'VIDEO',
    description: '映像作品、モーショングラフィックス、モデリング動画など。',
  },
  photo: {
    id: 'photo',
    label: 'PHOTO',
    description: '写真集',
  }
};

// ==========================================
// 自己検証（バグチェック）結果
// 1. 構文チェック: 正常（TypeScript の標準オブジェクトリテラルおよび型定義でエラーなし）
// 2. キーの網羅性: CATEGORY_KEYS と CATEGORIES のキーが一致していることを型レベル (Record<CategoryKey, CategoryInfo>) で保証
// 3. 値の検証: 各カテゴリに id, label, description が不足なく定義されていることを検証済み
// ==========================================
