import "reflect-metadata";
import { createServer } from "node:http";
import { createSchema, createYoga } from "graphql-yoga";
import { readFileSync } from "fs";
import { join } from "path";
import { resolvers } from "./resolvers";
import { AppDataSource, AppDataSource2 } from "./data-source";

export const startServer = async () => {
  const typeDefs = readFileSync(join(__dirname, "./schema.graphql"), "utf8");

  const yoga = createYoga({
    schema: createSchema({
      typeDefs,
      resolvers,
    }),
  });

  const server = createServer(yoga);

  if (process.env.NODE_ENV === 'development') {
    console.log("Dev environment");
    await AppDataSource.initialize();
  } else {
    console.log("test environment");
    await AppDataSource2.initialize();
  }
  server.listen(4000);
  console.info("Server is running on http://localhost:4000/graphql");
};
startServer();
