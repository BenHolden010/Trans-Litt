import { useState, useEffect } from 'react';
import './Form.css';
import fetchTranslation from './fetchTranslation';
import { NavLink } from 'react-router-dom';

function Form({addTranslation, setPost, setResponse, setServerError, post, response}){
  // const [post, setPost] = useState("");
  // const [response, setResponse] = useState("");
  
  
  function submitTranslations(event) {
    event.preventDefault()

        fetchTranslation(post)
        .then(data => setResponse(data.translatedText))
        .catch(err => setServerError(err.message))
        
        
        const newTranslation = {
            id: Date.now(),
            post,
            response: response
        }
        addTranslation(newTranslation)
        console.log(newTranslation)
        // clearInput()
  }

  // function clearInput(){
  //       setPost("")
  // }

    return (
        <form>
          <input
            type='text'
            placeholder='Type here'
            name='post'
            value={post}
            onChange={event => setPost(event.target.value)}
          />
          <h1>{post},{response}</h1>
         <NavLink to={`/${post}`}>
          <button onClick = { event => submitTranslations(event)}>SUBMIT</button>
        </NavLink>
        </form>
      )
    }

    export default Form