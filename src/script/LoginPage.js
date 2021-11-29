import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loginDetails from '../../src/user-account.json';

export default function LoginPage(prop){
    const [inputUserName, setUserName] = useState(''); 
    const [inputUserpw, setUserPw] = useState('');     
    let navigate = useNavigate();

    useEffect(() => {
        if(prop.checkCookie()) {
            console.log('Cookie already Exist !');
            navigate('/home');
        };
    })

    function checkUserAccount() {
        var userName = loginDetails.userAccount[0].userName;
        var userPw = loginDetails.userAccount[0].password;

        if(userName === inputUserName && inputUserpw === userPw ) {
            console.log('Login Success !');
            navigate('/home');
            prop.createCookie(inputUserName, inputUserpw);
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