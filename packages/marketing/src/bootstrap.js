import React from 'react';
import  ReactDOM  from 'react-dom';
import App from './App';

//1.- mount function to start up the app
const mount = (el) => {
    ReactDOM.render(
        <App/>,
        el
    )
}

//2.- if we are in development or isolation call mount inmediatlly;
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root');
    if(devRoot){
        mount(devRoot)
    }
}

//3.- if running throug Container app, export mount function;
export {mount};