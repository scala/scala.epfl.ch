# scala.epfl.ch

website for the Scala Center

## Infrastructure

The site is built with a jenkins script.

## Building locally

### Using Docker Compose

You need to have npm and Docker Compose installed on your machine.
UID and GID environment variables are needed to avoid docker from writing files as root in your directory.

```
env UID="$(id -u)" GID="$(id -g)" docker-compose up
```

The generated site is available at `http://localhost:4000`.

When the website dependencies change (the content of the `Gemfile`),
you have to re-build the Docker image:

```
env UID="$(id -u)" GID="$(id -g)" docker-compose up --build
```

### Without Docker Compose

You need to have Ruby and npm installed on your machine.

You can build and view the site locally with:

```
gem install  bundler:1.17.2 jekyll
bundle install
npm install
npm run bower-install
bundle exec jekyll serve
```

The generated site is available at `http://localhost:4000`.
