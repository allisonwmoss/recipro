import React, { useState, useEffect } from 'react'
import RecipeThumbnail from './RecipeThumbnail'
import { CardGroup } from 'reactstrap'

// const recipes = [
//     {
//         recipeName: "Penne a la vodka",
//         ingredients: ["shallot", "tomato paste", "heavy cream", "vodka", "parmesan cheese", "basil", "penne pasta"],
//         prepMinutes: 30,
//         difficultyLevel: 2,
//         recipeTags: ["vegetarian", "pasta-based", "Italian"]
//     },
//     {
//         recipeName: "Salmon with rice and green beans",
//         ingredients: ["salmon", "rice", "green beans", "olive oil"],
//         prepMinutes: 30,
//         difficultyLevel: 2,
//         recipeTags: ["fish", "protein", "healthy"]
//     },
//     {
//         recipeName: "Instant Pot Mexican black bean quinoa",
//         ingredients: ["quinoa", "black beans", "chipotle peppers", "onion", "canned tomatoes", "canned corn"],
//         prepMinutes: 20,
//         difficultyLevel: 2,
//         recipeTags: ["vegetarian", "vegan", "Mexican", "grain bowl", "healthy", "Instant Pot"]
//     },
//     {
//         recipeName: "Steak with strawberry salad",
//         ingredients: ["steak", "spring greens", "strawberries", "olive oil", "bleu cheese", "candied pecans", "balsamic vinegar", "red wine vinegar"],
//         prepMinutes: 30,
//         difficultyLevel: 2,
//         recipeTags: ["beef", "protein", "healthy"]
//     },
//     {
//         recipeName: "Tofu stir fry",
//         ingredients: ["tofu", "broccoli", "zucchini", "onion", "bell pepper", "soy sauce", "brown sugar"],
//         prepMinutes: 30,
//         difficultyLevel: 3,
//         recipeTags: ["vegetarian", "vegan", "healthy"]
//     },
//     {
//         recipeName: "Instant Pot mushroom spinach risotto",
//         ingredients: ["mushrooms", "spinach", "shallot", "risotto rice", "olive oil", "parmesan cheese", "white wine", "chicken stock", "lemon"],
//         prepMinutes: 30,
//         difficultyLevel: 2,
//         recipeTags: ["vegetarian", "grain bowl", "Instant Pot"]
//     },
//     {
//         recipeName: "test 1",
//         ingredients: ["mushrooms", "spinach", "shallot", "risotto rice", "olive oil", "parmesan cheese", "white wine", "chicken stock", "lemon"],
//         prepMinutes: 30,
//         difficultyLevel: 2,
//         recipeTags: ["vegetarian", "grain bowl", "Instant Pot"]
//     },
//     {
//         recipeName: "test 2",
//         ingredients: ["mushrooms", "spinach", "shallot", "risotto rice", "olive oil", "parmesan cheese", "white wine", "chicken stock", "lemon"],
//         prepMinutes: 30,
//         difficultyLevel: 2,
//         recipeTags: ["vegetarian", "grain bowl", "Instant Pot"]
//     },
// ]

// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

// const randomizer = (recipes, randArr, j) => {
//     let randInd = Math.floor(Math.random() * recipes.length)
//     let newRecipe = recipes[randInd]
//     if (!randArr.includes(newRecipe)) {
//         randArr.push(newRecipe)
//     } else {
//         randomizer(recipes, randArr, j + 1)
//     }
// }

export default function RecipesContainer(props) {
    const recipes = props.recipes
    console.log(recipes)
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let randArr = []
    const randomizer = (recipes, randArr, j) => {
        let randInd = Math.floor(Math.random() * recipes.length)
        let newRecipe = recipes[randInd]
        if (!randArr.includes(newRecipe)) {
            randArr.push(newRecipe)
        } else {
            randomizer(recipes, randArr, j + 1)
        }
    }

    const [genRecipes, setGenRecipes] = useState([])
    useEffect(() => {
        let randArr = []
        for (let i = 0; i < recipes.length - 1; i++) {
            randomizer(recipes, randArr, i)
        }
        // console.log(randArr)
        setGenRecipes(randArr)
    }, [])

    return (
        <div className="container">
            <CardGroup>
                {
                    genRecipes.map((recipe, idx) => {
                        return (
                            <RecipeThumbnail recipe={recipe} key={idx} day={days[idx]} />
                        )
                    })
                }
            </CardGroup>
        </div>
    )
}

