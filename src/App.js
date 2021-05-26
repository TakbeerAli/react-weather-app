// import React, { Component } from 'react'

// export class App extends Component {

//   state = {
//     latitude : null

//   }

//   componentDidMount(){
//     navigator.geolocation.getCurrentPosition(function(position) {
//      console.log(position.coords.latitude);
//       // this.setState({latitude:position.coords.latitude})

//     })
//   }

  
//   render() {
//     return (
//       <div>

//       return 1;
        
//       </div>
//     )
//   }
// }

// export default App


import React from 'react'

import UserLocation from "./Component/getUserLocation"

const  App = () => {


  return (
   
    <div>
     <UserLocation/>
    </div>
  )
}


export default App;

