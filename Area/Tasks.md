#### Tasks

Overview of all tasks.

---

#### Tasks Due Today

```dataview
TASK
FROM "Projects"
WHERE !completed
```

#### All Open Tasks

```dataview
TABLE project, status, priority, due_date, assignee
FROM "Projects"
WHERE type = "task" AND status != "Completed"
SORT due_date ASC
```

#### Completed Tasks

```dataview
TABLE project, completed_date, assignee
FROM "Projects"
WHERE type = "task" AND status = "Completed"
SORT completed_date DESC
LIMIT 20
```
