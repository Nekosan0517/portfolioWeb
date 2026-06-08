export const CATEGORY_KEYS = ['game', 'tool', 'graphics', 'photo', 'others'] as const;
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
  graphics: {
    id: 'graphics',
    label: 'GRAPHICS',
    description: '3D CG、モーショングラフィックス、グラフィックデザインなど。',
  },
  photo: {
    id: 'photo',
    label: 'PHOTO',
    description: '写真集',
  },
  others: {
    id: 'others',
    label: 'OTHERS',
    description: 'その他分類できない作品や制作物。',
  }
};

