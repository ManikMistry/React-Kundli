import React, { useState } from 'react';
import './CounterApp.css'

const CounterApp=()=>{
    const [value1,setValue1]=useState('');
    const [value2,setValue2]=useState('');
    const [result,setResult]=useState('');
    const [sign,setSign]=useState('');


    const onValueChange=(field,value)=>{
        if(!isNaN(value) || value === ''){
            if(field === 'feild1'){
                setValue1(value);
            }else{
                setValue2(value)
            }
        }
    }

    const clearFunction=()=>{
        setValue1('');
        setValue2('')
        setResult('')
        setSign('')
    }
    return(
        <>
            <div className='input-containers'>
                <div className='filed-1'>
                <input 
                type='number' 
                required
                value={value2}
                onChange={(e)=>onValueChange('value2',e.target.value)}
                />
                </div>
                <p>{sign}</p>
                <div className='filed-2'>
                <input 
                type='number' 
                required
                value={value1}
                onChange={(e)=>onValueChange('value1',e.target.value)}
                />
                </div>
                <p>=</p>
                <div className='result-feild'>
                <p className='result'>{result}</p>
                </div>
            </div>
            <div className='buttons'>
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
                <button onClick={()=>clearFunction}>clear</button>
            </div>
        </>
    )
}

export default CounterApp;



























// import React, { useState } from 'react';
// import './CounterApp.css';

// const CounterApp = () => {
//   const [value1, setValue1] = useState('');
//   const [value2, setValue2] = useState('');
//   const [result, setResult] = useState('');
//   const [operationSign, setOperationSign] = useState('');

//   const handleInputChange = (field, value) => {
//     if (!isNaN(value) || value === '') {
//       if (field === 'field1') {
//         setValue1(value);
//       } else {
//         setValue2(value);
//       }
//     }
//   };

//   const performOperation = (operation) => {
//     const num1 = value1;
//     const num2 = value2;

//     if (!isNaN(num1) && !isNaN(num2)) {
//       switch (operation) {
//         case '+':
//           setResult(num1 + num2);
//           break;
//         case '-':
//           setResult(num1 - num2);
//           break;
//         case '*':
//           setResult(num1 * num2);
//           break;
//         case '/':
//           setResult(num1 / num2);
//           break;
//         default:
//           setResult('');
//       }
//     } else {
//       setResult('');
//     }

//     setOperationSign(operation);
//   };

//   const handleClear = () => {
//     setValue1('');
//     setValue2('');
//     setResult('');
//     setOperationSign('');
//   };

//   return (
//     <>
//       <div className='input-containers'>
//         <div className='filed-1'>
//           <input
//             type='number'
//             value={value1}
//             onChange={(e) => handleInputChange('field1', e.target.value)}
//             required
//           />
//         </div>
//         <p>{operationSign}</p>
//         <div className='filed-2'>
//           <input
//             type='number'
//             value={value2}
//             onChange={(e) => handleInputChange('field2', e.target.value)}
//             required
//           />
//         </div>
//         <p>=</p>
//         <div className='result-feild'>
//           <p className='result'>{result}</p>
//         </div>
//       </div>
//       <div className='buttons'>
//         <button onClick={() => performOperation('+')}>+</button>
//         <button onClick={() => performOperation('-')}>-</button>
//         <button onClick={() => performOperation('*')}>*</button>
//         <button onClick={() => performOperation('/')}>/</button>
//         <button onClick={handleClear}>clear</button>
//       </div>
//     </>
//   );
// };

// export default CounterApp;
