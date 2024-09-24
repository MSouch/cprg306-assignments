import React from "react";
import Link from "next/link";
import './styles.css';  // Import the CSS file

export default function HomePage() {
  return (
    <main>
      {/* Apply the "large-heading" class to the h1 element */}
      <h1 className="large-heading">CPRG 306: Web Development 2 - Assignments</h1>

      <p>
        <Link href="/week-2">
          Go to Week 2 Assignments
        </Link>
      </p>
    </main>
  );
}
