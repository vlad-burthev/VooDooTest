import "./SignForm.scss";

const SignForm = () => {
  return (
    <div className="text-center py-12 ">
      <p className="md:text-xl text-sm mb-6">
        Be the first one to know when we launch our beta!
      </p>
      <div className="flex justify-center">
        <input
          type="text"
          className="md:w-5/12 w-8/12 mr-3 rounded pl-4 text-black font-semibold text-base focus:outline-none"
          placeholder="Email"
        />
        <button className="p-4 bg-orange-600 font-bold rounded outline-none hover:bg-orange-500">
          Sign-up
        </button>
      </div>
    </div>
  );
};

export default SignForm;
