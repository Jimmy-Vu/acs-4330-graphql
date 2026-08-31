# Lesson 1

## Before You Start
- How do web pages work?
	- Web pages are HTML files delivered from a server to a client (usually a computer)
	which are then displayed through a browser
- How do web browsers work?
	- Web browsers have built take in HTML and CSS files and render the pages visually.
	Their engine (V8 for chrome) handles javascript.
- What are web APIs?
	- Web APIs are interfaces/endpoints provided by servers which then can be 
	consumed by frontend JavaScript to get data

### 1. Get Rick Sanchez's name and status.

```graphql
{
  character(id: 1) {
    name
    status
  }
}
```

### 2. Get Morty Smith's name, species, and gender.

```graphql
{
  character(id: 2) {
    name
    species
    gender
  }
}
```

### 3. Get Summer Smith's name and the name of her current location.

```graphql
{
  character(id: 3) {
    name
    location {
      name
    }
  }
}
```

### 4. Get the total count of all characters.

```graphql
{
  characters {
    info {
      count
    }
  }
}
```

### 5. Get the name and air date of episode 1.

```graphql
{
  episode(id: 1) {
    name
    air_date
  }
}
```

### 6. Get Rick's name and the name of his origin location.

```graphql
{
  character(id: 1) {
    name
    origin {
      name
    }
  }
}
```

### 7. Get the dimension of Rick's origin location.

```graphql
{
  character(id: 1) {
    origin {
      dimension
    }
  }
}
```

### 8. Get both Rick and Morty's names and species using a single query. Use aliases!

```graphql
{
  rick: character(id: 1) {
    name
    species
  }

  morty: character(id: 2) {
    name
    species
  }
}
```

### 9. Get both Rick's origin location name and Morty's origin location name using a single query. Use aliases!

```graphql
{
  rick: character(id: 1) {
    origin {
      name
    }
  }

  morty: character(id: 2) {
    origin {
      name
    }
  }
}
```

### 10. Get the names of the first 3 residents of the Citadel of Ricks.

The API doesn't provide a way to get the first 3 residents.
There isn't any first operator laid out in the schema.
