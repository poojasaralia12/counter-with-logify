import React from 'react'
import {useLogify} from 'react-logify';
import Counter from './components/CounterApp'

export const App = () =>{
    const { user, onLogin, onLogout } = useLogify();

    return <>
        {!user.id && <center><button onClick={onLogin}>Signup / Login</button></center>}
        {user.id && 
            <>
                <center>
                    {user.name}
                    <img alt='' src={user.pic} style={{width:48,borderRadius:'50%',margin:'0 10px'}}/>
                    <button onClick={onLogout}>Logout</button>
                </center>
                <Counter/>
            </>
        }
    </>
}