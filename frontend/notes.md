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