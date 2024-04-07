"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { firebaseClient } from '../../../firebaseClient';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default (_props: any) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const router = useRouter();
  return (
    <div>
      <Link href="/">
        <p>Go back to home page</p>
      </Link>
      <br />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={'Email'}
      />
      <input
        type={'password'}
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder={'Password'}
      />
      <button
        onClick={async () => {
          await createUserWithEmailAndPassword(firebaseClient, email, pass)
          router.push("/login");
        }}
      >
        Create account
      </button>
      <br/>
      <button
        onClick={async () => {
            await signInWithEmailAndPassword(firebaseClient, email, pass)
            router.push("/login");
        }}
      >
        Log in
      </button>


      {/* <div>{email}</div>
      <div>{pass}</div> */}
    </div>
  );
};