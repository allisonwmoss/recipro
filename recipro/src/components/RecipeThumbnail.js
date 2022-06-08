import React, { useState } from 'react'

export default function RecipeThumbnail(props) {
    const recipe = props.recipe
    const day = props.day
    return (
        <div>
            <h1>{day}</h1>
            <h2>{recipe.recipeName}</h2>
        </div>
    )
}