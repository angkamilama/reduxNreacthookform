import FirstComponent from './components/FirstComponent';
import ReceivingComponent from './components/ReceivingComponent.jsx';
import Form from './components/MyForm';
import styles from './index.css'
import { mySchema } from './validation/userValidation';
import DataUsingComponent from './components/DataUsingcomponent';

function App() {
  return(
    <div className='main-container'>
      <FirstComponent/>
      <ReceivingComponent/>
      <Form/>
      <DataUsingComponent/>
    </div>
  )
  }

export default App
