  // function fetchPlants() {

//         fetch(`${BASE_URL}/pick_the_perfect_plants`)
        
//          .then((resp) => resp.json())
//          .then((pick_the_perfect_plants) => {
            
//          for(const pick_the_perfect_plant in pick_the_perfect_plants) {
             
//              let p = new PickThePerfectPlant(pick_the_perfect_plant.id, pick_the_perfect_plant.question_number, pick_the_perfect_plant.question);
//              p.renderPickThePerfectPlant();
//         }
//          });
         
//  }

`
qDiv.innerHTML += 

<li>Name: ${response.name} - Question: ${response.pick_the_perfect_plants[0].question}</li> 
  
`
<strong>Well done!</strong> You successfully completed this test!

 `
qDiv.innerHTML += 
<li>Name: ${response.name} - Question: ${response.pick_the_perfect_plants[0].question}</li>
  
`