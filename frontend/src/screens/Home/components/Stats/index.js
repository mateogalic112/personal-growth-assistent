import {
    StatsModal,
    StatsOverview,
    StatsLabel,
    StatsValue,
    StatsMeter
} from './style';

import ReactSpeedometer from "react-d3-speedometer"

const Stats = ({ title }) => {
	return (
		<StatsModal>
			<StatsOverview>
				<StatsLabel>
					{title}
				</StatsLabel>
				<StatsValue>
					5 Completed - <span>2 more left!</span>
				</StatsValue>
			</StatsOverview>
			<StatsMeter>
                <ReactSpeedometer 
                    forceRender={true}
                    currentValueText='Goals'
                    minValue={0} 
                    maxValue={10} 
                    value={5}
                    startColor="rgba(220, 248, 255, 1)"
                    endColor="rgba(198, 232, 255, 0.99)" 
                    width={180}
                    height={160}
                />
			</StatsMeter>
		</StatsModal>
	);
};

export default Stats;
