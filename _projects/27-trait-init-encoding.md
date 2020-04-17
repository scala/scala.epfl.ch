---
label: traitInitEncoding
name: Trait init encoding
web:
github:
origin:
contributors: [sjrd]
status: Active
type: project
active: true
category: scala3migration
home: false
description: Reconcile the trait init encoding of Scala 3 with Scala 2
---

Scala 3 currently has a different encoding than Scala 2 for the initialization of traits.
In this project, we are working on reconciling them, by reverting to the encoding of Scala 2, with a compatible extension for trait constructor parameters.
This will allow bidirectional compatibility between Scala 2 and 3 when implementing traits.
