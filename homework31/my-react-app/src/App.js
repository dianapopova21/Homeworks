import React, {createElement} from "react";
import './App.css';
const Card = () => {
        return (
            <div className="card">
                <img
                    src="https://i.pinimg.com/564x/3c/ab/5a/3cab5aa4b330240685b8efc7bf8d45ba.jpg"
                    alt="cat-image"
                    className="card-img-top"
                />
                <div className="card-body">
                    <h5 className="card-title">Cat is swimming</h5>
                    <p className="card-text">It`s so cute!</p>
                    <a href="#" className="btn btn-dark">I like it</a>
                </div>
            </div>
        );
}
export default Card;