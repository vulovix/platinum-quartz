---
type: topic
space: "" # Link to parent Space
tags:
  - topic
---

#### Topic: <% tp.file.title %>

#### Overview

#### Related Notes

```dataview
TABLE project, space, created_date
FROM "Projects" OR "Spaces"
WHERE type = "note" AND topic = "[[<% tp.file.title %>]]"
SORT created_date DESC
```
