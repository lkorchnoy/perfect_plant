class PickThePerfectPlant{
    constructor(question_number, question, user_id) {
        this.question_number = question_number;
        this.question = question;
        this.user_id = user_id;
    }
    
     renderPickThePerfectPlant() {
         let plantsDiv = document.getElementById("plants-container")
         let name = document.getElementById("name").value;
         plantsDiv.innerHTML +=
         `
         <ul>
         <li>Question Number: ${this.question_number} | Question: ${this.question} | Name: ${name}</li>
         </ul>
        
         `
     }

}

    