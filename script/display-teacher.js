import * as TeacherService from '../service/teacher-service.js'

window.addEventListener("DOMContentLoaded", () => {

    TeacherService.getAllTeacher().then((response) => {

        const teacher = response.data;

        displayTeacher(teacher);

    }).catch((error) => {

        console.log(error);
    })


})

const displayTeacher = (teacher) => {

    const TeacherRowElement = document.querySelector("#std-row");

    let TeacherCards = "";

    for (let R of teacher) {

    TeacherCards +=
  `<div class="col-sm-3">
        <div class="card shadow-lg">
            
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">
                    ID : <span class="fw-bold">${R.id}</span>
                    </li>
                    <li class="list-group-item">
                    First Name: <span class="fw-bold">${R.firstName}</span>
                    </li>
                    <li class="list-group-item">
                    Last Name : <span class="fw-bold">${R.lastName}</span>
                    </li>
                    <li class="list-group-item">
                    Subject: <span class="fw-bold">${R.subject}</span>
                    </li>
                </ul>
            </div>
        </div>
        </div>`
    }

    TeacherRowElement.innerHTML = TeacherCards

}

