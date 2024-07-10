import Tab from "../common/Tabs";
import All from "./category/All";
import Bike from "./category/Bike";
import Clothes from "./category/Clothes";
import Electronics from "./category/Electronix";
import Food from "./category/Food";


const MainTab: React.FC = () => {
  const tabs = [
    { label: 'All', content:  <All/>  },
    { label: 'Food', content: <Food/> },
    { label: 'Clothes', content:  <Clothes/>  },
    { label: 'Bike', content:  <Bike/>  },
    { label: 'Electronics', content:  <Electronics/>  },
  ];

  return (
    <div className="container mx-auto px-4 ">
      <Tab tabs={tabs} />
    </div>
  );
};

export default MainTab;
