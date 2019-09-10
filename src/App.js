import React, { Component } from 'react';
// import Split from './composition/Split';
import './App.css';
// import './composition/Tooltip';
// import Tooltip from './composition/Tooltip';
// import TheDate from './state/TheDate';
// import Counter from './state/Counter';
// import Tabs from './state/Tabs';
// import Accordion from './state-drills/Accordion';
import DemonymApp from './demonymapp/demonymApp';


// const firstTooltip = (
//   <Tooltip color='hotpink' message='tooltip message'>
//     ipsum
//   </Tooltip>
// )

// const secondTooltip = (
//   <Tooltip color='#126bcc' message='another tooltip message'>
//     officiis
//   </Tooltip>
// )

// const tabsProp = [
//   { name: 'First tab',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
//   { name: 'Second tab',
//     content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
//   { name: 'Third tab',
//     content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
// ];

// const sections = [
//   {
//     title: 'Section 1',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//   },
//   {
//     title: 'Section 2',
//     content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
//   },
//   {
//     title: 'Section 3',
//     content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
//   },
// ]

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Accordion sections={sections}/>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Tabs tabs={tabsProp} />
//       </div>
//     )
//   }
// }

// function App() {
//   return (
//     <main className='App'>
//       <Split className='left' flexBasis={4}>
//         This is the content of the left split component. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
//         <Tooltip message='one more tooltip message'>
//           Necessitatibus?
//         </Tooltip>
//         <Tooltip>{firstTooltip}</Tooltip>
//         <Tooltip>{secondTooltip}</Tooltip>
//       </Split>
//       <Split className='right'>
//         This is the content of the right split component. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
//       </Split>
//       <TheDate />
//       <Counter count={123}/>
      
//     </main>
//   );
// }

class App extends Component {
  render() {
    return (
      <div>
        <DemonymApp />
      </div>
    )
  }
}

export default App;
