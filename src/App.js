import  { useState } from 'react';
import Translations from './Translations';
import Form from './Form';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import ServerError from './ServerError';


function App(){

  const [translations, setTranslations] = useState([])
  let [post, setPost] = useState('')
  let [response, setResponse] = useState('')
  let [defaultLabel, setDefaultLabel] = useState('es')
  let [serverError, setServerError] = useState(false)


  function addTranslation(newTranslation){
    if(response !== newTranslation.response){
      post && setTranslations([...translations, newTranslation])
    }
  }
  
  function deleteTranslation(id){
    const filteredTranslations = translations.filter(trans => trans.id !== id)
    setTranslations(filteredTranslations)
  }

  return(
    <main className='App'>
        <h1>Translitt</h1>
        {serverError && <ServerError serverError={serverError} />}
        <Routes>
          <Route path='/' element={<Form addTranslation={addTranslation} setPost={setPost} post={post} setServerError={setServerError}
           setResponse={setResponse} response={response} setDefaultLabel={setDefaultLabel} defaultLabel={defaultLabel}/>}/>
          <Route path='/saved-translations' element={<Translations translations={translations} deleteTranslation={deleteTranslation}/>}/>
        </Routes>
    </main>
  )
}

export default App;