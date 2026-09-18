# Research consequential decisions

Use when unresolved architecture, dependencies, or reuse choices could materially
affect feasibility, recurring cost, compatibility, licensing, or replacement
difficulty. Handle replaceable details when implementation needs them.

Start from acceptance criteria and the existing project. Compare plausible
solution classes on the dimensions that could change the recommendation; do not
pad a candidate list or require alternatives to an already adequate choice.
Include custom implementation when it offers lower total complexity.

Use current primary evidence for claims that drive adoption. Link the supporting
source and identify the version or revision when relevant. Distinguish verified
facts from inference and unresolved assumptions. If current evidence is
unavailable, continue independent work and leave dependent adoption provisional.

Separate learning from reuse: a talk, article, or observed product behavior can
inform a design without granting rights to copy its code or assets. Check actual
license and distribution obligations before incorporating external artifacts.

Evaluate existing code by the same acceptance criteria. Reuse what fits; attempt
a bounded repair when evidence favors it; replace a core that blocks the intended
experience rather than accumulating patches after the repair hypothesis fails.

Use a small prototype or independent review when it can resolve a consequential
uncertainty. Download source only when local inspection or validation adds value,
and keep temporary research copies outside the project.

Research is sufficient when the constraints driving the recommendation have
evidence and important remaining uncertainty has a practical validation path.
Present the recommendation, material trade-offs, continuing obligations, and
what the first implementation slice must prove. Match the detail to the decision.
