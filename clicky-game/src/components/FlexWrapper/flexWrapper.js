import React from 'react';
import './style.css'

function FlexWrapper(props) {
    return (
        <section className='flex-full'>{props.children}</section>
    );
}

export default FlexWrapper;