function SignIn() {
  return (
    <>
      <div className="container-fluid">
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <img src="images/cooasis-login.png" alt="" />
          </div>
          <div className="col-span-8 my-auto">
            <h2 className="text-[#131313] text-[53px] leading-[44.04px] font-medium text-center">Sign in to cooasis creator</h2>
            <div className="mt-52 flex justify-center items-center">
              <button className="text-[#00FB87] text-[24px] font-normal leading-[19.94px] bg-[#014F59] w-[370px] h-[83px] rounded-[999px] flex justify-center items-center">
                <img className="w-[25px] mr-[16px]" src="images/google.svg" alt="" />
                Signup using Google</button>
            </div>
            <p className="text-[#909090] text-[24px] font-normal leading-[19.94px] text-center my-12">or</p>
            <div className="flex justify-center items-center">
              
              <button className="text-[#646464] text-[24px] font-normal leading-[19.94px] bg-[#F2F2F2] w-[370px] h-[83px] rounded-[999px] flex justify-center items-center">
              <img className="w-[25px] mr-[16px]" src="images/email.svg" alt="" />
                Continue with email</button>
            </div>
            <div className="max-w-[457px] mx-auto mt-28">
              <p className="text-[#5A5A5A] text-[14px] leading-[20.52px] font-normal text-center">By creating an account you agree with our <span><u>Terms of Service, Privacy Policy,</u> </span>
                and our default <span><u>Notification Settings.</u></span></p>
            </div>
            <div className="mx-auto mt-16">
              <p className="text-[#5A5A5A] text-[14px] leading-[20.52px] font-normal text-center">Already have an account?<span><u>Sign In</u></span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;