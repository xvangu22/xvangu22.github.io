const serviceID = 'service_l25j3kj';
const templateID = 'template_7nvqqa5'

document.addEventListener('DOMContentLoaded', () => {
  const rsvpForm = document.querySelector('#rsvp');
  const rsvpSentForm = document.querySelector('#rsvp_sent');

  // const hasSentRSVP = () => {
  //   const storageItem = localStorage.getItem('RSVP_Sent_New');
  //   return storageItem !== null
  // }

  // const rsvpSubmitted = hasSentRSVP();
  // if (rsvpSubmitted) {
  //   rsvpForm?.classList.add('hidden');
  //   rsvpSentForm?.classList.remove('hidden');
  // }

  const submitButton = document.querySelector('input[type=submit]');

  rsvpForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#name')?.value;

    const attendingRadio = [].slice.call(document.getElementsByName('attend'));
    const attending = attendingRadio?.find(element => element.checked)?.value

    const vegetarian = document.querySelector('#dietary_vegetarian')?.checked ? 'Vegetarian' : ''
    const vegan = document.querySelector('#dietary_vegan')?.checked ? 'Vegan' : ''
    const glutenIntolerant = document.querySelector('#dietary_gluten')?.checked ? 'Gluten intolerant' : ''
    const lactoseIntolerant = document.querySelector('#dietary_lactose')?.checked ? 'Lactose intolerant' : ''
    const otherDietaryReqs = document.querySelector('#dietary_other')?.value;

    const email = document.querySelector('#contact_email')?.value
    const phone = document.querySelector('#contact_phone')?.value
    const message = document.querySelector('#message')?.value


    var templateParams = {
      name: name || '',
      attending: attending || '',
      diets: {
        vegetarian: vegetarian,
        vegan: vegan,
        glutenIntolerant: glutenIntolerant,
        lactoseIntolerant: lactoseIntolerant,
        other: otherDietaryReqs
      } || {},
      email: email || '',
      phone: phone || '',
      message: message
    };

    submitButton.value = 'Sending...';
    emailjs.send(serviceID, templateID, templateParams)
      .then(function (response) {
        submitButton.value = 'Thank you for your answer!';
        localStorage.setItem('RSVP_Sent_New', 'true')
        rsvpForm?.classList.add('hidden');
        rsvpSentForm?.classList.remove('hidden');
      }, function (error) {
      });
  })
})