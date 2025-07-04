export function paging(totalPage: number, limit: number) {
  const totalPageArray = Array(totalPage)
    .fill(null)
    .map((_, i) => i + 1);

  return Array(Math.ceil(totalPage / limit))
    .fill(null)
    .map(() => totalPageArray.splice(0, limit));
}
