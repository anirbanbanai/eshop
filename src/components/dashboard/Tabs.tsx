import Tab from "../common/Tabs";


const MainTab: React.FC = () => {
  const tabs = [
    { label: 'Food', content: <div>Content for Tab 1</div> },
    { label: 'Clothes', content: <div>Content for Tab 2</div> },
    { label: 'Bike', content: <div>Content for Tab 3</div> },
  ];

  return (
    <div className="container mx-auto p-4">
      <Tab tabs={tabs} />
    </div>
  );
};

export default MainTab;
