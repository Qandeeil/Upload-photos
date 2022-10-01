import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store/index'
import { Provider } from 'react-redux';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import ResultPage from './Components/ResultPage/ResultPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/Done-Upload' element={<ResultPage />}/>
        </Routes>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
