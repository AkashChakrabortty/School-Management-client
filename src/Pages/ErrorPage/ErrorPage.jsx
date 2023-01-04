import React from 'react';
import error from './80698-404-error.gif';
const ErrorPage = () => {
    return <div className='flex justify-center'>
        <img src={error} alt="404-error" />
    </div>;
};

export default ErrorPage;