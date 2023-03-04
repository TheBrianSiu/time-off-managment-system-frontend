export async function getAllrecords(){
    const reponse = await fetch(`https://localhost:44327/Submit/get/records`);
     const list = await reponse.json();
     return list;
}

export async function getAllemployee(){
    const reponse = await fetch(`https://localhost:44327/Submit/get/employee`);
     const list = await reponse.json();
     return list;
}

export async function createUser(data){
    const reponse = await fetch(`/api/user`,{
        method: 'POST',
        header: {'content-Type': 'application/json'},
        body: JSON.stringify(data)
    })

    return await reponse.json();
}

// Form.js has a input value api 

// Emp.js has a input value api 
