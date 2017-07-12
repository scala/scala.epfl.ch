---
label: scalafix
name: Scalafix
web:
github: https://github.com/scalacenter/scalafix
origin: https://github.com/scalacenter/advisoryboard/blob/master/proposals/002-dotty-migration-path.md
contributors: [olafur]
status: Active
type: project
active: true
home: true
description: "Code rewriting tool automating migrations between language or library upgrades."
---
Scalafix is a refactoring tool created at the Scala Center with the mission to
help automate the migration between different language and library versions.

A scalafix *rewrite* is a small program that can transform Scala code.
Scalafix comes with several built-in rewrites, for example `RemoveUnusedImports` and `ExplicitReturnTypes`.
It is also possible to implement custom rewrites with scalafix.
Custom rewrites can be distributed in source and executed from source, without the overhead of publishing artifacts to Maven Central.

Scalafix rewrites are either *syntactic* or *semantic*.
A syntactic rewrite can use tokens and parsed abstract syntax trees.
A semantic rewrite can use the same features as a syntactic rewrite in addition to extracted semantic information from the compiler, including resolved names,
reported compiler messages and inferred type annotations.
Semantic information is extracted from an instrumented version of the Scala compiler using [scalameta](http://scalameta.org).

It is possible to run scalafix as a standalone command-line interface or as an sbt plugin.
Integrations for other build tools and potentially IDEs are planned in the future.

See the [official documentation](https://scalacenter.github.io/scalafix/) for more information about scalafix.


