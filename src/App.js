import {Provider} from 'react-redux';
import './App.css';
import {Routing} from './Routing';
import { Store } from './redux/store/Store';
function App() {
  return (
    <div>
      <Provider store={Store}>
        <Routing/>
      </Provider>
    </div>
  );
}

export default App;
