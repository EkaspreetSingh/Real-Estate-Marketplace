import {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';

export default function Signup(){
  const [formData, setFormData]= useState({});
  const [error,setError] = useState(null);
  const[loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const  handleChange=(e) =>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit=async (e) =>{
    e.preventDefault();
    try{
      setLoading(true);
      const res=await fetch('/api/auth/signup',{
        method:'post',
        headers: {
          'content-Type ' : 'application/json',
        },
        body:JSON.stringify(formData),
      });
      const data=await res.json();
      console.log(data);
      if(data.success==false){
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    }
    catch(error){
      setLoading(false);
      setError(error.message);
    }
    
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my7 '>Sign Up</h1>
      <form onsSubmit={handleSubmit} classNmae='flex flex-col gap-4'>
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username'  onChange={handleChange}/>
        <input type="text" placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange} />
        <input type="text" placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80' >{loading ? 'loading...' :'Sign up'}</button>
      </form>
      <div className="flex  gap-2 mt-5"> Have an account ?</div>
      <link to={"/sign-in"}>
        <span ClassName='text-blue-700'>Sign in</span>
      </link>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}