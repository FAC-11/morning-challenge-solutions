(() => {
  //Magic App Drawer Creating code
  var button = document.getElementsByClassName('app_drawer__button')[0];
  var appDrawer = document.getElementsByClassName('app_drawer')[0];
  button.addEventListener('mouseover', function(e) {
    button.classList.add('app_drawer__button__visible');
    appDrawer.classList.add('app_drawer__visible');
  })
  appDrawer.addEventListener('mouseout', function(e) {
    button.classList.remove('app_drawer__button__visible');
    appDrawer.classList.remove('app_drawer__visible');
  })
})();
