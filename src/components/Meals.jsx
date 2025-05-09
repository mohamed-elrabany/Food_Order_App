import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig={};
export default function Meals(){
    const {
        data: loadedMeals,
        isLoading,
        error
        }= useHttp('http://localhost:3000/meals', requestConfig, []);

    if(isLoading){
        return <p className="center">Fetching meals...</p>
    }
    if(error){
        return <Error title="Failed to fetch meals" message={error} />
    }

    // if(!data){
    //     return <p>No meals found.</p>
    // }
    
    
    
    return(
        <div>
            <ul id="meals" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-[95%] p-8 mx-auto justify-center items-center">
                {loadedMeals.map((meal)=>{
                    return <MealItem key={meal.id} meal={meal} />
                })}
            </ul>
        </div>
        
    )
}