function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = ranks.length; i < l; i++) {
    ranks[i].innerHTML = (i + n)
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}
