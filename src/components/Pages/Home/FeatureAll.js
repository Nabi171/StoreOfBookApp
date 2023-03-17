import React from 'react';
import { Link } from 'react-router-dom';

const FeatureAll = () => {
    return (
        <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>

            <div className="flex items-center space-x-4">
                <Link to='/'><button className="lws-filter-btn active-filter">All</button></Link>
                <Link to='/featureComponent'><button className="lws-filter-btn">Featured</button></Link>

            </div>
        </div>
    );
};

export default FeatureAll;