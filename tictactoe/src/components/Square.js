import React from 'react'

//pole na planszy
function Square(props) {
        return (
            //wyświetla przekazaną wartość
            <button
                className='square'
                onClick={props.onClick}
            >
                {props.value}
            </button>
        );
}


export default Square