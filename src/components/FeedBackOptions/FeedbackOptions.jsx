import PropTypes from 'prop-types';
import {Button} from 'components/Components.styled';

export default function FeedbackOption ({options, onleaveFeedback}){
    return options.map(currentFeedback =>{
        return (
            <Button key={currentFeedback} type="button" onClick={onleaveFeedback} name={currentFeedback}>
                {currentFeedback}
            </Button>
        )
    })
};

FeedbackOption.propTypes ={
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onleaveFeedback: PropTypes.func.isRequired,
};