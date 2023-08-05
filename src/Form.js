import React from 'react';
import './Form.css';
import fetchTranslation from './fetchTranslation';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


function Form({addTranslation, setPost, setResponse, setServerError, post, response, setDefaultLabel, defaultLabel}){

  function submitTranslations(event) {
    event.preventDefault()
        fetchTranslation(post, defaultLabel)
        .then(data => {
          setResponse(data.translatedText)
            const newTranslation = {
                id: Date.now(),
                post: post,
                response: data.translatedText
            }
            
            addTranslation(newTranslation)
        })
        .catch(err => setServerError(err.message))
  }

    return (
        <form>
          <input 
          className="home__searchInput" 
          type="search" 
          name="s" 
          placeholder='Type here'
          value={post}
          onChange={event => setPost(event.target.value)}
          ></input>
          <h2>Your translation will be displayed below and saved automatically</h2>
        <h3>{response}</h3>
        <label>Choose a Target Language:
          <select className="default-label" onChange={event => setDefaultLabel(event.target.value)}>
            <option value="es">Spanish</option>
            <option value="en">English</option>
            <option value="ar">Arabic</option>
            <option value="az">Azerbaijani</option>
            <option value="ca">Catalan</option>
            <option value="zh">Chinese</option>
            <option value="cs">Czech</option>
            <option value="da">Danish</option>
            <option value="nl">Dutch</option>
            <option value="eo">Esperanto</option>
            <option value="fi">Finnish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="el">Greek</option>
            <option value="he">Hebrew</option>
            <option value="hi">Hindi</option>
            <option value="hu">Hungarian</option>
            <option value="id">Indonesian</option>
            <option value="ga">Irish</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="fa">Persian</option>
            <option value="pl">Polish</option>
            <option value="pt">Portuguese</option>
            <option value="ru">Russian</option>
            <option value="sk">Slovak</option>
            <option value="sv">Swedish</option>
            <option value="tr">Turkish</option>
            <option value="uk">Ukranian</option>
          </select>
        </label>
          <button className="focus-page" type="search" onClick = { event => submitTranslations(event)} >SUBMIT</button>
        <NavLink to="/saved-translations">  
          <button className="saved-button">
            Saved Translations
          </button>
        </NavLink>
        </form>
      )
    }

    export default Form

    Form.propTypes = {
      post: PropTypes.string.isRequired,
      response: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      deleteTranslation: PropTypes.func.isRequired,
      addTranslation: PropTypes.func.isRequired,
      setPost: PropTypes.string.isRequired,
      setResponse: PropTypes.string.isRequired,
      setServerError: PropTypes.string.isRequired,
      setDefaultLabel: PropTypes.string.isRequired,
      defaultLabel: PropTypes.string.isRequired
    }