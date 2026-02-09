# Projects

Active initiatives with tasks, meetings, and deliverables.

---

#### Active Projects

```dataview
TABLE status, priority, start_date, end_date, manager
FROM "Projects"
WHERE type = "project" AND status = "Active"
SORT priority DESC, end_date ASC
```

---

#### On Hold

```dataview
TABLE status, priority, start_date, end_date, manager
FROM "Projects"
WHERE type = "project" AND status = "On Hold"
SORT end_date ASC
```

---

#### Recently Completed

```dataview
TABLE status, end_date, manager
FROM "Projects"
WHERE type = "project" AND status = "Completed"
SORT end_date DESC
LIMIT 5
```

---

#### All Open Tasks (Across Projects)

```dataview
TABLE project, status, priority, due_date, assignee
FROM "Projects"
WHERE type = "task" AND status != "Completed"
SORT due_date ASC
LIMIT 15
```

---

#### Upcoming Meetings

```dataview
TABLE project, entry_date AS "Date", meeting_type, attendees
FROM "Projects"
WHERE type = "meeting" AND entry_date >= date(today)
SORT entry_date ASC
LIMIT 10
```
