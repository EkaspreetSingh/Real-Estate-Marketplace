import {link} from 'react-router-dom'
 


const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my7 '>Sign Up</h1>
      <form classNmae='flex flex-col gap-4'>
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username'/>
        <input type="text" placeholder='email' className='border p-3 rounded-lg' id='email'/>
        <input type="text" placeholder='password' className='border p-3 rounded-lg' id='password'/>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80' >Sign up</button>
      </form>
      <div className="flex  gap-2 mt-5"> Have an account ?</div>
      <link to={"/sign-in"}>
        <span ClassName='text-blue-700'>Sign in</span>
      </link>
    </div>
  )
}