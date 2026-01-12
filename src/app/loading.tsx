export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen  bg-linear-to-br from-blue-50 to-white">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-transparent border-t-blue-400 rounded-full animate-spin"></div>
          </div>
        </div>
        <p className="mt-4 text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}
