import { useEffect, useState } from "react"
import useCategories from "../hooks/useCategories";
import { getDb } from "../utilities/fakedb";
const useCart = () => {
    const { categorys } = useCategories();
    const [foods, setFoods] = useState([]);
    const selectedFood = foodItem => {
        const exists = foods.find(food => food.strCategory ===foodItem.strCategory)
        let newCart = [];
        
        if (exists) {
            const rest = foods.filter(food => food.strCategory !== foodItem.strCategory)
            exists.quantity++;
            newCart = [...rest, exists]
            setFoods(newCart)
        }
        else {
            foodItem.quantity = 1;
            setFoods([foods, foodItem])
        }
    }
    console.log(foods);

const allFoodQuantity=foods.reduce((previus,current)=>
    previus+current.quantity,0
)
    useEffect(() => {
        if (categorys.length) {
            const cartObj = getDb();
            const storedCart = [];
            for (const key in cartObj) {
                const categori = categorys.find(category => category.strCategory === key)
                if (categori) {
                    categori.quantity = cartObj[key]
                    storedCart.push(categori)
                }
            }
            setFoods(storedCart)
        }
    }, [categorys]);
    console.log(foods);
    return {
        foods,
        selectedFood,
        allFoodQuantity
    }
}
export default useCart;