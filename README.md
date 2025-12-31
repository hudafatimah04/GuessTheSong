# 🎵 Guess The Song – Interactive Music Quiz

A fun full-stack web app where users listen to short music previews and guess the correct song from multiple choices.

## ⭐ Features

* 🎶 Fetches real **30-second song previews** from the iTunes API
* ❓ Generates **multiple-choice quiz questions**
* 📝 Uses **EJS templates** for rendering dynamic pages
* ⚡ Fast Express.js backend
* 🎨 Beautiful animated UI using a CodePen gradient background
* 🧠 Score saved using **localStorage**
* 🔄 New random song each round (with room to improve)

---

## 📦 Tech Stack

**Backend:**

* Node.js
* Express.js
* Axios (for API calls)

**Frontend:**

* HTML
* CSS
* JavaScript
* EJS (Embedded JavaScript templates)

**API:**

* iTunes Search API (Apple)

---

## 🚀 How It Works

### `/`

Landing page
➡ Resets score
➡ Shows animated gradient UI
➡ “Start Game” button

---

### `/game`

1. Backend picks a **random song title**
2. Backend uses **Axios** to call the iTunes API
3. Extracts:

   * `previewUrl`
   * `trackName`
   * artist info
4. Randomly generates 3 wrong answers
5. Sends everything to `game.ejs`
6. Frontend:

   * Plays preview
   * Shows options
   * Checks answer
   * Updates score in localStorage
   * Shows next-round button

---

## 🛠️ Installation & Running the Project

### 1. Clone the repository

```
git clone https://github.com/hudafatimah04/GuessTheSong.git
cd GuessTheSong
```

### 2. Install dependencies

```
npm install
```

### 3. Run the server

```
node index.js
```

or (if you use nodemon)

```
nodemon index.js
```

### 4. Open in browser

```
http://localhost:3000
```

---

## 🔧 Improvements Planned

* Prevent the same song from appearing twice in a row
* Add difficulty levels
* Use a larger song list
* Add backend validation to avoid cheating
* Better error handling for failed API calls
* Add a timer to each round
* Add animations for correct/wrong feedback

---

## 🙏 Credits (UI + License)

The animated gradient background and UI effect is adapted from the following CodePen:

**Copyright (c) 2025 by juri911**
[https://codepen.io/juri911/pen/dyLyyQw](https://codepen.io/juri911/pen/dyLyyQw)

Used under the **MIT License**:

```
Permission is hereby granted, free of charge, to any person obtaining 
a copy of this software and associated documentation files (the "Software"), 
to deal in the Software without restriction, including without limitation 
the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the 
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included 
in all copies or substantial portions of the Software.
```

Huge thanks to the creator for the beautiful UI inspiration 🙌

---

## 📄 License

This project is licensed under the MIT License.
You may modify and use it freely.

---

## 💬 Author

**Huda Fatimah**
Passionate beginner developer working on fun full-stack projects 💛
Feel free to explore, fork, or suggest improvements!

---


