import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from './components/CustomDropdown/sidebar/SideBar';
import Router from './configures/router';
import './theme/homeAdmin.css';
import TopNav from "./components/CustomDropdown/topnav/TopNav";

class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <Route render={(props) => (
                    <div className='layout'>
                        <Sidebar {...props}/>
                        <div className="layout__content">
                            <TopNav/>
                            <div className="layout__content-main">
                                <Router/>
                            </div>
                        </div>
                    </div>
                )}/>
            </BrowserRouter>
        );
    }
}

export default App;
