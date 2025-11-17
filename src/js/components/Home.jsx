import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const cardData = [
    { 
        title: "Primera tarjeta", 
        description: "La vida no vivida es una enfermedad de la que se puede morir. Carl Gustav Jung",
        buttonUrl: "#card1"
    },
    { 
        title: "Segunda Tarjeta", 
        description: "He sido un hombre afortunado; nada en la vida me fue fácil. Sigmund Freud.",
        buttonUrl: "#card2"
    },
    { 
        title: "Tercera tarjeta", 
        description: "Si te detienes cada vez que un perro ladra, nunca llegarás al final de tu camino. Juan Carlos Paz.",
        buttonUrl: "#card3",
        buttonText: "Ver Detalles"
    },
    { 
        title: "Cuarta tarjeta", 
        description: "Existen personas que se pasan el día hablando de sí mismas, criticando a las demás. Álex Rovira ",
        buttonUrl: "#card4"
    },
];

const Home = () => {
	return (
		<>

			<Navbar />
            
            <main className="pt-5">

                <Jumbotron />

                <div className="container">
                    <div className="row text-center">
                        {cardData.map((card, index) => (
                            <Card 
                                key={index}
                                title={card.title}
                                description={card.description}
                                buttonUrl={card.buttonUrl}
                                buttonText={card.buttonText}
                            />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
		</>
	);
};

export default Home;