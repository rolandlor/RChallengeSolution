import React from 'react';
import users from './users';
import tglob from './vars';

class TableHead extends React.Component {
    render() {
        


        /*for(var x in users[0]){
            if(x=="address"){
            for(var z in users[0].address){
            if(z=="geo"){
            for(var k in users[0].address.geo){
            tglob[0].push(<td key={k}>{k}</td>);
            }
            continue;
            }
            tglob[0].push(<td key={z}>{z}</td>);
            }
            continue;
            }
            if(x=="company"){
            for(var r in users[0].company){
            tglob[0].push(<td key={r+"company"}>{r}</td>);
            }
            continue;
            }
            tglob[0].push(<td key={x}>{x}</td>);
        }*/
        return (<thead>
            
    
      <tr>
      <td>id</td>
      <td>name</td>
      <td>username</td>
      <td>email</td>
      <td>street</td>
      <td>suite</td>
      <td>city</td>
      <td>zipcode</td>
      <td>lat</td>
      <td>lng</td>
      <td>phone</td>
      <td>website</td>
      <td>name</td>
      <td>catchPhrase</td>
      <td>bs</td>
      </tr>
      
     </thead>);
            }
            }

  export default TableHead;


