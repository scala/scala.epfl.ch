---
label: spores
short-name: "Spores & transitivity check"
name: Spores and serializable transitive checker
web:
github: https://github.com/scalacenter/spores
origin: https://github.com/scalacenter/advisoryboard/blob/master/minutes/002-2016-q3.md#proposal-scp-006-compile-time-check-of-serializability
contributors: [jorge, heather, julien]
status: Completed
type: project
active: false
home: false
description: "A production-ready version of spores compatible with `{java, scala}.util.Serializable`."
---

A production-ready version of spores compatible with `{java,
scala}.util.Serializable`. Provide a way to turn runtime serialization errors
into compile-time errors via a compiler plugin, and lets users customize which
checks should and should not be enforced.
