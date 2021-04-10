import { useState } from 'react';

import { Line } from 'react-chartjs-2';
import { months } from '../../../../constants';

import Select from 'react-select';

import { selectStyles } from '../../../Register/style';

import { GraphContainer } from './style';
import Subtitle from '../../../../components/Subtitle';
import TitleBar from '../../../../components/TitleBar';

const currencyFormatter = require('currency-formatter');

const Graph = ({ transactions }) => {
	const { innerWidth: width } = window;

	const [selectedYear, setSelectedYear] = useState({
		value: new Date().getFullYear(),
	});

	const selectOptions = [
		{ value: new Date().getFullYear(), label: new Date().getFullYear() },
		{
			value: new Date().getFullYear() - 1,
			label: new Date().getFullYear() - 1,
		},
		{
			value: new Date().getFullYear() - 2,
			label: new Date().getFullYear() - 2,
		},
	];

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
					ticks: {
						display: false,
					},
				},
			],
			yAxes: [
				{
					ticks: {
						display: width > 768,
						maxTicksLimit: 7,
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
			labels: [...Array(months.length).keys()].map((idx) => months[idx]),
			datasets: [
				{
					data: [...Array(months.length).keys()].map((idx) => {
						return transactions.reduce(
							(acc, item) =>
								new Date(item.date).getMonth() === idx &&
								new Date(item.date).getFullYear() ===
									selectedYear.value
									? acc + item.amount
									: acc,
							0
						);
					}),
					backgroundColor: gradient,
					borderWidth: 2,
				},
			],
		};
	};

	return (
		<GraphContainer>
			<TitleBar>
				<Subtitle>Yearly Chart</Subtitle>
				<div style={{ width: '200px' }}>
					<Select
						placeholder={selectedYear.value}
						value={selectedYear.value}
						onChange={setSelectedYear}
						styles={selectStyles}
						options={selectOptions}
					/>
				</div>
			</TitleBar>
			<Line data={chartData} options={options} />
		</GraphContainer>
	);
};

export default Graph;
