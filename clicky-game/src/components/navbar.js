import React from 'react';

function NavBar(props) {
    return (
        <header className='App-header'>
            <h1>Clicky Game</h1>
            <h2 className='currentscore'>{props.score} : current-score</h2>
            <h2 className='hiscore'>{props.hiscore} : hi-score</h2>
        </header>
    );
}

export default NavBar;