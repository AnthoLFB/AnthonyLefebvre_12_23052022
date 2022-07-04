//React
import React from 'react';

//Components
import Header from "../../components/Header";

/**
 * React component that displays the content of the page Error.
 * @returns {HTMLElement} return the content of the page.
 */
function Error()
{
    return (
        <React.Fragment>
            <Header/>
            <h1>Erreur</h1>
            <p>La page n'a pas été trouvée.</p>
        </React.Fragment>
    );
}

export default Error;

