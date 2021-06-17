document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();
    let formData = new FormData(form);

    let modal = document.getElementById('myModal'),
      span = document.getElementsByClassName('close')[0],
      header = document.getElementsByClassName('modal-header')[0],
      textBody = document.getElementsByClassName('modal-body__text')[0],
      textHeader = document.getElementsByClassName('modal-header__text')[0],
      headerColor = '#69849b',
      headerText = 'Thank you for request!',
      bodyText = 'We will definitely contact you!!';

    try {
      let response = await fetch('/sendmail.php', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        //?
        //let result = await response.json();
        form.reset();
      } else {
        headerColor = 'tomato';
        headerText = 'Sorry';
        bodyText = 'We have some problems on the server side.';
      }
    } catch (e) {
      console.log(e);
      headerColor = 'tomato';
      headerText = 'Sorry';
      bodyText = 'We have some problems on the server side.';
    }

    header.style.backgroundColor = headerColor;
    textBody.textContent = bodyText;
    textHeader.textContent = headerText;
    modal.style.display = 'block';

    span.onclick = function () {
      modal.style.display = 'none';
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  }
});

  function onlyNumberKey(evt) {
    var ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
    return true;
  }