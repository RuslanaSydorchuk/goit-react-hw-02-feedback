import PropTypes from 'prop-types';
import { Message } from 'components/Components.styled';


export default function Notification ({message}){
    return <Message>{message}</Message>
};

Notification.propTypes ={
    message: PropTypes.string.isRequired,
}