/**
 * 公開年月（YYYY-MM）を日本語表示用（YYYY年M月）にフォーマットする処理。
 * 先頭のゼロを除去して整形。
 * 例: "2024-03" -> "2024年3月"
 * 
 * @param dateStr YYYY-MM 形式の文字列
 * @returns YYYY年M月 形式の文字列
 */
export function formatDisplayDate(dateStr: string): string {
  if (!dateStr || !dateStr.includes('-')) {
    return dateStr;
  }
  const [year, month] = dateStr.split('-');
  return `${year}年${parseInt(month, 10)}月`;
}
