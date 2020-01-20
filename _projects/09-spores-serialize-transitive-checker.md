---
label: spores
short-name: "Spores & transitivity check"
name: Spores and serializable transitive checker
web:
github: https://github.com/scalacenter/spores
origin: https://github.com/scalacenter/advisoryboard/blob/master/proposals/006-compile-time-serializibility-check.md
contributors: [jorge, heather, julien]
status: Completed
type: project
active: false
home: false
hide-from-homepage: true
description: "A production-ready version of spores compatible with `{java, scala}.util.Serializable`."
---

A production-ready version of spores compatible with `{java,
scala}.util.Serializable`. Provide a way to turn runtime serialization errors
into compile-time errors via a compiler plugin, and lets users customize which
checks should and should not be enforced.
