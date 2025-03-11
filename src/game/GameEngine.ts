import { Engine, Render, World, Bodies } from "matter-js";

export class GameEngine {
  private engine: Engine;
  private render: Render;

  constructor(container: HTMLElement) {
    this.engine = Engine.create();

    this.render = Render.create({
      element: container,
      engine: this.engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false,
      },
    });

    // Add ground
    const ground = Bodies.rectangle(400, 580, 800, 40, { isStatic: true });
    World.add(this.engine.world, [ground]);

    Engine.run(this.engine);
    Render.run(this.render);
  }
}
