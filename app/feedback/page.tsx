"use client";
import { CustomButton, Newsletter, SectionTitle } from "@/components";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import NewsLetterFooter from "@/components/NewsLetterfooter";


const FeedbackPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

//   useEffect(() => {
//     // chechking if user has already registered redirect to home page
//     if (sessionStatus === "authenticated") {
//       router.replace("/");
//     }
//   }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
 
    
    const email = e.target[4].value;
    const password = e.target[6].value;
    const confirmPassword = e.target[8].value;

    if (!isValidEmail(email)) {
      // setError("Email is invalid");
    //   toast.error("Email is invalid");
    //   toast.error("Email is invalid");
      toast.success("Thanks for form submission");
      return;
    }

    if (!password || password.length < 8) {
      // setError("Password is invalid. Password must be at least 8 characters long.");
      toast.error("Password is invalid. Password must be at least 8 characters long.");
      return;
    }

    if (confirmPassword !== password) {
      // setError("Passwords are not equal");
      toast.error("Passwords are not equal");
      return;
    }

    try {
      // sending API request for registering user
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (res.status === 400) {
        toast.error("This email is already registered");
        setError("The email already in use");
      }
      if (res.status === 200) {
        setError("");
        toast.success("Registration successful");
        // to do if   props.return url
        router.push("/login");
      }
    } catch (error) {
      toast.error("Error, try again");
      setError("Error, try again");
      console.log(error);
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="bg-white">
      <SectionTitle title="Feedback" path="Home | Feedback" />
      <div 
      // className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-white"
      >
    
           <Box
      className="register-section"
      sx={{
        backgroundColor: "#f9f9f9",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        padding:"20px"
    }}
    >
      <Box
        className="register-cont"
        sx={{
          
          maxWidth: "800px",
          margin: "auto",
          backgroundColor: "white",
          boxShadow: 2,
          borderRadius: 2,
        }}
      >
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
              <img
                src="/logo.png"
                alt="Logo"
                style={{ width: "200px", borderRadius: "10px",margin:"auto" }}
              />
              <Typography
                sx={{
                  color: "#b09615",
                  fontWeight: "bold",
                  marginTop: 2,
                }}
              >
                We Value Your Feedback!
              </Typography>
              <Typography>
                Your feedback helps us improve. Please fill out the form below to share your thoughts with us. Thank you for taking the time to share your opinion!
              </Typography>
            </Box>
          </Box>

          {/* Right Section */}
          <Box className="col-md-6" sx={{ flex: "1 1 50%", padding: 4 }}>
            <Box>
            <form onSubmit={handleSubmit}>
  <TextField
    fullWidth
    name="name"
    label="Name"
    margin="normal"
    required
    sx={{
        backgroundColor: "#f1efdd",
        "& .MuiInputBase-root": {
          backgroundColor: "#f1efdd",
        },
      }}
    InputProps={{
        sx: {
          backgroundColor: "#f1efdd !important",
        },
      }}
  />
  <TextField
    fullWidth
    name="email"
    label="Email"
    margin="normal"
    required
    type="email"
    sx={{
      "& .MuiInputBase-root": {
        backgroundColor: "#f1efdd",
      },
    }}
  />
 

  {/* Select Feedback Type */}
  <TextField
    select
    fullWidth
    name="feedbackType"
    label="Select Feedback Type"
    margin="normal"
    required
    SelectProps={{
      native: true,
    }}
    sx={{
      "& .MuiInputBase-root": {
        backgroundColor: "#f1efdd",
      },
    }}
  >
    <option value="" disabled>
      Select Feedback Type
    </option>
    <option value="general">General</option>
    <option value="complaint">Complaint</option>
    <option value="suggestion">Suggestion</option>
    <option value="other">Other</option>
  </TextField>

  {/* Textarea for Message */}
  <TextField
    fullWidth
    name="message"
    label="Message"
    margin="normal"
    required
    multiline
    rows={4}
    sx={{
      "& .MuiInputBase-root": {
        backgroundColor: "#f1efdd",
      },
    }}
  />

  <Button
    type="submit"
    variant="contained"
    sx={{
      backgroundColor: "#b09615 !important",
      color: "white",
      mt: 2,
      "&:hover": { backgroundColor: "#998410" },
    }}
    fullWidth
  >
    Submit Feedback
  </Button>
</form>


              <Divider sx={{ my: 3 }} />

        

              {error && (
                <Typography
                  mt={2}
                  textAlign="center"
                  color="error"
                  fontSize="14px"
                >
                  {error}
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    <NewsLetterFooter />
      </div>
    </div>
  );
};

export default FeedbackPage;
