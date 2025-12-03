export function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-12 border-t border-gray-200 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-gray-900 mb-4">About This Case Study</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                A personal narrative exploring the intersection of AI, coding education, and the emergence of vibe coding through the lens of an Eastern Washington University student's journey.
              </p>
            </div>
            
            <div>
              <h3 className="text-gray-900 mb-4">Author</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                <strong className="text-gray-900">Lisa Shepherd</strong>
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Eastern Washington University student specializing in frontend development and graphic design, exploring the future of AI-assisted coding.
              </p>
            </div>
            
            <div>
              <h3 className="text-gray-900 mb-4">Topics Covered</h3>
              <ul className="text-sm space-y-2">
                <li>• Vibe Coding & AI</li>
                <li>• Frontend Development</li>
                <li>• Graphic Design</li>
                <li>• Educational Technology</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 text-center text-sm">
            <p className="text-gray-700 leading-relaxed">&copy; 2024 Lisa Shepherd. All rights reserved.</p>
            <p className="mt-2 text-gray-500 leading-relaxed" style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}>
              VIBE CODING CASE STUDY
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}