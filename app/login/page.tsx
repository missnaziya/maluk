"use client";
import { CustomButton, SectionTitle } from "@/components";
import ENDPOINT from "@/config/appConfig";
import { isValidEmailAddressFormat } from "@/lib/utils";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [showForgot, setShowForgot] = useState(false);
  // const session = useSession();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    // if user has already logged in redirect to home page
    if (sessionStatus === "authenticated") {
      router.replace("/home");
    }
  }, [sessionStatus, router]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmailAddressFormat(email)) {
      setError("Email is invalid");
      toast.error("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      toast.error("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      toast.error("Invalid email or password");
      if (res?.url) router.replace("/");
    } else {
      setError("");
      toast.success("Successful login");
    }
  };

  const handleForgotPassword = async (e: any) => {
    e.preventDefault();

    
    const email = e.target[0].value;
    const newPassword = e.target[1].value;

 
    if (!newPassword || newPassword.length < 8) {
      toast.error("Password length should be 8");
      return;
    }
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`;
    // const url = `${ENDPOINT.BASE_URL}/api/users`;
    const data = { email, new_password: newPassword };
  
    try {
      const response = await axios.patch(url, data);
  
      if (response.status === 200) {
        toast.success(response.data.message);
        (e.target as HTMLFormElement).reset();
        setShowForgot(false);
      } else {
        toast.error(response.data.error || 'An error occurred. Please try again.');
      }
    } catch (error: any) {
      toast.error(error.response?.data?.error || 'An unexpected error occurred');
    }
  };
  

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="bg-white">
      <SectionTitle title="Login" path="Home | Login" />
      <div 
      // className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-white"
      >
        {/* <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-2xl font-normal leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div> */}

        {/* <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
        {  !showForgot? 
         <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm leading-6 text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm leading-6">
                  <span
                    onClick={()=>{setShowForgot(true)}}
                    className="font-semibold text-black hover:text-black cursor-pointer"
                  >
                    Forgot password?
                  </span>
                </div>
              </div>

              <div>
                <CustomButton
                  buttonType="submit"
                  text="Sign in"
                  paddingX={3}
                  paddingY={1.5}
                  customWidth="full"
                  textSize="sm"
                />
              </div>
            </form>:
             <form className="space-y-6" onSubmit={handleForgotPassword}>
             <div>
               <label
                 htmlFor="email"
                 className="block text-sm font-medium leading-6 text-gray-900"
               >
                 Email address
               </label>
               <div className="mt-2">
                 <input
                   id="email"
                   name="email"
                   type="email"
                   autoComplete="email"
                   required
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>

             <div>
               <label
                 htmlFor="new_password"
                 className="block text-sm font-medium leading-6 text-gray-900"
               >
               New  Password
               </label>
               <div className="mt-2">
                 <input
                   id="new_password"
                   name="new_password"
                   type="password"
                   autoComplete="current-password"
                   required
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>

          

             <div>
               <CustomButton
                 buttonType="submit"
                 text="Update"
                 paddingX={3}
                 paddingY={1.5}
                 customWidth="full"
                 textSize="sm"
               />
             </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-6 text-gray-900">
                   
                    <span className=" text-blue-500 cursor-pointer"    onClick={()=>{setShowForgot(false)}}>
                    Go Back
                    </span>
                  </span>
                </div>
           </form>
}
            <div>
              <div className="relative mt-10">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-6 text-gray-900">
                    Dont have an account{" "}
                    <Link className=" text-blue-500" href="/register">
                      register here
                    </Link>
                  </span>
                </div>
              </div>

             
              <p className="text-red-600 text-center text-[16px] my-4">
                {error && error}
              </p>
            </div>
          </div>
        </div> */}


<Box className="login-section" sx={{ backgroundColor: "#f9f9f9", minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <Box className="login-cont" sx={{ maxWidth: "800px", margin: "auto", backgroundColor: "white", boxShadow: 2, borderRadius: 2 }}>
        <Box className="row" sx={{ display: "flex", flexWrap: "wrap" }}>
          {/* Left Section */}
          <Box
            className="col-md-6"
            sx={{
              flex: "1 1 50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 5,
              borderRight: { xs: 0, md: "1px solid #f9f9f9" },
            }}
          >
            <Box textAlign="center">
              <img src="/logo.png" alt="Logo" style={{ width: "200px", borderRadius: "10px", margin:"auto" }} />
              <Typography sx={{ color: "#b09615", fontWeight: "bold", marginTop: 2 }}>Welcome back!</Typography>
              <Typography>Please log in to your account to continue. If you don't have an account, you can sign up.</Typography>
            </Box>
          </Box>

          {/* Right Section */}
          <Box className="col-md-6" sx={{ flex: "1 1 50%", padding: 4 }}>
            <Box>
              {showForgot ? (
                <form onSubmit={handleForgotPassword}>
                  <Typography variant="h6" mb={2}>
                    Forgot Password
                  </Typography>
                  <TextField fullWidth name="email" label="Email Address" margin="normal" required />
                  <TextField fullWidth name="new_password" label="New Password" type="password" margin="normal" required />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ backgroundColor: "#b09615 !important", color: "white", mt: 2, "&:hover": { backgroundColor: "#998410" } }}
                    fullWidth
                  >
                    Update
                  </Button>
                  <Typography mt={2} textAlign="center">
                    <Link
                    href=""
                      onClick={() => setShowForgot(false)}
                      // sx={{ cursor: "pointer", color: "#b09615", textDecoration: "none" }}
                    >
                      Go Back
                    </Link>
                  </Typography>
                </form>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* <Typography variant="h6" mb={2}>
                    Sign in to your account
                  </Typography> */}
                  <TextField fullWidth name="email" label="Email Address" margin="normal" required  />
                  <TextField fullWidth name="password" label="Password" type="password" margin="normal" required />
                  <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                    <Box display="flex" alignItems="center">
                      <input type="checkbox" id="remember-me" name="remember-me" style={{ marginRight: "8px",  }} />
                      <label htmlFor="remember-me" style={{ fontSize: "14px" }}>
                        Remember me
                      </label>
                    </Box>
                    <Link
                    href=""
                      onClick={() => setShowForgot(true)}
                      // sx={{ cursor: "pointer", color: "#b09615", textDecoration: "none", fontSize: "14px" }}
                    >
                      Forgot Password?
                    </Link>
                  </Box>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ backgroundColor: "#b09615 !important", color: "white", mt: 2,padding:2, fontWeight:"bold", "&:hover": { backgroundColor: "#998410" } }}
                    fullWidth
                  >
                    Log In
                  </Button>
                </form>
              )}
              <Divider sx={{ my: 3 }} />
              <Typography textAlign="center">
                Don't have an account?{" "}
                <Link href="/register" >
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
      </div>
    </div>
  );
};

export default LoginPage;
