import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useEffect, useState} from "react";
import {getRatedTvEpisodes} from "../Api"
import ImageCard from "./ImageCard";
import ModalCard from "./ModalCard";

function Main({movies, baseImgUrl,setBrowseMovies}) {

    const [posterNumber, setPosterNumber] = useState(0);
    const [tvShows, setTvShows] = useState([]);
    const [cardNumbers, setCardNumbers] = useState([0, 1, 2]);
    const [info, setInfo] = useState(false);
    const handleTVShows = () => {

        getRatedTvEpisodes().then(data => {
            return data.json();
        }).then(data => {

            setTvShows(data.results);
            console.log(data.results)
        })
    }

    useEffect(() => {
        handleTVShows();
    }, []);





    const handleArrowRight = () => {
        for (let i = 0; i < movies.length - 1; i++) {
            if (i == posterNumber && posterNumber != movies.length) {
                setPosterNumber(i + 1)

            }

        }

        if(cardNumbers[2]<movies.length-1){
            setCardNumbers(cardNumbers.map(cardNumber=>{
                return cardNumber+1
            }))
        }


    }

    const handleArrowLeft = () => {
        for (let i = 1; i < movies.length; i++) {
            if (i == posterNumber && posterNumber != 0) {
                setPosterNumber(i - 1)
            }

        }
        if(cardNumbers[0] !=0){
            setCardNumbers(cardNumbers.map(cardNumber=>{
                return cardNumber-1
            }))
        }


    }


    const handleModalCard = ()=>{
        setInfo(true)

    }


    const handleBrowseMovies = ()=>{

        setBrowseMovies(true)

    }
    return (
        <main>

            {movies.length > 0 && (
                <section className="movie-showcase">
                    <Container fluid>
                        <Row>
                            <Col className="trailer-container" xs={7}>
                                <button onClick={handleArrowLeft} className="arrow-left-btn">
                                    <i className="fa-solid fa-arrow-left"></i>
                                </button>

                                <img onClick={handleModalCard} className="trailer-img" src={`${baseImgUrl}/${movies[posterNumber].poster_path}`}/>

                                <button onClick={handleArrowRight} className="arrow-right-btn">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>

                            </Col>
                            <Col className="upnext-container" sm={4}>
                                <p className="upnext-paragraph">Up next</p>
                                <aside className="upnext-items">
                                    {
                                        tvShows.length > 0 && (
                                            <>
                                                <ImageCard tvShows={tvShows[cardNumbers[0]]} cardNumber={cardNumbers[0]}/>
                                                <ImageCard tvShows={tvShows[cardNumbers[1]]} cardNumber={cardNumbers[0]}/>
                                                <ImageCard tvShows={tvShows[cardNumbers[2]]} cardNumber={cardNumbers[0]}/>
                                            </>

                                        )
                                    }
                                    <p onClick={handleBrowseMovies} className="browse-trailers-text">Browse Movies ></p>
                                </aside>
                            </Col>
                        </Row>
                    </Container>

                    {
                        info == true && (
                            <>
                                <ModalCard movie={movies[posterNumber]} setInfo={setInfo}/>
                            </>)

                    }

                </section>


            )}


        </main>
    )


}

export default Main