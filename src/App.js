import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListTable from './ListTable';
import Search from './Search';
import users from './users';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      searchText: '',
      usersDisplay: users,
      showAutoComplete: false
    };
    
    this.filterChange = this.filterChange.bind(this);
    this.searchText = this.searchText.bind(this);
    this.showAutoCompleteChange = this.showAutoCompleteChange.bind(this);
  }
  
  filterChange(text) {
    this.setState({
      filter: text,
      showAutoComplete: true
      
    });
  }
  
  showAutoCompleteChange() {
    this.setState({
      showAutoComplete: false      
    });
  }
  searchText() {
    this.setState({
      usersDisplay: users.map((user, index)=>{
        if(user.name.indexOf(this.state.filter)!=-1){
return (
  user
  );
}

  })
    });
    
  }
  render() {
    return (
      <div class="container"><Search text={this.state.filter} 
      changeText={this.filterChange} searchText={this.searchText} 
      showAutoComplete={this.state.showAutoComplete}
      showAutoCompleteChange={this.showAutoCompleteChange}
      filterChangeClick={this.filterChangeClick}/>
      <ListTable usersDisplay={this.state.usersDisplay} /></div>
    );
  }
}

export default App;
