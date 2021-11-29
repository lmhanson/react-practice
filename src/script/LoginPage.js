import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginDetails from '../../src/user-account.json';

export default function LoginPage(){
    const [inputUserName, setUserName] = useState(''); 
    const [inputUserpw, setUserPw] = useState('');     
    let navigate = useNavigate();

    function checkUserAccount() {
        var userName = loginDetails.userAccount[0].userName;
        var userPw = loginDetails.userAccount[0].password;

        if(userName === inputUserName && inputUserpw === userPw ) {
            console.log('ac match !');
            navigate('/home');
        }
    }

    return (
        <div className="login">
            <p>User Name</p> 
            <input onChange={ (e) => setUserName(e.target.value) } />
            <p>Password</p>
            <input onChange={ (e) =>  setUserPw(e.target.value) } />
            <div className="enter-button">
                <button onClick={ checkUserAccount }>enter</button>
            </div>
        </div>
    );
}