document.addEventListener('DOMContentLoaded', function (e) {
  let accordion = document.getElementsByClassName('accordion');

  let i;
  let len = accordion.length;
  for (i = 0; i < len; i++) {
    accordion[i].addEventListener('click', function () {
      this.classList.toggle('active');
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  }
});
