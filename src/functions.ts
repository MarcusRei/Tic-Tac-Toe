export function addToLS(key: string, info: any) {
  let StringifiedInfo = JSON.stringify(info);
  localStorage.setItem(key, StringifiedInfo);
  console.log(key, " added to LS!");
}

export function getFromLS(key: string) {
  let info = JSON.parse(localStorage.getItem(key)!);
  console.log(info, " collected from LS!");
  return info;
}
