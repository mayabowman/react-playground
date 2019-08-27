import React from 'react';
import Split from './composition/Split';
import './App.css';
import './composition/Tooltip';
import Tooltip from './composition/Tooltip';

const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
    ipsum
  </Tooltip>
)

const secondTooltip = (
  <Tooltip color='#126bcc' message='another tooltip message'>
    officiis
  </Tooltip>
)

function App() {
  return (
    <main className='App'>
      <Split className='left' flexBasis={4}>
        This is the content of the left split component. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
        <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>
        <Tooltip>{firstTooltip}</Tooltip>
        <Tooltip>{secondTooltip}</Tooltip>
      </Split>
      <Split className='right'>
        This is the content of the right split component. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
      </Split>
    </main>
  );
}

export default App;
