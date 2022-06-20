import React, { FC } from 'react';
import ProductList from './components/ProductList/ProductList';
import './assets/css/app.scss';

const App: FC = () => {
  return (
    <div className="app">
      <div className="app-wrapper">
        <h1 className="app-title">Ты сегодня покормил кота?</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default App;
