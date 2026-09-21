### Who is character 10?

```graphql
{
  character(id: 10) {
    name
    species
    status
  }
}
```

- Alan Rails


### What episodes did they appear in?

```graphql
{
  character(id: 10) {
    episode {
      name
    }
  }
}
```

- Vindicators 3: The Return of Worldender

### What is their current location?

```graphql
{
  character(id: 10) {
    location {
      name
      type
    }
  }
}
```

- Worldender's lair
