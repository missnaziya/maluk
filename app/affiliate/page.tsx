"use client";

import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  FormGroup,
  MenuItem,
  Select,
  InputLabel,
  Snackbar,
  Alert,
} from "@mui/material";
import { SectionTitle } from "@/components";
import toast from "react-hot-toast";

const Affiliate = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    contact: "",
    dob: "",
    age: "",
    gender: "",
    platforms: [],
    instagramHandle: "",
    instagramProfileLink: "",
    instagramFollowers: "",
    facebookHandle: "",
    address: "",
    state: "",
    barterCollaboration: "",
    comment: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [toastOpen, setToastOpen] = useState(false);

  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    setFormData((prev) => ({ ...prev, age: age.toString(), dob }));
  };

  const validate = () => {
    const newErrors: any = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.contact) newErrors.contact = "Contact Number is required";
    if (!formData.dob) newErrors.dob = "Date of Birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (formData.platforms.length === 0)
      newErrors.platforms = "Select at least one platform";
    if (!formData.instagramHandle)
      newErrors.instagramHandle = "Instagram Handle is required";
    if (!formData.instagramProfileLink)
      newErrors.instagramProfileLink = "Instagram Profile Link is required";
    if (!formData.instagramFollowers)
      newErrors.instagramFollowers = "Instagram Followers is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.barterCollaboration)
      newErrors.barterCollaboration = "This field is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.success("Thanks for form submission");
    } else {
        setErrors({});
        // setToastOpen(true);
      console.log("Form submitted successfully:", formData);
      // Clear the form
      setFormData({
        email: "",
        name: "",
        contact: "",
        dob: "",
        age: "",
        gender: "",
        platforms: [],
        instagramHandle: "",
        instagramProfileLink: "",
        instagramFollowers: "",
        facebookHandle: "",
        address: "",
        state: "",
        barterCollaboration: "",
        comment: "",
      });
    }
  };

  const handleClear = () => {
    setFormData({
      email: "",
      name: "",
      contact: "",
      dob: "",
      age: "",
      gender: "",
      platforms: [],
      instagramHandle: "",
      instagramProfileLink: "",
      instagramFollowers: "",
      facebookHandle: "",
      address: "",
      state: "",
      barterCollaboration: "",
      comment: "",
    });
    setErrors({});
  };

  return (
    <div className="bg-white">
      <SectionTitle
        title="Become an affiliate"
        path="Home | Become an affiliate"
      />
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          p: 4,
          m:4,
          boxShadow: 3,
          maxWidth: 800,
          mx: "auto",
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
          User Information Form
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
          onSubmit={handleSubmit}
        >
          {/* Email Field */}
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            error={!!errors.email}
            helperText={errors.email}
            required
          />
          {/* Name Field */}
          <TextField
            label="Name"
            type="text"
            fullWidth
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            error={!!errors.name}
            helperText={errors.name}
            required
          />
          {/* Contact Number Field */}
          <TextField
            label="Contact Number"
            type="tel"
            fullWidth
            value={formData.contact}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, contact: e.target.value }))
            }
            error={!!errors.contact}
            helperText={errors.contact}
            required
          />
          {/* Remaining fields go here with similar structure */}
              {/* Date of Birth Field */}
        <TextField
          label="Date of Birth"
          type="date"
          InputLabelProps={{ shrink: true }}
          fullWidth
          required
          onChange={(e) => calculateAge(e.target.value)}
        />
        {/* Age Field */}
        <TextField label="Age"  fullWidth  />
        {/* Gender Radio Buttons */}
        <Box>
          <Typography>Gender</Typography>
          <RadioGroup row>
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel value="Female" control={<Radio />} label="Female" />
          </RadioGroup>
        </Box>
        {/* Preferred Platforms */}
        <Box>
          <Typography>Preferred Platforms</Typography>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox />}
              label="Instagram"
              value="Instagram"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Facebook"
              value="Facebook"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="YouTube"
              value="YouTube"
            />
            <FormControlLabel control={<Checkbox />} label="Other" value="Other" />
          </FormGroup>
        </Box>
        {/* Instagram Handle */}
        <TextField
          label="Instagram Handle"
          type="text"
          placeholder="Your Instagram Handle"
          fullWidth
          required
        />
        {/* Instagram Profile Link */}
        <TextField
          label="Instagram Profile Link"
          type="text"
          placeholder="Your Instagram Profile"
          fullWidth
          required
        />
        {/* Instagram Followers */}
        <TextField
          label="Instagram Followers"
          type="text"
          placeholder="Your Instagram Followers"
          fullWidth
          required
        />
        {/* Facebook Handle */}
        <TextField
          label="Facebook Handle"
          type="text"
          placeholder="Your Facebook Handle"
          fullWidth
        />
        {/* Address */}
        <TextField
          label="Address"
          multiline
          rows={4}
          placeholder="Your address"
          fullWidth
          required
        />
        {/* State Selection */}
        {/* <Box>
          <InputLabel id="state-label">State</InputLabel>
          <Select
            labelId="state-label"
            defaultValue=""
            fullWidth
            required
          >
            <MenuItem value="">Select a State</MenuItem>
            <MenuItem value="andhra-pradesh">Andhra Pradesh</MenuItem>
            <MenuItem value="arunachal-pradesh">Arunachal Pradesh</MenuItem>
            <MenuItem value="assam">Assam</MenuItem>
          </Select>
        </Box> */}

<Box>
  <InputLabel id="state-label">State</InputLabel>
  <Select
    labelId="state-label"
    defaultValue=""
    fullWidth
    required
  >
    <MenuItem value="">Select a State</MenuItem>
    <MenuItem value="andhra-pradesh">Andhra Pradesh</MenuItem>
    <MenuItem value="arunachal-pradesh">Arunachal Pradesh</MenuItem>
    <MenuItem value="assam">Assam</MenuItem>
    <MenuItem value="bihar">Bihar</MenuItem>
    <MenuItem value="chhattisgarh">Chhattisgarh</MenuItem>
    <MenuItem value="goa">Goa</MenuItem>
    <MenuItem value="gujarat">Gujarat</MenuItem>
    <MenuItem value="haryana">Haryana</MenuItem>
    <MenuItem value="himachal-pradesh">Himachal Pradesh</MenuItem>
    <MenuItem value="jharkhand">Jharkhand</MenuItem>
    <MenuItem value="karnataka">Karnataka</MenuItem>
    <MenuItem value="kerala">Kerala</MenuItem>
    <MenuItem value="madhya-pradesh">Madhya Pradesh</MenuItem>
    <MenuItem value="maharashtra">Maharashtra</MenuItem>
    <MenuItem value="manipur">Manipur</MenuItem>
    <MenuItem value="meghalaya">Meghalaya</MenuItem>
    <MenuItem value="mizoram">Mizoram</MenuItem>
    <MenuItem value="nagaland">Nagaland</MenuItem>
    <MenuItem value="odisha">Odisha</MenuItem>
    <MenuItem value="punjab">Punjab</MenuItem>
    <MenuItem value="rajasthan">Rajasthan</MenuItem>
    <MenuItem value="sikkim">Sikkim</MenuItem>
    <MenuItem value="tamil-nadu">Tamil Nadu</MenuItem>
    <MenuItem value="telangana">Telangana</MenuItem>
    <MenuItem value="tripura">Tripura</MenuItem>
    <MenuItem value="uttar-pradesh">Uttar Pradesh</MenuItem>
    <MenuItem value="uttarakhand">Uttarakhand</MenuItem>
    <MenuItem value="west-bengal">West Bengal</MenuItem>
  </Select>
</Box>


        <Box>
          <Typography>Are u Open for Barter Collaboration?</Typography>
          <RadioGroup row>
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </Box>
        <TextField
          fullWidth
          label="Comment"
          multiline
          rows={10}
          margin="normal"
          placeholder="Your comment"
        />
          {/* Buttons */}
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Button
              variant="contained"
              style={{
                background: "#b09614",
              }}
              fullWidth
              type="submit"
            >
              Submit
            </Button>
            <Button
              variant="outlined"
              fullWidth
              style={{
                background: "#f1efdd",
              }}
              onClick={handleClear}
            >
              Clear
            </Button>
          </Box>
        </Box>
        <Snackbar
          open={toastOpen}
          autoHideDuration={4000}
          onClose={() => setToastOpen(false)}
        >
          <Alert
            onClose={() => setToastOpen(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Form submitted successfully!
          </Alert>
        </Snackbar>
      </Box>
    </div>
  );
};

export default Affiliate;
