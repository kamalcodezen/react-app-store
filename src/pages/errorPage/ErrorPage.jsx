import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-8xl md:text-9xl font-extrabold text-blue-500">
          404
        </h1>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-slate-400 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back to discovering amazing apps.
        </p>

        {error?.statusText && (
          <p className="mt-4 text-red-400 font-medium">
            {error.status} : {error.statusText}
          </p>
        )}

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl border border-slate-600 hover:border-blue-500 hover:text-blue-400 transition"
          >
            Go Back
          </button>
        </div>

        <div className="mt-12 text-slate-500 text-sm">
          Error Code: {error?.status || "404"}
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
