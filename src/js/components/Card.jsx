import React from "react";

const Card = () => {
    //const { image, title, description } = props.Card;
    return (
        <div className="card" style={{ width: '18rem' }} >
            <img src="https://images.unsplash.com/photo-1742146656179-82df141c23e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
                className="image" alt="coche" />
            <div className="card-body">
                <h5 className="title">Card title</h5>
                <p className="description">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="text-center">
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
export default Card;