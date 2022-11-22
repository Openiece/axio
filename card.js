import React from "react";
import { useNavigate } from 'react-router-dom'

export const Card = ({ text, image, tags, firstName, id }) => {
    const navigation = useNavigate();

    const onClickCard = () => {
        navigation(`/post/${id}`)
    }
    return (
        <div className="cardContainer" onClick={onClickCard}>
            <img className="cardImage" src={image} alt={text} />
            <div>{tags}</div>
            <div>{text}</div>
            <h1>{firstName}</h1>
        </div>
    )
}