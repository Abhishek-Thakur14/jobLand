 import React from 'react'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

 const  Header = () => {
   return (
     <>
     <nav className="py-4 flex justify-between items-center">
      
      <Link to="/">
          <img src="./png/logo-white.svg" className="h-28  " alt="Hirrd Logo" />
        </Link>
        <button variant='outline'>Login</button>
        {/* <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}
        </nav>
     </>
   )
 }
 
 export default  Header