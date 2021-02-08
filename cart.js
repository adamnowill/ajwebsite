removeCartItemButtonsdocument.getElementsByClassName('btn-danger')
for(var i = o;i < removeCartItemButtonsdocument; i++) {
    var button = removeCartItemButtonsdocument[i]
    button.addEventListener('click', function(event) {
      var buttonClicked = event.target
    })
}