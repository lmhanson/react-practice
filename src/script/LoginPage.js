import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loginDetails from '../../src/user-account.json';
import '../../src/style/loginPage.css';

export default function LoginPage(prop){
    const [inputUserName, setUserName] = useState(''); 
    const [inputUserpw, setUserPw] = useState('');  
    const [errorMsg, setErrorMsg] = useState('');   
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
            setErrorMsg('');
            console.log('Login Success !');
            navigate('/home');
            prop.createCookie(inputUserName, inputUserpw);
        } else {
            setUserPw('');
            setErrorMsg('Your username / password is incorrect !');
        }
    }

    function keyEnterPressed(e){
        if(e.key === 'Enter') { checkUserAccount(); }
    }

    return (
        <div className="login">
            <p>User Name</p> 
            <input type="text" value={inputUserName} onChange={ (e) => setUserName(e.target.value) }  onKeyDown={ keyEnterPressed }/>
            <p>Password</p>
            <input type="password" value={inputUserpw} onChange={ (e) =>  setUserPw(e.target.value) } onKeyDown={ keyEnterPressed } />
            <p className="error-msg">{ errorMsg }</p>
            <div className="enter-button">
                <button onClick={ checkUserAccount }> enter </button>
            </div>
        </div>
    );
}