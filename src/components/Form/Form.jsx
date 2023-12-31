import { Component } from 'react';
import { FormEl, Input, Button, Span } from './Form.styled';
class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handlInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handlSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => this.setState({ name: '', number: '' });
  render() {
    const { name, number } = this.state;
    return (
      <FormEl onSubmit={this.handlSubmit}>
        <label htmlFor="">
          <Span>Name</Span>
          <Input
            type="text"
            placeholder="Your name"
            name="name"
            value={name}
            onChange={this.handlInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="">
          <Span>Number</Span>
          <Input
            type="tel"
            placeholder="Your number"
            name="number"
            value={number}
            onChange={this.handlInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button type="submit">Add contact</Button>
      </FormEl>
    );
  }
}
export default Form;