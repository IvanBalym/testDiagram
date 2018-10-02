import React from 'react';
import { Route } from 'react-router-dom'
import SiteDiagramContainer from '../SiteDiagram/SiteDiagram'
import MenuContainer from '../SiteDiagram/Menus/Menus'
// import About from '../about'

const App = () => (
    <div>
        {/*<header>*/}
            {/*<Link to="/">Home</Link>*/}
        {/*</header>*/}

        <main>
            <Route exact path="/" component={SiteDiagramContainer} />
        </main>
        <MenuContainer />
    </div>
);

export default (App);