import React from 'react';
import { About, Awards, Experience, Education, Home, Work } from '../screens/';

const routes = {
    "/": () => <Home />,
    "/about": () => <About />,
    "/awards": () => <Awards />,
    "/experience": () => <Experience />,
    "/education": () => <Education />,
    "/work": () => <Work />,
}

export default routes;