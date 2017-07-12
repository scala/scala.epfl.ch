---
label: scalac-direct-dependencies
name: Scalac & Direct dependencies
web:
github: https://github.com/scalacenter/classpath-shrinker
origin: https://github.com/scalacenter/advisoryboard/blob/master/proposals/009-improve-direct-dependency-experience.md
contributors: [jorge]
status: Completed
type: project
active: false
home: true
description: "Improving scalac to improve the experience for builds using direct dependencies."
---

When developers or organizations want to distribute the compilation of their Scala projects, they have to send all the project dependencies across the wire.
The process to send these dependencies is slower as the projects grow and it become a bottleneck for fast compiles.

It is often the case that most of those dependencies are not required for compilation because they don't leak to the public API of the Scala projects to be compiled.
As a result, they can be removed from the classpath and developers can avoid the cost of sending them across the network.

This initiative consisted in [the creation of a scalac plugin](https://github.com/scalacenter/classpath-shrinker) to detect unused classpath entries so that users can have fine-grained control on the compilation classpath, thus enabling faster distributed compilation of Scala projects.
This plugin is available for both 2.12.x and 2.11.x and will be most useful to those build tools that allow you to control the library dependencies explicitly.

More information is available in the [Classpath Shrinker](https://github.com/scalacenter/classpath-shrinker) repository.
