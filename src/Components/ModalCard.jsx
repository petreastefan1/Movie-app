
import Button from 'react-bootstrap/Button';
function ModalCard({movie,setInfo}) {


    console.log(movie)
    const baseImgUrl = "https://image.tmdb.org/t/p/original/";

    const handleReturn =()=>{

        setInfo(false)


    }

    return (

        <main className="transparent-background">

            <img className="modal-image" src={`${baseImgUrl}${movie.poster_path}`}/>
            <div className="test-container">
                <p className="modal-title">{movie.original_title}

                    <br/><br/><span className="modal-description">{movie.overview}</span>
                </p>
                <Button onClick={handleReturn} className="return-btn" variant="outline-info">Return</Button>{' '}
            </div>


        </main>


    )
}

export default ModalCard

