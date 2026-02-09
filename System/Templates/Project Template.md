---
type: project
status: Active
start_date: <% tp.date.now("YYYY-MM-DD") %>
manager: "[[Owner]]"
tags:
  - project
---

#### Project: <% tp.file.title %>

#### Overview

#### Quick Actions

```button
name ➕ New Task
type command
action QuickAdd: Project Task
```

```button
name New Meeting
type command
action QuickAdd: Project Meeting
```

```button
name New Note
type command
action QuickAdd: Project Note
```

#### Active Tasks
```dataview
TABLE status, priority, due_date, assignee
FROM "Projects/<% tp.file.title %>/Tasks"
WHERE status != "Completed"
SORT priority DESC, due_date ASC
```

#### Recent Meetings
```dataview
TABLE entry_date AS "Date", meeting_type AS "Type", attendees
FROM "Projects/<% tp.file.title %>/Meetings"
SORT date DESC
LIMIT 5
```

#### Project Notes
```dataview
TABLE topic, created_date
FROM "Projects/<% tp.file.title %>/Notes"
SORT created_date DESC
```
