import PropTypes from "prop-types"
import { ReactComponent as ToolTipIconClosed } from "../../assets/icons/tootipClosed.svg"
import { ReactComponent as ToolTipIcon } from "../../assets/icons/tootip.svg"
import { } from "./styles"
// import Colors from "../../assets/colors"
// import { FontFamily, FontSize, FontWeight, FontStyles } from "../../assets/typography"

const InputGeneric = ({
    type = 'text',
}) => {
    return (
        <>{type}</>
    );
};

export default InputGeneric;


InputGeneric.propTypes = {
    type: PropTypes.oneOf['text', 'email', 'password', 'cep', 'cpf', 'phone', 'date'],
};
