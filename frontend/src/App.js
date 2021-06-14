import './App.css';
import Image from './Image'
import Form from './Form'
import Posts from './Posts'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image />
        <hr size="30" noshade="true" />
        <Form />
        <hr size="30" noshade="true" />
        <Posts />
      </header>
    </div>
  );
}

export default App;
