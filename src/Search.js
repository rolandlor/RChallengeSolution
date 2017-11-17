import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import AutoCompleteTable from './AutoCompleteTable';
import { Navbar, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.textChange = this.textChange.bind(this);
    this.search = this.search.bind(this);
    this.showAutoCompleteChange = this.showAutoCompleteChange.bind(this);
    
  }
  textChange(e){
    this.props.changeText(e.target.value);
  }
  
  search() {
    this.props.searchText();
  }
  showAutoCompleteChange() {
    this.props.showAutoCompleteChange();
  }
    render() {
          return (<div><Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search" onChange={this.textChange} 
              onBlur={this.showAutoCompleteChange}/>
              <Button onClick={this.search}>Search</Button>
              <AutoCompleteTable text={this.props.text} 
              showAutoComplete={this.props.showAutoComplete}
              />
              
              
            </FormGroup>
            
            {' '}
            
          </Navbar.Form>
          </div>);
  }
  }

  export default Search;