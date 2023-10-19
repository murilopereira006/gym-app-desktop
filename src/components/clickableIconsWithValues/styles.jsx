import styled from 'styled-components'

export const Container = styled.a`
    background-color: transparent;
    margin: 10px;
    text-decoration: none;
`;

export const Wrapper = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    background-image: url(${props => props.icon});
    background-color: transparent;
    background-size: contain;
    background-repeat: no-repeat;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const TextValue = styled.span`
    background-color: transparent;
    color: #F1F1F1;
    font-size: 1.1rem;
    font-weight: 800;
    text-shadow: 0px 0px 3px #242424;
    line-height: 1;
`;
