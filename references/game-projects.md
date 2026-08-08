# Game-project guidance

Use this reference only for game wishes and game-specific verification.

## Contents

- [Game-first principles](#game-first-principles)
- [What proven patterns mean](#what-proven-patterns-mean)
- [Greenfield reuse order](#greenfield-reuse-order)
- [Evaluate existing prototypes](#evaluate-existing-prototypes)
- [Core architecture decisions](#core-architecture-decisions)
- [Simulation and water example](#simulation-and-water-example)
- [Assets and content pipelines](#assets-and-content-pipelines)
- [Specialist skill routing](#specialist-skill-routing)
- [Game verification](#game-verification)
- [Completion evidence](#completion-evidence)

## Game-first principles

Define the player experience before choosing technology. A technically
impressive system that does not serve the core loop is not a better solution.

Prioritize:

1. one end-to-end playable loop;
2. stable input, feedback, failure, and recovery;
3. engine-native/official capabilities;
4. content authoring cost and iteration speed;
5. target-hardware runtime behavior;
6. maintained, license-compatible reusable systems;
7. project-specific custom code only where it creates the game's identity.

Do not scaffold a huge genre framework before the first loop plays. Do not
trade away networking authority, save/data ownership, or content pipeline as a
temporary shortcut when those boundaries are already confirmed requirements.

## What proven patterns mean

Separate three kinds of evidence.

### Pattern evidence

Official engine docs, developer talks, conference videos, postmortems, papers,
articles, and YouTube technical explanations may show:

- a state-machine or ability architecture;
- client prediction and host/server authority;
- level streaming and pooling;
- interaction/feedback patterns;
- simulation approximations;
- shader/rendering techniques;
- content production and optimization trade-offs.

Use them to understand the solution class. Independently implement the idea only
when needed. Do not copy displayed code unless an explicit applicable license
permits it.

### Reusable implementation evidence

Engine modules, official demos, maintained open-source repositories, registry
packages, plugins, templates, shaders, tools, and assets may be candidates for
direct reuse only after checking:

- exact engine and render-pipeline version;
- target-platform support;
- maintenance and issue state;
- content/performance fit;
- exact code/asset license and redistribution terms;
- package/artifact identity and supply chain;
- integration and authoring cost.

### Proprietary-product evidence

Publicly observable game behavior may inspire independent design. Developer-
authorized explanations and official modding SDKs may be used within their
terms. Never unpack/decompile a closed game to migrate its proprietary code,
shaders, models, textures, animation, audio, data, or level assets.

“A mature game uses this pattern” is supporting evidence, not an instruction to
recreate or steal its implementation.

## Greenfield reuse order

For a new game, do not assume local custom code should exist first. Check:

1. engine-native nodes/components/APIs and current official docs;
2. official templates, sample projects, demo scenes, and curated packages;
3. installed project dependencies when a project already exists;
4. maintained open-source plugins/tools/components;
5. clearly licensed marketplace plugins and assets;
6. smallest custom integration/gameplay layer.

Prefer external mature solutions for standard systems when they fit and reduce
total risk: input rebinding, dialogue UI, navigation, save serialization,
common controllers, localization, audio routing, basic VFX tooling, build/export
automation, and content import.

Do not import a large framework merely to avoid a small native implementation.
Compare dependency weight, authoring workflow, lock-in, and how much of the
package will actually be used.

Game-specific mechanics often still require custom code, but custom code should
compose stable engine/plugin boundaries rather than reimplement the entire
engine capability.

## Evaluate existing prototypes

Inspect an existing prototype before deciding, but classify it by evidence:

- `reuse`: already meets acceptance with a clean integration boundary;
- `repair`: one bounded defect or missing capability is cheaper/safer to fix;
- `replace`: wrong solution class, unstable core, unacceptable performance,
  incompatible pipeline, or repair cost exceeds replacement.

Attempt at most one smallest repair validation when `repair` is plausible. Set
the expected observation before editing. If it fails, move to `replace`; do not
keep adding compatibility layers around an unproven core.

Preserve useful assets, interfaces, tests, tuning data, or scene boundaries
even when replacing the implementation. Existing code has priority for
inspection, not adoption.

## Core architecture decisions

Treat these as material when present:

- engine version and renderer/render pipeline;
- 2D/3D world scale and coordinate assumptions;
- multiplayer topology and authority;
- save/data model and public formats;
- deterministic or replay requirements;
- physics/simulation boundary;
- content streaming and world partition;
- modding/scripting extension boundary;
- asset import, rig, material, shader, and animation pipeline;
- target-platform performance and memory floor;
- online accounts, backend, anti-cheat, payments, or user-generated content.

Design hard-to-reverse boundaries for the confirmed horizon. Choose the
simplest current implementation for replaceable internal details. In shorthand:

> Long-term at irreversible boundaries; simple at reversible implementation
> details.

## Simulation and water example

Do not ask a non-technical user to choose SPH, FLIP, shallow-water equations,
voxel simulation, particles, or screen-space shaders. First establish:

- Is the water mostly visual, gameplay-interactive, or fully deformable?
- Is it an ocean, river, puddle, container, or arbitrary volume?
- Must objects float, displace, splash, mix, or alter terrain?
- What camera distance and visual style hide/reveal approximation?
- What target hardware, frame budget, and scene scale apply?
- Does simulation need networking, replay, determinism, or persistence?

Then research solution classes.

Example route mapping:

| Confirmed experience | Likely classes to research |
| --- | --- |
| Large decorative ocean | Engine water material, FFT/Gerstner surface, official/demo/plugin solutions |
| Small gameplay ripples | Height-field/shallow-water simulation plus shader/render target |
| Pourable container liquid | Particles, grid/voxel approximation, specialized plugin, authored fake depending camera |
| Destructible flowing terrain | Grid/voxel/shallow-water solver with explicit performance and persistence limits |
| Cinematic splash only | VFX particles, mesh animation, flipbook, licensed asset |

Track A may use papers, talks, articles, and videos to understand these classes.
Track B must still search engine-native/official and maintained licensed
implementations that match the selected class.

If the local water implementation is poor:

1. map its visible failures to acceptance IDs;
2. profile/inspect its algorithm, rendering boundary, scale assumptions, and
   reusable interfaces;
3. compare one smallest repair hypothesis against replacement candidates;
4. run only the safe validation allowed by the current Gate;
5. replace after the bounded repair fails or when the route class is wrong;
6. preserve useful test scenes, art direction, parameters, or integration APIs;
7. verify simulation and rendering together at reproducible parameters.

Do not remain trapped in local code merely because it exists. Do not replace it
with an external package merely because the package looks impressive. Select
the solution that meets the confirmed water behavior and performance at the
lowest total project cost.

For simulation evidence, record:

- engine and renderer version;
- scene scale and units;
- solver/render parameters;
- target hardware and resolution;
- frame time/memory/particle or grid counts;
- reproducible input sequence;
- video/screenshots and visible artifacts;
- determinism/network divergence when applicable.

## Assets and content pipelines

Search legally reusable assets as part of solution research, not as an
afterthought. Check:

- exact asset source, creator/publisher, and account/purchase record;
- commercial, modification, embedding, and redistribution rights;
- attribution/NOTICE requirements;
- marketplace seat/project/platform restrictions;
- whether source files may be redistributed;
- render pipeline, shader model, topology, rig, animation, scale, and import
  compatibility;
- style consistency and expected content-production labor.

Apply the same checks to fonts, UI icons, sound effects, music, voice, models,
textures, animation, VFX, shaders, and datasets. A code license does not cover
unrelated assets in the same repository.

Prefer official engine assets and maintained compatible packs when they fit.
Use generative tools only within their terms and preserve provenance. Never
extract assets from a shipped proprietary game.

## Specialist skill routing

After Gate 2, invoke narrow game skills only for approved slices. Examples:

- multiplayer authority/network setup;
- controller or mechanic implementation;
- scene composition, UI, lighting, VFX, or game feel;
- art/audio direction and licensed/generative asset production;
- debugging and performance profiling;
- playtesting and completion verification;
- export/shipping after separate deployment/publishing authority.

Pass `IWISH_SCOPE`. A specialist's own trigger does not grant broader writes,
dependency installation, asset generation cost, deployment, account access, or
publication. Return any material divergence to `I Wish` and Gate 2.

Do not call `play` before there is an authorized runnable slice. Do not call
completion-verification as a substitute for actual gameplay. Do not call a full
game-making orchestrator beneath `I Wish`.

## Game verification

For every relevant acceptance criterion, verify:

### Launch and runtime

- project loads with the intended engine/version;
- the target scene/build launches;
- no material script, resource, shader, or import errors occur;
- expected input devices/routes work;
- pause/restart/save/recovery behavior works when in scope.

### Core loop

- reproduce the exact starting state;
- perform the intended player actions;
- observe feedback, success, failure, and retry;
- repeat enough to expose state leakage or one-shot behavior;
- test a meaningful edge case.

### Visual/audio behavior

- inspect target camera distances and viewports;
- capture screenshots/video when appearance matters;
- check missing assets/materials, clipping, z-order, lighting, and UI scaling;
- listen for routing, looping, spatialization, and missing audio when applicable.

### Performance

- use target or representative hardware;
- record resolution/build mode and scene parameters;
- measure frame time/FPS, memory, loading, and simulation counts as relevant;
- test the expected worst ordinary case, not only an empty scene;
- distinguish measured results from estimates.

### Platform/export

- run the intended export/build, not only the editor scene, when distribution is
  part of acceptance;
- verify controls, paths, permissions, web/mobile constraints, and packaging;
- do not deploy/publish without separate authority.

### Multiplayer/data

- test host/client roles and unauthorized requests;
- test join/leave/reconnect and state ownership when in scope;
- test save/load/version/error behavior without risking production data;
- verify no credentials or private data are embedded in builds/logs.

## Completion evidence

Static diagnostics do not complete a game. Require a current playable runtime
walkthrough for the target path whenever the environment permits it.

Label evidence:

- `agent-verified`: the agent ran and observed it;
- `user-reported`: the user followed a precise checklist on an unavailable
  device/runtime;
- `unverified`: no adequate observation exists.

When runtime/display/device control is unavailable, run all possible build,
import, lint, test, and static checks, then give a short exact player checklist.
Do not claim `complete` while a required gameplay criterion remains
`unverified`. Any later behavior edit invalidates older runtime evidence.
