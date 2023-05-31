//react import
import React from 'react';

//scss import
import '../scss/regular-arrow.scss';

//create function
function Arrow(props) {
    const {color} = props;
    //return the html
    if( color == 'red'){
        return (
            <div className='red-arrow' onClick={props.onClick}>
            </div>
        );
    } else if (color == 'black'){
        return (
            <div className='black-arrow' onClick={props.onClick}>
            </div>
        );
    }
}

//export function
export default Arrow;