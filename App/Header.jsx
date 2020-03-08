import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Header = ({ setViewId, doSearch }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleNavClick = (index) => {
        setViewId(index);
        setActiveIndex(index);
    };

    const performSearch = () => {
        setActiveIndex(-1);
        doSearch(searchTerm);
    };

    return (<header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">Top Ramen</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className={`nav-item ${activeIndex === 0 ? 'active' : ''}`}>
                        <a className="nav-link" onClick={() => { handleNavClick(0) }}>Top Restaurants</a>
                    </li>
                    <li className={`nav-item ${activeIndex === 1 ? 'active' : ''}`}>
                        <a className="nav-link" onClick={() => { handleNavClick(1) }}>All Restaurants</a>
                    </li>
                </ul>
                <form className="form-inline mt-2 mt-md-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search by Brand Name" aria-label="Search"
                        onChange={handleChange} />
                    <button type='button' className='btn btn-outline' onClick={performSearch}>Search</button>
                </form>
            </div>
        </nav>
    </header>);
};

Header.propTypes = {
    setViewId: PropTypes.func.isRequired,
    doSearch: PropTypes.func.isRequired,
};

export default Header;
