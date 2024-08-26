import styled from 'styled-components';

const sharedStyles = `
    padding: 20px;
    border: 1px solid #E0E0E0;
    color: #E0E0E0;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    margin:8px;
    box-shadow: 2px 2px 8px rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    &:hover {
        opacity: 0.6;
    }
`;

export const ButtonContainer = styled.button`
    ${sharedStyles}
    background-color: #36312D;
`
export const ButtonNum = styled.button`
    ${sharedStyles}
    background-color: #403A36;
    
`

export const ButtonEqual = styled.button`
    ${sharedStyles}
    color: #36312D;
    background-color: #25FD8D;
    
`