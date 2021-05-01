import { useState } from 'react';

import { Line } from 'react-chartjs-2';
import { months } from '../../../../constants';

import Select from 'react-select';

import { selectStyles } from '../../../Register/style';

import { GraphContainer } from './style';
import Subtitle from '../../../../components/Subtitle';
import TitleBar from '../../../../components/TitleBar';

const Graph = ({ books }) => {
	const { innerWidth: width } = window;

	const [selectedYear, setSelectedYear] = useState({
		value: new Date().getFullYear(),
		label: new Date().getFullYear(),
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
						return books.reduce(
							(acc, item) =>
								new Date(item.updatedAt).getMonth() === idx &&
								new Date(item.updatedAt).getFullYear() ===
									selectedYear.value
									? acc + 1
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
