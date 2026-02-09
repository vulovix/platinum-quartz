---
type: space
status: Active
description: ""
tags:
  - space
---

#### Space: <% tp.file.title %>

#### Quick Actions

```button
name New Note
type command
action QuickAdd: Space Note
```

```button
name New Topic
type command
action QuickAdd: Space Topic
```

```button
name New Reference
type command
action QuickAdd: Space Reference
```

#### Notes

```dataview
TABLE topic, created_date
FROM "Spaces/<% tp.file.title %>/Notes"
SORT created_date DESC
```

```dataview
LIST
FROM "Spaces" OR "Journal"
WHERE contains(file.outlinks, [[<% tp.file.title %>]])
LIMIT 10
```
