import { Login as LoginComponent } from '@/components/Login';
import AuthButton from '@/components/buttons/AuthButton';

function Login() {
  return (
    <div className="flex flex-col text-center justify-center items-center gap-1">
      <div className="flex justify-center items-center max-w-4xl">
        <div className="grid grid-cols-2 gap-2 items-center">
          <div className="flex flex-col text-start gap-3 m-8">
            <h1 className="font-semibold text-2xl font-sans">
              Automate across your teams
            </h1>
            <p className="text-gray-700 text-xs text-start">
              Zapier Enterprise empowers everyone in your business to securely
              automate their work in minutes, not months—no coding required.
            </p>
            <div className="w-max">
              <AuthButton
                text="Explore Zapier Enterprise"
                className="bg-blue-500 hover:bg-[#2b2358] py-2 px-4 text-white text-xs font-semibold"
              />
            </div>
          </div>
          <LoginComponent />
        </div>
      </div>
    </div>
  );
}

export default Login;
