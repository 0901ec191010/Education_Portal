import React from 'react'
import{useLocation} from 'react-router-dom';
 function home() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation(); 
    
  return (

    <div className='homepage'>
        <h1>hello{location.state.id} and welcome to the home </h1>
    </div>
    
  )
}
export default home