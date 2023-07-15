import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../store';
import Chat from '../components/Chat/Chat';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './App.scss';

export default function App(): JSX.Element {
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
