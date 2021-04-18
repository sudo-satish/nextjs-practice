import Head from 'next/head';
import LoginForm from '../components/LoginForm/LoginForm';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex justify-center h-screen items-center flex-col">
          Login Page
          <div className="w-1/2 mt-6 flex justify-items-center">
            <LoginForm />
          </div>
        </div>
      </main>
    </>

  )
}
