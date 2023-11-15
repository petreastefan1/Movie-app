import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MovieCard({imageSource}) {


    const baseImgUrl = "https://image.tmdb.org/t/p/original/";

    return (

        <main className="second-page-container">


        <Container className="movie-cards-container" fluid="sm">
            <Row>
                <Col>
                    <div className="movie-card-container">
                        <img className="movie-card-img" src={`${baseImgUrl}/${imageSource.poster_path}`}/>
                        <p className="movie-description description-wrap">{imageSource.original_title}</p>
                    </div>

                </Col>
            </Row>
        </Container>
        </main>
    )
}


export default MovieCard