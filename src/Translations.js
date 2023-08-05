import './Translations.css';
import Card from "./Card"
import PropTypes from 'prop-types';


function Translations({ translations, deleteTranslation }){

  const translationCards = translations.map(translation => {
    return (
      <Card
        post={translation.post}
        response={translation.response}
        id={translation.id}
        key={translation.id}
        deleteTranslation={deleteTranslation}
      />
    )
  })

  return (
    <div className='translations-container'>
      {translations.length ? translationCards : <h2>'No saved translations yet! Go back to the home page to add translations.'</h2>}
    </div>
  )
}
export default Translations;

Translations.propTypes = {
  translations: PropTypes.array.isRequired,
  deleteTranslation: PropTypes.func.isRequired,
}