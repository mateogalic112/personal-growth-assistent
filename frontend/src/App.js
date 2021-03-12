import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import News from './screens/News';

import Main from './layout/Main';
import Glass from './layout/Glass';
import Circles from './components/Circles';
import Sidebar from './components/Sidebar';
import Board from './layout/Board';
import WidgetBar from './components/WidgetBar';
import Illustration from './components/Illustration';
import Crypto from './screens/Crypto';

const App = () => {
	return (
		<Router>
			<Main>
				<Circles />
				<Glass>
					<Illustration />
					<WidgetBar />
					<Sidebar />
					<Board>
						<Switch>
							<Route path='/news'>
								<News />
							</Route>
							<Route path='/crypto'>
								<Crypto />
							</Route>
						</Switch>
					</Board>
				</Glass>
			</Main>
		</Router>
	);
};

export default App;
