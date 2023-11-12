

function ImageCard({tvShows}){



    const baseImgUrl = "https://image.tmdb.org/t/p/original/";

    return (
        <>
            <div className="trailer-card">
                <img className="test"  src={`${baseImgUrl}/${tvShows.backdrop_path}`}/>
                <p className="movie-description">{tvShows.original_title}</p>
            </div>

        </>

    )

}

export default ImageCard