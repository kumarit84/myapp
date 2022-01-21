import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionalClick from './components/FunctionalClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import PersonList from './components/PersonList'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
    <Greet name="kuamr" heroName="superman">
      <p>This is childern</p>
    </Greet>
    <Greet name="valli" heroName="wondorwomen">
      <button>action</button>
    </Greet>
    <Greet name="rithu" heroName="spiderman"/>
    {/*<PersonList/>*}
     {/*<Hello />*/}
    {/*<NameList/>*/}
    {/*<UserGreeting/>*/}
    {/*<ParentComponent/>*/}
      {/*<EventBind/>*/}
      {/* <FunctionalClick/>
      <ClassClick/>
      <Counter addValue="8"/>
            <Greet name="kumar" heroName="Captain America">
      <p>this is child of greet</p>
      <p>this is child of greet second</p>
      </Greet>
      <Welcome name ="Kumar" heroName="batman"/>

       <Message/>
      <Greet name="kumar" heroName="Captain America">
      <p>this is child of greet</p>
      <p>this is child of greet second</p>
      </Greet>
      <Greet name="valli" heroName="wonder woman">
      <button>acion</button>
      </Greet>
      <Greet name="rithu" heroName="Spiderman"/>
      <Welcome name ="Kumar" heroName="batman"/>
      <Welcome name ="Valli" heroName="wonderwoman"/>
      <Welcome name ="rithu" heroName="spiderman"/> */}
    </div>
  );
}

export default App;