const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://root:root@cluster0-vap4h.mongodb.net/test?retryWrites=true', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers,
});

server.use(cors());

server.start();
