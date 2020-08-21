class PickThePerfectPlant{
    constructor(question_number, question, user_id) {
        this.question_number = question_number;
        this.question = question;
        this.user_id = user_id;
    }
    debugger;
     renderPickThePerfectPlant() {
         let plantsDiv = document.getElementById("plants-container")

         plantsDiv.innerHTML +=
         `
         <ul>
         <li>Question Number: ${this.question_number} | Question: ${this.question} | Name: ${this.user_id}</li>
         </ul>
        
         `
     }

}

    