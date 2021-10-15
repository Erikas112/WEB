function getTrucks() {
    return fetch("http://rikas112-001-site1.btempurl.com/Trucks/list")
        .then(responce => responce.json())

}

function createTrucks(truck) {
    return fetch("https://localhost:44312/Trucks",
        {
            method: "POST",
            headers:{
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify(truck)
        }
    ).then(responce => {
        if(responce.ok){
          return responce.json()  
        }
        else{
            alert("yra bedu");
        }
    })
}