import { Bar } from 'react-chartjs-2';
import { weekDays } from '../../../../constants';
import { getDaysDiff } from '../../../../helpers/date';

import { GraphContainer } from './style';
import Subtitle from '../../../../components/Subtitle';
import TitleBar from '../../../../components/TitleBar';

const Graph = ({ goals }) => {
	const { innerWidth: width } = window;

	const options = {
		legend: {
			display: false,
		},
		tooltips: {
			mode: 'index',
			intersect: false,
			callbacks: {
				label: function (tooltipItem) {
					return `${tooltipItem.value}%`;
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
						display: width > 768,
					},
				},
			],
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
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
			labels: [...Array(weekDays.length).keys()].map(
				(idx) => weekDays[idx]
			),
			datasets: [
				{
					data: [...Array(weekDays.length).keys()].map((idx) => {
						const { total, completed } = goals
							.filter((goal) => getDaysDiff(goal.date) <= 7)
							.reduce(
								(acc, item) => {
									if (
										new Date(item.date).getDay() === idx &&
										new Date(item.date).getMonth() ===
											new Date().getMonth() &&
										new Date(item.date).getFullYear() ===
											new Date().getFullYear() &&
										item.isCompleted
									) {
										acc.total++;
										acc.completed++;
									} else if (
										new Date(item.date).getDay() === idx &&
										new Date(item.date).getMonth() ===
											new Date().getMonth() &&
										new Date(item.date).getFullYear() ===
											new Date().getFullYear() &&
										!item.isCompleted
									) {
										acc.total++;
									}
									return acc;
								},
								{ total: 0, completed: 0 }
							);
						return parseInt((completed / total) * 100);
					}),
					backgroundColor: [
						'rgba(54, 162, 235, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(54, 162, 235, 0.2)',
					],
				},
			],
		};
	};

	return (
		<GraphContainer>
			<TitleBar>
				<Subtitle>Weekly Chart</Subtitle>
			</TitleBar>
			<Bar data={chartData} options={options} />
		</GraphContainer>
	);
};

export default Graph;
