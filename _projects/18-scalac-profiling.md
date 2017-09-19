---
label: scalacProfiling
name: Exposing Compilation Performance
web:
github: https://github.com/scalacenter/scalac-profiling
origin: https://github.com/scalacenter/advisoryboard/blob/master/proposals/010-compiler-profiling.md
contributors: [jvican]
status: Active
type: project
active: true
hide-from-homepage: false
description: "Enabling statistics in the compiler and creating the infrastructure around it."
---

The goal of this proposal is to expose the cost that Scala code has in Scalac's
compile times, and display it to users via a console and an interactive
environment.

From the proposal:


"As a user of the Scala compiler investigating slow build times is difficult. We
propose enhancing the current flags and tooling within the Scala compiler to
identify hotspots in or caused by users' code. For example a macro may be
significant or called more often than expected (e.g. in implicit resolution).
Providing tooling that generates user-understandable reports e.g. per macro
times called and total times or identifying poor implicit resolution allows
users to tune their builds for optimal performance."

The proposal focuses on three areas:

1. Data collection (which requires changes to the Scala compiler.)
2. Data visualisation and comparison (which requires a compiler plugin + an IDE integration)
3. Reproducibility (which requires the development of an sbt plugin)

More information is available in the [scalac-profiling](https://github.com/scalacenter/scalac-profiling) repository.
