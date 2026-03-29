---
name: getting-started
description: Introduction to using Vienna profiles — how to customize and share
version: "1.0.0"
author: Vienna Team
tags: [profiles, onboarding, getting-started]
icon: "👋"
category: Onboarding
---

# Getting Started with Vienna Profiles

Help the user understand and customize their Vienna content profile.

## What is a profile?

A Vienna profile is a curated bundle of quick actions, skills, and plugin references stored in a `.vienna/` directory. Profiles are git repos — forkable, customizable, and shareable.

## Key files

- `.vienna/config.json` — Profile identity and content references
- `.vienna/quick-actions/_index.json` — Quick action definitions
- `.vienna/skills/` — Skill definitions (like this one)
- `.vienna/plugins/_index.json` — Plugin references

## How to customize

1. Edit quick actions in `.vienna/quick-actions/_index.json` to match your workflow
2. Add new skills by creating directories under `.vienna/skills/`
3. Reference additional plugins in `.vienna/plugins/_index.json`
4. Update `.vienna/config.json` with your name and description

## How to share

Push your profile to a git repo and share the link:
```
vienna://profile/github.com/your-username/your-profile
```
