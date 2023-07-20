const EMAILJS_USERID = 'UnYzurH0qD5hwSTIr';
const EMAILJS_SERVICEID = 'service_pyieqbj';
const EMAILJS_TEMPLATEID = 'template_uq9bmih';

emailjs.init(EMAILJS_USERID);

function sendEmail(e) {
  e.preventDefault();

  const form = document.getElementById('contact-form');
  const name = form.name.value;
  const lastname = form.lastname.value;
  const email = form.email.value;
  const message = form.message.value;

  emailjs.send(EMAILJS_SERVICEID, EMAILJS_TEMPLATEID, {
    name: 'Josipa',
    fullName: name + ' ' + lastname,
    email: email,
    message: message
  }).then(function(response) {
    console.log('Email sent successfully!', response.status, response.text);
    form.reset();
  }, function(error) {
    console.error('Error sending email:', error);
  });
}
