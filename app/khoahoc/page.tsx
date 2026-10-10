export default function KhoaHoc() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header đơn giản */}
      <header className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">L</div>
          <span className="text-xl font-bold">LinguaAI</span>
        </div>
        <a href="/" className="text-blue-600 font-medium hover:underline">← Về trang chủ</a>
      </header>

      <section className="max-w-6xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Khóa học tiếng Anh</h1>
        <p className="text-center text-gray-600 mb-12">
          Chọn khóa học phù hợp với trình độ và mục tiêu của bạn
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Khóa Free */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <div className="text-sm font-medium text-green-600 mb-2">Miễn phí</div>
            <h3 className="text-xl font-bold mb-3">Giao tiếp cơ bản</h3>
            <p className="text-gray-600 text-sm mb-6">
              Học các mẫu câu giao tiếp hàng ngày, phát âm chuẩn và phản xạ cơ bản.
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li>• 20 bài học</li>
              <li>• Luyện nói với AI</li>
              <li>• Phản hồi phát âm</li>
            </ul>
            <button className="w-full bg-green-500 text-white py-3 rounded-xl font-medium hover:bg-green-600 transition">
              Bắt đầu miễn phí
            </button>
          </div>

          {/* Khóa Pro */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-500 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Phổ biến nhất
            </div>
            <div className="text-sm font-medium text-blue-600 mb-2">Pro</div>
            <h3 className="text-xl font-bold mb-3">Giao tiếp thực tế</h3>
            <p className="text-gray-600 text-sm mb-6">
              Luyện nói theo tình huống công việc, du lịch, phỏng vấn...
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li>• 60+ bài học</li>
              <li>• AI chấm điểm chi tiết</li>
              <li>• Lộ trình cá nhân hóa</li>
              <li>• Chứng chỉ hoàn thành</li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition">
              Đăng ký Pro
            </button>
          </div>

          {/* Khóa VIP */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <div className="text-sm font-medium text-purple-600 mb-2">VIP</div>
            <h3 className="text-xl font-bold mb-3">Thành thạo nâng cao</h3>
            <p className="text-gray-600 text-sm mb-6">
              Luyện nói chuyên sâu, phản xạ nhanh và từ vựng học thuật.
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li>• Không giới hạn bài học</li>
              <li>• AI Mentor 1-1</li>
              <li>• Phản hồi chi tiết hàng ngày</li>
            </ul>
            <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-medium hover:bg-purple-700 transition">
              Đăng ký VIP
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
