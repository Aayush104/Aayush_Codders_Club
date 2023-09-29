const names = document.getElementById('name');
const email = document.getElementById('email');
const btn = document.querySelector('.btn');
const feature = document.getElementById('feature');
const add = document.querySelector('.add');


btn.addEventListener('click',()=>{

if(names.value == "" || email.value == ""){
    alert(' Form not send!! Please fill the mandorty part');
}

})

