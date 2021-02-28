import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import News from './screens/News';

import Main from './layout/Main';
import Glass from './layout/Glass';
import Circles from './layout/Circles';
import Sidebar from './components/Sidebar';
import Board from './layout/Board';
import WidgetBar from './components/WidgetBar';
import Illustration from './layout/Illustration';

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
