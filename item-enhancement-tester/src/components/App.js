import React, { useState } from 'react';

import { useInput } from '../utilities/useInput';

import { repair, succeed, fail, get } from '../enhancing/enhancer';

const App = () => {
  const [newName, setNewName] = useState();
  const [newEnhancement, setNewEnhancement] = useState();
  const [newDurability, setNewDurability] = useState();
  const name = useInput();
  const enhancement = useInput();
  const durability = useInput();

  const transformItem = (e, transformation) => {
    e.preventDefault();
    const newItem = transformation({
      name: name.value,
      enhancement: enhancement.value,
      durability: durability.value
    });
    setNewName(newItem.name);
    setNewEnhancement(newItem.enhancement);
    setNewDurability(newItem.durability);
  };

  return (
    <div className='container'>
      <h1 className='title'>Item Enhancement Tester</h1>
      <form>
        <input
          required
          type='text'
          value={name.value}
          name='name'
          onChange={name.updateValue}
          placeholder='item name'
        />
        <input
          required
          type='number'
          value={enhancement.value}
          name='enhancement'
          onChange={enhancement.updateValue}
          placeholder='enhancement'
        />
        <input
          required
          type='number'
          value={durability.value}
          name='durability'
          onChange={durability.updateValue}
          placeholder='durability'
        />
      </form>
      <div className='button-div'>
        <button onClick={e => transformItem(e, repair)} type='button'>
          Repair
        </button>
        <button onClick={e => transformItem(e, succeed)} type='button'>
          Succeed
        </button>
        <button onClick={e => transformItem(e, fail)} type='button'>
          Fail
        </button>
        <button onClick={e => transformItem(e, get)} type='button'>
          Get
        </button>
      </div>
      <div className='new-item-div'>
        <p>Name: {newName}</p>
        <p>Enhancement: {newEnhancement}</p>
        <p>Durability: {newDurability}</p>
      </div>
    </div>
  );
};

export default App;
