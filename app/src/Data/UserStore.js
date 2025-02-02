import React, {useEffect, useState, userState} from "react";
import { UserContext } from './UserContext'
function UserStore({children}){
    let [users,setUser]=useState('')
    
    return (
        <UserContext.Provider value={[users,setUser]}>
            {children}
        </UserContext.Provider>
    )
}
export default UserStore;