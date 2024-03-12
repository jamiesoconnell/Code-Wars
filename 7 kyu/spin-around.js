// DESCRIPTION:
// Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

// Worked Example
// ["right", "right", "right", "right", "left", "right"] ➞ 1
// # You spun right 4 times (90 * 4 = 360)
// # You spun left once (360 - 90 = 270)
// # But you spun right once more to make a full rotation (270 + 90 = 360)

function spinAround(turns) {
    let pos = 0  
    for (const turn of turns) {
      if (turn === 'right') {
        pos += 90
      } else {
        pos -= 90
      }
    }
    return ~~Math.abs(pos / 360)
  }