function getTag(element) {
  var search = element.dataset.search
  console.log(search)
  $('.card').show()
  $('.card').not('.' + search).toggle()
}

function showAll() {
  $('.card').show()
}
