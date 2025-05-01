import React, { useEffect, useState } from 'react'
import Button from './Button'
import InputBox from './InputBox'

function RightBar() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [calculated, setCalculated] = useState(0);
    const [operator, setOperator] = useState("+");

    // Handle changes in number1 and number2
    const handleNumberChange = (e, number) => {
        const value = Number(e.target.value);
        if (number === 1) {
            setNumber1(value);
        } else if (number === 2) {
            setNumber2(value);
        }
    };

    // Handle button clicks (for both numbers and operators)
    const handleClick = (value) => {
        if (['+', '-', '*', '/'].includes(value)) {
            setOperator(value); // Update the operator
        } else if (value === '=') {
            // Calculate result when '=' is clicked
            let result;
            let num1 = number1;
            let num2 = number2;

            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num2 !== 0 ? num1 / num2 : 'Error: Division by 0';
                    break;
                default:
                    result = 0;
            }
            setCalculated(result);
        } else {
            if (operator === '+') {
                setNumber1((prev) => prev * 10 + Number(value));
            } else if (operator === '-') {
                setNumber2((prev) => prev * 10 + Number(value));
            }
        }
    };

    useEffect(() => {
        let result;
        let num1 = number1;
        let num2 = number2;

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : 'Error: Division by 0';
                break;
            default:
                result = 0;
                break;
        }

        setCalculated(result);
    }, [number1, number2, operator]);

    return (
        <div className='w-3/4 h-screen flex justify-center items-center'>
            <div className="setter flex flex-col gap-2 pt-9 pb-9 w-2/3">
                <div className="upper flex w-full gap-0.5">
                    <InputBox
                        number1={number1}
                        onChange={(e) => handleNumberChange(e, 1)}
                    />
                    <p className='text-white text-4xl p-1'>{operator}</p>
                    <InputBox
                        number1={number2}
                        onChange={(e) => handleNumberChange(e, 2)}
                    />
                </div>
                <div className="mid">
                    <p className='text-white text-4xl p-1'>Ans: {calculated}</p>
                </div>
                <div className="lower grid grid-cols-4 gap-4 justify-items-center">
                    <Button label="7" onClick={() => handleClick("7")} />
                    <Button label="8" onClick={() => handleClick("8")} />
                    <Button label="9" onClick={() => handleClick("9")} />
                    <Button label="*" onClick={() => handleClick("*")} />

                    <Button label="4" onClick={() => handleClick("4")} />
                    <Button label="5" onClick={() => handleClick("5")} />
                    <Button label="6" onClick={() => handleClick("6")} />
                    <Button label="-" onClick={() => handleClick("-")} />

                    <Button label="1" onClick={() => handleClick("1")} />
                    <Button label="2" onClick={() => handleClick("2")} />
                    <Button label="3" onClick={() => handleClick("3")} />
                    <Button label="+" onClick={() => handleClick("+")} />

                    <Button label="0" onClick={() => handleClick("0")} />
                    <Button label="." onClick={() => handleClick(".")} />
                    <Button label="/" onClick={() => handleClick("/")} />
                    <Button label="=" onClick={() => handleClick("=")} />
                </div>
            </div>
        </div>
    )
}

export default RightBar;
