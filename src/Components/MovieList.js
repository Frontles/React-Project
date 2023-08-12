import React from "react";

const MovieList = (props) => {
  return (
    <>
      <div className='row'>
        {props.movies.map((movie, index) => (
          <div className='col-lg-4' key={index}>
            <div className='card mb-4 shadow-sm'>
              <img
                src={movie.imageURL}
                className='img-fluid card-img-top object-fit-contain'
                alt='Sample Movie'
              />
              <div className='card-body'>
                <h5 className='card-title'> {movie.name}</h5>
                <p className='card-text'>{movie.overview}</p>
                <div className=' d-flex justify-content-between align-items-center'>
                  <button
                    onClick={(event) => props.deleteMovieProp(movie)}
                    type='button'
                    className='btn btn-outline-danger btn-md '
                  >
                    Sil
                  </button>
                  <h2>
                    <span
                      className='badge badge-info'
                      style={{ backgroundColor: "#3456dd" }}
                    >
                      {movie.rating}
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;
