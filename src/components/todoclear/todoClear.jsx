// import React from 'react'

// const TodoClear = () => {
//   const {clearAll} = props
//   return (
//     <div className='d-flex gap-3'>
//         <button onClick={() => {}} className='w-50 btn btn-danger'>Clear All todo</button>
//         <button className=' w-50 btn btn-danger'>Clear done todo</button>
//     </div>
//   )
// }

// export default TodoClear

import React, { useState }  from 'react';

const  TodoClear = (props) => {
    const [cleared, setCleared] = useState(false);

    const handleClearAll = () => {
        if (props.clearAll) {
            props.clearAll();
            setCleared(true);
        }
    };

    return (
        <div className='text-center' >
            {cleared && <h3 className="text-success">ничего нету</h3>}
            <div className='d-flex gap-3'>
             <button onClick={handleClearAll} className='w-50 btn btn-danger'>Clear all todo</button>
             <button className='w-50 btn btn-danger'>Clear done todo</button>
            </div>
        </div>
    );
}

export default TodoClear;