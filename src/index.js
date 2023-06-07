import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);
//  ReactDOM.render(<App/>, document.getElementById('root')) Alternative code the can be used for the above to render the imported App