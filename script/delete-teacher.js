import * as TeacherService from '../service/teacher-service.js'

window.addEventListener("DOMContentLoaded",()=>{

    const id=window.location.href.split("=")[1];

    if(id){

        TeacherService.DeleteTeacher(id).then((response)=>{

            if (response && response.data){

                window.location.href="../page/admin-teacher.html"
            }
        }).catch((error)=>{

            console.log(error);

        });
    }
});