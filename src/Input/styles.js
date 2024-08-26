import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #36312D;
    margin-bottom:10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';
    box-shadow: 2px 2px 8px rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    border: 1px solid #E0E0E0;

    input {
        height: 75px;
        width: 100%;
        border-radius: 20px;
        background-color: #36312D;
        display: flex;
        flex-direction: column;
        text-align: end;
        padding: 0 10px;
        font-size: 24px;
        font-family: 'Roboto';
        color: #FFFFFF;
        border: 3px solid #E0E0E0;
    }
`