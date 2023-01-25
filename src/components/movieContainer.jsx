

export default function movieContanier({selectedMovie,back}){
    return (
        <div className=" movieContanier d-flex ">
            <div className="" >
           <button className="btn btn-dark " onClick={back}>Back</button>
                <img className="card m-3" src={selectedMovie.Poster} alt="" />
            </div>
            <div className="description ">
<h2 className="h2">Movie : {selectedMovie.Title}</h2>
 <p className="lead">Released : {selectedMovie.Released}</p>
 <p className="lead">Year : {selectedMovie.Rated}</p>
 <p className="lead">Duration : {selectedMovie.Runtime}</p>
<p className="lead">Type : {selectedMovie.Type}</p>
<p className="lead">Actors : {selectedMovie.Language}</p>
<p className="lead">Description : {selectedMovie.Plot}</p>
            </div>
           
        </div>
    )
}