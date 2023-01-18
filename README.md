# 2D Platform Game

## HTML, JS, and CSS

## To play game, open `index.html` in your browser. 

--------------------------------------------------------------------------------

This uses collision detection on the canvas element. Since canvas has an x and
y position for each object, if two objects have vectors equal to zero, then
those objects collided. However, this would check for center collision. To check
for side collision the widths and heights must be added into the vectors.

My graphics rely on using the methods rect() and clearRect() from canvas.
These draw 2-D rectangles on the screen. Separate objects are given the same
corresponding coordinates and drawn on the canvas with drawImage(), which are
then checked for collisions.

Checking if the player and an object collide uses a loop that goes over all
of the existing objects.

Objects' coordinates change each animation frame.

--------------------------------------------------------------------------------


