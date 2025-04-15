"use client"
import { Button, Container, Typography } from "@mui/material";
import { auth, provider, signInWithPopup } from "../../firebaseConfig";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  const handleSignIn = async () => {
    try {
      // Optional: Ensure persistence before sign-in
      await setPersistence(auth, indexedDBLocalPersistence);
  
      // Try popup sign-in first
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
  
      // Fallback to redirect if popup fails due to browser restrictions
      if (
        error.code === 'auth/popup-blocked' ||
        error.code === 'auth/popup-closed-by-user' ||
        error.code === 'auth/operation-not-supported-in-this-environment'
      ) {
        try {
          await signInWithRedirect(auth, provider);
        } catch (redirectError) {
          console.error('Redirect Sign-In Failed:', redirectError);
        }
      }
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
