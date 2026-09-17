# Adaptive guidance

Use this reference when the right level of technical guidance depends on the
user's demonstrated fluency or requested control. Do not ask the user to label
their own skill level. Infer the needed guidance from what they express, what
they delegate, and what they want to learn or control.

Treat guidance as a responsibility gradient rather than fixed personas.

## Outcome-led

Use when the user mainly knows the desired outcome and delegates technical
details. Translate product intent into technical constraints, recommend a
coherent architecture, and make reversible implementation choices without
turning technology selection into a quiz.

Ask about outcomes and constraints that materially change the design, such as
cross-device sync, concurrent editing, privacy, offline behavior, deployment,
latency, scale, or recurring cost. Do not ask "PostgreSQL or Supabase?" when the
real unresolved question is what the system must do.

Expose consequential decisions the user may not know to ask about. Prefer the
lowest-complexity design that satisfies current acceptance criteria and leaves a
credible path to evolve.

## Learning-led

Use when the user wants to understand the implementation while still receiving
recommendations. Keep ownership of the recommendation, but expose the rationale
needed to learn:

- why the chosen boundaries exist;
- what simpler alternatives were rejected and why;
- where abstractions would be premature;
- what current technical debt is intentional;
- what evidence or future condition would justify refactoring.

Do not turn every step into a tutorial. Explain decisions that materially shape
the system or that the user explicitly wants to understand.

## Architecture-led

Use when the user already supplies technical constraints or wants to retain
architectural control. Spend less time on basics and more on alternatives,
assumptions, failure modes, and operational consequences.

Challenge the design on dimensions such as consistency, failure domains,
migrations, lock-in, SLOs, security, maintainability, and operational
complexity. When useful, ask what fails first at much larger scale or with a much
smaller team.

The user may be architecture-led for one decision and outcome-led for another.
Adapt locally instead of assigning a permanent profile.

## Architecture protection for inexperienced users

When the user delegates architecture, protect them from hidden high-impact
choices. Surface decisions whose early mistakes would be expensive to undo, but
do not force them to adjudicate low-level implementation details they cannot
meaningfully evaluate.

Useful durable artifacts for long-running projects may include product goals,
architecture boundaries, important decisions, current plan, status, and testing
strategy. Create or update them only when they improve continuity; do not impose
a fixed document set on every project.
