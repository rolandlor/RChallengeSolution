import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import Search from './Search';
import Pagination from './Pagination';
import { Table } from 'react-bootstrap';

class ListTable extends React.Component {
    render() {
          return (<Table bordered hover responsive striped><TableHead />
          <TableBody usersDisplay={this.props.usersDisplay}/></Table>);
  }
  }

  export default ListTable;


  