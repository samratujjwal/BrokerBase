import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
    return (
        <div className=" text-center py-4">
            <p className=" mb-4">404</p>
            <h3 className=" mb-4">Couldn’t find that page</h3>
            <Link to="/">Go Zerodha's Home Page</Link>
        </div>
    );
}

export default NotFound;