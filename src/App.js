import { useState } from 'react';
import './App.css';
import GoblinForm from './GoblinForm';
import GoblinList from './GoblinList';
import Goblin from './Goblin';

function App() {
  const [allGoblins, setAllGoblins] = useState([]);
  const [filteredGoblins, setFilteredGoblins] = useState(null);
  const [goblinFormName, setGoblinFormName] = useState(''); 
  const [goblinFormHP, setGoblinFormHP] = useState(''); 
  const [goblinFormColor, setGoblinFormColor] = useState(''); 
  
  function submitGoblin() {
    const newGoblin = {
      id: Math.ceil(Math.random() * 9999999),
      name: goblinFormName, 
      hp: goblinFormHP,
      color: goblinFormColor
    };

    setAllGoblins([...allGoblins, newGoblin]);
  }

  function deleteGoblin(id) {
    const goblinIndex = allGoblins.findIndex(goblin => goblin.id === id);

    allGoblins.splice(goblinIndex, 1);

    setAllGoblins([...allGoblins]);
  }

  function handleFilterGoblins(search) {
    const lessGoblins = allGoblins.filter(goblin => goblin.name.includes(search));

    search ? setFilteredGoblins(lessGoblins) : setFilteredGoblins(allGoblins);
  }


  return (
    <div className="App">
      <div className='current-goblin quarter'>
        <Goblin goblin={{
          name: goblinFormName, 
          hp: goblinFormHP, 
          color: goblinFormColor
        }}/>
      </div>
      <div className='goblin-filter quarter'>
        Filter Goblins
        <input onChange={(e) => handleFilterGoblins(e.target.value)} />
      </div>
      <GoblinForm 
        submitGoblin={submitGoblin}
        goblinFormName={goblinFormName} 
        setGoblinFormName={setGoblinFormName}
        goblinFormColor={goblinFormColor} 
        setGoblinFormColor={setGoblinFormColor}
        goblinFormHP={goblinFormHP} 
        setGoblinFormHP={setGoblinFormHP}
      />

      <GoblinList 
        goblins={filteredGoblins || allGoblins} 
        deleteGoblin={deleteGoblin} 
      />
    </div>
  );
}

export default App;
