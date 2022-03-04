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
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './components/appStyles.css'
import styles from './components/appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import PureComp from './components/PureComp'
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput'
import PortalDemo from './components/PortalDemo'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'

function App() {
  return (
   <div className="App">
   <ClickCounter/>
   <HoverCounter/>
   {/*<ErrorBoundary>
     <Hero heroName='batman' />
   </ErrorBoundary>

   <ErrorBoundary>
     <Hero heroName='joker' />
   </ErrorBoundary>*/}

   {/*<PortalDemo/>*/}
   {/*<FocusInput />*/}
   {/*<RefsDemo/>*}
   {/*<ParentComp/>*/}
   {/*<Table/>*/}
   {/*<FragmentDemo/>*/}
     {/*<LifecycleA/>*/}
    {/* <h1 className='error'>Error</h1>
     <h1 className={styles.success}>success</h1>
     <Inline/>
    <Form/>
   <Stylesheet primary={true}/>*/}
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