import styled from 'styled-components';

interface SideBarProps {
    backGroundColor: string | undefined;
}

interface SideH6Props {
    textColor: string | undefined;
}

export const SideBarWrapper = styled.div<SideBarProps>`
    background-color: ${props => props.backGroundColor};
    
`;

export const SideH6 = styled.p<SideH6Props>`
    color: ${props => props.textColor};
    font-size: 0.7rem;
    padding: 5px 20px;
    opacity: 0.5;
    display: block;
    text-align: left;
    text-transform: uppercase;

`;