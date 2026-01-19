const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("form submitted")
}
const form=document.querySelector('form')
form.addEventListener('submit',handleSubmit)
   