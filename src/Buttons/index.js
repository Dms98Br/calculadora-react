
import { ButtonContainer, ButtonEqual, ButtonNum } from './styles';

const Button = ({ label, onClick, typeButton }) => {
    switch (typeButton) {
        case 'generic':
            return (
                <ButtonContainer onClick={onClick} type="button">
                    {label}
                </ButtonContainer>
            );

        case 'equal':
            return (
                <ButtonEqual onClick={onClick} type="button">
                    {label}
                </ButtonEqual>
            );

        case 'num':
            return (
                <ButtonNum onClick={onClick} type="button">
                    {label}
                </ButtonNum>
            );

        default:
            return <ButtonContainer onClick={onClick} type="button">
                {label}
            </ButtonContainer>
    }
}

export default Button;