import React from 'react';
import './SearchCom.css'

export default function SearchCom() {
    return (
        <>
              <div className="col-md-3 mb-4 ">
                <div className="search p-3 rounded ">
                    <h3 >Search</h3>
                    <form action="" className="search-form ">
                    <label htmlFor="coun-input" >Destination/property name:</label>
                    <div className="inp mb-2">
                        <svg aria-hidden="true" className="inp-icon " fill="#333333" focusable="false" height="20" role="presentation" width="20" viewBox="0 0 24 24"><path d="M17.464 6.56a8.313 8.313 0 1 1-15.302 6.504A8.313 8.313 0 0 1 17.464 6.56zm1.38-.586C16.724.986 10.963-1.339 5.974.781.988 2.9-1.337 8.662.783 13.65c2.12 4.987 7.881 7.312 12.87 5.192 4.987-2.12 7.312-7.881 5.192-12.87zM15.691 16.75l7.029 7.03a.75.75 0 0 0 1.06-1.06l-7.029-7.03a.75.75 0 0 0-1.06 1.06z"></path></svg>
                        <input className="w-100   px-4 py-2" type="search" placeholder="Search-Value" placeholder="Search-Value" id="coun-input"/>
                    </div>
                    <label htmlFor="check-in" className="fs-6 ">Check-in date</label>
                    <div className="inp mb-2">
                        <input className="px-4 py-2 w-100" type="date"  id="check-in"/>
                    </div>
                    <label htmlFor="check-out" className="fs-6">Check-out date</label>
                    <div className="inp mb-2">
                        <input className="px-4 py-2 w-100" type="date"  id="check-out"/>
                        <label htmlFor="check-out" className="fs-6 ">7 nights stay</label>
                    </div>
                    <div className="dropdown mb-2">
                        <button className="btn bg-white w-100  dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            1 adult · 0 children ·1 room
                        </button>
                        <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                          <li><a className="dropdown-item active" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                          <li><hr className="dropdown-divider"/></li>
                          <li><a className="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                      </div>
                     

                      
                      <div className="checkbox mb-1">
                          <input  type="checkbox" id="entier"/> <label htmlFor="entier ">Entire homes & apartments</label>
                          

                              <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                            </svg>
                      
                      </div>
                      <div className="checkbox mb-1 ">
                        <input  type="checkbox" id="workk"/> <label htmlFor="workk ">I'm traveling for work</label>
                      

                            <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                          </svg>
                        
                  
                    </div>
                    <input  className="btn-primary w-100 p-2 fs-5 my-2" type="submit" value="Search"/>
                    </form>
    
                    


                    
                </div>
            </div>
        </>
    )
}
