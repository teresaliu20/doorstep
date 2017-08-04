import React from 'react';
import Member from './Member';
import { Modal, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';

class MembersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      usernames: [],
      suggestions: [],
      value: ''
    };
  }

  componentWillMount() {
    axios.get('http://localhost:3000/api/users')
    .then((resp) => {
      console.log('USERS', resp.data.users);
      var usernames = resp.data.users.map((user) => user.username);
      this.setState({usernames: usernames});
    })
    .catch((err) => console.log('cannot get all users'));
  }

  addMember(e) {
    e.preventDefault();
    // e.currentTarget.textContent};
  }

  escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  getSuggestionValue(suggestion) {
    return suggestion.username;
  }

  getSuggestions(value) {
    console.log('value', value);
    console.log('SUGGESTIONS', this.state.suggestions);
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    // returns an array of matches
    return inputLength === 0 ? [] : this.state.usernames.filter(user =>
      user.slice(0, inputLength) === inputValue
    );
  }

  renderSuggestion(suggestion) {
    return (
      <div>
        {suggestion}
      </div>
    );
  }

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested({value}) {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  }


  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }

  open() {
    this.setState({showModal: true});
  }

  close() {
    this.setState({showModal: false});
  }

  onValueChange(e) {
    var newValue = e.target.value || e.currentTarget.textContent;
    console.log('NEW VALUE', newValue);
    this.setState({value: newValue});
  }

  onAdd(e) {
    e.preventDefault();
    var username = this.input.input.defaultValue;
    console.log('adding', username);
    axios.post('http://localhost:3000/api/user', {
      username
    });
  }

  render() {
    const value = this.state.value;
    const usernames = this.state.usernames;
    const suggestions = this.state.suggestions;
    console.log('VALUE', value);
    const inputProps = {
      placeholder: 'Type a username',
      value,
      onChange: this.onValueChange.bind(this)
    };
    // if (usernames) {
      return (
        <div className="members-list">
          <button onClick={() => this.open()} className="add-members-button">Add members</button>
          <h2>Members</h2>
          <div className="members-box">
            <Member />
            <Member />
            <Member />
            <Member />
            <Member />
          </div>
          <Modal show={this.state.showModal} onHide={() => this.close()}>
            <Modal.Header closeButton>
              <Modal.Title>More neighbors! More fun!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <FormGroup>
                  <ControlLabel>Add memebers</ControlLabel>
                  <Autosuggest
                    ref={(input) => {this.input = input;}}
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
                    getSuggestionValue={this.getSuggestionValue.bind(this)}
                    renderSuggestion={this.renderSuggestion.bind(this)}
                    inputProps={inputProps}
                  />
                  <Button onClick={(e) => this.onAdd(e)}>Add</Button>
                </FormGroup>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => this.close()}>Cancel</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    // }
    // return (<div></div>);
  }
}

export default MembersList;
