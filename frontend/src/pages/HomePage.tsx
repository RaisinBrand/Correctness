import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Correctness Assistant</h1>
      <div className="flex flex-col gap-4">
        <Link
          to="/upload"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center"
        >
          Upload a PDF
        </Link>
        <Link
          to="/history"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 text-center"
        >
          View Old PDFs
        </Link>
      </div>
    </div>
  )
}

export default HomePage
