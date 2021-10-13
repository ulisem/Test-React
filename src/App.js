import logo from './logo.svg';
import Autocomplete from './components/autocomplete';

import './App.css';
import { useState } from 'react';
import { getApiSuggestions } from './request/request';

function App() {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSuggestions = async (word) => {
    console.log(word)
    if(word){
      setLoading(true);
      let response = await getApiSuggestions(word);
      setOptions(response);
      setLoading(false);
    }else{
      setOptions([]);
    }
  };

  const getApiUrl = (url) => {
    console.log(url,"dd")
    window.open(url, '_blank');
  }
  
  return (
    <div className='App'>
      <Autocomplete 
        loading={loading}
        options={options}
        requests={getSuggestions}
        onClickFunction={getApiUrl}
        placeholder="Buscar ciudad"
      />
    </div>
  );
}

export default App;
