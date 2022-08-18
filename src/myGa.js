import ReactGA from 'react-ga';
import React from 'react';

const myGa = () => {
    const GA_ID = 'G-LNEK6TGS7T'; // your google analytics id
    ReactGA.initialize(GA_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
};

export default myGa;