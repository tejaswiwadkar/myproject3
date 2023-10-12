import * as TeacherService from '../service/teacher-service.js'

window.addEventListener("DOMContentLoaded", () => {

    TeacherService.getAllTeacher().then((response) => {

        const teacher = response.data;

        adminTeacher(teacher);

    }).catch((error) => {

        console.log(error);
    })

})

const adminTeacher = (teacher) => {

    const TeacherRowTable = document.querySelector("#std-table-body")

    let TableElement = "";

    teacher.forEach((J,index) => {

        TableElement += `<tr>
    
                 <td>${J.id}</td>
                <td>${J.firstName}</td>
                <td>${J.lastName}</td>
                <td> ${J.subject} </td>
                <td>
                    <a class="btn btn-primary mt-2" href="../page/edit-teacher.html?Id=${J.id}">
                     UPDATE
                    </a>
                    <a class="btn btn-danger mt-2" href="../page/delete-teacher.html?Id=${J.id}">
                    DELETE
                    </a>
                </td>
</tr>`
    })

    TeacherRowTable.innerHTML = TableElement


}