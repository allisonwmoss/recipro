import React, { useState } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

export default function RecipeThumbnail(props) {
    const recipe = props.recipe
    const day = props.day
    return (
        <Card>
            <CardBody>
                <CardTitle tag="h4">{day}</CardTitle>
                <CardSubtitle tag="h6">{recipe.recipeName}</CardSubtitle>
            </CardBody>
        </Card>
        // <div>
        //     <h1>{day}</h1>
        //     <h2>{recipe.recipeName}</h2>
        // </div>
    )
}