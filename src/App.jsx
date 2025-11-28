import './App.css'
import './Components/Header.jsx';
import { Header } from './Components/Header.jsx';
import { Cards } from './Components/Cards.jsx';
import { Presentazione } from './Components/Presentazione.jsx';
import { Details } from './Components/Details.jsx';
import { TicketForm } from './Components/TicketForm.jsx';
import { Contacts } from './Components/Contacts.jsx';

function App() {

  return (
    <>
      <Header />
      <Cards />
      <Presentazione />
      <Details />
      <TicketForm />
      <Contacts />
    </>
  )
}

export default App
