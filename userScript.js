import { Morf } from "/Engine/Morf.js";
import { Vector2 } from "/Engine/Vector2.js";

let engine = new Morf.Engine(document.getElementById("canvas"), [

    new Morf.Shape([
        new Morf.Point(
            new Vector2(50, 50), {
                gravityScale: new Vector2(0, 0),
            }
        ),
        new Morf.Point(
            new Vector2(100, 50), {
                gravityScale: new Vector2(0, 0),
            }
        ),
        new Morf.Point(
            new Vector2(70, 70), {
                gravityScale: new Vector2(0, 0),
            }
        ),
    ]),

    new Morf.Shape([
        new Morf.Point(
            new Vector2(60, 40), {
                gravityScale: new Vector2(0, 0),
                velocity: new Vector2(0, 0.1),
            }
            ),
            new Morf.Point(new Vector2(130, 30), {
                gravityScale: new Vector2(0, 0),
                velocity: new Vector2(0, 0.1),
            }
            ),
            new Morf.Point(new Vector2(130, 50), {
                gravityScale: new Vector2(0, 0),
                velocity: new Vector2(0, 0.1),
            }
        ),
    ]),

]);