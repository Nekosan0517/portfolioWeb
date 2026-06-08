/**
 * ファイルパスが動画ファイルかどうかを判定する関数。
 * @param path 判定対象のファイルパス。
 * @returns 動画ファイルの場合はtrue、それ以外はfalse。
 */
export function isVideoFile(path: string | undefined): boolean {
  if (!path) return false;
  // 拡張子（mp4, webm, ogg）での動画判定。
  return /\.(mp4|webm|ogg)$/i.test(path);
}
