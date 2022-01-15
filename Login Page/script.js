const nama = document.getElementById('name');
const password = document.getElementById('paswword');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];
    if (nama.value === '' || nama.value == null ){
        messages.push('Name is required');
    }

    if(messages.length> 0){
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
    }
})
