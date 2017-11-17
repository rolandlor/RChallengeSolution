import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import { Navbar, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            handleSelect: ()=>{},
        };
      }
    render() {
          return (<Pagination
            bsSize="large"
            items={10}
            activePage={this.state.activePage}
            onSelect={this.handleSelect}
          />);
  }
  }

  export default Pagination;