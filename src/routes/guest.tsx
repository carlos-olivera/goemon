﻿import React from 'react';
import { Express, Router } from 'express';
import { renderRoutes } from 'react-router-config';
import { configureStore } from '../client/stores/guest-store';
import { AppContainer } from '../client/base/react/app-container';
import { RouteComponent, routes } from '../client/routes/guest-route';
import { ServerSideRenderer } from './utilities/ssr-renderer';

const router = Router();
const store = configureStore();
const renderer = new ServerSideRenderer('guest.js');

module.exports = function (app: Express) {
  app.use('/', router);
};

router.get('/', authenticationHandler, (req, res) => {
  renderer.render(req, res, 'guest', { title: 'Home' }, component(req.baseUrl + req.url, store));
});

router.get('/react', authenticationHandler, (req, res) => {
  renderer.render(req, res, 'guest', { title: 'React' }, component(req.baseUrl + req.url, store));
});

router.get('/redux', authenticationHandler, (req, res) => {
  renderer.renderWithInitialProps(req, res, 'guest', { title: 'Redux' },
    component(req.baseUrl + req.url, store), routes, store);
});

router.get('/redux/counter', authenticationHandler, (req, res) => {
  renderer.render(req, res, 'guest', { title: 'Redux' }, component(req.baseUrl + req.url, store));
});

router.get('/about', authenticationHandler, (req, res) => {
  res.render('about', { title: 'About' });
});

router.get('/login', (req: any, res, next) => {
  res.render('login', { message: req.flash('error') });
});

function component(location, store) {
  return (
    <AppContainer store={store} location={location}>
      <RouteComponent />
    </AppContainer>
  );
}

function authenticationHandler(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/member');
  }
  return next();
}
