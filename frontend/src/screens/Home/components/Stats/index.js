import {
    StatsModal,
    StatsOverview,
    StatsLabel,
    StatsValue,
    StatsMeter
} from './style';

import ReactSpeedometer from "react-d3-speedometer"

const Stats = ({ title, completedGoalsCount, leftGoalsCount }) => {
	return (
		<StatsModal>
			<StatsOverview>
				<StatsLabel>
					{title}
				</StatsLabel>
				<StatsValue>
					{completedGoalsCount} Completed - <span>{leftGoalsCount} more left!</span>
				</StatsValue>
			</StatsOverview>
			<StatsMeter>
                <ReactSpeedometer 
                    forceRender={true}
                    currentValueText='Goals'
                    minValue={0} 
                    maxValue={completedGoalsCount + leftGoalsCount} 
                    value={completedGoalsCount}
                    startColor="rgba(220, 248, 255, 1)"
                    endColor="rgba(198, 232, 255, 0.99)" 
                    width={180}
                    height={160}
                    segments={completedGoalsCount + leftGoalsCount}
                />
			</StatsMeter>
		</StatsModal>
	);
};

export default Stats;
