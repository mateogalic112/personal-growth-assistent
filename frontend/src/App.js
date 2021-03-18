import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './layout/Main';
import Glass from './layout/Glass';
import Circles from './components/Circles';

import Login from './screens/Login';
import SignUp from './screens/SignUp';
import News from './screens/News';
import Crypto from './screens/Crypto';
import Home from './screens/Home';
import ScreenWrapper from './screens/ScreenWrapper';

const App = () => {
	return (
		<Router>
			<Main>
				<Circles />
				<Glass>
					<Switch>
						<Route
							exact
							path='/api/v1'
							component={(props) => (
								<ScreenWrapper component={Home} {...props} />
							)}
						/>
						<Route
							path='/api/v1/users/login'
							component={(props) => <Login {...props} />}
						/>
						<Route
							path='/api/v1/users/register'
							component={(props) => <SignUp {...props} />}
						/>
						<Route
							path='/news'
							component={(props) => (
								<ScreenWrapper component={News} {...props} />
							)}
						/>
						<Route
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
