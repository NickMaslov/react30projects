import React from 'react';
import { Title } from './components/Title';

export const LikePhotoApp = () => {
    return (
        <div className='container'>
            <Title text={'Like Photo App'} />
            <Title classes='subtitle' text={'Likes'} />
        </div>
    );
};
