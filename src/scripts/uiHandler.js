
function addLoadMoreBtn(parentNode) {
  let btn = document.createElement("button");
  btn.setAttribute("onclick", "loadMore()");
  btn.innerHTML = "Load More";
  parentNode.appendChild(btn);
}

export const updateSearchResults = (stringList = [], showLoadBtn = false, searchFor ='') => {
  let ul = document.getElementById("list");
  ul.innerHTML = "";
  stringList.forEach(string => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(string));
    ul.appendChild(li);
  });
  if(showLoadBtn) {
    addLoadMoreBtn(ul);
  }
  let elem = document.getElementById("searched-for");
  if(elem) {
    elem.innerHTML = searchFor;
  }
};

