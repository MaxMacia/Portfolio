import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './utils/styles/GloblalStyles';
import Banner from './components/Banner';
import Desktop from './components/Desktop';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<GlobalStyle />
		<Banner />
    <Desktop />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
