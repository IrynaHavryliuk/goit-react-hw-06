import ContactForm from './components/ContactForm/Contactform';
import SearchBar from './components/SearchBar/SearchBar';
import ContactList from './components/ContactList/ContactList';
// import css from "./App.module.css";

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBar />
      <ContactList />
    </div>
  );
};

export default App;