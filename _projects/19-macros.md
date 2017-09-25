---
label: macros
name: Scalamacros
web:
github: https://github.com/scalamacros/scalamacros
origin: https://github.com/scalacenter/advisoryboard/blob/master/proposals/014-production-ready-scalamacros.md
contributors: [olafur]
status: Active
type: project
active: true
home: false
description: "Bring non-experimental and portable macros to Scala 2.x and Dotty"
---

The goal of this project is to bring non-experimental and portable macros to
Scala 2.x and Dotty.

From the proposal:

> Def macros and macro annotations have become an integral part of the Scala 2.x
> ecosystem. Well-known libraries like Play, sbt, Scala.js, ScalaTest, Shapeless,
> Slick, Spark, Spire and others use macros to achieve previously unreachable
> standards of terseness, type safety and performance.
> 
> Unfortunately, Scala macros have also gained notoriety as an arcane and brittle
> technology. The most common criticisms of Scala macros concern their difficult
> metaprogramming API based on compiler internals as well as a lack of featureful
> editor support. Even five years after their introduction, traditional macros
> don’t expand properly in Intellij. This leads to a proliferation of spurious
> “red squiggle” errors, even in simple projects. As a result of these problems,
> the language committee has decided to retire the current macro system.
