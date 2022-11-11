import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { JsonDB, Config } from "node-json-db"
import jwt from "jsonwebtoken"

import typeDefs from "./typeDefs"
import { resolversFn } from "./resolvers"
import { User } from "./types"

async function main() {
  const db = new JsonDB(new Config("./lib/db", true, false, "/"))

  const usersTable = await db.exists("/users")
  if (!usersTable) await db.push("/users", [])

  const productsTable = await db.exists("/products")
  if (!productsTable) await db.push("/products", [])

  const purchasedTable = await db.exists("/history")
  if (!purchasedTable) await db.push("/history", [])

  const server = new ApolloServer({
    typeDefs,
    resolvers: resolversFn(db),
  })

  const { url } = await startStandaloneServer(server, {
    context: async ({ req, res }) => {
      // Get the user token from the headers.
      const token = req.headers.authorization || ""
      try {
        if (token) {
          const result = jwt.verify(token, "key") as any
          const users: Array<User> = await db.getData("/users")
          // const user = users.find((x) => x.id === result?.userid)

          // console.log(result)

          // console.log(users)

          return { user: users.find((x) => x.id === result?.userid) }
        }
      } catch (err) {
        return {}
      }
    },
    listen: { port: 4000 },
  })
  console.log(`🚀  Server ready at: ${url}`)
}

main().then()
