import React from 'react';

const NotFound = () => {
    return (
        <div>
          
            <h1 className="text-center mt-4">Page not found</h1>
            <div className="text-center">
            <img src="/images/404.png" style={{
                width:'500px',
                height:'500px'
            }} alt="" />
            </div>
        </div>
    );
};

export default NotFound;