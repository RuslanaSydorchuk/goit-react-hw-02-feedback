import PropTypes from 'prop-types';
import {Title, SectionComponents} from "components/Components.styled"

export default function Section({title, children}){
    return(
        <SectionComponents>
            {title && <Title>{title}</Title>}
            {children}
        </SectionComponents>
    )
}

Section.propTypes ={
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
}