import { Globe, Smartphone, Laptop, ShoppingCart, Database, Layout } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Modern online shopping experience with payment integration',
    icon: ShoppingCart,
    color: 'from-purple-500 to-pink-500',
    technologies: ['React', 'Node.js', 'Stripe'],
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile solutions for iOS and Android',
    icon: Smartphone,
    color: 'from-blue-500 to-cyan-500',
    technologies: ['React Native', 'Firebase', 'API'],
  },
  {
    id: 3,
    title: 'Web Applications',
    description: 'Responsive and scalable web applications',
    icon: Globe,
    color: 'from-green-500 to-emerald-500',
    technologies: ['Vue.js', 'TypeScript', 'Tailwind'],
  },
  {
    id: 4,
    title: 'Dashboard Solutions',
    description: 'Analytics and data visualization dashboards',
    icon: Layout,
    color: 'from-orange-500 to-red-500',
    technologies: ['React', 'D3.js', 'Charts'],
  },
  {
    id: 5,
    title: 'Database Architecture',
    description: 'Robust database design and optimization',
    icon: Database,
    color: 'from-indigo-500 to-blue-500',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    id: 6,
    title: 'Custom Software',
    description: 'Tailored solutions for unique business needs',
    icon: Laptop,
    color: 'from-teal-500 to-green-500',
    technologies: ['Python', 'Django', 'Docker'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse portfolio of innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group relative bg-white rounded-xl border border-gray-200 p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${project.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
