# Meetings

Overview of all meetings.

---
#### Meetings Today

```dataview
TABLE project, meeting_type AS "Type", attendees
FROM "Projects"
WHERE type = "meeting" AND entry_date = date("27-01-2026")
SORT created_time ASC
```

#### Upcoming Meetings

```dataview
TABLE entry_date AS "Date", project, meeting_type AS "Type", attendees
FROM "Projects"
WHERE type = "meeting" AND entry_date >= date(today)
SORT entry_date ASC
LIMIT 5
```

#### Recent Meetings

```dataview
TABLE entry_date AS "Date", project, meeting_type AS "Type", attendees
FROM "Projects"
WHERE type = "meeting" AND entry_date < date(today)
SORT entry_date DESC
LIMIT 10
```

#### Meetings by Type

```dataview
TABLE entry_date AS "Date", project, attendees
FROM "Projects"
WHERE type = "meeting"
GROUP BY meeting_type
SORT meeting_type ASC
```
