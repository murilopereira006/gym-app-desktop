import styled from 'styled-components'

export const OuterWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    padding: ${props => props.outerPadding}px;
    border-radius: ${props => (props.borderRadius + props.outerPadding)}px;
    color: transparent;
    background-color: transparent;
    border: ${props => props.outerWeight}px ${props => props.outerStyle} ${props => props.outerColor};
`;

export const Container = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    background-color: ${props => props.bgColor};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    border: ${props => props.borderWeight}px ${props => props.border} ${props => props.borderColor};
    border-radius: ${props => props.borderRadius}px;
    cursor: pointer;
`;

export const Text = styled.span`
    font-family: ${props => props.fontFamily};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    ${props => props.fontStyles};
    color: ${props => props.textColor};
`;
