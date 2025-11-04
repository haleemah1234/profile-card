const url = "https://dummyjson.com/users";
const fetchData = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
}

let allUsers = document.getElementById("allUsers");
fetch(url, fetchData)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let users= data.users;
    console.log(users);

    allUsers.innerHTML = users.map(function(value, index, array){
      return `
            <div class="eachUsers">
                <img src="${value.image}" alt="">
                <h1>${value.firstName}</h1>
                <h2>${value.lastName}</h2>
                <p>${value.email}</p>
                <h4>${value.gender}</h4>

             </div>
        `
    }).join('')

})

.catch(function(error){
    alert("Error fetching product")
    console.log(error);
    
})
