---
label: tastyScala2
name: TASTy Reader For Scala 2
web:
github: https://github.com/scalacenter/scala/tree/tasty_reader
origin:
contributors: [jamie]
status: Active
type: project
active: true
home: false
description: Consume Scala 3 libraries from Scala 2

---
The upcoming Scala 3 has a new syntax and different rules for type inference, breaking source compatibility with the Scala 2 series. The Scala 3 compiler uses a new binary format, TASTy (Typed Abstract Syntax Trees), to serialise code after type checking is completed.

Among other uses, TASTy contains all the information required to read typed Scala signatures from packaged binaries, agnostic to a particular compiler implementation. By enabling the Scala 2 compiler to read signatures from TASTy, Scala 2 libraries can have dependencies compiled with Scala 3 or anything else that targets the format.

Since the Scala 3 compiler can already read pickled signatures from Scala 2 binaries, this project will enable bidirectional dependencies between Scala 2 and 3, allowing separate modules to migrate gradually to the new compiler, rather than all at once.
