import React from 'react';

export default function GoblinForm(props) {
  function handleSubmit() {
    props.submitGoblin();
    props.setGoblinFormName('');
    props.setGoblinFormHP('');
    props.setGoblinFormColor('');
  }

  return (
    <h3>Goblin Form</h3>
    <div className='goblin-form-container quarter'>
      <form onSubmit={handleSubmit} className='goblin-form'>
        <label>
            Name
          <input required onChange={e => props.setGoblinFormName(e.target.value)} value={props.goblinFormName} />
        </label>
        <label>
            HP
          <input required type="number" onChange={e => props.setGoblinFormHP(e.target.value)} value={props.goblinFormHP} />
        </label>
        <label>
            Color
          <select required onChange={props.setGoblinFormColor(e.target.value)} value={props.goblinFormColor}>
            <option value="lightgreen">Green</option>
            <option value="lightblue">Blue</option>
            <option value="pink">Pink</option>
            <option value="purple">Purple</option>
            <option value="orange">Orange</option>
          </select>
        </label>
        <button>Add Goblin</button>

      </form>  
    </div>
  );
}
