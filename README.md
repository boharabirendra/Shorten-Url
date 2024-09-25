# URL shorten API

## Technology used

- Express
- Prisma as ORM
- Postgres as database
- Javascript

## API endpoints

- To create shorten url
  - /shorten/some long url (POST)
- to update
  - /shorten/:shortId (PUT)
- to delete
  - /shorten/:shortId (DELETE)
- to redirect
  - /shorten/:shortId (GET)
- to visited stat
  - /stat/:shortId (GET)

## To setup locally prerequisite

- Postgres database url (local or cloud base)
- Node.js

```sh
    git clone https://github.com/boharabirendra/Shorten-Url.git
    npm install
    npm run dev
```
