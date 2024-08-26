import { Container, Content, Row } from './style';
import Button from './Buttons';
import { useState } from 'react';
import Input from './Input';
function CalculadoraReact() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [arrayNums, setArrayNums] = useState([]);

  const handleOnClear = () => {
    setCurrentNumber('0')
    setArrayNums([])
  }
  const handleSumNumbers = () => {
    setCurrentNumber('0')
    if (arrayNums !== undefined) {
      setArrayNums(prev => {
        if (prev[1] === '=') {
          return [currentNumber, '+'];
        } else {
          return [...prev, currentNumber, '+'];
        }
      })
    } else {
      setArrayNums([currentNumber, '+'])
    }
  }
  const handleMinusNumbers = () => {
    if (arrayNums !== undefined) {
      setCurrentNumber('0')
      setArrayNums(prev => {
        if (prev[1] === '=') {
          return [currentNumber, '-'];
        } else {
          return [...prev, currentNumber, '-'];
        }
      });
    } else {
      setArrayNums([currentNumber, '-'])
    }
  }

  const handleDividerNumbers = () => {
    if (arrayNums !== undefined) {
      setCurrentNumber('0')
      setArrayNums(prev => {
        if (prev[1] === '=') {
          return [currentNumber, '/'];
        } else {
          return [...prev, currentNumber, '/'];
        }
      });
    } else {
      setArrayNums([currentNumber, '/'])
    }
  }

  const handleMultiplicationNumbers = () => {
    if (arrayNums !== undefined) {
      setCurrentNumber('0')
      setArrayNums(prev => {
        if (prev[1] === '=') {
          return [currentNumber, '*'];
        } else {
          return [...prev, currentNumber, '*'];
        }
      });
    } else {
      setArrayNums([currentNumber, '*'])
    }
  }

  const handleEquals = () => {
    if (arrayNums === undefined || arrayNums.length === 0) {
      return []
    }
    setArrayNums(prev => {
      const newArray = [...prev, currentNumber];
      let result = Number(newArray[0]);
      for (let i = 1; i < newArray.length; i += 2) {
        const operator = newArray[i];
        const nextNumber = Number(newArray[i + 1]);

        if (isNaN(nextNumber)) {
          console.error('Invalid number:', nextNumber);
          return;
        }

        switch (operator) {
          case '+':
            result += nextNumber;
            break;
          case '-':
            result -= nextNumber;
            break;
          case '*':
            result *= nextNumber;
            break;
          case '/':
            result /= nextNumber;
            break;
          default:
            console.error('Invalid operator:', operator);
            return;
        }
      }
      setCurrentNumber(String(result));
      return [...newArray, '='];
    });


  }

  const handleAddNumber = (num) => {

    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }
  const handleBackSpace = (num) => {
    setCurrentNumber(prev => prev.length > 1 ? prev.slice(0, -1) : '0');

  }

  function renderButtons(array) {
    return <Row>
      {
        array.map((value, index) => (
          <Button label={value.label} onClick={value.onFunction} typeButton={value.typeButton} />
        ))
      }
    </Row>
  }

  function renderFormula() {
    if (!Array.isArray(arrayNums)) {
      console.error("arrayNums não é um array ou está indefinido");
      return [];
    }
    const auxArraysNums = arrayNums.filter(item => item !== undefined);
    return auxArraysNums.join('');
  }

  return (
    <Container>
      <Content>
        <Input value={renderFormula()} />
        <Input value={currentNumber} />
        {
          renderButtons([
            {
              label: '<=',
              onFunction: () => handleBackSpace(),
              typeButton: 'generic'
            },
          ])
        }
        {
          renderButtons([
            {
              label: 'x',
              onFunction: () => handleMultiplicationNumbers(),
              typeButton: 'generic'
            },
            {
              label: '/',
              onFunction: () => handleDividerNumbers(),
              typeButton: 'generic'
            },
            {
              label: 'c',
              onFunction: () => handleOnClear(),
              typeButton: 'generic'
            },
          ])
        }
        {
          renderButtons([
            {
              label: '7',
              onFunction: () => handleAddNumber('7'),
              typeButton: 'num'
            },
            {
              label: '8',
              onFunction: () => handleAddNumber('8'),
              typeButton: 'num'
            },
            {
              label: '9',
              onFunction: () => handleAddNumber('9'),
              typeButton: 'num'
            },
            {
              label: '-',
              onFunction: () => handleMinusNumbers(),
              typeButton: 'generic'
            },
          ])
        }
        {
          renderButtons([
            {
              label: '4',
              onFunction: () => handleAddNumber('4'),
              typeButton: 'num'
            },
            {
              label: '5',
              onFunction: () => handleAddNumber('5'),
              typeButton: 'num'
            },
            {
              label: '6',
              onFunction: () => handleAddNumber('5'),
              typeButton: 'num'
            },
            {
              label: '+',
              onFunction: () => handleSumNumbers(),
              typeButton: 'generic'
            },
          ])
        }
        {
          renderButtons([
            {
              label: '1',
              onFunction: () => handleAddNumber('1'),
              typeButton: 'num'
            },
            {
              label: '2',
              onFunction: () => handleAddNumber('2'),
              typeButton: 'num'
            },
            {
              label: '3',
              onFunction: () => handleAddNumber('3'),
              typeButton: 'num'
            },
            {
              label: '=',
              onFunction: () => handleEquals(),
              typeButton: 'equal'
            },
          ])
        }
        {
          renderButtons([
            {
              label: '0',
              onFunction: () => handleAddNumber('0'),
              typeButton: 'num'
            },
          ])
        }
      </Content>
    </Container>
  );
}

export default CalculadoraReact;
