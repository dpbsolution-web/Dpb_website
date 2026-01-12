import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4  bg-linear-to-br from-blue-50 to-white">
      <div className="max-w-2xl w-full text-center space-y-6">
        <div className="mb-8">
          <Image
            src="/images/depositphotos_820124390-stock-photo-render-laptop-showing-404-error.jpg"
            alt="404 Error - Page Not Found"
            width={800}
            height={600}
            className="mx-auto rounded-lg shadow-xl"
            priority
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600">
            Sorry, we couldn&#39;t find the page you&#39;re looking for. It might have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
