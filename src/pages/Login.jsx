import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { useNavigate, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        toast.loading('Loading...');
        const user = {
            email: email,
            password: password
        }
        try {
            const response = await axios.post('https://homebanking-app-2u3u.onrender.com/api/auth/login', user);
            let token = response.data;


            const responseCurrent = await axios.get('https://homebanking-app-2u3u.onrender.com/api/auth/current', { headers: { Authorization: `Bearer ${token}` } });

            let client = responseCurrent.data;
            client.token = token;
            dispatch(login(client));
            toast.success(response.data);
            navigate("/clientHome");

        } catch (error) {
            console.log(error);

            toast.error(error.response.data);
        }

    };



    return (
        <>
            <div className="flex flex-col items-center bg-gray-200 mt-4 p-7 rounded-2xl">
                <h2 className='text-center font-bold pt-2 text-4xl'>Login</h2>
                <form className="w-[300px] mt-5 flex flex-col gap-4" >
                    <div className='flex flex-col'>
                        <label htmlFor="email" className='font-semibold'>Email</label>
                        <input className='rounded-lg' placeholder="Email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="password" className='font-semibold'>Password</label>
                        <input className='rounded-lg' placeholder="Password" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className='mt-5 bg-[#AB9144] rounded-lg p-2 hover:bg-[#add8e6] font-semibold' type="submit" size="lg" onClick={handleLogin} >Login</button>
                </form>
                <NavLink className='mt-5 text-black text-semibold underline hover:bg-[#add8e6] p-2 rounded-lg' to="/register">Don't have an account? Register</NavLink>
            </div>
            <ToastContainer position='bottom-right' theme='dark' />
        </>
    );
}

export default Login;

