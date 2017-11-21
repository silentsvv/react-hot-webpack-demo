import React from 'react';
import ReactDom from 'react-dom';
import App from './App.jsx';
import { AppContainer } from 'react-hot-loader'
import './style.scss'

console.log('I get called from print.js!');

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>22sc222h</h1>
//       </div>
//     )
//   }
// }

ReactDom.render(
  <AppContainer>
    <App/>
  </AppContainer>,
  document.getElementById('root')
)


// if (module.hot) {
//   module.hot.accept('./style.scss', function() {
//     console.log('Accepting the updated printMe module!');
//     printMe();
//   })
// }

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    console.log(111111111)
    ReactDom.render(
      <AppContainer>
        <App/>
      </AppContainer>,
      document.getElementById('root')
    )
  })
}