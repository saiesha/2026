# 🎤 Song Vocal Range Database (NAME WILL BE CHANGED)

## Prerequisites
Music theory

## Description
This dataset categorizes songs based on vocal range, helping singers choose songs that match their comfort level.

---

## 🧠 Tags Explanation
- **Lowest Note**: The lowest pitch in the song
- **Highest Note**: The highest pitch in the song
- **Range**: Difference between lowest and highest note
- **Difficulty**: Easy / Medium / Hard (based on range + jumps)
- **Voice Type**: Male / Female / Unisex

---

## 🎵 Songs

### 1. Song: Tum Hi Ho
- **Artist**: Arijit Singh
- **Lowest Note**: A2
- **Highest Note**: E4
- **Range**: ~1.5 octaves
- **Difficulty**: Medium
- **Voice Type**: Male
- **Tags**: Emotional, Sustained Notes, Breath Control

---

### 2. Song: Kesariya
- **Artist**: Arijit Singh
- **Lowest Note**: B2
- **Highest Note**: F#4
- **Range**: ~1.5 octaves
- **Difficulty**: Medium-Hard
- **Voice Type**: Male
- **Tags**: High Notes, Smooth Transitions

---

### 3. Song: Shallow
- **Artist**: Lady Gaga, Bradley Cooper
- **Lowest Note**: G3
- **Highest Note**: G5
- **Range**: ~2 octaves
- **Difficulty**: Hard
- **Voice Type**: Duet
- **Tags**: Belting, Power Vocals

---

## 🎯 User Matching Logic (for your app)
- Take user's:
  - Lowest note
  - Highest note
- Recommend songs where:
  - Song range ⊆ User range ✅
- Stretch songs:
  - Slightly above user range (for practice)

---

## 🚀 Future Enhancements
- Add **pitch graph visualization**
- Add **AI voice analysis**
- Tag songs by:
  - Genre
  - Mood
  - Language
- Add **practice difficulty score**
