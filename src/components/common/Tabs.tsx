// components/Tab.tsx
import { useState } from 'react';

interface TabProps {
  tabs: { label: string, content: JSX.Element }[];
}

const Tab: React.FC<TabProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex space-x-4 border-b-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 transition-colors duration-300 ${
              activeTab === index
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500 hover:text-blue-500'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tab;
