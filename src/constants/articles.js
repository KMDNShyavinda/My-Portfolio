export const articlesData = [
  {
    id: "react-19-performance-optimization",
    title: "Optimizing Web Performance in React 19 & Vite Applications",
    excerpt:
      "A deep dive into compiler optimizations, lazy loading strategies, memoization, and bundle size reduction techniques for modern web apps.",
    category: "Frontend",
    tags: ["React 19", "Vite", "Performance", "Web Dev"],
    date: "Aug 2026",
    readTime: "5 min read",
    gradient: "from-cyan-500 to-blue-600",
    author: "K M D N Shyavinda",
    content: `
### Introduction
Performance is not just a feature — it directly influences user retention and SEO ranking. In modern single-page applications built with React and Vite, achieving a 90+ Lighthouse score requires intentional architectural choices.

### Key Optimization Strategies
1. **Dynamic Code Splitting**: Utilizing React's \`React.lazy()\` and dynamic imports to ensure users only download the JavaScript needed for the active view.
2. **Efficient State Colocation**: Keeping state as close to where it's consumed as possible to prevent unnecessary re-render cascades down the component tree.
3. **Asset Optimization & WebP**: Converting high-resolution PNGs/JPEGs into WebP formats with proper dimension attributes to prevent Layout Shifts (CLS).
4. **Memoization Boundaries**: Strategically leveraging \`useMemo\` and \`useCallback\` for expensive computational filters or heavy context providers.

### Conclusion
By implementing these patterns, initial bundle sizes can be cut by up to 40%, drastically lowering Time to Interactive (TTI).
    `,
  },
  {
    id: "scalable-rest-api-design-nodejs",
    title: "Building Resilient & Scalable REST APIs with Node.js & Express",
    excerpt:
      "Best practices for API versioning, robust error middleware, rate limiting, and MongoDB indexing to handle thousands of requests cleanly.",
    category: "Backend",
    tags: ["Node.js", "Express", "MongoDB", "REST API"],
    date: "Jul 2026",
    readTime: "6 min read",
    gradient: "from-green-500 to-emerald-600",
    author: "K M D N Shyavinda",
    content: `
### Introduction
When designing backend services for modern applications, structure and fault tolerance are paramount. A well-designed REST API must be predictable, secure, and easy to maintain.

### Architectural Best Practices
* **Controller-Service-Repository Pattern**: Decoupling HTTP handling logic from core business logic and database queries.
* **Centralized Async Middleware**: Catching asynchronous errors using a single high-level wrapper to prevent silent unhandled promise rejections.
* **Database Indexing**: Indexing frequently searched MongoDB keys (e.g. email, status, timestamps) to keep database response times under 20ms.
* **JWT & Refresh Tokens**: Implementing short-lived JWT access tokens paired with secure HTTP-only cookie refresh tokens.

### Summary
Clean architecture at the API layer allows engineering teams to scale services effortlessly while ensuring security compliance.
    `,
  },
  {
    id: "fullstack-mern-security-guide",
    title: "Security Hardening Guidelines for MERN Stack Applications",
    excerpt:
      "Protecting web applications against OWASP Top 10 vulnerabilities, XSS, CSRF, NoSQL injection, and enforcing CORS policies.",
    category: "Security",
    tags: ["Security", "MERN", "OWASP", "WebDev"],
    date: "Jun 2026",
    readTime: "7 min read",
    gradient: "from-purple-500 to-indigo-600",
    author: "K M D N Shyavinda",
    content: `
### Introduction
Web security should never be an afterthought. Protecting user data requires proactive defense mechanisms across both the client and server layers.

### Essential Security Measures
1. **Sanitizing User Input**: Preventing NoSQL Injections by sanitizing request body params using \`express-mongo-sanitize\`.
2. **Helmet Middleware**: Setting secure HTTP headers (Content Security Policy, X-Frame-Options, Strict-Transport-Security) to defend against Clickjacking and XSS.
3. **Rate Limiting**: Throttling IP request rates on public auth endpoints to neutralize brute-force attacks.
4. **Environment Secrets**: Securing API keys, database connection URIs, and JWT secrets in encrypted environment variables outside git tracking.

### Takeaway
Securing applications requires continuous auditing and adhering to modern OWASP security standards.
    `,
  },
  {
    id: "system-design-microservices-vs-monolith",
    title: "Monolith vs Microservices: Architectural Decisions for Startups",
    excerpt:
      "When to choose a monolithic architecture versus microservices, analyzing trade-offs in deployment complexity and team productivity.",
    category: "Architecture",
    tags: ["System Design", "Architecture", "DevOps", "Cloud"],
    date: "May 2026",
    readTime: "8 min read",
    gradient: "from-amber-500 to-orange-600",
    author: "K M D N Shyavinda",
    content: `
### Introduction
Choosing between a Modular Monolith and a Microservices architecture is one of the most critical decisions in system design.

### Key Factors to Consider
* **Team Size & Velocity**: Early-stage projects benefit tremendously from a well-structured Monolith due to simpler CI/CD and atomic deployments.
* **Domain Boundaries**: Break services apart only when bounded contexts are mature and demand independent scaling.
* **Operational Overhead**: Microservices introduce distributed tracing, network latency, and service mesh management complexity.

### Recommendation
Start with a clean, modular monolith with strict domain boundaries before prematurely splitting into microservices.
    `,
  },
];
