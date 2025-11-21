import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const cardData = [
    { 
        title: "Primera tarjeta", 
        description: "La vida no vivida es una enfermedad de la que se puede morir. Carl Gustav Jung",
        buttonUrl: "#card1",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/ETH-BIB-Jung%2C_Carl_Gustav_%281875-1961%29-Portrait-Portr_14163_%28cropped%29.tif/lossy-page1-973px-ETH-BIB-Jung%2C_Carl_Gustav_%281875-1961%29-Portrait-Portr_14163_%28cropped%29.tif.jpg",
        objectPosition: "center 35%"
    },
    { 
        title: "Segunda Tarjeta", 
        description: "He sido un hombre afortunado; nada en la vida me fue fácil. Sigmund Freud.",
        buttonUrl: "#card2",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Sigmund_freud_um_1905.jpg/250px-Sigmund_freud_um_1905.jpg",
        objectPosition: "center 30%"
    },
    { 
        title: "Tercera tarjeta", 
        description: "Si te detienes cada vez que un perro ladra, nunca llegarás al final de tu camino. Juan Carlos Paz.",
        buttonUrl: "#card3",
        buttonText: "Ver Detalles",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Juan_Carlos_Paz001.JPG",
        objectPosition: "center 30%"
    },
    { 
        title: "Cuarta tarjeta", 
        description: "Existen personas que se pasan el día hablando de sí mismas, criticando a las demás. Álex Rovira ",
        buttonUrl: "#card4",
        imageUrl: "https://conferenceplaneta.com/sites/default/files/styles/590x680/public/autor/2023-09/alex_rovira_conference_office.jpg?itok=tZc-GJTs",
        objectPosition: "center 10%"
    },
];

const Home = () => {
	return (
		<>
			<Navbar />
            <main className="pt-5">
                {/* Contenedor que alinea Jumbotron y las tarjetas */}
                <div className="container"> 
                    <Jumbotron />
                    <div className="row text-center">
                        {cardData.map((card, index) => (
                            <Card 
                                key={index}
                                title={card.title}
                                description={card.description}
                                buttonUrl={card.buttonUrl}
                                buttonText={card.buttonText}
                                imageUrl={card.imageUrl}
                                objectPosition={card.objectPosition}
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