import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <div className="min-h-full pt-16 pb-12 flex flex-col bg-white">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 flex justify-center">
            <a href="/" className="inline-flex">
              <span className="sr-only">Zocket-Ad Manager</span>
              <img className="h-12 w-auto" src="/zocket-logo.png" alt="" />
            </a>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">404 error</p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found.</h1>
              <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
              <div className="mt-6">
                <Link to="/campaign" className="text-base font-medium text-blue-600 hover:text-blue-500">
                  Go back to Safe Page<span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page404;
