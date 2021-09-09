// Taking your name by prompt and showing in UI
const nameField = document.getElementById('name');
const yourName = prompt('Please give your name first!!!')
nameField.innerText = `${yourName}`;





// onclick function for button click 
const validate = () => {
    // custom email validation expression
    const filter = /^([a-z0-9_\.\-])+\@(([a-z0-9\-])+\.)+([a-z]{2,4})+$/;
    const input = document.getElementById('input');

    if (!filter.test(input.value)) {
        // for showing border red 
        input.style.border = '2px solid red';
        // showing validation message 
        document.getElementById('check').innerText = 'Your email is not a valid email.Please select a good day an die alone!!!';
        // for showing validation message red 
        document.getElementById('check').classList.add('text-danger');
    }else{
        // for showing border green 
        input.style.border = '2px solid green';
        // showing validation message 
        document.getElementById('check').innerText = 'Your email has been taken';
        // removing previous "text-danger" class 
        document.getElementById('check').classList.remove('text-danger');
         // for showing validation message green 
        document.getElementById('check').classList.add('text-success');
    }
    // clearing input field 
    input.value = '';
}