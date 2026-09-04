---
name: foundry
description: Entry point for Foundry, this project's data-gathering and organization agent system — researching facts (locally or externally), reconciling them, and wiring them into this project's existing structures. Use when the user asks to find/confirm/add data, fill in gaps, or audit existing data for consistency, and wants it handled end-to-end rather than as a single lookup.
---

When this skill is invoked, hand the request to Foundry's `orchestrator` agent (via the Agent tool) rather than handling it inline — it discovers the current specialist roster at run time (by reading `.claude/agents/*.md`) and knows how to sequence them, including what to do when something isn't where it's expected to be.

Pass along:
- The user's request verbatim.
- Any specifics already known, so the orchestrator doesn't have to re-derive them.

Wait for the orchestrator's summary and relay it to the user — don't re-narrate its internal delegation steps, just the outcome: what was confirmed, added, or changed, and what's still open.
