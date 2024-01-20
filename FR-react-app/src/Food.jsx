import "./assets/chicken.jpg"



function ListItem(props){
    return <li>{props.animal}</li>
}

function List(props){
    return (
        <ul>
            {props.animals.map((animal)=>{
                return <ListItem key= {animal} animal={animal}/>
            })}
        </ul>
    )
}

function Food(){
    const foodList = ["eggs", "bacon", "cheese", "bread"]
    const animals = ["Lion", "Cow", "Snake", "Lizard"];

    const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)

    // return <div>
   

    //  <h1>Foods:</h1>
    //  <ul>
    //     {foodList.map((food)=>{
    //         return <li key={food}>{food}</li>
    //     })
    //     }
    //  </ul>
    //  <h2>Animals</h2>
    //  <ul>
    //     {animalsList}
    //  </ul>
    //  {/* Using props to render the animals list  */}

    //  <List animals={animals}/>


    // </div>

}

export default Food;