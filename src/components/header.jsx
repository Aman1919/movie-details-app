import { useState } from "react";



export default  function header(props) {
  return(
  <header className="d-flex justify-content-between">
  <p>Movie App </p>
  <input
    type="text"
    onChange={props.inpt}
    className="form-control"
    placeholder="Search your Movie"
  />
</header>
  )

  }
