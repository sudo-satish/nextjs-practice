const LoginForm = () => (
  <form className="w-full text-center" onSubmit={(e) => {
      e.stopPropagation();
      e.preventDefault();
    }}>
    <input type="text" className="border w-1/2 border-gray-200 border-opacity-70 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent shadow-lg px-4 py-2" placeholder="Phone" />
    <button className="ml-3 border bg-purple-500 hover:bg-purple-600 cursor-pointer text-white border-purple-600 border-opacity-70 rounded focus:outline-none focus:ring-2 focus:border-transparent shadow-lg px-4 py-2">
      Send OTP
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-2 inline-block animate-ping" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
    </button>
  </form>
);

export default LoginForm;
