# Music Singer App 🎤

A project exploring how technology can help singers discover songs that fit their voice and improve through practice.

## Idea

The app will analyze a singer's comfortable vocal range and use song-level information to recommend suitable songs.

The long-term goal is to combine **vocal-range analysis, song metadata, recommendations, and feedback** into one useful experience.

## Current concept

For each song, the dataset can capture:

- Lowest note
- Highest note
- Vocal range
- Difficulty
- Voice type / intended vocal part
- Genre
- Mood
- Language
- Vocal characteristics such as sustained notes, jumps, belting, and breath control

## Matching

Given a user's lowest and highest comfortable notes, songs can be grouped into:

1. **Comfort zone** — the song fits within the user's range.
2. **Stretch** — the song is slightly outside the range and can be used for practice.
3. **Challenge** — the song requires substantially more range or vocal technique.

This is deliberately more useful than matching songs by range alone: difficulty should eventually consider pitch jumps, sustained notes, and other vocal demands.

## Example dataset

| Song | Artist | Lowest | Highest | Approx. range | Difficulty |
|---|---|---:|---:|---:|---|
| Tum Hi Ho | Arijit Singh | A2 | E4 | ~1.5 octaves | Medium |
| Kesariya | Arijit Singh | B2 | F#4 | ~1.5 octaves | Medium–Hard |
| Shallow | Lady Gaga, Bradley Cooper | G3 | G5 | ~2 octaves | Hard |

*The note/range data is an initial working dataset and will be refined as the project develops.*

## Roadmap

- [x] Define the song metadata model
- [x] Start a small song dataset
- [ ] Build a vocal-range input flow
- [ ] Implement song matching
- [ ] Add pitch/range visualization
- [ ] Explore automatic pitch extraction
- [ ] Add singer feedback and recommendation history
- [ ] Explore AI-assisted voice analysis
- [ ] Build a simple user-facing application

## Why I'm building it

This is a project at the intersection of **software, music, and experimentation**. I want to take an idea from a small dataset to a working product while learning along the way.
