import { Link } from "react-router-dom";

export default function Congrats() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-50 dark:bg-gray-900">
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-xl space-y-6 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Payment Successful
              </h1>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                Congratulations! Your payment has been processed successfully.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 text-left shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 items-center gap-2">
                  <p className="text-gray-500 dark:text-gray-400">Amount:</p>
                  <p className="font-medium">$99.99</p>
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <p className="text-gray-500 dark:text-gray-400">
                    Transaction ID:
                  </p>
                  <p className="font-medium">123456789</p>
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <p className="text-gray-500 dark:text-gray-400">Date:</p>
                  <p className="font-medium">June 5, 2024</p>
                </div>
              </div>
            </div>
            <Link
              to="/"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
