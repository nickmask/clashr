const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");

const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const AuthPayload = require("./resolvers/AuthPayload");
const Subscription = require("./resolvers/Subscription");
const Feed = require("./resolvers/Feed");

const resolvers = {
  AuthPayload,
  Feed,
  Mutation,
  Query,
  Subscription
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: "src/generated/prisma.graphql",
      endpoint: "https://us1.prisma.sh/nick-maskell-950690/clashr-node/dev",
      secret: "omgjwtarethebest",
      debug: true
    })
  })
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
