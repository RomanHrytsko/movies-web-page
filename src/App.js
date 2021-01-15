import React from 'react'
import './App.css';
import {BaseLayout} from "./layouts";
import {Home} from "./pages";


function App() {

    return (

        <BaseLayout>
          <Home/>
        </BaseLayout>
    );
}

export default App;
