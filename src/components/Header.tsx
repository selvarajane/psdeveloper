import { Code2 } from 'lucide-react';

interface HeaderProps {
  onProjectsClick: () => void;
  onContactClick: () => void;
}

export default function Header({ onProjectsClick, onContactClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">PSDeveloper</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={onProjectsClick}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Projects
            </button>
            <button
              onClick={onContactClick}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Contact Us
            </button>
          </nav>

          <div className="md:hidden flex space-x-4">
            <button
              onClick={onProjectsClick}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <span className="text-sm font-medium">Projects</span>
            </button>
            <button
              onClick={onContactClick}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <span className="text-sm font-medium">Contact</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
