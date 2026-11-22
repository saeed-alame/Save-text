const nameinput = document.getElementById("input");
const form = document.getElementById("form");
const output = document.getElementById("output");
 const username = localStorage.getItem('username') || '';

nameinput.value = username;
output.textContent = username;

form.addEventListener("submit", e =>{

    e.preventDefault();
     localStorage.setItem('username', nameinput.value);
     output.textContent = nameinput.value;
     
})
