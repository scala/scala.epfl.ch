---
label: scalacDebugging
name: Better Debugging Experience
github: https://github.com/scala/scala
origin: https://github.com/scalacenter/advisoryboard/blob/master/proposals/022-jsr-45.md
contributors: [ergys]
status: Active
type: project
active: true
priority: 1
category: tooling
home: false
hide-from-homepage: true
description: "Improve the debugging experience for Scala developers."
---
At the moment, the debug information embedded to the class files produced by the Scala
compiler is limited. Notably, information for inline functions is not included, which
affects the overall debugging experience when working with classes that have inline
functions from other classes.

The Scala Center is working towards solving the above problem by looking into various
formats in which the information for inline functions could be stored.