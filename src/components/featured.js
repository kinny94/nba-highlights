import React from 'react';
import Slider from 'react-slick';

const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

const style = { color: 'red' }

const generateSlides = ({ slides }) => {
    if( slides ){
        return(
            <Slider { ...settings }>
                { 
                    slides.map(( item ) => {
                        return(
                            <div key={ item.id } style={ style } className="item-slider" >
                                <div className="caption">
                                    <h4>{ item.topic }</h4>
                                    <p>{ item.title }</p>
                                </div>
                            </div>
                        )
                    }) 
                }
            </Slider>
        )
    }
}

const Featured = ( props ) => {
    console.log( props );
    return(
        <div>
            { generateSlides( props ) }
        </div>
    )
}

export default Featured;