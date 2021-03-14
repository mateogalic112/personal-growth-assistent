import { Line } from 'react-chartjs-2';
import { weekDays } from '../../../../constants';

import { useCryptoData } from '../../../../hooks/useCryptoData';

import { getDayNumberInWeek } from '../../../../helper/date';

import { GraphContainer } from './style';
import Subtitle from '../../../../components/Subtitle';

const currencyFormatter = require('currency-formatter');

const Graph = ({ portfolio }) => {
	const [displayData, isLoading, error, isError] = useCryptoData(portfolio);

	const options = {
		legend: {
			display: false,
		},
		tooltips: {
			mode: 'index',
			intersect: false,
			callbacks: {
				label: function (tooltipItem, data) {
					return currencyFormatter.format(tooltipItem.value, {
						code: 'USD',
					});
				},
			},
		},
		scales: {
			xAxes: [
				{
					gridLines: {
						display: false,
					},
				},
			],
			yAxes: [
				{
					ticks: {
						// Include a dollar sign in the ticks
						callback: function (value, index, values) {
							return currencyFormatter.format(value, {
								code: 'USD',
							});
						},
					},
				},
			],
		},
	};
	const chartData = (canvas) => {
		const ctx = canvas.getContext('2d');
		const gradient = ctx.createLinearGradient(0, 0, 0, 250);
		gradient.addColorStop(0, 'rgba(220, 248, 255, 1)');
		gradient.addColorStop(1, 'rgba(198, 232, 255, 0.75)');

		return {
			labels: Object.keys(portfolio).map(
				(item) => weekDays[getDayNumberInWeek(item)]
			),
			datasets: [
				{
					data: Object.entries(displayData).map(([key, value]) => {
						return Object.values(value).reduce(
							(acc, curr) => acc + curr.amount * curr.priceOfOne,
							0
						);
					}),
					backgroundColor: gradient,
					borderWidth: 2,
				},
			],
		};
	};

	if (isLoading) return <h1>Loading</h1>;
	if (isError) return <h1>{error}</h1>;

	return (
		<GraphContainer>
			<Subtitle>Weekly Chart</Subtitle>
			<Line data={chartData} options={options} />
		</GraphContainer>
	);
};

export default Graph;
