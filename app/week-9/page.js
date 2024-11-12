"use client";

import { useUserAuth } from "./shopping-list/_utils/auth-context";
import Link from "next/link";

export default function HomePage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {user ? (
        <div className="space-y-4 text-center">
          <p className="text-xl">
            Welcome, {user.displayName} ({user.email})
          </p>
          
          <button 
            onClick={firebaseSignOut}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
          
          <Link 
            href="/week-9/shopping-list"
            className="block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Go to Shopping List
          </Link>
        </div>
      ) : (
        <button 
          onClick={gitHubSignIn}
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg"
        >
          Login with GitHub
        </button>
      )}
    </div>
  );
}
