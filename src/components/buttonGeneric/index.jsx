import PropTypes from "prop-types"
import { OuterWrapper, Container, Text } from "./styles"
import { Primary, BgLightTheme } from "../../assets/colors"

const ButtonGeneric = ({
    children,
    outer,
    bgColor = Primary,
    margin,
    padding,
    border,
    borderColor,
    borderRadius,
    textColor = BgLightTheme,
    fontFamily,
    fontSize = '1rem',
    fontWeight = 'normal',
    outerPadding,
}) => {

    const containerProps = {
        bgColor: bgColor,
        margin: margin,
        padding: padding,
        border: border,
        borderColor: borderColor,
        borderRadius: borderRadius,
    };

    const textProps = {
        textColor: textColor,
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: fontWeight,
    };

    if (outer) {
        return (
            <OuterWrapper
                outerColor={bgColor}
                outerPadding={outerPadding}
            >
                <Container {...containerProps}>
                    <Text {...textProps}>
                        {children}
                    </Text>
                </Container>
            </OuterWrapper>
        );
    } else {
        return (
            <Container {...containerProps}>
                <Text {...textProps}>
                    {children}
                </Text>
            </Container>
        );
    }
};

export default ButtonGeneric;


ButtonGeneric.propTypes = {
    children: PropTypes.string.isRequired,

    bgColor: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    border: PropTypes.string,
    borderColor: PropTypes.string,
    borderRadius: PropTypes.string,
    textColor: PropTypes.string,
    fontFamily: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    outer: PropTypes.string,
    outerPadding: PropTypes.string
};
