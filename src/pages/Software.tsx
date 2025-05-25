import { useState } from 'react';

export default function Software() {
  const software = [
    {
      name: 'Visual Studio Code',
      description: 'Popular code editor with extensive plugin support',
      category: 'Development',
      version: '1.84.0',
      os: ['Windows', 'macOS', 'Linux']
    },
    {
      name: 'Firefox',
      description: 'Open source web browser focused on privacy',
      category: 'Browser',
      version: '119.0',
      os: ['Windows', 'macOS', 'Linux']
    },
    {
      name: 'GIMP',
      description: 'Free and open source image editor',
      category: 'Graphics',
      version: '2.10.34',
      os: ['Windows', 'macOS', 'Linux']
    },
    {
      name: 'VLC',
      description: 'Free and open source media player',
      category: 'Multimedia',
      version: '3.0.18',
      os: ['Windows', 'macOS', 'Linux']
    },
    {
      name: 'Audacity',
      description: 'Free, open source audio editor',
      category: 'Multimedia',
      version: '3.4.2',
      os: ['Windows', 'macOS', 'Linux']
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedOS, setSelectedOS] = useState('');

  const categories = [...new Set(software.map(item => item.category))];
  const operatingSystems = ['Windows', 'macOS', 'Linux'];

  const filteredSoftware = software.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    const matchesOS = !selectedOS || item.os.includes(selectedOS);
    return matchesSearch && matchesCategory && matchesOS;
  });

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Software</h1>
      
      <div className="mb-8 space-y-4">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search software..."
            className="flex-1 p-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <select
            className="p-2 border rounded-lg"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <select
            className="p-2 border rounded-lg"
            value={selectedOS}
            onChange={(e) => setSelectedOS(e.target.value)}
          >
            <option value="">All Operating Systems</option>
            {operatingSystems.map(os => (
              <option key={os} value={os}>{os}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSoftware.map((item) => (
          <div key={item.name} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Version {item.version}</span>
                <span className="text-sm text-gray-500">{item.category}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  {item.os.map(os => (
                    <span key={os} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {os}
                    </span>
                  ))}
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}