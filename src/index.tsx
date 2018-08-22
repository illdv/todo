import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
	<Provider store={store} >
		<Router>
			<App />

		</Router>
	</Provider>

	, document.getElementById('root'))

