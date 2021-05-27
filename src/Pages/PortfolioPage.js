import React, { useState } from 'react';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import Title from '../Components/Title';
import Portfolio from '../Components/AllPortfolio';

const allCategories = [
  'All',
  ...new Set(Portfolio.map((item) => item.category).flat()),
];

function PortfolioPage() {
  const [menuItems, setMenuItems] = useState(Portfolio);

  const filter = (category) => {
    if (category === 'All') {
      setMenuItems(Portfolio);
      return;
    }
    const filteredData = Portfolio.filter((item) => {
      return item.category.includes(category);
    });
    setMenuItems(filteredData);
  };

  return (
    <div className="PortfolioPage">
      <Title title={'Portfolio'} span={'Portfolio'} />
      <div className="portfolioContainer">
        <Categories filter={filter} categories={allCategories} />
        <MenuItems menuItems={menuItems} />
      </div>
    </div>
  );
}

export default PortfolioPage;
