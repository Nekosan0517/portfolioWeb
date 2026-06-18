// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Astroの設定定義の実行
export default defineConfig({
  // Tailscale Funnel のドメインURL
  site: 'https://server-a.taild05e99.ts.net',

  // URL末尾スラッシュの強制無効化設定
  trailingSlash: 'never',

  // ビルド出力形式をファイル単位（例: works.html）に指定する設定
  build: {
    format: 'file'
  },

  // TailwindCSSの統合設定
  integrations: [tailwind()]
});