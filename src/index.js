import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import history from './history';
import router from './router';


const render = async (location) => {
    const element = await router.resolve(location);
    ReactDOM.render(
            element,
        document.getElementById('root'),
    );
};

render(history.location);
history.listen(render);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
