import React from "react";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
 
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

 

  return (
    // <div>
    //   <nav className="container navbar navbar-expand-lg navbar-light ">
    //     {/* <!-- Container wrapper --> */}
    //     <div>
    //       <img src={"https://seeklogo.com/images/I/igreja-adventista-do-setimo-dia-logo-C154997752-seeklogo.com.png" }
    //         alt="" 
    //         style={{height:'55px'}}/>
    //     </div>
    //     <div className="container-fluid">
    //       {/* <!-- Toggle button --> */}
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-mdb-toggle="collapse"
    //         data-mdb-target="#navbarRightAlignExample"
    //         aria-controls="navbarRightAlignExample"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <i className="fas fa-bars"></i>
    //       </button>

    //       {/* <!-- Collapsible wrapper --> */}
    //       <div className="collapse navbar-collapse" id="navbarRightAlignExample">
    //         {/* <!-- Left links --> */}
    //         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <a className="nav-link active" aria-current="page" href="#">
    //               Home
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">
    //               Link
    //             </a>
    //           </li>
    //           {/* <!-- Navbar dropdown --> */}
    //           <li className="nav-item dropdown">
    //             <a
    //               className="nav-link dropdown-toggle"
    //               href="#"
    //               id="navbarDropdown"
    //               role="button"
    //               data-mdb-toggle="dropdown"
    //               aria-expanded="false"
    //             >
    //               Dropdown
    //             </a>
    //             {/* <!-- Dropdown menu --> */}
    //             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //               <li>
    //                 <a className="dropdown-item" href="#">
    //                   Action
    //                 </a>
    //               </li>
    //               <li>
    //                 <a className="dropdown-item" href="#">
    //                   Another action
    //                 </a>
    //               </li>
    //               <li>
    //                 <hr className="dropdown-divider" />
    //               </li>
    //               <li>
    //                 <a className="dropdown-item" href="#">
    //                   Something else here
    //                 </a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link disabled">Disabled</a>
    //           </li>
    //         </ul>
    //         {/* <!-- Left links --> */}
    //       </div>
    //       {/* <!-- Collapsible wrapper --> */}
    //     </div>
    //     {/* <!-- Container wrapper --> */}
    //   </nav>
     
    // </div>

    <nav className="navbar m-auto  navbar-expand-md navbar-light bg-light fixed-top">
      <div className="container d-flex justify-content-center m-auto" style={{ marginLeft: '15px', marginRight: '15px' }}>
        <a className="navbar-brand d-flex justify-content-center" href="/">
          <img src="data:image/png;base64,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" alt="logo" height="30" />
        </a>

        <button className="navbar-toggler" type="button" onClick={handleToggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>



  );
}
