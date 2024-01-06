import React from 'react';
import { Title } from './components/Title';

export const RandomizeColor = () => {
    const handlClick = (e) => {
        let body = document.querySelector('body');
        body.style.background = getRandomColor();
        e.target.style.background = getRandomColor();
    };

    const getRandomColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <div className='container'>
            <Title text={'Randomize Color'} classes={'mb-4'} />
            <button className='btn btn-danger' onClick={handlClick}>
                Click me
            </button>
            <button className='btn btn-success' onClick={handlClick}>
                Click me
            </button>
            <button className='btn btn-primary' onClick={handlClick}>
                Click me
            </button>
            <button className='btn btn-warning' onClick={handlClick}>
                Click me
            </button>
        </div>
    );
};
