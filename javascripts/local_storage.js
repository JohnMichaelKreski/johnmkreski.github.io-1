if (window.localstorage) {

  var txtRiver = document.getElementById('river'); // Get form elements
  var txtTakeOut = document.getElementById('takeout');

  txtRiver.value = localStorage.getItem('river');  // Elements populated
  txtTakeOut.value = localStorage.getItem('takeout');      // by localStorage data

  txtRiver.addEventListener('input', function () {    // Data saved on keyup
    localStorage.setItem('username', txtRiver.value);
  }, false);

  txtTakeOut.addEventListener('input', function () {      // Data saved on keyup
    localStorage.setItem('answer', txtTakeOut.value);
  }, false);
}
