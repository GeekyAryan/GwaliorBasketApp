import { createStore } from 'redux';
import { Provider } from 'react-redux';
 import RootNavigation from './src/navigation/RootNavigation';
import RootReducer from './src/storage/RootReducer';
import {Text} from 'react-native'
const store=createStore(RootReducer)
function App() {

  
  return(

    
    
  <Provider store={store}>
    
   <RootNavigation />;
  </Provider>

  
  
  )
}

export default App;
