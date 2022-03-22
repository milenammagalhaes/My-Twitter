import './App.css';
import NavBar from './components/NavBar'
import NewTweet from './components/NewTweet';

const App = () => {

  return (
    <div>
      <NavBar />
      <h1> Home </h1>
      <NewTweet />
  </div>
)

}

export default App;