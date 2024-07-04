import Tab from "../common/Tabs";
import Food from "./category/Food";


const MainTab: React.FC = () => {
  const tabs = [
    { label: 'Food', content: <Food/> },
    { label: 'Clothes', content:  <Food/>  },
    { label: 'Bike', content:  <Food/>  },
    { label: 'Electronics', content:  <Food/>  },
    { label: 'others', content:  <Food/>  },
  ];

  return (
    <div className="container mx-auto px-4 ">
      <Tab tabs={tabs} />
    </div>
  );
};

export default MainTab;
