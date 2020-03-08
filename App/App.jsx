import React, { useEffect, useState } from 'react';
import Header from './Header.jsx';
import Card from './Card.jsx';
import TinyCard from './TinyCard.jsx';
import DetailsCard from './DetailsCard.jsx';
import Store from './Store';

export const views = ['TopOnly', 'All', 'Details'];

const App = () => {
    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [loader, setLoader] = useState(0);
    const [errorState, setErrorState] = useState(0);

    const [dataByYear, setDataByYear] = useState({});

    const [viewId, setViewId] = useState(0);

    const [countries, setCountries] = useState([]);

    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    useEffect(() => {
        (async function fetchData() {
            try {
                setLoader(l => l + 1 );
                const response1 = await Store.getDataByYear();
                setDataByYear(response1);
                const response2 = await Store.getData();
                setList(response2);
                setFilteredList(response2);
                let response3 = await Store.getCountriesList();
                response3 = [...response3];
                response3.unshift('All');
                setCountries(response3);
            } catch(ex) {
                setErrorState(1);
            } finally {
                setLoader(l => l - 1);
            }
        })(); 
    },[]);

    const filterByCountry = (country) => {
        if (country === 'All') {
            setFilteredList([...list]);
            return;
        }
        setFilteredList(
            list.filter(item => item.Country === country)
        );
    };

    function isMatch(string, matchString) {
        if (string.toLowerCase().indexOf(matchString) !== -1) {
            console.log(true);
            return true;
        }
        return false;
    }

    const doSearch = (searchTerm) => {
        setViewId(2);
        const matched = list.filter(item => isMatch(item['Brand'], searchTerm.toLowerCase()));
        if (matched.length > 0) {
            setSelectedRestaurant(matched[0]);
        }
    };

    return (
        <>
        { loader > 0 && (
            <div className='h-100 w-100 loader'>
                <i className='fa fa-spinner loader-icon' aria-hidden='true'></i>
            </div>)
        }
        <Header setViewId={setViewId} doSearch={doSearch} />
        <section className='container' style={{ marginTop: '70px' }}>
            {views[viewId] === 'TopOnly'
            && (
                Object.keys(dataByYear)
                .map(year => (
                    <div key={year} className='row year-badge'>
                        <h1 className='col-sm-12 badge badge-dark'>{year}</h1>
                        {
                            dataByYear[year].map(card => (
                                <div className='col-sm-12 col-md-6 col-lg-4' key={card.uid} style={{ marginBottom: '10px' }}>
                                    <TinyCard card={card} />
                                </div>)
                            )
                        }
                    </div>
                ))
            )}
            <div className='row' id='countries'>
                <div className='col-sm-6 col-md-3 dropdown-container'>
                    {views[viewId] === 'All'
                    && (
                        <>
                        <div className='filter-by'><i>Filter By: </i></div>
                        <div className="dropdown">
                            <a className="btn btn-secondary dropdown-toggle w-100" href="#" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Countries
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                {
                                    countries.map(country => (
                                        <a className="dropdown-item" key={country}
                                            onClick={() => { filterByCountry(country) }}>{country}</a>
                                    ))
                                }
                            </div>
                        </div>
                        </>
                    )}
                </div>
            </div>
            <div className='row'>
                {views[viewId] === 'All'
                && (filteredList.map(card => (
                        <div className='col-sm-12 col-md-6 col-lg-4' key={card.uid} style={{ marginBottom: '10px' }}>
                            <Card card={card} />
                        </div>
                    ))
                )}
            </div>
            <div className='row'>
                {views[viewId] === 'Details'
                && (<>
                    { selectedRestaurant === null && <p>No matching restaurant found</p> }
                    { selectedRestaurant !== null && <DetailsCard card={selectedRestaurant} />}
                    </>
                )}
            </div>
        </section>
        </>
    );
};

export default App;
