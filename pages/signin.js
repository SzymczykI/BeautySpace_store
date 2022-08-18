import Head from 'next/head'
import Link from 'next/link'
import { useState, useContext, useEffect } from 'react'
import { DataContext } from '../store/GlobalState'
import { postData } from '../utils/fetchData'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'

const Signin = () => {

    const initialState = { email: '', password: '' };
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData;

    const { state, dispatch } = useContext(DataContext)
    const { auth } = state;

    const router = useRouter();

    const handleChangeInput = e => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        dispatch({ type: 'NOTIFY', payload: {} })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        dispatch({ type: 'NOTIFY', payload: { loading: true } });
        const res = await postData('auth/login', userData);

        if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })
        dispatch({ type: 'NOTIFY', payload: { success: res.msg } });

        dispatch({
            type: 'AUTH', payload: {
                token: res.access_token,
                user: res.user
            }
        });

        Cookie.set('refreshtoken', res.refresh_token, {
            path: 'api/auth/accessToken',
            expires: 7
        })

        localStorage.setItem('firstLogin', true)
    }

    useEffect(() => {
        if(Object.keys(auth).length !== 0) router.push('/')
    }, [auth])

    return (
        <div>
            <Head>
                <title>Sign in</title>
            </Head>
            <form className="mx-auto my-4" style={{ maxWidth: '500px' }} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        name="email" value={email} onChange={handleChangeInput} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                        name="password" value={password} onChange={handleChangeInput} />
                    <div id="emailHelp" className="form-text">Password must have at least 6 characters</div>
                </div>
                <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#E2BB66', border: '#E2BB66' }}>Log in</button>
                <p className="my-2">You dont't have an account?
                    <Link href="/register"><a style={{ color: '#E2BB66' }}> Register now</a></Link></p>
            </form>
        </div>
    )
}

export default Signin