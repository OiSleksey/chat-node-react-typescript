import React from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import './App.scss';
import Chat from '../views/Chat';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="container">
          <div className="container__main">
            <Header />
            <Chat />
            <Footer />
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
}
