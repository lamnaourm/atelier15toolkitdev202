import './App.css';
import AddBudget from './components/AddBudget';
import AddDepenses from './components/AddDepenses';
import Header from './components/Header';
import ListDepenses from './components/ListDepenses';
import StatsBudget from './components/StatsBudget';

function App() {
  return (
    <div className="container">
      <Header />
      <StatsBudget />
      <div className='content'>
          <div>
              <AddBudget />
              <AddDepenses />
          </div>
          <ListDepenses />
      </div>
    </div>
  );
}

export default App;
