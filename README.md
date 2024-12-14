# News App

A React-based news application that fetches and displays the latest news from various categories using the **NewsAPI**. The app provides users with an easy-to-use interface and dynamic updates.

---

## Features

- Fetches news dynamically from [NewsAPI](https://newsapi.org/).
- Categorized news browsing (e.g., Business, Entertainment, Sports, etc.).
- Infinite scrolling for seamless navigation.
- Responsive and visually appealing design.
- Displays news articles with:
  - Title (truncated to 50 characters with ellipses).
  - Description (truncated to 250 characters with ellipses).
  - Author and publication date.
  - Source badge for credibility.
- Includes a default placeholder image if an article lacks an image.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/news-app.git
   cd news-app
2. Install dependencies:
   ```bash 
   npm install
3. Obtain your API key from NewsAPI and update the .env file:
   ```bash
   REACT_APP_NEWS_API_KEY=your_api_key_here
4. Start the development server:
   ```bash
   npm start
