
export default function card(props){
    return (
        <div className="card" key={props.imdbID}>
            <img src={props.imgUrl} className="m-1" alt="" />
            <p onClick={()=>props.onclickMovie(props.imdbID)}>{props.title}</p>
            <div className="d-flex justify-content-between">
                <p>Rating: {props.year}</p>
                <p>Type: {props.Type}</p>
            </div>
        </div>
    )
}