//import logo from './logo.svg';
import './App.css';
import { Header } from './wrappers/Header.js'
import { ServerInfo } from './wrappers/ServerInfo.js'
import { Methods } from './wrappers/Methods.js'

function App() {
  return (
    <div className="App">
      <Header />
      <ServerInfo />
      <Methods />
    </div>
  );
}


export default App;
