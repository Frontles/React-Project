import React from "react";

import serialize from "form-serialize";
import { Link, } from "react-router-dom";
class AddMovie extends React.Component {

  handleFormSubmit = (event) => {
    event.preventDefault();
    const newMovie = serialize(event.target, { hash: true })
    this.props.onFilmEkle(newMovie)
  }

  render() {

    return (
      <>
        <div className="container">


          <form className="mt-5" onSubmit={this.handleFormSubmit}>
            <Link to="/" className="btn btn-warning col-lg-2 btn-md mb-5" style={{ float: 'right' }} > Ana Sayfa</Link>

            <input className="form-control" id="disabledInput" type="text" placeholder="Fill the form add movie" disabled />



            <div className="row  mt-2 mb-2">
              <div className="form-group col-md-10">
                <label htmlFor="inputName">Name</label>
                <input type="text" className="form-control" name="name" />
              </div>


              <div className="form-group col-md-2">
                <label htmlFor="inputRating">Rating</label>
                <input type="text" className="form-control" name="rating" />
              </div>
            </div>
            <div className="form row mt-2 mb-2">
              <div className="form-group col-md-12">
                <label htmlFor="inputImage">Image URL</label>
                <input type="text" className="form-control" name="imageURL" />
              </div>
            </div>
            <div className="form row mt-2 mb-2">
              <div className="form-group col-md-12">
                <label htmlFor="overviewTextarea">Overview</label>
                <textarea type="text" className="form-control" name="overview" rows={5} />
              </div>

            </div>
            <input type="submit" className="btn btn-success btn-block" value="Add Movie" />

          </form >
        </div >
      </>

    );
  }
}

export default AddMovie;
