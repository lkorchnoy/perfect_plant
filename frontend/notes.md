  <!-- let question_number = document.getElementsByTagName("value");
    //debugger;
    let question = document.getElementsByTagName("input").value;
    let user_id = document.getElementsByName("user_id");

    let plant = {
        question_number: question_number,
        question: question,
        user_id: user_id,
    };

    fetch(`${BASE_URL}/pick_the_perfect_plants`, {
        
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(plant),
      })
        .then((resp) => resp.json())
        .then((plant) => {
          let p = new PickThePerfectPlant(plant.id, plant.question_number, plant.question, user_id);
          p.renderPickThePerfectPlant();
         });
     }  -->

      <!-- const plantInput = plantsForm.querySelector("#value")
    
    Array.from(event.target.parentElement.children).map(element => {
        const inputValue = event.target.parentElement.children.value 
        
        Array.from(element.lastElementChild.firstElementChild.children).map(input => {

       let buttons = document.querySelectorAll("[name=question]");
  let submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", plantFormSubmission);
  
  
  for (let button of Array.from(buttons)) {
    button.addEventListener("click", plantFormSubmission);
  }     -->

  //    fetch(`${BASE_URL}/pick_the_perfect_plants`, {
    
//                     
 //     method: "GET",
                //     headers: {
                //        "Accept": "application/json",
                //       "Content-Type": "application/json"
                      
                //     },
                //     body: JSON.stringify(pick_the_perfect_plant)

                     .then(resp => resp.json())
//                     .then(pick_the_perfect_plant => {

    //let p = new PickThePerfectPlant(plant.id, plant.question_number, plant.question, user_id);
                      //p.renderPickThePerfectPlant();

                //   })
                    
                     //const plantsContainer = document.querySelector("#plants-container")
                     
                     //pick_the_perfect_plants.data.forEach(function(pick_the_perfect_plant) {
                         //const newPickThePerfectPlantEl = document.createElement('p')
                         //newPickThePerfectPlantEl.innerText = pick_the_perfect_plant.attributes.question
                         //plantsContainer.appendChild(newPickThePerfectPlantEl)
                     //})
                    
                     

                      
                         
                     
                   
        //})

  //})


//<li>${pick_the_perfect_plant.question_number} - Question: ${pick_the_perfect_plant.question} </li>
                //</ul>`
                        