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

// Делегування події input для зберігання даних у локальному сховищі
const form = document.querySelector('.feedback-form');
form.addEventListener('input', function (e) {
  if (e.target.matches('input[type="email"]')) {
    formData.email = e.target.value;
  } else if (e.target.matches('textarea[name="message"]')) {
    formData.message = e.target.value;
  }

  // Збереження formData у локальному сховищі
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Обробка відправлення форми
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Перевірка заповненості полів
  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  // Вивід formData у консоль
  console.log(formData);

  // Очищення локального сховища та об’єкта formData
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };

  // Очищення полів форми
  form.reset();
});
