import  { useState } from 'react';
import Translations from './Translations';
import Form from './Form';
import './App.css';
import ServerError from './ServerError';
import {Routes, Route} from 'react-router-dom'

function App(){

  const [translations, setTranslations] = useState([])
  let [post, setPost] = useState('')
  let [response, setResponse] = useState('')
  let [defaultLabel, setDefaultLabel] = useState('')
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
        <h1>Translitt</h1>
        <Routes>
          <Route path='/' element={<Form addTranslation={addTranslation} setPost={setPost} post={post}
           setResponse={setResponse} response={response} setServerError={setServerError} setDefaultLabel={setDefaultLabel} defaultLabel={defaultLabel}/>}/>
          <Route path='/saved-translations' element={<Translations translations={translations} deleteTranslation={deleteTranslation}/>}/>
        </Routes>
    </main>
  )
}

export default App;