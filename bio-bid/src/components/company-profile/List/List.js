import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { GET_COMPANIES } from '../../../queries';

export default (props) => {        
    const {loading, error, data} = useQuery(GET_COMPANIES);

    if(loading) return <p>Loading...</p>
    if(error) return <p>{`Error: ${error.message}`}</p>

    return (
        <div className="container" style={{padding:"0 0% 0 0"}}>
            <div style={{display:"flex"}}>
                <h2 style={{display:"flex", justifyContent:"left", margin:"3% 0 3% 0"}}>List of Service Providers</h2>
                    <span style={{display:"flex", position:"relative", margin:"0 0 0 35%", top: "35px"}}>
                        <label style={{fontSize:"1.2rem"}}>
                            Search <input style={{border: "1px solid lightgray", borderRadius:"5px"}} type="text"/>
                        </label>
                    </span>
            </div>
            <hr></hr>

                        
                        {/* {data.companies && data.companies.map(item => {
                            console.log("array item", item)
                        })} */}

                        {data.companies.map(item => {
                            if (item){
                                console.log("each item", item)
                                return (
                                    <div style={{border:"1px solid black", margin:"1% 50px 1% 0px", padding:"1%", borderRadius:"5px"}}>
                                        <span style={{display:"flex", justifyContent:"center"}}>
                                            <h4>{item.name}</h4>
                                            <img style={{width:"200px", height:"150px", borderRadius:"5px", position:"absolute", right:"135px"}} src={item.logoURL}></img>
                                        </span>
                                        <p><span style={{fontWeight:"bold"}}>Company Overview:</span> {item.overview}</p>
                                        <p><span style={{fontWeight:"bold"}}>Website URL:</span> {item.website}</p>
                                        <p><span style={{fontWeight:"bold"}}>LinkedIn URL:</span> {item.linkedin}</p>
                                        
                                        <div style={{display:"flex", justifyContent:"space-between", padding:"25px 5px 0 5px"}}>
                                            <button style={{padding:"1%", borderRadius:"5px", width:"40%"}}>Claim {item.name} as your own</button>
                                            <button style={{padding:"1%", borderRadius:"5px", width:"30%"}}>More Info</button>
                                            <button style={{padding:"1%", borderRadius:"5px", width:"30%"}}>Reviews</button>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <p>Failed to load company info</p>
                                )
                            }
                        })}


                        {/* {data.companies} */}

    
    
            </div>
    )
};