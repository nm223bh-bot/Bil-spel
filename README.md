# A3 Game Project — Starter Template

This is your starting point for Assignment A3. It's already wired up with p5.js and ES modules so you can focus on writing game code from day one instead of fighting project setup.

## Project structure

```
├── index.html          # Loads p5.js and your sketch — you shouldn't need to touch this much
├── style.css           # Basic page styling
├── js/
│   ├── sketch.js       # p5's setup()/draw() — keep this short; it should mostly call into your classes
│   └── classes/
│       └── Example.js  # A single example class, showing the module pattern you'll follow
└── README.md           # This file
```

## Running it locally

**Do not open `index.html` directly by double-clicking it.** Because this project uses ES modules (`import`/`export`), the browser blocks module loading over the `file://` protocol — you'll see a CORS-shaped error in the console (something like *"has been blocked by CORS policy"* or *"Cross origin requests are only supported..."*), and nothing will run.

Instead, serve the folder with a local web server:

- **VS Code:** install the "Live Server" extension, right-click `index.html`, choose "Open with Live Server".

If your game loads fine locally but shows a blank canvas with no errors when you open the page, check that `sketch.js` exposes `setup` and `draw` on `window` (see the comment in `sketch.js`) — p5.js looks for them there when your code is loaded as a module.

## How to extend this

- **One class per file**, in `js/classes/`. Each file exports one class (`export default class Enemy { ... }` or `export class Enemy { ... }`).
- Import what you need in `sketch.js` or in another class file: `import Enemy from "./classes/Enemy.js";` (note the `.js` extension — it's required in the browser, unlike Node).
- Keep `sketch.js` thin: create your `Game` (or similar top-level) object in `setup()`, and let `draw()` mostly just call its `update()`/`display()` methods.
- Remember the array lifecycle requirement from the assignment brief: objects should be added *and* removed during play (e.g. with `.filter(...)`), not just pushed forever.

## Technical requirements

This applies no matter which game or track you're on. To pass (G), your project must:

- Use **real object-oriented design** — meaningful classes with clear responsibilities, not everything crammed into one file.
- Use **inheritance and polymorphism** correctly: at least one shared parent class with two or more subclasses, handled through a single array and a single loop. No `instanceof` chains, no `if (this.type === "...")` branching. You should be able to add a new subclass without touching the loop that handles them.
- Use **composition**: a coordinating class (e.g. `Game`) that owns the player and the collections of enemies/obstacles/platforms — not global arrays floating loose in `sketch.js`.
- Use **encapsulation** where it matters: private fields with getters/setters for controlled state changes, not as decoration on every field.
- Manage arrays with a real lifecycle: objects must be both **added and removed** during play (e.g. with `.filter(...)`), not just pushed and left forever.
- Include at least one **callback-driven UI element** — a reusable button class or similar driving your menus/restart, with no branching on which button text was clicked.
- Be split into **modules**: one class per file, clean imports/exports, a short `sketch.js`.
- Use the **canvas element and p5.js**.
- Be clean and commented, following the code standards from the course.
- Be developed on **GitLab**, with **meaningful, evenly distributed commits from both group members across the full 4 weeks** — a burst of commits in the last two days is a red flag, not a fix.
- End with a **merge request** into the main branch, including the **AI evaluation form** (filled in as part of the MR, and included in your repo).
- Be understood by **both group members** — you should each be able to explain any part of the code, not just the parts you personally wrote.

See the full assignment brief for the game-specific requirements, the VG bar, and the timeline — this list is just the technical bar every project has to clear.

## Before you commit

- Commit early and often, from both group members. A single commit at the end doesn't show progress — several smaller commits across the weeks do.
- If something in this setup doesn't work on your machine, ask at your weekly talk rather than losing time to it — that's exactly what those check-ins are for.
