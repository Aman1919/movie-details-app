import Card from "./card";

export default function allcards(props){
    return (
        <div className="allcards">
        {props.loading ? (
          <p>Loading....</p>
        ) : props.search?.length > 1 ? (
          props.search.map((e,i) => {
            return (
              <Card
              onclickMovie={props.onclickMovie}
              key={i}
                imdbID={e.imdbID}
                imgUrl={e.Poster}
                year={e.Year}
                Type={e.Type}
                title={e.Title}
              />
            );
          })
        ) : (
          <p>Search Your Movies</p>
        )}
      </div>

    )
}