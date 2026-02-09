# Spaces

Life areas and ongoing contexts for organizing knowledge.

---

#### Active Spaces

```dataview
TABLE description, status
FROM "Spaces"
WHERE type = "space" AND status = "Active"
SORT file.name ASC
```

---

#### Archived Spaces

```dataview
TABLE description, status
FROM "Spaces"
WHERE type = "space" AND status = "Archived"
SORT file.name ASC
```

---

#### Recent Notes Across Spaces

```dataview
TABLE space, topic, created_date
FROM "Spaces"
WHERE type = "note"
SORT created_date DESC
LIMIT 15
```
