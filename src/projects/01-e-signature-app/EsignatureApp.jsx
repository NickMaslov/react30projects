import React, { useState } from 'react';
import Title from './components/Title';

export default function EsignatureApp() {
    const [name, setName] = useState('Your signature');
    const [date, setDate] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const inputStyle = {
        border: 'none',
        borderBottom: '2px dotted',
        outline: 'none',
        padding: '.35rem 0',
    };
    document.body.style.background = '#eee';

    return (
        <div className='container text-center'>
            <Title text={name} classes={'title'} />
            <Title text={!date ? 'DoB' : date} classes={'subtitle mb-4'} />
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deserunt quia, nemo quam repudiandae molestiae dignissimos quod
                in tempore numquam voluptatibus? Similique sequi ea pariatur
                nisi natus? Inventore voluptate dolor error.
            </p>
            <footer
                className='d-flex'
                style={{
                    justifyContent: 'space-around',
                    position: 'relative',
                    top: '40vh',
                }}
            >
                <input
                    type='date'
                    onChange={handleDateChange}
                    value={''}
                    style={inputStyle}
                />
                <input
                    type='text'
                    value={name}
                    onChange={handleNameChange}
                    style={inputStyle}
                />
            </footer>
        </div>
    );
}
