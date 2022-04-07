import './App.css';
import Header from "./components/mainHeader/Header";
import Contacts from "./components/Contacts/Contacts";
import {Provider} from "./Context";
import AddContact from "./components/AddContact/AddContact";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes} from "react-router-dom";

function App() {
  return (
      <Provider>
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' exact element={<Contacts/>}/>
                <Route path='/about' element={<AddContact/>}/>
                <Route path='/contact/create' element={<AddContact/>}/>
            </Routes>
        </div>
      </Provider>
  );
}

export default App;
