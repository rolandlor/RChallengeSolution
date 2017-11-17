import React from 'react';
import users from './users';
import tglob from './vars';
import TableUserRow from './TableUserRow';


class TableBody extends React.Component {
    render() {
        //for (var i = 0; i < users.length; i++) {            
           // tglob[2].push(<TableUserRow row={i} key={i}/>);
            
          //}
                  return (<TableUserRow usersDisplay={this.props.usersDisplay}/>);
                  //<tbody>{tglob[2]}</tbody>
          }
          }

  export default TableBody;