import PropTypes from "prop-types";
import { Wrapper, Container, TextValue } from "./styles";

const ClickableIconsWithValues = ({ svgIcon, value, link }) => {
    return (
        <Container href={link} target="_blank">
            <Wrapper icon={svgIcon}>
                <TextValue>{value}</TextValue>
            </Wrapper>
        </Container>
    );
};

export default ClickableIconsWithValues

ClickableIconsWithValues.propTypes = {
    svgIcon: PropTypes.string.isRequired,
    value: PropTypes.number,
    link: PropTypes.string,
};
