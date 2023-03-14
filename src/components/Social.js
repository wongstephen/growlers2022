import React from "react";

export const Social = () => {
  return (
    <div className="flex justify-start mt-6 text-center text-gray-700 ">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/growlerzseattle/"
        target="_blank"
        rel="noreferrer"
        aria-aria-label="Facebook"
      >
        <svg
          className="w-6 h-auto mr-4 hover:hover:text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      </a>
      {/* Instagram */}
      <a
        href="https://www.instagram.com/growlerzseattle/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instragram"
      >
        <svg
          className="w-6 h-auto mr-4 hover:hover:text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>
      <a
        href="https://www.tiktok.com/@growlerzseattle"
        target="_blank"
        rel="noreferrer"
        aria-label="Tik Tok"
      >
        <svg
          className="w-6 h-auto mr-4 hover:hover:text-gray-900"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 7.50414C18.5333 7.56942 15.52 6.75998 15.2 3H12.4V13.9666C12.4 17.0999 9.93253 18.4412 8.289 17.2507C6.20169 15.7389 7.60003 12.5958 10.2 12.9874V9.6583C8.20003 9.6583 4 10.4416 4 15.3374C4 21.6041 10.8146 21.4083 12.4 20.5824C14.9798 19.2385 15.6 17.7827 15.6 14.5541C15.6 11.6166 15.6 9.85413 15.6 9.0708C16.2667 9.39719 18.08 10.0891 20 10.2458" />
        </svg>
      </a>

      {/* Twitter - Site not in use yet */}
      {/* <a
          href="https://twitter.com/growlerzseattl1"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="w-6 h-auto mr-4 hover:hover:text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </a> */}
      {/* Tic Tok */}
    </div>
  );
};
