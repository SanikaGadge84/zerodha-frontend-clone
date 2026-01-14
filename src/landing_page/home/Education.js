import React from 'react';

function Education() {
    return ( 
       <div className='container mt-5'>
        <div className='row'>
            <div className='col-6'>
                <img src='/media/images/education.svg' style={{width:"90%"}}/>
            </div>
             <div className='col-6 p-5'>
                <h1 className='fs-2 mb-5'>Free and open market education</h1>
                <p className='mb-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading</p>
             
               <a href='' style={{textDecoration:"none"}}> Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                <p className='mt-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading</p>
             
               <a href='' style={{textDecoration:"none"}}> Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
             </div>
        </div>
       </div>
     );
}

export default Education;