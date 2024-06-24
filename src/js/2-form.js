let formData = {
  email: '',
  message: '',
};

const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedFormData) {
  formData = savedFormData;
  populateForm(formData);
}

function populateForm(data) {
  const form = document.querySelector('.feedback-form');
  form.elements['email'].value = data.email;
  form.elements['message'].value = data.message;
}

const form = document.querySelector('.feedback-form');
form.addEventListener('input', function (e) {
  if (e.target.matches('input[type="email"]')) {
    formData.email = e.target.value;
  } else if (e.target.matches('textarea[name="message"]')) {
    formData.message = e.target.value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };

  form.reset();
});
