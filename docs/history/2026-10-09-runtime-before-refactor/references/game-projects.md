> Historical snapshot of revision `5bfecea` (2026-10-09). Not active instructions. Current workflow: [I Wish](../../../../SKILL.md).

# Shape and verify a game

Start from the player promise and repeated play loop. Rendering, simulation,
architecture, and content should serve that experience.

Apply the core confirmation and online-research gates before game architecture or
design documents. This reference adds game-specific questions and checks; it does
not authorize early design, prototypes, or implementation.

Prefer suitable engine-native systems, compatible maintained plugins, and
licensed assets before building engine-like infrastructure. Validate expensive
assumptions early when the game depends on multiplayer authority, save
compatibility, streaming, unusual simulation, or target-platform export.

Judge an existing prototype against player-facing acceptance criteria. Treat its
scenes, interfaces, assets, and saves as reuse candidates under the agreed
compatibility boundary. A clean replacement need not preserve prototype APIs or
architecture; retain an artifact only when it fits the intended experience and
its license and integration cost are acceptable.

For a complete game framework, establish whole-scope coverage and contracts under
[delivery.md](delivery.md) before choosing a play slice. Cover the requested
player, world, rules, content, AI, persistence, and presentation systems with
their authority and runtime contracts. Depth follows the confirmed scope; do not
reduce the framework to one known demo.

Choose a coherent content pipeline. Before committing to an asset pack, check
the relevant engine/render-pipeline compatibility, scale, rigs, performance
budget, and redistribution terms.

Verify the smallest complete play loop in the running game, including the input,
camera, feedback, failure, and recovery behavior relevant to the request. Check
save/load, networking, performance, and platform export when they are in scope.
Record useful observations or captures and identify unavailable hardware or
platform checks as unverified.

For design-only delivery, specify those scenarios and technical experiments as
future checks, and review design coverage and consistency now. A design walkthrough
does not establish that the game runs or that its play experience has been tested.
