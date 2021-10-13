import React, { useState, useCallback } from 'react';
import classnames from 'classnames';
// you should import `lodash` as a whole module
import lodash from 'lodash';
import axios from 'axios';

import debounce from 'lodash.debounce';
import { SuggestContainer,UI, Li } from './style';

const DEBOUNCE_DELAY = 500;

// the exported component can be either a function or a class



export default function Autocomplete({
  loading,
  options,
  requests,
  onClickFunction,
  placeholder
}) {

  const [inputValue, setInputValue] = useState('');
  console.log(options,"options")

  const debouncedSave = useCallback(
    debounce((newValue) => requests(newValue,DEBOUNCE_DELAY)),
    []
  )
  

  const updateValue = (newValue) => {
    setInputValue(newValue);
    debouncedSave(newValue);

  }


  return (
    <div className='wrapper'>
      <div className='control'>
        <input 
        value={inputValue} 
        onChange={(input) => updateValue(input.target.value)} type='text' className='input' placeholder={placeholder} />
      </div>

      <SuggestContainer>
        <UI>
            {loading && <Li>Loading...</Li>}
            {options?.length > 0 &&
              !loading && 
                options?.map((value,index) => (
                  <Li
                    key={`${value.name}-${index}`}
                    onClick={() => onClickFunction(value)} >
                      {value.name}

                  </Li>
                ))}
        </UI>
      </SuggestContainer>

    </div>
  );
}
