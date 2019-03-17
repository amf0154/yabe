const environment = process.env.NODE_ENV || 'development'
const { Model } = require('objection');
const config = require('../knexfile');
const environmentConfig = config[environment];
const knex = require('knex');
const connection = knex(environmentConfig);
Model.knex(connection);
module.exports = connection;

