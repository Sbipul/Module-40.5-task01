const nameField = document.getElementById('name');
const yourName = prompt('Please give your name first!!!')
nameField.innerText = `${yourName}`;
const validate = () => {
    const filter = /^([a-z0-9_\.\-])+\@(([a-z0-9\-])+\.)+([a-z]{2,4})+$/;
    const input = document.getElementById('input');
    if (!filter.test(input.value)) {
        input.style.border = '2px solid red';
        document.getElementById('check').innerText = 'Your email is not a valid email.Please select a good day an die alone!!!';
        document.getElementById('check').classList.add('text-danger');
    }else{
        input.style.border = '2px solid green';
        document.getElementById('check').innerText = 'Your email has been taken';
        document.getElementById('check').classList.remove('text-danger');
        document.getElementById('check').classList.add('text-success');
    }
    input.value = '';
}