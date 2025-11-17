import React from 'react';


const Card = (props) => {
    return (
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
                <img 
                    className="card-img-top" 
                    src="http://via.placeholder.com/500x325" 
                    alt="Card image cap" 
                />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className="card-footer">
                    <a href={props.buttonUrl} className="btn btn-primary">
                        {props.buttonText || "Encuentra más"}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;