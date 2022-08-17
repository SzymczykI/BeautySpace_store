import Head from 'next/head'
import Link from 'next/link'

const Signin = () => {
    return (
        <div>
            <Head>
                <title>Sign in</title>
            </Head>
            <form className="mx-auto my-4" style={{ maxWidth: '500px' }}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
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