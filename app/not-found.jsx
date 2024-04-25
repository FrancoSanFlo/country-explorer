import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            404 - Page Not Found
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            The page you are looking for does not exist. You may have mistyped
            the address or the page may have moved.
          </p>
        </div>
        <div className="mt-6 flex justify-center">
          <Link
            href="/"
            className="text-white hover:bg-indigo-700 py-2 px-4 border border-transparent bg-indigo-600 rounded-md"
          >
            Go back to home page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
