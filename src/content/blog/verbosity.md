---
title: "On Verbosity in Research (and Software)"
description: "Tackling the wordiness of research, and a reflection in software syntax"
---

> Tackling the wordiness of research, and it's reflection in software syntax 

I've noticed something over time, and it's been gnawing at me more and more: verbosity in academia and research. This isn't a problem unique to software, of course - it shows up in every field, every niche, every industry - but in software, I feel it is particularly bad. 

Now, I'm not entirely sure why this is. Maybe it's because some people only care about the purely technical side of things. They don't care about bridging the gap between creating an algorithm or a technique or a piece of software and actually explaining it clearly to another human being. Or maybe it's the opposite - maybe it is intetional.

Maybe verbosity is a way to make something seem more complicated, more technically impressive than it really is. Or maybe it comes from poor mentorship, from higher-ups who have given students and researchers the impression that "this is how it is done."

I was recently reading a paper on some not so important research, an algorithm was proposed a few pages in, and instead of pseudocode, the authors used logic symbols to explain it (while still following a pseudocode structure - weird, yes). While yes, I know the symbols (discrete structures was shockingly easy), I know what they mean, it took me longer to process the algorithm than if it had just been written in plain pseudocode. Honestly, it turned me off from the paper altogether - which makes me wonder, why is it laziness on my part, or a lack of effort on theirs? Or is pseudocode just...better? I'm not sure. I just feel like pseudocode would have been a more direct, reader-friendly choice. 

This all reminds me of my feelings towards *Rust* - a strikingly fast and memory-efficient language. Don't get me wrong, there's a lot I like about the language, like the Cargo system and it's focus on memory safety, I have even used it from time to time for its immutability in some projects. But at the sime, Rust feels disgustingly verbose, and again, I'm not entirely sure why.

Check out the comparison for the *same* functionality between Rust and Go:
```rust
// Rust
let vec: Vec<i32> = vec![1, 2, 3, 4, 5];
let mut sum: i32 = 0;
for i in 0..vec.len() {
  sum += vec[i].clone().pow(2);
}
```
```go
// Go
vec := []int{1, 2, 3, 4, 5}
sum := 0 
for _, x := range vec {
  sum += x * x
}
```

Both code snippets calculate the sum of squares of 1-5, but which one is more ergonomic? Part of me suspects the Rust engineers (as brilliant as they are) made it this way on purpose, maybe to make the language seem more impressive. Maybe verbosity equals legitimacy in some minds. I don't know. 

However, here is what I do know: verbosity, whether in academic papers or in programming languages, can become a barrier. It makes things harder to adopt understand, harder to adopt, harder to maintain. And while some complexity is inevitable in a field as technical as this, I can't help but think we should strive for clarity instead of dressing things up in layers of unnecessary complication. 

Or maybe, I'm just lazy :p.

> Written by me | August 2025