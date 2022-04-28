import React from 'react';
import SideMenuWithChats from "./view/sideMenuWithChats/SideMenuWithChats";
import MainChat from "./view/mainChat/MainChat";

function App() {
    return (
        <div className="container">
            <SideMenuWithChats/>
            <MainChat/>
        </div>
    );
}

export default App;
