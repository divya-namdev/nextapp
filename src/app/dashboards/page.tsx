"use client"
import React, { useEffect } from "react";
import nookies from "nookies";
import { useRouter } from 'next/navigation'
import { firebaseAdmin } from "../../../firebaseAdmin";
import { firebaseClient } from "../../../firebaseClient";
import { signOut } from "firebase/auth";
// import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";



async function AuthenticatedPage(props:any) {

  const router = useRouter();
  const cookies = nookies.get();
  // console.log(JSON.stringify(cookies, null, 2));
  // const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
  // const { uid, email } = token;


//  try {
//     const cookies = nookies.get();
//     console.log(JSON.stringify(cookies, null, 2));
//     const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
//     const { uid, email } = token;

//     // the user is authenticated!
//     // FETCH STUFF HERE

//     return {
//       props: { message: `Your email is ${email} and your UID is ${uid}.` },
//     };
//   } 
//   catch (err) {
//     // either the `token` cookie didn't exist
//     // or token verification failed
//     // either way: redirect to the login page
//     // either the `token` cookie didn't exist
//     // or token verification failed
//     // either way: redirect to the login page
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/login",
//       },
//       // `as never` is required for correct type inference
//       // by InferGetServerSidePropsType below
//       props: {} as never,
//     };
//   }


return (
  <div>
    <p>{props.message!}</p>
    <h1>Dashboard</h1>
    <button
      onClick={async () => {
        await 
          signOut(firebaseClient)
          .then(() => {
            router.push("/");
          });
      }}
    >
      Sign out
    </button>
  </div>
);

 
}


export default AuthenticatedPage;