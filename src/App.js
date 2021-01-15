import React, {useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import {movieService} from "./services";

const PageLayout = ({children}) => {
    return (
        <div className={'main-wrapper'}>
            <header>Header data</header>
                <main>
                    {children}
                </main>
            <footer>Footer data</footer>

        </div>
    )
}


function App() {
    useEffect(() => {
        movieService.getMovies().then(console.log)
    }, [])
    return (

        <PageLayout>
            <div>hello</div>
        </PageLayout>
    );
}

export default App;
