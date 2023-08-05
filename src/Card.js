import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ post, response, id, deleteTranslation }) => {
    console.log(response)
  return (
      <div className='card'>
        <h3>{post}</h3>
        <p>{response}</p>
        <button onClick={()=> deleteTranslation(id)}>🗑</button>
      </div>
    )
  }
  export default Card;

  Card.propTypes = {
    post: PropTypes.string,
    response: PropTypes.string,
    id: PropTypes.number,
    deleteTranslation: ()=>{}
  }