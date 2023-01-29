document.addEventListener('DOMContentLoaded', () => {
  const introCheckbox = document.querySelector('#intro');

  introCheckbox.addEventListener('change', function () {
    setTimeout(() => {
      window.scrollTo({
        top: 0
      });
    }, 500)
  })
})