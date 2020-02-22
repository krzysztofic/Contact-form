const contactFields = document.querySelectorAll('.sda-input')


for (let i = 0; i < contactFields.length; i++) {
    const currentContactFieldImput = contactFields[i];
    let currentLabel = currentContactFieldImput.parentElement.firstElementChild;

    currentContactFieldImput.addEventListener('focus', function () {
        currentLabel.classList.add('move-up');
    });

    currentContactFieldImput.addEventListener('blur', function () {
        if (currentContactFieldImput.value === '') {
            currentLabel.classList.remove('move-up');
        }
    });
}