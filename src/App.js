import  { useState } from 'react';
import Translations from './Translations';
import Form from './Form';
import './App.css';
import ServerError from './ServerError';
import {Routes, Route} from 'react-router-dom'
import FocusCard from './Focus';

function App(){

  const [translations, setTranslations] = useState([])
  let [post, setPost] = useState('')
  let [response, setResponse] = useState('')
  const [serverError, setServerError] = useState(false)

  function addTranslation(newTranslation){
    setTranslations([...translations, newTranslation])
  }
  
  function deleteTranslation(id){
    const filteredTranslations = translations.filter(trans => trans.id !== id)
    setTranslations(filteredTranslations)
  }

  return(
    <main className='App'>
        <h1>Translatify</h1>
        <Routes>
          <Route path='/' element={<Form addTranslation={addTranslation} setPost={setPost} post={post} setResponse={setResponse} response={response} setServerError={setServerError}/>}/>
          <Route path='/1' element={<FocusCard post={post} response={response}/>}/>
          <Route path='/2' element={<Translations translations={translations} deleteTranslation={deleteTranslation}/>}/>
        </Routes>
    </main>
  )
}

export default App;
