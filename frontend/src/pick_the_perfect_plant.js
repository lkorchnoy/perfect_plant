class PickThePerfectPlant{
    constructor(question_number, question) {
        this.question_number = question_number;
        this.question = question;
    }

    renderPickThePerfectPlant() {
        let plantsDiv = document.getElementById("plants-container")

        plantsDiv.innerHTML +=
        `
        <ul>
        <li>${this.question_number} - Question: ${this.question} </li>
        </ul>
        
        `
    }

}

    