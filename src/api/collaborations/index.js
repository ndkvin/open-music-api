/* eslint-disable max-len */
const CollaborationsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'collaborations',
  version: '1.0.0',
  register: async (server, { collaborationsService, playlistsService, validator }) => {
    const playlistHandler = new CollaborationsHandler(collaborationsService, playlistsService, validator);
    server.route(routes(playlistHandler));
  },
};
