# Game-project guide

Use this reference when the wish is a game or a game-specific core subsystem.

## Game-first decisions

Start from the player promise and repeated play loop. Architecture, rendering,
simulation, content, and assets serve that experience rather than becoming the
goal themselves.

For a greenfield game, prefer:

1. engine-native systems and official examples;
2. maintained engine-version-compatible plugins or templates;
3. legally reusable assets and content tools;
4. a thin project-specific integration layer;
5. custom engine-like systems only when evidence justifies them.

Check early when the wish materially depends on multiplayer authority, save
compatibility, procedural generation, large-world streaming, advanced physics,
unusual rendering, platform export, or a high-volume content pipeline.

## Interpret proven patterns correctly

Use public talks, postmortems, technical-art breakdowns, papers, and observable
behavior to learn patterns and trade-offs. Use maintained repositories, plugins,
templates, and licensed assets as implementation candidates.

Never decompile a commercial game or migrate its code or assets. A mature game's
visible behavior can inspire an independent design; it is not a source package.

## Evaluate an existing prototype

Do not preserve an existing system merely because it is local. Test it against
the newly confirmed player-facing acceptance criteria and classify it:

- `reuse`: it already meets the need;
- `repair`: one bounded change is cheaper and safer than replacement;
- `replace`: its core model or quality blocks the player promise.

Preserve useful scene boundaries, interfaces, assets, or data when replacing the
core. Avoid repeated patches after the repair hypothesis fails.

## Simulation and water

For physical water, first determine the required player interactions and visible
proof: floating objects, currents, waves, filling spaces, destruction, or visual
surface response. Then compare solution classes such as engine physics,
heightfields, shallow-water methods, particles, compute simulation, or a hybrid.

Evaluate scale, platforms, collision needs, determinism, visual coupling,
performance budget, authoring workflow, and integration cost. A visually weak
local implementation is not preferred over a maintained suitable plugin merely
because it already exists.

## Assets and content

Search for legally reusable meshes, materials, shaders, textures, animation,
audio, VFX, UI, and environment kits when they fit the art direction. Record
source, license, attribution, modification, redistribution, and marketplace
restrictions.

Prefer a coherent pipeline over accumulating unrelated assets. Validate scale,
orientation, rig, shader/render-pipeline compatibility, texture budget, audio
format, and target-platform constraints before committing to a large pack.

Generative assets need the same provenance and release checks as downloaded
assets. Do not treat generated output as automatically risk-free.

## Use host specialists without surrendering the workflow

After Gate 2, use available narrow specialists for mechanics, multiplayer,
lighting, UI, assets, audio, performance, or export. Give each the approved
player promise, acceptance criteria, project boundary, and allowed dependency
scope.

I Wish remains responsible for material scope changes and final evidence. If a
specialist discovers that a core dependency or architecture must change, return
to research and Gate 2.

## Verify as a game

Run the actual game, not only scripts or static diagnostics. Verify:

- launch and main navigation;
- the smallest complete play loop;
- input, camera, feedback, failure, and recovery;
- visual and audio behavior relevant to the promise;
- representative performance on target hardware when available;
- save/load, networking, or host authority when required;
- target-platform export and launch when shipping is in scope.

Capture diagnostics plus direct observations, screenshots, or recordings when
they materially strengthen the evidence. Mark target hardware or platform checks
unverified when the required environment is unavailable.

Do not declare a gameplay feature complete until someone or an authorized agent
has exercised the behavior that proves it.
