import React from 'react';
import users from './users';
import tglob from './vars';

class TableUserRow extends React.Component {
    render() {
      //tglob[1] = [];
      
      return(<tbody>
        
      {this.props.usersDisplay.map((user, index)=>{
        if(user!=undefined){
return (
  <tr>
  <td>{user.id}</td>
  <td>{user.name}</td>
  <td>{user.username}</td>
  <td>{user.email}</td>
  <td>{user.address.street}</td>
  <td>{user.address.suite}</td>
  <td>{user.address.city}</td>
  <td>{user.address.zipcode}</td>
  <td>{user.address.geo.lat}</td>
  <td>{user.address.geo.lng}</td>
  <td>{user.phone}</td>
  <td>{user.website}</td>
  <td>{user.company.name}</td>
  <td>{user.company.catchPhrase}</td>
  <td>{user.company.catchPhrase}</td>
  </tr>
  );
}
  })}
  </tbody>
  );
       /* for (var x in users[this.props.row]) {          
            if (x == "address") {
              for (var z in users[this.props.row].address) {
                if (z == "geo") {
                  for (var k in users[this.props.row].address.geo) {
                    tglob[1].push(<td key={k}>{users[this.props.row].address.geo[k]}</td>);
                  }
                  continue;
                }
                tglob[1].push(<td key={z}>{users[this.props.row].address[z]}</td>);
              }
              continue;
            }
            if (x == "company") {
              for (var r in users[this.props.row].company) {
                tglob[1].push(<td key={r + "company"}>{users[this.props.row].company[r]}</td>);
              }
              continue;
            }
            tglob[1].push(<td key={x}>{users[this.props.row][x]}</td>);
        }*/
        //return (<tr>{tglob[1]}</tr>);
            }
            }

  export default TableUserRow;