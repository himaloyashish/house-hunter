import React from 'react';

const SignIn = () => {
    return (
        <div className='pt-6 bg-violet-300'>
            <form action="">
                <div className='flex flex-col bg-slate-200 w-1/3 m-auto py-4 px-3 '>
                    <div className='my-3'>
                        <label htmlFor="name">Log in</label>
                        <input className='ml-2 border-indigo-400 border' type="text" name="name" id="" />
                    </div>
                    <div className='my-3'>
                        <label htmlFor="email">Email</label>
                        <input className='ml-2 border border-indigo-400' type="text" name="Email" id="" />
                    </div>

                    <button className='border border-purple-400' type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;