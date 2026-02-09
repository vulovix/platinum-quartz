---
type: space
status: Active
description: "Default space for general knowledge, topics, references, and quotes."
tags:
  - space
  - default
---
#### Space: Default

#### Overview

> The default space for capturing general knowledge that doesn't belong to a specific life area or project.

---

#### Quick Actions

```button
name New Note
type command
action QuickAdd: Knowledge Note
```

```button
name New Reference
type command
action QuickAdd: Reference
```

```button
name New Quote
type command
action QuickAdd: Quote
```

```button
name New Topic
type command
action QuickAdd: Topic
```

---

#### Recent Notes

```dataview
TABLE topic, created_date
FROM "Spaces/Default/Notes"
WHERE type = "note"
SORT created_date DESC
LIMIT 10
```

---

#### Topics

```dataview
LIST
FROM "Spaces/Default/Topics"
WHERE type = "topic"
SORT file.name ASC
```

---

#### Recent References

```dataview
TABLE reference_type AS "Type", url
FROM "Spaces/Default/References"
WHERE type = "reference"
SORT file.name ASC
LIMIT 10
```

---

#### Recent Quotes

```dataview
TABLE author, source
FROM "Spaces/Default/Quotes"
WHERE type = "quote"
SORT date_added DESC
LIMIT 10
```
