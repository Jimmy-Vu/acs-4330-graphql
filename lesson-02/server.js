import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const novelList = [
  { title: 'East of Eden', author: 'John Steinbeck', year: 1952, genre: 'LITERARY' },
  { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, genre: 'ROMANCE' },
  { title: 'Moby-Dick', author: 'Herman Melville', year: 1851, genre: 'ADVENTURE' }
]

const typeDefs = `#graphql
  type About {
    message: String!
  }

  enum NovelGenre {
    LITERARY
    ROMANCE
    ADVENTURE
  }

  type Novel {
    title: String!
    author: String!
    year: Int!
    genre: NovelGenre!
  }

  type Time {
    hour: Int!
    minute: Int!
    second: Int!
  }

  type DiceRoll {
    total: Int!
    sides: Int!
    rolls: [Int!]!
  }

  type Query {
    allNovels: [Novel!]!
    getNovel(index: Int!): Novel
    firstNovel: Novel
    lastNovel: Novel
    getTime: Time
    getRandom(range: Int!): Int!
    getRoll(sides: Int!, rolls: Int!): DiceRoll!
    novelCount: Int!
    novelsInRange(start: Int!, count: Int!): [Novel!]!
    getNovelsByGenre(genre: NovelGenre!): [Novel!]!
    allGenres: [NovelGenre!]!
  }

`

const resolvers = {
  Query: {
    allNovels: () => {
      return novelList;
    },
    getNovel: (_, { index }) => {
      return novelList[index]
    },
    firstNovel: () => {
      return novelList[0]
    },
    lastNovel: () => {
      return novelList[novelList.length - 1]
    },
    getTime: () => {
      const now = new Date()
      return {
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds()
      }
    },
    getRandom: (_, { range }) => {
      return Math.floor(Math.random() * range)
    },
    getRoll: (_, { sides, rolls }) => {
      const rollResults = []
      for (let i = 0; i < rolls; i++) {
        rollResults.push(Math.floor(Math.random() * sides) + 1)
      }
      return {
        total: rollResults.reduce((sum, roll) => sum + roll, 0),
        sides,
        rolls: rollResults
      }
    },
    novelCount: () => {
      return novelList.length
    },
    novelsInRange: (_, { start, count }) => {
      return novelList.slice(start, start + count)
    },
    getNovelsByGenre: (_, { genre }) => {
      return novelList.filter((novel) => novel.genre === genre)
    },
    allGenres: () => {
      return [...new Set(novelList.map((novel) => novel.genre))]
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
});

console.log(`Server ready at: ${url}`);
