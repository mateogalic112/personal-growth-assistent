import { useQuery } from 'react-query';

import { cryptoQuery } from '../../api/crypto';

import Container from '../../layout/Container';
import Row from '../../layout/Row';

import Title from '../../components/TitleBar/Title';
import TitleBar from '../../components/TitleBar';
import Filter from '../../widgets/Filter';
import Card from './components/Card';

import CryptoGrid from '../../layout/Grid/CryptoGrid';
import Subtitle from '../../components/Subtitle';

const Crypto = () => {
	const { data, error, isLoading, isError } = useQuery(
		['crypto', 'usd'],
		() => cryptoQuery('usd')
	);

	if (isLoading) return <h1>Loading</h1>;

	if (isError) return <h1>{error}</h1>;

	console.log(data);

	return (
		<Container>
			<Row>
				<TitleBar>
					<Title>Cryptocurrency</Title>
					<Filter openFilter={() => {}} />
				</TitleBar>
				<Subtitle>Portfolio</Subtitle>
				<CryptoGrid>
					{Array.isArray(data) &&
						data.length &&
						data
							.slice(0, 3)
							.map((coin) => <Card key={coin.id} {...coin} />)}
				</CryptoGrid>
			</Row>
		</Container>
	);
};

export default Crypto;
