export const serviceUrl="http://3.110.193.86:4444/"

// get all employee

export const getAllTeacher=()=>{

    const data=`${serviceUrl}teacher/getall/`
    
    return axios.get(data);
}

// get one data

export const getOneTeacher=(id)=>{

    const data=`${serviceUrl}teacher/id/${id}`

    return axios.get(data);
}

// create 

export const CreateTeacher=(body)=>{

    const data=`${serviceUrl}teacher/save`

    return axios.post(data,body);

}

// update

export const UpdateTeacher=(student)=>{

    const data=`${serviceUrl}teacher/update`

    return axios.put(data,student);
}

// delete

export const DeleteTeacher=(id)=>{

const data=`${serviceUrl}teacher/delete/${id}`

return axios.delete(data);
}
