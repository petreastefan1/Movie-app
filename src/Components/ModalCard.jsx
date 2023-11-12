


function ModalCard({movie}){

console.log(movie)
    const baseImgUrl = "https://image.tmdb.org/t/p/original/";
    return(

        <main className="transparent-background">

            <img className="modal-image" src={`${baseImgUrl}${movie.poster_path}`}/>
            <p className="modal-title">{movie.original_title}</p>
            <p className="modal-description"></p>
        </main>





    )
}

export default ModalCard

