#### Resources

Overview of all knowledge across your Spaces (Topics, References, Quotes).

---

#### All Topics

```dataview
TABLE space, tags
FROM "Spaces"
WHERE type = "topic"
SORT file.name ASC
```

#### All References

```dataview
TABLE space, reference_type AS "Type", url
FROM "Spaces"
WHERE type = "reference"
SORT file.name ASC
```

#### Recent Quotes

```dataview
TABLE space, author, source, topic
FROM "Spaces"
WHERE type = "quote"
SORT date_added DESC
LIMIT 10
```
