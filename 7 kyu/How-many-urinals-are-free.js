// How many urinals are free?
// In men's public toilets with urinals, there is this unwritten rule that you leave at least one urinal free between you and the next person peeing. For example if there are 3 urinals and one person is already peeing in the left one, you will choose the urinal on the right and not the one in the middle. That means that a maximum of 3 people can pee at the same time on public toilets with 5 urinals when following this rule (Only 2 if the first person pees into urinal 2 or 4).
// your task:
// You need to write a function that returns the maximum of free urinals as an integer according to the unwritten rule.

// Input
// A String containing 1s and 0s (Example: 10001) (1 <= Length <= 20)
// A one stands for a taken urinal and a zero for a free one.

// Examples
// 10001 returns 1 (10101)
// 1001 returns 0 (1001)
// 00000 returns 3 (10101)
// 0000 returns 2 (1001)
// 01000 returns 1 (01010 or 01001)

// Note
// When there is already a mistake in the input string (for example 011), then return -1

// Have fun and don't pee into the wrong urinal ;)





function getFreeUrinals(urinals) {
    if ( urinals.includes("11") )
      return -1;
    else
      return ( urinals.match( /(^|0)0(?!1)/g ) || [] ).length;
  }

//   The urinals.match(/(^|0)0(?!1)/g) part uses regular expressions to find all occurrences of "00" in the string urinals. Let's break down the regular expression pattern:

// (^|0): This part matches either the start of the string (^) or a "0" character. It ensures that the "00" sequence is not preceded by another "0" to consider it as a separate occurrence.

// 0(?!1): This part matches a "0" character that is not followed by a "1". It ensures that the "00" sequence is not part of "001" or "011" (where the next digit is 1).

// /g: The "g" flag enables global matching to find all occurrences in the string.

// The match method returns an array of matched substrings.

// The || [] part handles the case where no matches are found. If the match method returns null, indicating no matches, the empty array [] is used instead.

// Finally, the .length property is applied to the resulting array to determine the count of "00" sequences found.