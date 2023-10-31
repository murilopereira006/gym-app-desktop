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
