const form = document.querySelector('.login-form');

const onFormSubmit = event => {
    event.preventDefault();

    const formEl = event.currentTarget.elements;

    const emailValue = formEl.email.value.trim();
    const passValue = formEl.password.value.trim();

        if (!emailValue || !passValue) {
        alert('All form fields must be filled in');
        return;
    }

    const info = {
    email: formEl.email.value,
    pass: formEl.password.value,
    };

    console.log(info);
    event.currentTarget.reset();
};

form.addEventListener('submit', onFormSubmit);
