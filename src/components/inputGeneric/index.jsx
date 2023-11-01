import PropTypes from "prop-types"
import { ReactComponent as ToolTipIconClosed } from "../../assets/icons/tootipClosed.svg"
import { ReactComponent as ToolTipIcon } from "../../assets/icons/tootip.svg"
import { Container, InputFild, IconContainer } from "./styles"
// import Colors from "../../assets/colors"
// import { FontFamily, FontSize, FontWeight, FontStyles } from "../../assets/typography"

const InputGeneric = ({
    type = 'text',
}) => {
    switch (type) {
        case 'email':
            return (
                <Container>
                    <InputFild />
                </Container>
            );
        case 'password':
            return (
                <Container>
                    <InputFild />
                </Container>
            );

        case 'cep':
            return (
                <Container>
                    <InputFild />
                </Container>
            );

        case 'cpf':
            return (
                <Container>
                    <InputFild />
                </Container>
            );

        case 'phone':
            return (
                <Container>
                    <InputFild />
                </Container>
            );

        case 'date':
            return (
                <Container>
                    <InputFild />
                </Container>
            );

        default:
            return (
                <Container>
                    <InputFild />
                    <IconContainer>
                        <ToolTipIcon />
                    </IconContainer>
                    <IconContainer>
                        <ToolTipIconClosed />
                    </IconContainer>
                </Container>
            );
    }
};

export default InputGeneric;


InputGeneric.propTypes = {
    type: PropTypes.oneOf['text', 'email', 'password', 'cep', 'cpf', 'phone', 'date'],
};
