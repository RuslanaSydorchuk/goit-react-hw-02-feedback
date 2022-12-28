import PropTypes from 'prop-types';
import {Button} from 'components/Components.styled';

export default function FeedbackOption ({options, onFeedback}){
    return options.map(currentFeedback =>{
        return (
            <Button key={currentFeedback} type="button" onClick={onFeedback} name={currentFeedback}>
                {currentFeedback}
            </Button>
        )
    })
};

FeedbackOption.propTypes ={
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onFeedback: PropTypes.func.isRequired,
};