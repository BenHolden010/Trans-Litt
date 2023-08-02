import  { useEffect, useState } from 'react';
import Ideas from './Ideas';
import Form from './Form';
import './App.css';
import fetchTranslation from './fetchTranslation'

function App(){
  const dummyIdeas = [
        { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
        { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
        { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
    ]
  const [ideas, setIdeas] = useState(dummyIdeas)
  const [input, setInput] = useState('What is your name')
  function addIdea(newIdea){
    setIdeas([...ideas, newIdea])
  }
  function deleteIdea(id){
    console.log(id);
    const filteredIdeas = ideas.filter(idea => idea.id !== id)
    setIdeas(filteredIdeas)
  }
  
  useEffect(()=>{
    fetchTranslation(input)
  , [input]})

  return(
    <main className='App'>
        <h1>IdeaBox</h1>
				{!ideas.length && <h2>No ideas yet -- add some!</h2> }
        <Form addIdea={addIdea}/>
        <Ideas ideas={ideas} deleteIdea={deleteIdea}/>
    </main>
  )
}

export default App;
