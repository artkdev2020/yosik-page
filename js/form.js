document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();
    let formData = new FormData(form);

    let response = await fetch('/sendmail2.php', {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      let result = await response.json();
      form.reset();

      let modal = document.getElementById('myModal');
      let span = document.getElementsByClassName('close')[0];

      // btn.onclick = function () {
      modal.style.display = 'block';
      // };

      span.onclick = function () {
        modal.style.display = 'none';
      };

      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = 'none';
        }
      };
    } else alert('error');
  }
});
