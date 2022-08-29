import React from 'react';

import Footer from './components/Footer/Footer';

import Header from './components/Header/Header';

import Main from './components/main/Main';

const App = () => {
    return  (
        <React.Fragment>
            <Header />
            <Main />
            <Footer />
        </React.Fragment>
    )
}

export default App;