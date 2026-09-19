import React from 'react';

export function Github(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className || "w-6 h-6"}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Linkedin(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className || "w-6 h-6"}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Leetcode(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className || "w-6 h-6"}
      {...props}
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.17 6.2a1.375 1.375 0 0 0-.395.968c.002.366.147.717.404.978l.014.014 4.887 4.846a1.375 1.375 0 0 0 1.944 0 1.374 1.374 0 0 0 0-1.944l-3.916-3.88 4.34-4.382a1.374 1.374 0 0 0-.965-2.22zM16.14 3.75a1.375 1.375 0 0 0-.965.405l-8.666 8.736a3.67 3.67 0 0 0-1.077 2.6c.003 1.002.398 1.96 1.1 2.673l.015.015 4.887 4.846a3.68 3.68 0 0 0 5.2 0 3.68 3.68 0 0 0 0-5.2l-3.916-3.88a1.375 1.375 0 0 0-1.944 1.944l3.916 3.88a.93.93 0 0 1 0 1.312.93.93 0 0 1-1.312 0L8.49 16.36a.93.93 0 0 1-.277-.674.93.93 0 0 1 .273-.672l8.666-8.736a1.375 1.375 0 0 0-.965-2.528zM19.345 9.75a1.375 1.375 0 0 0-.965.405l-2.038 2.054a1.375 1.375 0 1 0 1.944 1.944l2.038-2.054a1.374 1.374 0 0 0-.979-2.349z" />
    </svg>
  );
}
