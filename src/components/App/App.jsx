import {Component} from "react";
import ListContact from "components/ListContact/ListContact";
import SearchInput from "components/SearchInput/SearchInput";
import ContactsForm from "components/Form/Form";
import { ContainerList, ListTitle, FormTitle, ListIsEmpty } from "./App.styled";

const BASE_STATE = {
  contacts: [],
    filter: '',
}
const LOCAL_KEY_CONTACTS = 'contacts';

export class App extends Component {
  state = {...BASE_STATE}

  componentDidMount() {
      const savedContacts = localStorage.getItem(LOCAL_KEY_CONTACTS);
      if(savedContacts) {
        this.setState({contacts: JSON.parse(savedContacts)});
      }
  }

   componentDidUpdate(_, prevState) {
      if(prevState.contacts !== this.state.contacts) {
        localStorage.setItem(LOCAL_KEY_CONTACTS, JSON.stringify(this.state.contacts))
      }
  }
  
  onChangeFilter = event => {
    this.setState({filter: event.currentTarget.value})
  }

  getSortByFilter = () => {
    const normalizedValue = this.state.filter.toLowerCase();
    return this.state.contacts.filter(elem=>elem.name.toLowerCase().includes(normalizedValue))
  }
  onDeleteItem= id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(elem => elem.id !== id),
    }));
  } 
  
  SubmitForm = data => {
    const {contacts} = this.state;
    const someCopyItem = contacts.some((elem)=> elem.name.toLowerCase()===data.name.toLowerCase());
    if(someCopyItem) {
      return alert(`${data.name} is already in contacts`);
    }
    const newListContact = [...contacts, data];
    return this.setState({contacts: newListContact}) 
    
  }
  
  render() {
    const {filter} = this.state;
    const sortByName = this.getSortByFilter();
    const onChange = this.onChangeFilter;
    return (
      <>
      <FormTitle>Phonebook</FormTitle>
      <ContactsForm onSubmit={this.SubmitForm}></ContactsForm>
      <ContainerList>
      <ListTitle>Contacts</ListTitle>
      {this.state.contacts.length > 0 ? <SearchInput value={filter} onChangeFilter={onChange}></SearchInput> : <ListIsEmpty>Your list is empty... Please add a new contact</ListIsEmpty>}
      <ListContact contacts={sortByName} onDeleteItem={this.onDeleteItem}></ListContact>
      </ContainerList>
      </>
    )
  }
};
