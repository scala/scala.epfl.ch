---
label: scalajsBundler
name: scalajs-bundler
web: https://scalacenter.github.io/scalajs-bundler
github: https://github.com/scalacenter/scalajs-bundler
origin: https://github.com/scala/scala.epfl.ch/blob/master/minutes/_posts/2016-06-06-may-9-2016.md#proposal-scp-005-ensurance-of-continuity-of-scalajs-project
contributors: [julien]
status: "Contributors Welcome!"
type: project
active: true
home: true
hide-from-homepage: true
description: "Module bundler for Scala.js projects that use npm packages."
---

scalajs-bundler is an sbt-plugin that provides a module bundler for Scala.js
projects that use npm packages: it bundles the .js file emitted by the Scala.js
compiler with its npm dependencies into a single .js file executable by Web
browsers. It aims to provide a replacement for `jsDependencies`.

scalajs-bundler uses [npm](https://www.npmjs.com) and [webpack](https://webpack.github.io/) under the hood. It also supports [Yarn](https://yarnpkg.com/en/).
