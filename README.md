# Meiyi NC News – (Frontend)
### A interactive comment style News web app built with React, interacting with a custom NC News API (React/HTML/CSS/JavaScript)

🚀 **[Live Demo](https://meiyi-nc-news.netlify.app)**

### **Features**

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

**4. Configure Environment Variables**:

Create a .env file in the root directory:

**5. Run the Development Server**

npm run dev

**For Testing**

Run unit tests:
npm test


### **Future Improvements**

Add user authentication (OAuth).

Implement real-time updates (WebSockets).
