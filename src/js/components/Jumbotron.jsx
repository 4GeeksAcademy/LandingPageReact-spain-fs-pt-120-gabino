import React from 'react';

const Jumbotron = () => {
    return (
        <header className="py-5">
            {/* Elimino el div con className="container px-lg-5" que causaba el descuadre. */}
            <div className="p-4 p-lg-5 bg-light rounded-3 text-center"> 
                <div className="m-4 m-lg-5">
                    <h1 className="display-5 fw-bold">Un Jumbotron introductorio</h1>
                    <p className="fs-4">
                        Agradece y disfrutas de las pequeñas cosas, porque un día mirarás atrás y te
                        darás cuenta de que eran las grandes. "Kurt Vonnegut".
                    </p>
                    <a className="btn btn-primary btn-lg" href="#!">
                        Adelante
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Jumbotron;