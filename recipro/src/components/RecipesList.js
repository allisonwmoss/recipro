import React, { useState, useEffect } from 'react'

const recipes = [
    {
        recipeName: "Penne a la vodka",
        ingredients: ["shallot", "tomato paste", "heavy cream", "vodka", "parmesan cheese", "basil", "penne pasta"],
        prepMinutes: 30,
        difficultyLevel: 2,
        recipeTags: ["vegetarian", "pasta-based", "Italian"]
    },
    {
        recipeName: "Salmon with rice and green beans",
        ingredients: ["salmon", "rice", "green beans", "olive oil"],
        prepMinutes: 30,
        difficultyLevel: 2,
        recipeTags: ["fish", "protein", "healthy"]
    },
    {
        recipeName: "Instant Pot Mexican black bean quinoa",
        ingredients: ["quinoa", "black beans", "chipotle peppers", "onion", "canned tomatoes", "canned corn"],
        prepMinutes: 20,
        difficultyLevel: 2,
        recipeTags: ["vegetarian", "vegan", "Mexican", "grain bowl", "healthy", "Instant Pot"]
    },
    {
        recipeName: "Steak with strawberry salad",
        ingredients: ["steak", "spring greens", "strawberries", "olive oil", "bleu cheese", "candied pecans", "balsamic vinegar", "red wine vinegar"],
        prepMinutes: 30,
        difficultyLevel: 2,
        recipeTags: ["beef", "protein", "healthy"]
    },
    {
        recipeName: "Tofu stir fry",
        ingredients: ["tofu", "broccoli", "zucchini", "onion", "bell pepper", "soy sauce", "brown sugar"],
        prepMinutes: 30,
        difficultyLevel: 3,
        recipeTags: ["vegetarian", "vegan", "healthy"]
    },
    {
        recipeName: "Instant Pot mushroom spinach risotto",
        ingredients: ["mushrooms", "spinach", "shallot", "risotto rice", "olive oil", "parmesan cheese", "white wine", "chicken stock", "lemon"],
        prepMinutes: 30,
        difficultyLevel: 2,
        recipeTags: ["vegetarian", "grain bowl", "Instant Pot"]
    },
    {
        recipeName: "test 1",
        ingredients: ["mushrooms", "spinach", "shallot", "risotto rice", "olive oil", "parmesan cheese", "white wine", "chicken stock", "lemon"],
        prepMinutes: 30,
        difficultyLevel: 2,
        recipeTags: ["vegetarian", "grain bowl", "Instant Pot"]
    },
    {
        recipeName: "test 2",
        ingredients: ["mushrooms", "spinach", "shallot", "risotto rice", "olive oil", "parmesan cheese", "white wine", "chicken stock", "lemon"],
        prepMinutes: 30,
        difficultyLevel: 2,
        recipeTags: ["vegetarian", "grain bowl", "Instant Pot"]
    },
]

// const diceRoll = (recipes, newRecipesList) => {
//     for (let i = 0; i < 7; i++) {
//         let recipeToPush = diceRoll(recipes)
//         if (newRecipesList.includes(recipeToPush)) {
//             diceRoll(recipes)
//         } else {
//             newRecipesList.push(recipeToPush)
//         }
//     }
//     let randomInd = Math.ceil(Math.random() * recipes.length - 1)
//     let randRecipe = recipes[randomInd]
//     return randRecipe
// }

const randomizer = (recipes, randArr, j) => {
    console.log(`------running randomizer attempt ${j}-------`)
    let randInd = Math.floor(Math.random() * recipes.length)
    console.log(`attempt ${j}, randInd is ${randInd}`)
    let newRecipe = recipes[randInd]

    if (!randArr.includes(newRecipe)) {
        // console.log(`randArr does not include ${newRecipe.recipeName}, adding to randArr`)
        randArr.push(newRecipe)
    } else {
        // console.log(`${newRecipe.recipeName} is a duplicate, running again`)
        randomizer(recipes, randArr, j + 1)
    }
    // randArr.push(randInd)
}


export default function RecipesList(props) {
    useEffect(() => {
        let randArr = []
        for (let i = 0; i < recipes.length - 1; i++) {
            randomizer(recipes, randArr, i)
        }
        console.log(`done`)
        console.log(randArr)
        // let newRecipesList = []
        // diceRoll(recipes, newRecipesList)
        // console.log(newRecipesList)
    })
}


//what do I need to do?
//I need an empty array to hold my randomly chosen recipes
//and I need a loop that executes 7 times 
//then I need a function that rolls a die and returns a number
//and then chooses the recipe from the recipe database that is located at that index in the array
//and runs a check to determine if that recipe already exists in the newRecipesList 
    //if that recipe already exists in the new recipes list, it should NOT be added and the die should be rolled again
    //if the recipe does not already exist in the new recipes list, it should be pushed to the array