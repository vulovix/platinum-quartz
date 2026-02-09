# Notes

Overview of all general notes.

---

#### Pinned Notes

```dataview
TABLE project, topic, created_date
FROM "Projects" OR "Spaces"
WHERE type = "note" AND pinned = true
SORT created_date DESC
```

#### Recent Notes

```dataview
TABLE project, topic, tags, created_date
FROM "Projects" OR "Spaces"
WHERE type = "note"
SORT created_date DESC
LIMIT 10
```

#### Notes by Topic

```dataview
TABLE project, created_date
FROM "Projects" OR "Spaces"
WHERE type = "note"
GROUP BY topic
SORT topic ASC
```
