import { Router } from "express";

const routes = Router();

/**
 * GET home page
 */
routes.get('/', function(req, res) {
  res.send('hello world');
});

export default routes;
