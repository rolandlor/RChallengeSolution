import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import Search from './Search';
import Pagination from './Pagination';
import { Table } from 'react-bootstrap';
import users from './users';

class AutoCompleteTable extends React.Component {
  constructor(props) {
    super(props);
        
  }
  
    render() {
      
          return (<Table bordered hover responsive striped 
            style={{display: this.props.showAutoComplete ? 'block': 'none'}}>
          <thead></thead><tbody>{users.map((user, index)=>{
          if(user.name.indexOf(this.props.text)!=-1){
          return (
          <tr><td>{user.name}</td></tr>
          );
          }
          })}
          </tbody></Table>);
  
}
  }

  export default AutoCompleteTable;