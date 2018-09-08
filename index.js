function getFIrstSelector (selector) {
  return document.querySelector(selector);
}
function nestedTarget () {
  return document.getElementById("nested").querySelector("div.target");
}
function increaseRankBy (n) {
  const rankedList = document.querySelectorAll('.ranked-list');
  let i = 0;
  while(i < rankedList.length) {
    for (let j = 0; j < rankedList[i].children.length; j++) {
      rankedList[i].children[j].innerHTML = (parseInt(rankedList[i].children[j].innerHTML) + n).toString();
    }
  }
}
function deepestChild () {
  var deepChild = document.getElementById("grand-node").querySelectorAll("div");
  return deepChild[deepChild.length - 1];
}