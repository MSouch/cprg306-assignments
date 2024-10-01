import React from "react";

export function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
    </main>
  );
}

export const StudentInfo = () => {
  return (
    <div>
      <h1>Maxwell Souchereau</h1>
      <p>
        GitHub Repository: 
        <a href="https://github.com/MSouch" target="_blank" rel="noopener noreferrer">
          Msouch
        </a>
      </p>
    </div>
  );
};


export default function CombinedComponent() {
  return (
    <>
      <Page />
      <StudentInfo />
    </>
  );
}