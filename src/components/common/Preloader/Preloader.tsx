import React from 'react';
import preloader from '../../../assets/images/preloader.webp';

const Preloader = () => {
    return (
        <div>
            <img src={preloader} style={{width: '250px', height: '250px'}}/>
        </div>
    );
};

export default Preloader;