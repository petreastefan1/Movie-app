import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useState} from "react";

function Main({movies,baseImgUrl}){

const [posterNumber,setPosterNumber]= useState(0)


const handleArrowRight = ()=>{
    for(let i =0;i<movies.length-1;i++){
        if(i==posterNumber && posterNumber != movies.length){
            setPosterNumber(i+1)
            console.log(posterNumber)
        }

    }
}

const handleArrowLeft = ()=>{
    for(let i =1;i<movies.length;i++){
        if(i==posterNumber && posterNumber != 0){
            setPosterNumber(i-1)
            console.log(posterNumber)
        }

    }

}
    return(
        <main>

            {movies.length > 0 && (
                <section className="movie-showcase">
                    <Container fluid>
                        <Row>
                            <Col className="trailer-container" xs={7}>
                                <button onClick={handleArrowLeft} className="arrow-left-btn">
                                    <i className="fa-solid fa-arrow-left"></i>
                                </button>

                                <img className="trailer-img" src={`${baseImgUrl}/${movies[posterNumber].poster_path}`}/>

                                <button onClick={handleArrowRight} className="arrow-right-btn">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>

                            </Col>
                            <Col className="upnext-container" sm={4}>
                                <p className="upnext-paragraph">Up next</p>
                                <div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

            )}


        </main>
        )


}

export default Main