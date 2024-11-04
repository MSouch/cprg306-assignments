import React from "react";
import Link from "next/link";
import './styles.css'; 

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
      <p>
      <Link href="/week-3">
          Go to Week 3 Assignments
        </Link>
      </p>
      <p>
        <Link href="/week-4">
        Go to Week 4 Assignments
        </Link>
      </p>
      <p>
        <Link href="/week-5">
        Go to Week 5 Assignments
        </Link>
      </p>
      <p>
        <Link href="/week-6">
        Go to Week 6 Assignments
        </Link>
      </p>
      <p>
        <Link href="/week-7">
        Go to Week 7 Assignments
        </Link>
      </p>
      <p>
        <Link href="/week-8">
        Go to Week 8 Assignments
        </Link>
      </p>
    </main>
  );
}
