# scala.epfl.ch

website for the Scala Center

## Infrastructure

The site is built with a jenkins script which run the following commands "bundle install && bundle exec jekyll build"

## Building locally

### Using Docker Compose

You need to have npm and Docker Compose installed on your machine.

```
docker-compose up
```

The generated site is available at `http://localhost:4000`.

When the website dependencies change (the content of the `Gemfile`),
you have to re-build the Docker image:

```
docker-compose up --build
```

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
