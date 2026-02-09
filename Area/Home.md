# Home

> [!abstract] Navigation
>
> - [[Area/Projects|Projects]]
> - [[Area/Spaces|Spaces]]
> - [[Area/People|People]]
> - [[Area/Tasks|Tasks]]
> - [[Area/Meetings|Meetings]]
> - [[Area/Resources|Resources]]

---

#### Active Projects

```dataview
TABLE status, priority, end_date, manager
FROM "Projects"
WHERE type = "project" AND status = "Active"
SORT priority DESC, end_date ASC
LIMIT 5
```

---

#### Active Spaces

```dataview
TABLE description
FROM "Spaces"
WHERE type = "space" AND status = "Active"
SORT file.name ASC
```

---

#### My Open Tasks

```dataview
TABLE project, priority, due_date, status
FROM "Projects"
WHERE type = "task" AND status != "Completed"
SORT due_date ASC
LIMIT 10
```

---

#### Upcoming Meetings

```dataview
TABLE entry_date AS "Date", project, attendees
FROM "Projects"
WHERE type = "meeting" AND entry_date >= date(today)
SORT entry_date ASC
LIMIT 5
```
