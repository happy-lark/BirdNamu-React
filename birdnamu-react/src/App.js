import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BoardCreate from './pages/board-create';
import BoardUpdate from './pages/board-update';
import Board from './pages/board';
import CheckerDiagnosis from './pages/checker-diagnosis';
import CheckerInfo from './pages/checker-info';
import CheckerSolution from './pages/checker-solution';
import CheckerSymptom from './pages/checker-symptom';
import JournalCreate from './pages/journal-create';
import JournalUpdate from './pages/journal-update';
import Journal from './pages/journal';
import Login from './pages/login';
import MainBoard from './pages/main-board';
import MainTodo from './pages/main-todo';
import Main from './pages/main';
import MpBirdCreate from './pages/mp-bird-create';
import MpBirdUpdate from './pages/mp-bird-update';
import MpFirst from './pages/mp-first';
import MpUserUpdate from './pages/mp-user-update';
import Signup2 from './pages/signup2';
import Signup from './pages/signup';

function App() {
  return (
    <Router>
      {/* The Switch component ensures that only one Route gets rendered at a time */}
      <Switch>
        {/* Define routes for each page. These routes map to the page components */}
        <Route exact path="/" component={Main} /> {/* Main page */}
        <Route path="/board-create" component={BoardCreate} />
        <Route path="/board-update" component={BoardUpdate} />
        <Route path="/board" component={Board} />
        <Route path="/checker-diagnosis" component={CheckerDiagnosis} />
        <Route path="/checker-info" component={CheckerInfo} />
        <Route path="/checker-solution" component={CheckerSolution} />
        <Route path="/checker-symptom" component={CheckerSymptom} />
        <Route path="/journal-create" component={JournalCreate} />
        <Route path="/journal-update" component={JournalUpdate} />
        <Route path="/journal" component={Journal} />
        <Route path="/login" component={Login} />
        <Route path="/main-board" component={MainBoard} />
        <Route path="/main-todo" component={MainTodo} />
        <Route path="/mp-bird-create" component={MpBirdCreate} />
        <Route path="/mp-bird-update" component={MpBirdUpdate} />
        <Route path="/mp-first" component={MpFirst} />
        <Route path="/mp-user-update" component={MpUserUpdate} />
        <Route path="/signup" component={Signup} />
        <Route path="/signup2" component={Signup2} />

        {/* If none of the routes match, you could redirect to a "Not Found" page */}
        <Route path="*" component={() => <h1>404: Page Not Found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
