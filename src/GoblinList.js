import React from 'react';
import Goblin from './Goblin';

export default function GoblinList(props) {
  return (
    <div className='goblin-list quarter'>
      {goblins.map(goblin => <Goblin 
        goblin={goblin.name} 
        deleteGoblin={deleteGoblin}
      />)}
    </div>
  );
}
