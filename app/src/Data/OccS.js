import React, {useEffect, useState, userState} from "react";
import { OccContext } from "./OccC"; 
function OccStore({children}){
    let [occ,setOcc]=useState('')
    return (
        <OccContext.Provider value={[occ,setOcc]}>
            {children}
        </OccContext.Provider>
    )
}
export default OccStore;