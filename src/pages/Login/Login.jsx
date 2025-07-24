import { useEffect, useRef, useState } from 'react';
import { FaUser, FaLock, FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const captchaRef = useRef();
    const [disabled, setDisabled] = useState(true);

    useEffect(() =>{
        loadCaptchaEnginge(6);
    }, []);

    const handleValidateCaptcha = (e) =>{
        e.preventDefault();
        const userCaptchaValue = captchaRef.current.value;
        if(validateCaptcha(userCaptchaValue)){
            alert("Captcha Matched");
            setDisabled(false);
            captchaRef.current.value = '';
        } else {
            alert("Captcha Mismatched");
            setDisabled(true);
            captchaRef.current.value = '';
        }
    }

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const remember = form.remember.checked;
        
    }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="flex flex-col lg:flex-row-reverse w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Left Section - Branding */}
        <div className="lg:w-1/2 bg-gradient-to-br from-indigo-600 to-blue-500 p-12 hidden lg:flex flex-col justify-center">
          <div className="text-center">
            <div className="bg-white/20 p-4 rounded-full inline-block mb-6">
              <div className="bg-white p-3 rounded-full">
                <div className="bg-indigo-600 text-white p-3 rounded-full">
                  <FaUser className="h-12 w-12" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Welcome Back!</h1>
            <p className="text-indigo-100 text-lg">
              Secure access to your account. Keep your credentials safe and private.
            </p>
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <div className="text-center lg:text-left mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">Login to Your Account</h1>
            <p className="text-gray-600">
              Don't have an account? <a href="#" className="link link-primary font-medium">Sign up now</a>
            </p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text text-gray-700 font-medium">Email Address</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                  <FaUser className="h-5 w-5" />
                </span>
                <input 
                  id="email"
                  name="email"
                  type="email" 
                  className="input input-bordered w-full pl-10" 
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="label">
                  <span className="label-text text-gray-700 font-medium">Password</span>
                </label>
                <a href="#" className="text-sm link link-primary font-medium">Forgot password?</a>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                  <FaLock className="h-5 w-5" />
                </span>
                <input 
                  id="password"
                  name="password"
                  type="password" 
                  className="input input-bordered w-full pl-10" 
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
<div>
                <LoadCanvasTemplate />
                <input ref={captchaRef} type="text"  name='captcha' placeholder='Enter Captcha'  className="input input-bordered w-full pl-10" />
                <button type="button" className="btn btn-xs btn-primary mt-2" onClick={handleValidateCaptcha}>
                  Validate Captcha
                </button>
              </div>
            <div className="flex items-center">
              <input 
                id="remember"
                name="remember"
                type="checkbox" 
                className="checkbox checkbox-primary" 
              />
              
              <label htmlFor="remember" className="ml-2 text-gray-700">
                Remember me
              </label>
            </div>

            <button 
            disabled={disabled}
              type="submit"
              className="btn btn-primary w-full py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Sign In
              <FaLock className="h-4 w-4 ml-2" />
            </button>
          </form>

          <div className="divider my-8">Or continue with</div>

          <div className="flex justify-center gap-4">
            <button className="btn btn-outline gap-2">
              <FaGoogle className="text-red-500" />
              Google
            </button>
            <button className="btn btn-outline gap-2">
              <FaGithub className="text-gray-800" />
              GitHub
            </button>
            <button className="btn btn-outline gap-2">
              <FaFacebook className="text-blue-600" />
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;