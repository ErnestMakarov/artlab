import { NavLink } from "react-router";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="mb-2 text-sm text-gray-500">
        404
      </p>

      <h1 className="mb-4 text-5xl font-bold">
        Page not found
      </h1>

      <p className="mb-8 max-w-md text-gray-600">
        The page you are looking for may have been removed or the address is incorrect.
      </p>

      <NavLink
        to="/"
        className="rounded bg-black px-6 py-3 text-white"
      >
        Back to home
      </NavLink>
    </section>
  );
}