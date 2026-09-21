# ACS 4330 - Lesson 3 Review

## Monster Battle

### Schema

```graphql
type Kaiju {
  name: String!
  power: Int!
}

type City {
  name: String!
  population: Int!
}

type Battle {
  monster1: Kaiju!
  monster2: Kaiju!
  city: City!
}

type Query {
  battle: Battle!
}
```

### Query

```graphql
{
  battle {
    monster1 {
      name
      power
    }
    monster2 {
      name
      power
    }
    city {
      name
      population
    }
  }
}
```

## Card Game

### Schema

```graphql
type Card {
  value: String!
  suit: String!
}

type Hand {
  cards: [Card!]!
}

type Query {
  hand: Hand!
}
```

### Query

```graphql
{
  hand {
    cards {
      value
      suit
    }
  }
}
```

## Users and Images

### Schema

```graphql
type Location {
  latitude: Float!
  longitude: Float!
}

type Image {
  url: String!
  size: Int!
  location: Location!
}

type User {
  name: String!
  images: [Image!]!
}

type Query {
  user: User!
}
```

### Query

```graphql
{
  user {
    name
    images {
      url
    }
  }
}
```
