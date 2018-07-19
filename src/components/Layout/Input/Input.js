import React from 'react';
import css from './Input.css';

const input = ( props ) => {
    let inputElement = null;
    const inputCSS = [css.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputCSS.push(css.Invalid);
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input 
                className={inputCSS.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed} />
            break;
        case ( 'textarea' ): 
            inputElement = <textarea 
                className={css.InputElement} 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed}/>
            break;
        case ( 'file' ): 
            inputElement = <file 
                className={css.InputElement} 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed}/>
            break;            
        case ( 'select' ): 
            inputElement = (
                <select 
                    className={css.InputElement} 
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select> 
            );
            break;
        default:
            inputElement = <input 
                className={inputCSS} 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed}/>;    
    }

    return (
    <div className={css.input}>
        <label className={css.Label}>{props.label}</label>
        {inputElement}
    </div>  
    );
};

export default input;