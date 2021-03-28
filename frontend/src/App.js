import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './layout/Main';
import Glass from './layout/Glass';
import Circles from './components/Circles';

import Login from './screens/Login';
import Register from './screens/Register';
import News from './screens/News';
import Crypto from './screens/Crypto';
import Home from './screens/Home';
import Wallet from './screens/Wallet';
import ScreenWrapper from './screens/ScreenWrapper';
import ProtectedRoute from './utils/ProtectedRoute';

const App = () => {
	return (
		<Router>
			<Main>
				<Circles />
				<Glass>
					<Switch>
						<Route
							path='/login'
							component={(props) => <Login {...props} />}
						/>
						<Route
							path='/register'
							component={(props) => <Register {...props} />}
						/>
						<ProtectedRoute
							exact
							path='/'
							component={(props) => (
								<ScreenWrapper component={Home} {...props} />
							)}
						/>

						<ProtectedRoute
							path='/wallet'
							component={(props) => (
								<ScreenWrapper component={Wallet} {...props} />
							)}
						/>

						<ProtectedRoute
							path='/news'
							component={(props) => (
								<ScreenWrapper component={News} {...props} />
							)}
						/>

						<ProtectedRoute
							path='/crypto'
							component={(props) => (
								<ScreenWrapper component={Crypto} {...props} />
							)}
						/>
					</Switch>
				</Glass>
			</Main>
		</Router>
	);
};

export default App;
