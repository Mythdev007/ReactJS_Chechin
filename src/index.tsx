import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './layout';
import ChooseAnAccount from './modal-component/choosw-an-account';
import NoChicken from './modal-component/no-chicken';
import Transection from './modal-component/transection';
import ViewChicken from './modal-component/view-chicken';
import SelectChicken from './modal-component/select-chicken';
import Filter from './modal-component/filter';
(window as any).$ = $;
(window as any).jQuery = $;
require('bootstrap/dist/js/bootstrap.min');

ReactDOM.render(
  <React.StrictMode>
    <Layout></Layout>
    <Filter/>
    <SelectChicken/>
    <NoChicken/>
    <ChooseAnAccount/>
    <Transection/>
    <ViewChicken/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
