function Resume() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* PDF Preview */}
      <div className="w-full max-w-4xl border border-gray-300 rounded-lg shadow-lg overflow-hidden mb-4">
        <iframe
          src="/SHRINIVAS_NAIK.pdf"
          title="Resume"
          width="100%"
          height="700px"
          className="rounded"
        />
      </div>
      {/* Download Button */}
      <a
        href="/SHRINIVAS_NAIK.pdf"
        download="SHRINIVAS_NAIK.pdf"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </div>
  );
}
export default Resume;