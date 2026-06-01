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

