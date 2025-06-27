# Meiyi NC News – (Frontend)
### A interactive comment style News web app built with React, interacting with a custom NC News API (React/HTML/CSS/JavaScript)

🚀 **[Live Demo](https://meiyi-nc-news.netlify.app)**

### **Features**

✔ Planning

Planned and executed a full CRUD React application from wireframes to deployment, following a structured planning phase to define:

- Wireframes for all routes (homepage, article view, comments).

- Component tree with data flow (props vs. state) and API integration strategy.

- User context (hardcoded authenticated user) for seamless comment/delete functionality.

✔ CRUD Operations

- Browse articles by topic, sort by votes/date.

- View article details with nested comments.

- Upvote/downvote articles (optimistic UI updates).

- Post/delete comments (hardcoded user).

✔ User Experience

- Accessible routing (React Router).

- Error handling (404, API failure fallbacks).

✔ Testing

- 50+ unit/integration tests (Jest + React Testing Library).

- End-to-end test coverage for critical flows.

✔ Delivered core features aligned with Agile principles:

- The articles page with the article card included key information for each article

- Article detail pages with comments and real-time voting (PATCH)

- User interactions: Post/delete comments (POST/DELETE), vote on articles (optimistic UI updates)

- Error handling: 404 pages, API failure fallbacks, and input validation

- Deployed on Netlify with CI/CD, ensuring automated testing and live accessibility


### **Tech Stack**

**Frontend**: React | Axios | React Router | Context API (state) | CSS3

**Testing**: Jest | React Testing Library

**Deployment**: Netlify (CI/CD)

**API**: NC News Backend (Node.js/Express/PostgreSQL)

### **Project Planning**
A structured approach ensured efficiency:

- Avaliable endpoints summary from Backend Api

- Wireframes – Designed all views (homepage, article, comments).

- Component Tree – Mapped data flow (props/state) and API calls.

- UX Considerations – Prioritized accessibility and fluid interactions.

📁 **[View my project planning docs](/planning)**

### **Setup steps**

**1. check Prerequisites**:

Node.js v18+ (check with node -v)

npm (comes with Node)

**2. Clone this repo**:

git clone https://github.com/MeiyiChen1/Meiyi-NC-News-Frontend.git
cd into the repo

**3. Install dependencies**:

npm install

**4. Run the Development Server**

npm run dev


### **Future Improvements**

Add user authentication (OAuth).

Implement real-time updates (WebSockets).
