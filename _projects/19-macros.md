---
label: macros
name: Scalamacros
web:
github: https://github.com/scalamacros/scalamacros
origin: https://github.com/scalacenter/advisoryboard/blob/master/proposals/014-production-ready-scalamacros.md
contributors: [olafur]
status: Completed
type: project
active: false
priority: 1000
category: enhancement
home: false
hide-from-homepage: true
description: "Bring non-experimental and portable macros to Scala 2.x and Dotty"
---

The goal of this project was to bring non-experimental and portable macros to
Scala 2 and Dotty.
The development of
[Principled Meta Programming](http://dotty.epfl.ch/docs/reference/principled-meta-programming.html)
in Dotty and the
[plan for macros in Scala 3](https://www.scala-lang.org/blog/2018/04/30/in-a-nutshell.html)
announced by Martin Odersky made it unlikely that this effort would be
supported in Dotty. We opted to discontinue development once it became evident
that there would be three competing macro systems in the Scala ecosystem.


This project was a several months collaboration between
Ólafur Páll Geirsson at the Scala Center, Liu Fengyun from the Dotty team at
EPFL and Mikhail Mutcianko from the Scala Plugin team at Jetbrains.
We received extensive guidance from Eugene Burmako at Twitter and are thankful for his help.

The project
was originally
[announced](http://www.scala-lang.org/blog/2017/10/09/scalamacros.html) in
September 2017 with an
[update](http://www.scala-lang.org/blog/2017/11/27/macros.html) in
November 2017.
The archived source code for this project is hosted in the repository [scalacenter/macros](https://github.com/scalacenter/macros).
