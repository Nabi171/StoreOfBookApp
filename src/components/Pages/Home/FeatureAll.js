import React from 'react';
import { Link } from 'react-router-dom';

const FeatureAll = () => {
    return (
        <div class="flex items-center justify-between mb-12">
            <h4 class="mt-2 text-xl font-bold">Book List</h4>

            <div class="flex items-center space-x-4">
                <Link to='/'><button class="lws-filter-btn active-filter">All</button></Link>
                <Link to='/featureComponent'><button class="lws-filter-btn">Featured</button></Link>

            </div>
        </div>
    );
};

export default FeatureAll;