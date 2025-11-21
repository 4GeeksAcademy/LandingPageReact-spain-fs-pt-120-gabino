import React from 'react';

const Card = (props) => {
    return (
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
                <img 
                    className="card-img-top" 
                    src={props.imageUrl} 
                    alt={`Imagen de ${props.title}`} 
                    // AñadoeEstilos para tamaño fijo, escalado (cover) y encuadre (objectPosition)
                    // Se que es un poco chapucero, sin embargo puede servir....
                    style={{ 
                        height: '400px', // Altura fija para que todas las imágenes sean iguales
                        objectFit: 'cover', // La imagen cubre el contenedor sin deformarse
                        objectPosition: props.objectPosition || 'center top' // Uso la posición específica para enfocar el rostro, con 'center top' para respaldar
                    }}
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