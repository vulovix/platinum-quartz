# PLATINUM

**PLATINUM** is a comprehensive Obsidian vault template designed for productivity, knowledge management, and personal organization. It provides a pre-configured workspace with carefully selected plugins, structured folder hierarchies, and AI-powered workflows to help you build and maintain your second brain.

## What is PLATINUM?

PLATINUM is an opinionated Obsidian vault structure that combines best practices from personal knowledge management (PKM) methodologies with powerful automation tools. It's designed to minimize setup time and maximize productivity from day one.

## What Does It Offer?

### Organized Structure

- **Area**: Core life management (Home, Meetings, Notes, People, Projects, Resources, Spaces, Tasks)
- **Journal**: Daily journaling and time-based entries
- **Projects**: Project-specific workspaces
- **Spaces**: Contextual work environments with dedicated notes, people, topics, and references
- **System**: Vault configuration, AI prompts, templates, and automation scripts
- **Uploads**: Centralized media and attachment storage

### Pre-configured Plugins

- **Templater**: Dynamic template system with custom scripts
- **QuickAdd**: Rapid note creation with customizable macros
- **Dataview**: Powerful query language for dynamic data views
- **Copilot**: AI assistant for enhanced note-taking and content generation
- **Style Settings**: Visual customization without CSS editing

### AI Integration

- Custom AI prompts for development, note processing, and text manipulation
- GitHub Copilot integration for intelligent assistance
- Pre-built prompt library for common workflows

### Template System

- Ready-to-use templates for journals, meetings, notes, projects, tasks, and more
- JavaScript automation scripts for dynamic path generation
- Standardized frontmatter for consistent metadata

## What Does It Do?

PLATINUM transforms Obsidian into a complete productivity system that:

**Organizes Information**: Structured folders and templates keep your knowledge organized and accessible  
**Automates Workflows**: Quick capture, template insertion, and AI assistance reduce manual work  
**Connects Ideas**: Dataview queries and bidirectional links reveal relationships in your knowledge  
**Enhances Thinking**: AI-powered refinement and summarization improve note quality  
**Scales Effortlessly**: Designed to grow with your needs without becoming unwieldy

## Getting Started

**Prerequisites:**

- [Obsidian](https://obsidian.md/) installed
- [Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed) font (recommended)
- [Obsidian Copilot](https://www.obsidiancopilot.com/) API key (for AI features)

**Quick Setup:**

1. Clone this repository
2. Open the folder in Obsidian
3. Configure your Copilot API key in plugin settings
4. Review and customize the pre-installed plugins
5. Start creating!

For detailed plugin documentation, see `Spaces/Default/Notes/PLATINUM.md`

---

## Repository Setup

After Cloning the Repository, follow these steps to detach the original remote and link the upstream repository.

1. Remove the original `origin` remote

```sh
git remote rm origin
```

2. Add the upstream repository

```sh
git remote add upstream https://github.com/vulovix/platinum-quartz.git
```

3. Fetch the upstream branches

```sh
git fetch upstream
```

4. Pull the latest changes from the upstream `main` branch

```sh
git pull upstream main
```

Your local repository is now connected to the upstream source and up to date.

5. To resolve the conflict, follow these steps.

```sh
git stash push -- .obsidian/workspace.json
git stash push -- .obsidian/workspace-mobile.json
# stashes your local workspace files so the index becomes clean

git pull upstream main
# pulls and merges upstream changes

git stash pop
# restores your local workspace.json (Git will now ignore it)
```
