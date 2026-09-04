---
name: book-data
description: Entry point for gathering, organizing, and integrating book/series data (titles, blurbs, cover art, purchase links) into the BookJesspage catalog. Use when the user asks to add a book, research Jessica Dodge's books or the Forgotten Witch series, fill in placeholder data, or audit the catalog for missing/broken assets.
---

When this skill is invoked, hand the request to the `book-data-orchestrator` agent (via the Agent tool) rather than handling it inline — it knows the specialist roster (`book-researcher`, `catalog-integrator`, `asset-auditor`) and how to sequence them, including what to do when something isn't where it's expected to be.

Pass along:
- The user's request verbatim.
- Any specifics already known (book title, which entry, which field) so the orchestrator doesn't have to re-derive them.

Wait for the orchestrator's summary and relay it to the user — don't re-narrate its internal delegation steps, just the outcome: what was confirmed, added, or changed, and what's still open.
