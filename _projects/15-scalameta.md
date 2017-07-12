---
label: scalameta
name: Scala Meta
web:
github: https://github.com/scalameta/scalameta
origin: https://github.com/scalacenter/advisoryboard/blob/master/agendas/001-2016-q2.md
contributors: [olafur]
status: Active
type: project
active: true
home: false
description: "Cross-platform metaprogramming toolkit for Scala"
---
Scalameta is a compiler-agnostic metaprogramming toolkit that can be used to
build a wide range of Scala developer tools. Tools currently using Scalameta
include

- [scalafix](https://scala.epfl.ch/projects.html#scalafix) (refactoring)
- [scalafmt](http://scalameta.org/scalafmt/) (formatting)
- [scastie](https://scastie.scala-lang.org/) (worksheet-mode)
- [metadoc](https://github.com/olafurpg/metadoc) (online code browsing with "jump to definition")
- [stags](https://github.com/pjrt/stags) (ctags generator)

The Scala Center contributes to the development of Scalameta's ["Semantic
API"](http://scalameta.org/tutorial/#SemanticAPI).  The Semantic API enables
tools to query for information from an instrumented compiler such as inferred
types, resolved symbols, implicits, reported compiler messages and more. Such
information opens possibilities to build a wide range of new developer and
productivity tools for Scala.  In particular, the Semantic API is used by
[scalafix](https://scala.epfl.ch/projects.html#scalafix),
another Scala Center project with the mission to help automate the migration
between different Scala compiler and library versions.

Scalameta is compiler-agnostic. This means Scalameta's syntactic and semantic
model is not tied to a particular compiler version such as `scalac`, `dotc` or
the IntelliJ Scala Plugin. By being compiler agnostic, Scalameta enables
developer tools to be portable across multiple environments and support many
different dialects or flavours of Scala.

See the [official Scalameta website](http://scalameta.org) to to learn
more about Scalameta.
