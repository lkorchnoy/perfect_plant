class User {
    constructor(id, name, username, email) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
    }

    renderUser() {
        let usersDiv = document.getElementById("users-container")
    
        usersDiv.innerHTML +=
        `
        <ul>
        <h3>Name: ${this.name}</h3>
        <li>Username: ${this.username} - Email: ${this.email} </li>
        </ul>
        <button class="delete-bttn" data-id=${this.id} onclick="deleteUser()">Delete User</button>


        `
    
    }
}