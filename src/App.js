import './App.css';
import { TransactionList } from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';
import { Balance } from './components/Balance';
import Header from './components/Header';
import {IncomeExpenses} from './components/IncomeExpenses'
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header/>
        <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
        </div>

    </GlobalProvider>
  );
}

export default App;
