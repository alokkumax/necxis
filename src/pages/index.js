"use client";
import { Button, Container, Typography } from "@mui/material";
import { auth, provider, signInWithPopup } from "../../firebaseConfig";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
  
      // 🔑 Get Firebase ID token
      const token = await result.user.getIdToken();
  
      // 🌐 Redirect to your Expo app with both UID and token via deep link
      window.location.href = `myapp://login-success?uid=${result.user.uid}&name=${result.user.displayName}&token=${token}`;
  
      // Set the user to state if needed
      setUser(result.user);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };
  
  return (
    <>
      <Container maxWidth="sm" sx={{ textAlign: "center", marginTop: "5rem" }}>
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
