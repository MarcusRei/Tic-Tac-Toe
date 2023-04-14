export function addToLS(key: string, info: any) {
  let StringifiedInfo = JSON.stringify(info);
  localStorage.setItem(key, StringifiedInfo);
  console.log(key, " added to LS!");
}
