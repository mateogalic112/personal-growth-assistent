import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import News from './screens/News';

import Main from './components/Main';
import Glass from './components/Glass';
import Circles from './components/Circles';
import Sidebar from './components/Sidebar';
import Board from './components/Board';
import WidgetBar from './components/WidgetBar';
import Illustration from './components/Illustration';

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
						</Switch>
					</Board>
				</Glass>
			</Main>
		</Router>
	);
};

export default App;
