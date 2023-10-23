import styled from 'styled-components'
import Colors from '../../assets/colors'

export const Container = styled.a`
    background-color: transparent;
    margin: 10px;
    text-decoration: none;
`;

export const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: solid 2px ${Colors.primary}
`;
