import * as TeacherService from '../service/teacher-service.js'

window.addEventListener("DOMContentLoaded", () => {

})


const formElement = document.querySelector("#add-std-form");

formElement.addEventListener("submit", (event) => {

    event.preventDefault();

    const formdata = {
    
        firstName: document.querySelector("#first").value,
    
        lastName: document.querySelector("#last").value,

        subject: document.querySelector("#sub").value,
    
    }

    if (formdata) {

        TeacherService.CreateTeacher(formdata).then((response) => {
    
                if(response && response.data){

                window.location.href="../page/admin-teacher.html"
                
                }
    
        }).catch((error) => {
    
            console.log(error);
        });
    }
    

})







