# scala.epfl.ch

website for the Scala Center

## Infrastructure

The site is built with a jenkins script triggered by any new commit in the main branch. The infrastructure is managed by the Scala Center.

## Building locally

### Using Docker Compose

You need to have [Docker Engine](https://docs.docker.com/engine/) and [Docker Compose](https://docs.docker.com/compose/) installed on your machine.
Under macOS (Intel or Apple silicon), instead of installing [Docker Desktop](https://docs.docker.com/desktop/) you can also use [HomeBrew](https://brew.sh/) with [Colima](https://github.com/abiosoft/colima): `brew install colima docker`.  
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

If you have problems with the Docker image or want to force the rebuild of the Docker image:
```
env UID="$(id -u)" GID="$(id -g)" docker-compose build --no-cache
```


### Without Docker Compose

You need to have Ruby and npm installed on your machine.

You can build and view the site locally with:

```
gem install  bundler:1.17.2
bundle install
npm install
npm run bower-install
bundle exec jekyll serve
```

The generated site is available at `http://localhost:4000`.
