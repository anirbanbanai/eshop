"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { onAuthStateChanged, User as FirebaseUser, Auth } from 'firebase/auth';

// Define the structure of the user object you expect to receive from your API
interface User {
  // Add all the properties you expect in the user object
  _id: string;
  email: string;
  name: string;
  image:string;
  role:string;
  // Add other properties as needed
}

const useAuthUser = (auth: Auth) => {
  const [user, setUser] = useState<User | null>(null);
  const [get, getUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

//   console.log(get?.email);

  useEffect(() => {
    const uns = onAuthStateChanged(auth, (currentUser) => {
      getUser(currentUser);
      setLoading(false);
    });
    return () => {
      uns();
    };
  }, [auth]);

  useEffect(() => {
    const loader = async () => {
      if (get?.email) {
        try {
          const response = await axios.get(`https://e-server-beta.vercel.app/api/v1/user/email/${get?.email}`);
          if (response?.data) {
            setUser(response.data);
            setLoading(false);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          setLoading(false);
        }
      }
    };

    if (get) {
      loader();
    }
  }, [get]);

  return { user, loading };
};

export default useAuthUser;
