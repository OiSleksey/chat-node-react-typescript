import React from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './App.scss';
import Chat from '../views/Chat';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const App = () => {
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
};

export default App;

// import React from 'react';
// import { Provider } from 'react-redux';
// import store from '../redux/store';
// import './App.scss';
// import Chat from './Chat/Chat';
// // Bootstrap CSS
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { PersistGate } from 'redux-persist/integration/react';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <div className="container">
//         <div className="container__main">
//           <Chat />
//         </div>
//       </div>
//     </Provider>
//   );
// };

// export default App;
