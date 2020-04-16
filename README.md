# scala.epfl.ch

website for the Scala Center

## Infrastructure

The site is built and hosted using GitHub Pages and Jekyll.

## Building locally

### Using Docker Compose

You need to have npm and Docker Compose installed on your machine.

```
npm install
npm run bower-install
docker-compose up
```

The generated site is available at `http://localhost:4000`.

### Without Docker Compose

You need to have Ruby and npm installed on your machine.

You can build and view the site locally with:

```
bundle install
npm install
npm run bower-install
bundle exec jekyll serve
```

The generated site is available at `http://localhost:4000`.
