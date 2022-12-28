import PropTypes from 'prop-types';
import { StatisticItem } from 'components/Components.styled';

export default function Statistics ({good, neutral, bad, total, positivePercentage}){
    return(
        <div>
            <StatisticItem>
                <b>Good:</b>{good}
            </StatisticItem>
            <StatisticItem>
                <b>Neutral:</b>{neutral}
            </StatisticItem>
            <StatisticItem>
                <b>Bad</b>{bad}
            </StatisticItem>
            <StatisticItem>
                <b>Total:</b>{total}
            </StatisticItem>
            <StatisticItem>
                <b>Positive feedback:</b>{positivePercentage}%
            </StatisticItem>
        </div>
    )
};

Statistics.propTypes={
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}