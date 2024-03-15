import ContactForm from './components/Contact Form/Contactform';
import SearchBar from './components/Search Bar/SearchBar';
import ContactList from './components/Contact List/ContactList';
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