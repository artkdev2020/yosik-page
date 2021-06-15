document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  //console.log(form);
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();
    let formData = new FormData(form);

    let response = await fetch('../sendmail2.php', {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      let result = await response.json();
      form.reset();
    } else alert('error');
  }
});
