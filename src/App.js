import './index.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import EmptyPage from './component/EmptyPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day"> {/* 앞의 day의 값을 얻을 수 있다. */}
            <Day />
          </Route>
          <Route>
            <EmptyPage /> {/* 위의것들이 모두 실행되지 않았을 경우 */}
          </Route>   
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
