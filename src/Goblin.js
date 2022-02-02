import React from 'react';

export default function Goblin({ goblin }) {
  return (
    <div 
      className='goblin' 
      onClick={() => props.deleteGoblin && props.deleteGoblin(props.goblin.id)}>
      <h3>{props.goblin.name}</h3>  
      <img src="goblin.png" style={{ backgroundColor: props.goblin.color }} />
      <p>{props.goblin.hp} HP</p>
    </div>
  );
}
