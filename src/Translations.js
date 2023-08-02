import './Translations.css';
import Card from "./Card"
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
      {translationCards}
    </div>
  )
}
export default Translations;