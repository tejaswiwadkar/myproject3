import * as TeacherService from '../service/teacher-service.js'

window.addEventListener("DOMContentLoaded", () => {

    populateFromDataFromServer();

})

const formElement=document.querySelector("#edit-std-form");

formElement.addEventListener("submit",(event)=>{

    event.preventDefault();

    sendFormToServer();
    
})

const populateFromDataFromServer=()=>{

    const id=window.location.href.split("=")[1];
    console.log(id);

    if(id){
        TeacherService.getOneTeacher(id).then((response)=>{

            const teacher=response.data;

            if(teacher){

                populateDataToForm(teacher);

            }
        })
        .catch((error)=>{

            console.error(error);
        });
    }
};

const populateDataToForm=(teacher)=>{

    document.querySelector("#first").value=teacher.firstName;
    document.querySelector("#last").value=teacher.lastName;
    document.querySelector("#sub").value=teacher.subject;
    
}

const sendFormToServer=()=>{
    const student={

        firstName:document.querySelector("#first").value,
        lastName:document.querySelector("#last").value,
        subject:document.querySelector("#sub").value,
       
    }

    const id=window.location.href.split("=")[1];

    if(student && id){

        TeacherService.UpdateTeacher(student).then((response)=>{

            if(response && response.data){

                 window.location.href="../../page/admin-teacher.html";
            }
        }).catch((error)=>{

            console.error(error);
        });
    }
};

