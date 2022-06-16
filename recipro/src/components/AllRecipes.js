import React, { useState, useEffect } from 'react'
import RecipeThumbnail from './RecipeThumbnail'
import { APIURL } from '../config'
import { Link } from 'react-router-dom'
import Header from './Header'
import RecipesContainer from './RecipesContainer'

export default function AllRecipes() {
    const [recipes, setRecipes] = useState([])
    const [error, setError] = useState(false)
    // const [searchString, setSearchString] = useState('')
    const url = `${APIURL}/recipes`
    console.log(url)
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setRecipes(data)
                console.log(recipes)
            })
            .catch(() => {
                setError(true)
            })
    }, [url])
    if (error) {
        return (
            <div className="alert alert-danger">Sorry, something went wrong. Please try again.</div>
        )
    }
    if (recipes.length === 0) {
        return (
            <div className="container">
                <h1>No recipes found</h1>
                <Link to="/recipes/create" className="my-5 btn btn-outline-light">create a new recipe</Link>
            </div>
        )
    }

    // if (searchString) {
    //     return (
    //         <SearchResult searchString={searchString} entries={entries} setSearchString={setSearchString} />
    //     )
    // }

    return (
        <div className="container">
            <RecipesContainer recipes={recipes} />



            {/* <Header recipes={recipes} />
            <h2 className="mb-3">all recipes</h2>
            <div className="container d-flex flex-wrap justify-content-center align-items-stretch">
                {recipes.map(recipe => (
                    <div key={recipe._id} className="d-flex justify-content-center">
                        <RecipeThumbnail recipe={recipe}></RecipeThumbnail>
                    </div>
                ))}
            </div> */}
        </div>
    )
}