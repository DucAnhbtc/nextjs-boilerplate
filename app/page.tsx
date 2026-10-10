export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">
        <div className="text-2xl font-bold text-blue-600">LinguaAI</div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Bắt đầu học
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 py-24 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Học tiếng Anh giao tiếp <br />
          <span className="text-blue-600">thông minh hơn với AI</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          Luyện nói thực tế, được AI góp ý ngay lập tức.  
          Bắt đầu miễn phí – nâng cấp khi cần.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
            Học thử miễn phí
          </button>
          <button className="border border-gray-300 px-8 py-3 rounded-lg text-lg hover:bg-gray-50 transition">
            Xem khóa học
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-4xl mb-4">🗣️</div>
            <h3 className="text-xl font-semibold mb-2">Luyện nói với AI</h3>
            <p className="text-gray-600">Trò chuyện theo tình huống thật, được chấm phát âm ngay.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Lộ trình cá nhân hóa</h3>
            <p className="text-gray-600">AI đánh giá trình độ và đưa bài học phù hợp với bạn.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Học mọi lúc mọi nơi</h3>
            <p className="text-gray-600">Chỉ cần điện thoại hoặc máy tính, học 24/7.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-500 text-sm">
        © 2026 LinguaAI. Học tiếng Anh thông minh hơn với AI.
      </footer>
    </main>
  );
}
