const tabTitles = ['zyph', 'russianhoe', 'pupgirls'];
let index = 0x0;
function updateTabTitle() {
  document.title = tabTitles[index];
  index = (index + 0x1) % tabTitles.length;
  console.clear()
}
updateTabTitle();
setInterval(updateTabTitle, 0x1f4);