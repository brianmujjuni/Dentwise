
import { SignedOut, SignInButton,SignedIn } from '@clerk/nextjs'
import React from 'react'

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <SignedOut>
        <SignInButton mode='modal'/>
      </SignedOut>
      <SignedIn>
        <SignedOut>lOGOUT</SignedOut>
      </SignedIn>
    </div>
  )
}

export default Home