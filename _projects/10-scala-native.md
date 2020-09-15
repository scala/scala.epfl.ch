---
label: scalaNative
name: Scala Native Support
web: http://www.scala-native.org
github: https://github.com/scala-native/scala-native
origin: https://github.com/scalacenter/advisoryboard/blob/master/proposals/001-native-scala-for-spark.md
contributors: [martinduhem, guillaume, ergys, wmazur]
status: Active
type: project
active: true
priority: 1
category: enhancement
home: true
description: "A compiler for Scala programs producing native binaries and integrating with C."
---
Scala Native is an ahead-of-time compiler for Scala. Its goal is to compile Scala code to native
binaries, using the Scala compiler as front-end, its own optimizer and [LLVM](https://llvm.org)
as back-end.

Scala Native follows the behavior of Scala on the JVM (Java Virtual Machine) as much as possible
and can compile existing Scala programs with little to no modification.

By moving away from the JVM (Java Virtual Machine), Scala Native introduces Scala as a candidate
for system programming, latency-sensitive applications and other areas where the JVM’s warmup
time would be problematic. Finally, Scala Native offers interoperability with existing C
libraries.

The Scala Center is involved in multiple aspects of the development of Scala Native:

 - [sbt-crossproject](https://github.com/scala-native/sbt-crossproject) is an re-implementation
   of Scala.js’ crossProject and %%% to support Scala Native, allowing users to publish and
   depend on Scala Native libraries.

 - We added [support for regexes](https://github.com/scala-native/scala-native/pull/588), which
   helped greatly in implementing other missing features (`java.util.Formatter`, `String.split`,
   etc.)

 - We contributed [I/O support](https://github.com/scala-native/scala-native/pull/574) and
   [java NIO support](https://github.com/scala-native/scala-native/pull/694). Scala Native
   programs can now perform I/O operations using the same APIs as they would on the JVM.

 - Support for [testing frameworks](https://github.com/scala-native/scala-native/pull/755) was
   added by the Scala Center. The supported test frameworks include
   [uTest](https://github.com/lihaoyi/utest) and [ScalaCheck](https://www.scalacheck.org).
