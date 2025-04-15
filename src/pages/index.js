"use client"
import { Button, Container, Typography } from "@mui/material";
import { auth, provider, signInWithPopup } from "../../firebaseConfig";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };
  

  return (
    <>
      <Container maxWidth="sm" sx={{ textAlign: "center", marginTop: "5rem" }}>
      {/* <Typography variant="h4" gutterBottom>
        Sign in with Google
      </Typography> */}
      {!user ? (
        <Button variant="contained" color="primary" onClick={handleSignIn}>
          Sign in with Google
        </Button>
      ) : (
        <Typography variant="h6">Welcome, {user.displayName}!</Typography>
      )}
    </Container>
    </>
  );
}
