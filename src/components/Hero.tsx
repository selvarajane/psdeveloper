import { Code2, Sparkles } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <Code2 className="w-20 h-20 text-blue-600 relative" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            PS<span className="text-blue-600">Developer</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Crafting innovative solutions for your digital dreams
          </p>

          <div className="flex items-center justify-center space-x-2 text-gray-500 mb-12">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-lg">Building the future, one project at a time</span>
          </div>

          <button
            onClick={onContactClick}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
