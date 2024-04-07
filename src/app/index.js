import React, { useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useAuth } from '../auth';

export default () => {
  const { user } = useAuth();

  return (
    <div style={{ padding: '40px' }}>
      <p>{`User ID: ${user ? user.uid : 'no user signed in'}`}</p>

      <p>
        <Link href="/authenticated">
          <Link>Go to authenticated route</Link>
        </Link>
      </p>
      <p>
        <Link href="/login">
          <Link>Login</Link>
        </Link>
      </p>
    </div>
  );
};