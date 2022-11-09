import React from 'react'
interface Props {
    
}

const Carousel = (props: Props) => {
    return (
        <div id="carouselEjemplo" className="carousel slide my-5 p-5 bg-secondary bg-opacity-75 mx-5 rounded" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselEjemplo" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselEjemplo" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselEjemplo" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://picsum.photos/2000/800" className="img-fluid" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://picsum.photos/2001/800" className="img-fluid" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://picsum.photos/2002/800" className="img-fluid" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselEjemplo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselEjemplo" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;
