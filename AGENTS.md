# GDD Documentation Rules

This folder is specialized for Game Design Documentation generation.

All generated documents must:

* help DEV implement features
* help Tester validate gameplay
* help Operator understand player-facing behavior

Documents should remain concise because the development team already understands MMORPG conventions.

---

# Documentation Philosophy

Focus on:

* gameplay behavior
* player-facing logic
* gameplay flow
* edge cases

Do not focus heavily on:

* engine implementation
* low-level technical architecture
* raw config dump

---

# Writing Style

Preferred style:

* concise
* scan-friendly
* structured
* practical

Use:

* paragraphs for behavior explanation
* tables for repetitive structures

---

# Table Usage

Use tables for:

* item attributes
* progression
* reward structures
* state comparison
* repeated data structures

Avoid large unnecessary tables.

---

# Structure Requirement

Every document should naturally answer:

* What
* Why
* When
* Where
* Who
* How

Do not force 5W1H headings mechanically.

---

# Config Usage

Reference config location instead of dumping config.

Example:
See:
<Equipment.xml> → <refine_option>

---

# QA Requirement

Highlight:

* Happy path
* Exploit possibility
* abnormal states
* edge cases

---

# Operator / CS Requirement

Operator-facing explanations should:

* explain visible player behavior
* explain conditions
* explain limitations

Avoid technical details.

---

# Missing Information

If critical information is missing:

* stop assumptions
* generate Open Questions
* ask for audit

---

# Templates

Prefer templates from:

* /Library/Templates/
