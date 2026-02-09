#### Vault Structure

This document outlines a robust, dual-container vault structure that separates **Spaces** (life areas, ongoing contexts) from **Projects** (goal-driven initiatives with deliverables).

#### Core Philosophy

| Aspect         | Spaces                               | Projects                             |
| -------------- | ------------------------------------ | ------------------------------------ |
| **Purpose**    | Life areas, ongoing contexts         | Goal-driven initiatives              |
| **Duration**   | Ongoing (no end date)                | Defined start/end                    |
| **Contains**   | Notes + Topics + References + Quotes | Notes + Tasks + Meetings             |
| **Properties** | Minimal (description, tags)          | Full (status, priority, dates, team) |
| **Examples**   | Health, Learning, Photography        | Website Redesign, Book Writing       |

---

#### Folder Structure

```
├── Area/                       <- Views & dashboards for navigation
│   ├── Home.md
│   ├── Resources.md
│   ├── Projects.md
│   ├── Spaces.md
│   ├── People.md
│   ├── Tasks.md
│   ├── Meetings.md
│   └── Notes.md
├── Journal/                    <- Daily journal entries & reflections organized in folders by year
├── Spaces/                     <- Life areas & ongoing contexts (Notes only)
│   ├── Default/                <- System default space for general knowledge
│   │   ├── Default.md          <- Default space overview
│   │   ├── Notes/              <- General notes
│   │   ├── Topics/             <- Topic definitions
│   │   ├── References/         <- External resources
│   │   ├── Quotes/             <- Captured quotes
│   │   └── People/             <- Contacts & team members
│   └── Space Name/
│       ├── Space Name.md       <- Space overview
│       ├── Notes/              <- Notes for this space
│       ├── Topics/             <- Topic definitions (optional)
│       ├── References/         <- External resources (optional)
│       └── Quotes/             <- Captured quotes (optional)
├── Projects/                   <- Goal-driven initiatives (full tracking)
│   └── Project Name/
│       ├── Project Name.md     <- Project overview
│       ├── Notes/              <- Project documentation
│       ├── Tasks/              <- Actionable items
│       └── Meetings/           <- Meeting notes
├── System/                     <- Config, templates, scripts
│   ├── Templates/
│   └── Scripts/
│   └── AI/
└── Uploads/                    <- Media & files
```

---

#### Key Concepts & Data Models

### 1. Space Notes (`Spaces/Space Name/Space Name.md`)

- **Purpose:** Central hub for life areas and ongoing contexts. Lightweight, no project management overhead.
- **Properties:**
  - `type`: `space`
  - `status`: `Active`, `Archived` (select)
  - `description`: (text)
  - `tags`: `#space` (multi-select)
- **Content:**
  - Description of the space
  - Dataview queries for notes, topics, references, quotes
  - Links to related people
- **QuickAdd Commands:** Space Note, Space Topic, Space Reference, Space Quote

### 2. Project Notes (`Projects/Project Name/Project Name.md`)

- **Purpose:** Central hub for goal-driven initiatives with tasks, meetings, and deadlines.
- **Properties:**
  - `type`: `project`
  - `status`: `Active`, `On Hold`, `Completed`, `Archived` (select)
  - `priority`: `High`, `Medium`, `Low` (select)
  - `start_date`: (date)
  - `end_date`: (date)
  - `manager`: `[[Person Name]]` (link)
  - `team_members`: `[[Person Name]]` (multi-select)
  - `client`: (text)
  - `tags`: `#project` (multi-select)
- **Content:**
  - Project overview with inline dataview stats
  - Quick action buttons for creating tasks, meetings, notes
  - Dataview queries for tasks, meetings, and notes
- **QuickAdd Commands:** Project Note, Project Task, Project Meeting

### 3. People Notes (`Spaces/Default/People/Person Name.md`)

- **Purpose:** Profile for contacts (team members, clients, friends, family).
- **Properties:**
  - `type`: `person`
  - `role`: (text)
  - `company`: (text)
  - `email`: (text)
  - `phone`: (text)
  - `spaces_involved`: `[[Space Name]]` (multi-select)
  - `tags`: `#person` (multi-select)
- **Content:** Dataview queries to show tasks assigned, meetings attended, and notes mentioning them.

### 4. Task Notes (`Projects/Project Name/Tasks/Task Title.md`)

- **Purpose:** Individual task tracking within projects.
- **Properties:**
  - `type`: `task`
  - `status`: `To Do`, `Backlog`, `In Progress`, `Completed` (select)
  - `priority`: `High`, `Medium`, `Low` (select)
  - `task_type`: `Feature`, `Bug`, `Improvement`, `Personal`, `Household` (select)
  - `due_date`: (date)
  - `completed_date`: (date)
  - `assignee`: `[[Person Name]]` (link)
  - `project`: `[[Project Name]]` (link)
  - `related_case`: `[[Note Title]]` (link)
  - `tags`: `#task` (multi-select)
- **Content:** Task description and notes.

### 5. Meeting Notes (`Projects/Project Name/Meetings/Meeting Name.md`)

- **Purpose:** Meeting minutes and action items within projects.
- **Properties:**
  - `type`: `meeting`
  - `entry_date`: (date)
  - `meeting_type`: `Stand-up`, `Sprint Planning`, `Team Meeting`, `Brainstorming`, `One-on-One`, `Client Meeting`, `Status Update`, `Retrospective`, `All-Hands`, `Training`, `Personal` (select)
  - `status`: `Scheduled`, `Follow Up Needed`, `Canceled`, `Completed` (select)
  - `attendees`: `[[Person Name]]` (multi-select)
  - `project`: `[[Project Name]]` (link)
  - `tags`: `#meeting` (multi-select)
- **Content:** Agenda, key points, action items.

### 6. General Notes

**In Spaces:** `Spaces/Space Name/Notes/Note Title.md`
**In Projects:** `Projects/Project Name/Notes/Note Title.md`  
**In Default Space:** `Spaces/Default/Notes/Note Title.md`

- **Properties:**
  - `type`: `note`
  - `created_date`: (date)
  - `last_edited`: (auto-filled)
  - `pinned`: (checkbox)
  - `topic`: `[[Topic Name]]` (link)
  - `reference`: `[[Reference Title]]` (link)
  - `space`: `[[Space Name]]` (link, if in a space)
  - `project`: `[[Project Name]]` (link, if in a project)
  - `tags`: `#note` (multi-select)

### 7. Topic Notes (`Spaces/Default/Topics/Topic Name.md`)

- **Purpose:** Define and categorize broad subjects.
- **Properties:**
  - `type`: `topic`
  - `tags`: `#topic` (multi-select)
- **Content:** Overview of the topic with Dataview queries for related content.

### 8. Reference Notes (`Spaces/Default/References/Reference Title.md`)

- **Purpose:** External resources (books, articles, websites).
- **Properties:**
  - `type`: `reference`
  - `reference_type`: `Book`, `Article`, `Website`, `Podcast`, `Video`, `Blog`, `Other`
  - `url`: (text/url)
  - `tags`: `#reference` (multi-select)

### 9. Quote Notes (`Spaces/Default/Quotes/Quote Text.md`)

- **Purpose:** Capture specific quotes.
- **Properties:**
  - `type`: `quote`
  - `author`: (text)
  - `source`: (text)
  - `date_added`: (date)
  - `topic`: `[[Topic Name]]` (link)
  - `reference`: `[[Reference Title]]` (link)
  - `tags`: `#quote` (multi-select)

---

#### QuickAdd Commands

| Command             | Description                       | Location                       |
| ------------------- | --------------------------------- | ------------------------------ |
| **Space**           | Create new Space                  | `Spaces/`                      |
| **Space Note**      | Create note in current space      | `Spaces/{Space}/Notes/`        |
| **Space Topic**     | Create topic in current space     | `Spaces/{Space}/Topics/`       |
| **Space Reference** | Create reference in current space | `Spaces/{Space}/References/`   |
| **Space Quote**     | Create quote in current space     | `Spaces/{Space}/Quotes/`       |
| **Space Person**    | Create person in current space    | `Spaces/{Space}/People/`       |
| **Project**         | Create new Project                | `Projects/`                    |
| **Project Note**    | Create note in current project    | `Projects/{Project}/Notes/`    |
| **Project Task**    | Create task in current project    | `Projects/{Project}/Tasks/`    |
| **Project Meeting** | Create meeting in current project | `Projects/{Project}/Meetings/` |
| **Journal Entry**   | Create/open today's journal       | `Journal/`                     |
| **Journal Log**     | Quick capture to today's journal  | `Journal/`                     |
| **Default Note**    | Create note in default space      | `Spaces/Default/Notes/`        |
| **Topic**           | Create topic in default space     | `Spaces/Default/Topics/`       |
| **Reference**       | Create reference in default space | `Spaces/Default/References/`   |
| **Quote**           | Create quote in default space     | `Spaces/Default/Quotes/`       |
| **Person**          | Create person in default space    | `Spaces/Default/People/`       |

---

#### Benefits of this Structure

- **Reduced Friction:** Spaces are lightweight for life areas; Projects have full tracking
- **Clear Intent:** Immediate understanding of whether something is "work with deliverables" or "life context"
- **Powerful Queries:** Dataview can separately aggregate Spaces vs Projects
- **Scalability:** Easy to add new spaces or projects without breaking the system
- **Consistent Data:** Templates ensure all necessary properties are captured

---

#### Implementation Checklist

1. [x] Create `Area/`, `System/`, `Spaces/`, `Projects/`, `Journal/`, `Uploads/`
2. [x] Create `System/Templates/`, `System/Scripts/`
3. [x] Create `Spaces/Default/` with `Topics/`, `References/`, `Quotes/`, `Notes/`, `People/`
4. [x] Create `Space Template.md` and `Project Template.md`
5. [x] Create `getSpacePath.js` and `getProjectPath.js` scripts
6. [x] Configure QuickAdd macros for Space/Project creation
7. [x] Configure Templater folder to `System/Templates/`
8. [x] Create Area views: HOME, Space Overview, Project Overview, People Directory

---

This structure provides a robust framework for managing both life contexts and goal-driven work.
