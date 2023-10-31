import PropTypes from "prop-types"
import { OuterWrapper, Container, Text } from "./styles"
import Colors from "../../assets/colors"
import { FontFamily, FontSize, FontWeight, FontStyles } from "../../assets/typography"

const ButtonGeneric = ({
    children,
    width = 'auto',
    height = 'auto',
    bgColor = Colors.Primary,
    margin,
    padding,
    border,
    borderColor,
    borderWeight,
    borderRadius,
    textColor = Colors.BgLightTheme,
    fontFamily = FontFamily.Default,
    fontSize = FontSize.Default,
    fontWeight = FontWeight.Medium,
    fontStyles = FontStyles.Default,
    outer,
    outerWeight = '1px',
    outerStyle = 'solid',
    outerPadding,
    outerColor
}) => {

    const outerProps = {
        outer: outer,
        outerWeight: outerWeight,
        outerStyle: outerStyle,
        outerColor: outerColor ? outerColor : bgColor,
        outerPadding: outerPadding,
        borderRadius: borderRadius
    };

    const containerProps = {
        width: width,
        height: height,
        bgColor: bgColor,
        margin: margin,
        padding: padding,
        border: border,
        borderColor: borderColor,
        borderWeight: borderWeight,
        borderRadius: borderRadius,
    };

    const textProps = {
        textColor: textColor,
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: fontWeight,
        fontStyles: fontStyles,
    };

    if (outer) {
        return (
            <OuterWrapper {...outerProps}>
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
    width: PropTypes.string,
    height: PropTypes.string,
    bgColor: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    border: PropTypes.oneOf['solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset', 'none'],
    borderColor: PropTypes.string,
    borderWeight: PropTypes.number,
    borderRadius: PropTypes.number,
    textColor: PropTypes.string,
    fontFamily: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    fontStyles: PropTypes.string,
    outer: PropTypes.bool,
    outerStyle: PropTypes.oneOf['solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset', 'none'],
    outerWeight: PropTypes.number,
    outerColor: PropTypes.string,
    outerPadding: PropTypes.string,
};
