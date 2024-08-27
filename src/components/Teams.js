// import React, { useState } from 'react'
// import Electronics from '../components/Electronics';
// import Aiml from '../components/Aiml';
// import Design from '../components/Design';
// import Webdev from '../components/Webdev';
// import Mechanical from '../components/Mechanical';
// import Robotics from '../components/Robotics';
// import Marketing from '../components/Marketing';
// import "../styles/style.css";


// function Teams({ selected,setselected }){
//     const [isActive,setIsActive] = useState(false);
//     const options = ["Electronics","Aiml","Mechancial","Robotics","Web Development","Marketing","Design"];
//     return (
//      <div className='dropdown' >
//         <div className='dropdown-btn' onClick={(e) =>
//             setIsActive(!isActive)}>
//                 Teams
//                 {/* <span className='fas fa-caret-down'></span> */}
//                 </div>
//                     {isActive && (
//                         <div className='verticals'>
//                             {options.map((option) => (
//                                 <div onClick={(e) => {
//                                     setselected(option);
//                                     setIsActive(false);
//                                 }} 
//                                 className='item'
//                                  >
//                                     {option}
//                                     </div>
//                             ))}
//                         </div>
//                     )}
//             </div>
//      //</div>
//     );
// }

// export default Teams


// import React, { useState } from 'react';
// import Electronics from '../components/Electronics';
// import Aiml from '../components/Aiml';
// import Design from '../components/Design';
// import Webdev from '../components/Webdev';
// import Mechanical from '../components/Mechanical';
// import Robotics from '../components/Robotics';
// import Marketing from '../components/Marketing';
// import "../styles/style.css";

// function Teams() {
//     const [selected, setSelected] = useState(null);
//     const [isActive, setIsActive] = useState(false);
    
//     const options = [
//         { name: "Electronics", component: <Electronics /> },
//         { name: "Aiml", component: <Aiml /> },
//         { name: "Mechanical", component: <Mechanical /> },
//         { name: "Robotics", component: <Robotics /> },
//         { name: "Web Development", component: <Webdev /> },
//         { name: "Marketing", component: <Marketing /> },
//         { name: "Design", component: <Design /> }
//     ];

//     return (
//         <div>
//             <div className='dropdown'>
//                 <div className='dropdown-btn' onClick={() => setIsActive(!isActive)}>
//                     Teams
//                 </div>
//                 {isActive && (
//                     <div className='verticals'>
//                         {options.map((option, index) => (
//                             <div
//                                 key={index}
//                                 onClick={() => {
//                                     setSelected(option.name);
//                                     setIsActive(false);
//                                 }}
//                                 className='item'
//                             >
//                                 {option.name}
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>

//             <div className="content">
//                 {selected && options.find(option => option.name === selected)?.component}
//             </div>
//         </div>
//     );
// }

// export default Teams;

import React, { useState } from 'react';
import Electronics from '../components/Electronics';
import Aiml from '../components/Aiml';
import Design from '../components/Design';
import Webdev from '../components/Webdev';
import Mechanical from '../components/Mechanical';
import Robotics from '../components/Robotics';
import Marketing from '../components/Marketing';
import "../styles/style.css";

function Teams() {
    const [selected, setSelected] = useState(null);
    const [isActive, setIsActive] = useState(false);
    
    const options = [
        { name: "Electronics", component: <Electronics /> },
        { name: "Aiml", component: <Aiml /> },
        { name: "Mechanical", component: <Mechanical /> },
        { name: "Robotics", component: <Robotics /> },
        { name: "Web Development", component: <Webdev /> },
        { name: "Marketing", component: <Marketing /> },
        { name: "Design", component: <Design /> }
    ];

    return (
        <div>
            <div className='dropdown'>
                <div className='dropdown-btn' onClick={() => setIsActive(!isActive)}>
                    Teams
                </div>
                {isActive && (
                    <div className='verticals'>
                        {options.map((option, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    setSelected(option.name);
                                    setIsActive(false);
                                }}
                                className='item'
                            >
                                {option.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="content">
                {selected && options.find(option => option.name === selected)?.component}
            </div>
        </div>
    );
}

export default Teams;
