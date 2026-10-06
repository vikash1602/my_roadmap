// Curriculum modules extracted from the study guide’s "Complete Curriculum" table.

export const PYTHON_MODULES = [
 {
  "id": "fundamentals",
  "num": 1,
  "name": "Fundamentals",
  "topics": "Installing Python; Python version; VS Code setup; Terminal/Command Prompt basics; Python interpreter; Running a Python file; Comments; Indentation; Variables; Naming conventions; print(); input(); Basic debugging",
  "resource": "CS50's Introduction to Programming with Python (CS50P) - Harvard University — https://cs50.harvard.edu/python/&#10;Python 3 Documentation — The Python Tutorial — https://docs.python.org/3/tutorial/&#10;Python Downloads (python.org) — https://www.python.org/downloads/&#10;Visual Studio Code Docs — https://code.visualstudio.com/docs",
  "outcome": "Run and debug small programs from the terminal",
  "priority": "Must"
 },
 {
  "id": "data-types",
  "num": 2,
  "name": "Data types",
  "topics": "int; float; bool; str; None; type(); Type conversion; f-strings",
  "resource": "CS50's Introduction to Programming with Python (CS50P) - Harvard University — https://cs50.harvard.edu/python/&#10;Python 3 Documentation — The Python Tutorial — https://docs.python.org/3/tutorial/",
  "outcome": "Convert and format values correctly",
  "priority": "Must"
 },
 {
  "id": "operators",
  "num": 3,
  "name": "Operators",
  "topics": "Arithmetic operators; Comparison operators; Logical operators; Assignment operators; Membership operators; Identity operators",
  "resource": "CS50's Introduction to Programming with Python (CS50P) - Harvard University — https://cs50.harvard.edu/python/&#10;Python 3 Documentation — The Python Tutorial — https://docs.python.org/3/tutorial/",
  "outcome": "Predict expression results before running",
  "priority": "Must"
 },
 {
  "id": "control-flow",
  "num": 4,
  "name": "Control flow",
  "topics": "if; elif; else; Nested conditions; Ternary expression",
  "resource": "CS50's Introduction to Programming with Python (CS50P) - Harvard University — https://cs50.harvard.edu/python/&#10;Python 3 Documentation — The Python Tutorial — https://docs.python.org/3/tutorial/",
  "outcome": "Grade checker and decision scripts",
  "priority": "Must"
 },
 {
  "id": "loops",
  "num": 5,
  "name": "Loops",
  "topics": "for loop; while loop; range(); break; continue; pass; Nested loops; Pattern problems",
  "resource": "CS50's Introduction to Programming with Python (CS50P) - Harvard University — https://cs50.harvard.edu/python/&#10;Python 3 Documentation — The Python Tutorial — https://docs.python.org/3/tutorial/",
  "outcome": "10 loop exercises and pattern programs",
  "priority": "Must"
 },
 {
  "id": "collections",
  "num": 6,
  "name": "Collections",
  "topics": "Lists; Indexing; Slicing; List methods; Tuples; Sets; Dictionaries; Dictionary methods; Nested collections; List comprehensions; Dictionary comprehensions; Set comprehensions",
  "resource": "CS50's Introduction to Programming with Python (CS50P) - Harvard University — https://cs50.harvard.edu/python/&#10;Python 3 Documentation — The Python Tutorial — https://docs.python.org/3/tutorial/",
  "outcome": "Student-records mini program",
  "priority": "Must"
 },
 {
  "id": "functions",
  "num": 7,
  "name": "Functions",
  "topics": "Defining functions; Parameters; Return values; Positional arguments; Keyword arguments; Default parameters; *args; **kwargs; Scope; LEGB; Lambda; map(); filter(); reduce()",
  "resource": "CS50's Introduction to Programming with Python (CS50P) - Harvard University — https://cs50.harvard.edu/python/&#10;Python 3 Documentation — The Python Tutorial — https://docs.python.org/3/tutorial/",
  "outcome": "Reusable function library with tests",
  "priority": "Must"
 },
 {
  "id": "modules-and-packages",
  "num": 8,
  "name": "Modules and packages",
  "topics": "import; from import; Creating modules; Packages; pip; virtual environments; requirements.txt; __name__; if __name__ == \"__main__\"",
  "resource": "CS50's Introduction to Programming with Python (CS50P) - Harvard University — https://cs50.harvard.edu/python/&#10;Python 3 Documentation — The Python Tutorial — https://docs.python.org/3/tutorial/",
  "outcome": "Own module plus venv rebuilt from requirements.txt",
  "priority": "Must"
 },
 {
  "id": "exception-handling",
  "num": 9,
  "name": "Exception handling",
  "topics": "Exceptions; try; except; else; finally; raise; Custom exceptions; Defensive validation",
  "resource": "CS50's Introduction to Programming with Python (CS50P) - Harvard University — https://cs50.harvard.edu/python/&#10;Python 3 Documentation — The Python Tutorial — https://docs.python.org/3/tutorial/",
  "outcome": "Crash-proof input helper",
  "priority": "Must"
 },
 {
  "id": "files-and-data",
  "num": 10,
  "name": "Files and data",
  "topics": "open(); Reading files; Writing files; pathlib; CSV; JSON; Serialization; Deserialization; Encoding basics; Context managers",
  "resource": "CS50's Introduction to Programming with Python (CS50P) - Harvard University — https://cs50.harvard.edu/python/&#10;Python 3 Documentation — The Python Tutorial — https://docs.python.org/3/tutorial/",
  "outcome": "CSV report and JSON store",
  "priority": "Must"
 },
 {
  "id": "oop",
  "num": 11,
  "name": "OOP",
  "topics": "Classes; Objects; __init__; Instance attributes; Instance methods; Class attributes; Class methods; Static methods; Encapsulation; Inheritance; Polymorphism; Abstraction; Composition",
  "resource": "CS50's Introduction to Programming with Python (CS50P) - Harvard University — https://cs50.harvard.edu/python/&#10;Python 3 Documentation — The Python Tutorial — https://docs.python.org/3/tutorial/",
  "outcome": "Class hierarchies with tests",
  "priority": "Must"
 },
 {
  "id": "intermediate-python",
  "num": 12,
  "name": "Intermediate Python",
  "topics": "Iterables; Iterators; Generators; yield; Decorators; Closures; Type hints; Optional; Union; Dataclasses; Clean code principles; Reusable functions; Debugging; Basic testing; Performance awareness; Python HTTP/API interaction; JSON API handling",
  "resource": "CS50's Introduction to Programming with Python (CS50P) - Harvard University — https://cs50.harvard.edu/python/&#10;Python 3 Documentation — The Python Tutorial — https://docs.python.org/3/tutorial/&#10;pytest Documentation — https://docs.pytest.org/&#10;Requests: HTTP for Humans — https://requests.readthedocs.io/",
  "outcome": "API client script and pytest suite",
  "priority": "Must"
 }
];

export const DSA_MODULES = [
 {
  "id": "complexity-and-basics-striver-step-1",
  "num": 1,
  "name": "Complexity and basics (Striver Step 1)",
  "topics": "Complexity Analysis; Big-O / Time Complexity; Space Complexity; basic maths; patterns; basic recursion; Hashing; Frequency Counting",
  "resource": "Striver's A2Z DSA Sheet - TakeUforward — https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
  "outcome": "Analyse any loop; frequency-map solutions",
  "priority": "Must"
 },
 {
  "id": "sorting",
  "num": 2,
  "name": "Sorting",
  "topics": "Selection Sort; Bubble Sort; Insertion Sort; Merge Sort; Quick Sort",
  "resource": "Striver's A2Z DSA Sheet - TakeUforward — https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
  "outcome": "Five sorts implemented in Python",
  "priority": "Must"
 },
 {
  "id": "arrays",
  "num": 3,
  "name": "Arrays",
  "topics": "Arrays; Array Traversal; Min/Max; Prefix Sum; Hashing; Two Pointers",
  "resource": "Striver's A2Z DSA Sheet - TakeUforward — https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
  "outcome": "Solve easy and medium array problems",
  "priority": "Must"
 },
 {
  "id": "binary-search",
  "num": 4,
  "name": "Binary Search",
  "topics": "Binary Search; Lower Bound; Upper Bound; search on answer",
  "resource": "Striver's A2Z DSA Sheet - TakeUforward — https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
  "outcome": "Binary search on index and answer",
  "priority": "Must"
 },
 {
  "id": "strings",
  "num": 5,
  "name": "Strings",
  "topics": "Strings; frequency counting; Two Pointers",
  "resource": "Striver's A2Z DSA Sheet - TakeUforward — https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
  "outcome": "Common string interview problems",
  "priority": "Must"
 },
 {
  "id": "linked-lists",
  "num": 6,
  "name": "Linked Lists",
  "topics": "Linked Lists; Singly Linked List; Doubly Linked List; Fast and Slow Pointers",
  "resource": "Striver's A2Z DSA Sheet - TakeUforward — https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
  "outcome": "Reverse, cycle, merge, palindrome",
  "priority": "Must"
 },
 {
  "id": "recursion-and-backtracking",
  "num": 7,
  "name": "Recursion and Backtracking",
  "topics": "Recursion; Backtracking",
  "resource": "Striver's A2Z DSA Sheet - TakeUforward — https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
  "outcome": "Subsets, permutations, combinations",
  "priority": "Must"
 },
 {
  "id": "bit-manipulation-basics",
  "num": 8,
  "name": "Bit Manipulation basics",
  "topics": "Bit Manipulation basics",
  "resource": "Striver's A2Z DSA Sheet - TakeUforward — https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
  "outcome": "XOR and bitmask tricks",
  "priority": "Should"
 },
 {
  "id": "stack-and-queue",
  "num": 9,
  "name": "Stack and Queue",
  "topics": "Stack; Queue; Monotonic Stack basics",
  "resource": "Striver's A2Z DSA Sheet - TakeUforward — https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
  "outcome": "Parentheses, next greater element",
  "priority": "Must"
 },
 {
  "id": "sliding-window-and-two-pointers",
  "num": 10,
  "name": "Sliding Window and Two Pointers",
  "topics": "Sliding Window; Two Pointers",
  "resource": "Striver's A2Z DSA Sheet - TakeUforward — https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
  "outcome": "Window templates",
  "priority": "Must"
 },
 {
  "id": "heaps-and-greedy",
  "num": 11,
  "name": "Heaps and Greedy",
  "topics": "Heap / Priority Queue; Greedy Algorithms",
  "resource": "Striver's A2Z DSA Sheet - TakeUforward — https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
  "outcome": "Top-K and interval problems",
  "priority": "Should"
 },
 {
  "id": "trees",
  "num": 12,
  "name": "Trees",
  "topics": "Trees; Binary Trees; Tree Traversals; Height/Depth; Binary Search Trees",
  "resource": "Striver's A2Z DSA Sheet - TakeUforward — https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
  "outcome": "All traversals; height; BST validation",
  "priority": "Must"
 },
 {
  "id": "graphs",
  "num": 13,
  "name": "Graphs",
  "topics": "Graph Basics; BFS; DFS; Connected Components; Topological Sort; Shortest Path basics",
  "resource": "Striver's A2Z DSA Sheet - TakeUforward — https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
  "outcome": "Islands, course schedule, Dijkstra",
  "priority": "Must"
 },
 {
  "id": "dynamic-programming",
  "num": 14,
  "name": "Dynamic Programming",
  "topics": "Dynamic Programming; 1D DP; 2D DP; Memoization; Tabulation",
  "resource": "Striver's A2Z DSA Sheet - TakeUforward — https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
  "outcome": "Memo and tabulation versions",
  "priority": "Should"
 },
 {
  "id": "trie-and-mixed-practice",
  "num": 15,
  "name": "Trie and mixed practice",
  "topics": "Trie; Mixed problem solving; Revision and re-solving",
  "resource": "Striver's A2Z DSA Sheet - TakeUforward — https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
  "outcome": "Timed mock assessments",
  "priority": "Should"
 }
];

export const FULLSTACK_TECHS = [
 {
  "id": "foundations",
  "num": 1,
  "name": "Foundations",
  "topics": "What HTML is; HTML document structure; DOCTYPE; html; head; body; headings; paragraphs; links; images; lists; tables",
  "resource": "MDN HTML — https://developer.mozilla.org/en-US/docs/Web/HTML&#10;MDN Learn Web Development — https://developer.mozilla.org/en-US/docs/Learn_web_development",
  "outcome": "Linked multi-page site",
  "priority": "Must",
  "area": "HTML"
 },
 {
  "id": "forms-and-semantics",
  "num": 2,
  "name": "Forms and semantics",
  "topics": "forms; labels; inputs; buttons; select; textarea; semantic HTML; header; nav; main; section; article; footer; accessibility basics",
  "resource": "MDN HTML — https://developer.mozilla.org/en-US/docs/Web/HTML",
  "outcome": "Accessible contact form; page passes W3C validator",
  "priority": "Must",
  "area": "HTML"
 },
 {
  "id": "core-css",
  "num": 1,
  "name": "Core CSS",
  "topics": "CSS syntax; selectors; specificity; cascade; inheritance; colors; units; typography",
  "resource": "MDN CSS — https://developer.mozilla.org/en-US/docs/Web/CSS",
  "outcome": "Styled page with 8+ selectors",
  "priority": "Must",
  "area": "CSS"
 },
 {
  "id": "layout",
  "num": 2,
  "name": "Layout",
  "topics": "box model; width; height; margin; padding; border; display; position; z-index; Flexbox; CSS Grid",
  "resource": "MDN CSS — https://developer.mozilla.org/en-US/docs/Web/CSS",
  "outcome": "Navbar, card row, gallery grid",
  "priority": "Must",
  "area": "CSS"
 },
 {
  "id": "responsive-and-polish",
  "num": 3,
  "name": "Responsive and polish",
  "topics": "responsive design; media queries; mobile-first design; transitions; transforms; animations; reusable CSS; component styling; accessibility-aware styling",
  "resource": "MDN CSS — https://developer.mozilla.org/en-US/docs/Web/CSS",
  "outcome": "Responsive landing page, Lighthouse 90+",
  "priority": "Must",
  "area": "CSS"
 },
 {
  "id": "language-basics",
  "num": 1,
  "name": "Language basics",
  "topics": "JavaScript basics; Variables; let; const; Data types; Operators; Conditions; Loops; Functions; Arrow functions",
  "resource": "MDN JavaScript Guide — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
  "outcome": "10 function exercises",
  "priority": "Must",
  "area": "JavaScript"
 },
 {
  "id": "data-structures",
  "num": 2,
  "name": "Data structures",
  "topics": "Arrays; Array methods; Objects; Destructuring; Spread operator; Rest operator; Template literals; Scope; Hoisting basics",
  "resource": "MDN JavaScript Guide — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
  "outcome": "12 array-method exercises",
  "priority": "Must",
  "area": "JavaScript"
 },
 {
  "id": "dom-and-browser",
  "num": 3,
  "name": "DOM and browser",
  "topics": "DOM; querySelector; DOM manipulation; Events; Forms; Form validation; localStorage; sessionStorage; JSON",
  "resource": "MDN JavaScript Guide — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
  "outcome": "Validated form saved to localStorage",
  "priority": "Must",
  "area": "JavaScript"
 },
 {
  "id": "async-and-http",
  "num": 4,
  "name": "Async and HTTP",
  "topics": "Promises; async/await; try/catch; Fetch API; HTTP methods; GET; POST; PUT; PATCH; DELETE; REST API basics; API error handling",
  "resource": "MDN JavaScript Guide — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
  "outcome": "fetch CRUD client with error states",
  "priority": "Must",
  "area": "JavaScript"
 },
 {
  "id": "core-react",
  "num": 1,
  "name": "Core React",
  "topics": "What React is; Vite setup; JSX; Components; Props; State; Events; Conditional rendering; Lists; Keys",
  "resource": "React — Learn React / Quick Start — https://react.dev/learn&#10;Vite — Getting Started — https://vite.dev/guide/&#10;Node.js Download (needed only as the Vite toolchain) — https://nodejs.org/en/download",
  "outcome": "Component-based pages",
  "priority": "Must",
  "area": "React"
 },
 {
  "id": "forms-and-hooks",
  "num": 2,
  "name": "Forms and hooks",
  "topics": "Forms; Controlled components; useState; useEffect; useRef; useContext; Custom hooks; Component composition",
  "resource": "React — Learn React / Quick Start — https://react.dev/learn",
  "outcome": "Hooks-based forms and data fetching",
  "priority": "Must",
  "area": "React"
 },
 {
  "id": "routing-and-api",
  "num": 3,
  "name": "Routing and API",
  "topics": "React Router; Nested routes; Route parameters; Navigation; API integration; Loading states; Error states; Empty states; Reusable components; Form validation",
  "resource": "React — Learn React / Quick Start — https://react.dev/learn&#10;React Router Documentation — https://reactrouter.com/",
  "outcome": "Routed app with all UI states",
  "priority": "Must",
  "area": "React"
 },
 {
  "id": "app-architecture",
  "num": 4,
  "name": "App architecture",
  "topics": "Authentication concepts; Protected routes; Context-based state; Project structure; Basic performance optimization; Clean component architecture",
  "resource": "React — Learn React / Quick Start — https://react.dev/learn&#10;React Router Documentation — https://reactrouter.com/",
  "outcome": "Auth-aware app with clean structure",
  "priority": "Must",
  "area": "React"
 },
 {
  "id": "getting-started",
  "num": 1,
  "name": "Getting started",
  "topics": "What Django is; Django installation; Virtual environment; Project creation; App creation; manage.py; settings.py; urls.py; views.py; models.py",
  "resource": "Django Documentation — Writing your first Django app — https://docs.djangoproject.com/en/stable/intro/tutorial01/&#10;Django Documentation — Using Django — https://docs.djangoproject.com/en/stable/topics/&#10;Django Documentation — How to install Django — https://docs.djangoproject.com/en/stable/topics/install/",
  "outcome": "Running project with first view",
  "priority": "Must",
  "area": "Django"
 },
 {
  "id": "pages-and-data",
  "num": 2,
  "name": "Pages and data",
  "topics": "templates; static files; URL routing; request/response; Forms; Model forms; Django ORM; Migrations; Admin; CRUD",
  "resource": "Django Documentation — Writing your first Django app — https://docs.djangoproject.com/en/stable/intro/tutorial01/&#10;Django Documentation — Using Django — https://docs.djangoproject.com/en/stable/topics/",
  "outcome": "Book CRUD in browser and admin",
  "priority": "Must",
  "area": "Django"
 },
 {
  "id": "relationships-and-queries",
  "num": 3,
  "name": "Relationships and queries",
  "topics": "Model relationships; One-to-one; One-to-many; Many-to-many; QuerySets; Filtering; Ordering",
  "resource": "Django Documentation — Using Django — https://docs.djangoproject.com/en/stable/topics/",
  "outcome": "Related data queried efficiently",
  "priority": "Must",
  "area": "Django"
 },
 {
  "id": "security-and-production",
  "num": 4,
  "name": "Security and production",
  "topics": "Authentication; Login; Logout; Password handling; Authorization; Permissions; Middleware basics; Environment variables; Django project structure; Production configuration basics",
  "resource": "Django Documentation — Using Django — https://docs.djangoproject.com/en/stable/topics/",
  "outcome": "Users, ownership rules, settings via .env",
  "priority": "Must",
  "area": "Django"
 },
 {
  "id": "api-basics",
  "num": 1,
  "name": "API basics",
  "topics": "REST API concepts; HTTP methods; Status codes; Serializers; ModelSerializer; API views; Generic views",
  "resource": "Django REST framework — Quickstart — https://www.django-rest-framework.org/tutorial/quickstart/",
  "outcome": "JSON CRUD endpoints",
  "priority": "Must",
  "area": "Django REST Framework"
 },
 {
  "id": "viewsets-and-quality",
  "num": 2,
  "name": "ViewSets and quality",
  "topics": "ViewSets; Routers; URL routing; Validation; Pagination; Filtering; Search; Error responses",
  "resource": "Django REST framework — Quickstart — https://www.django-rest-framework.org/tutorial/quickstart/&#10;Django REST framework — Filtering and Pagination guides — https://www.django-rest-framework.org/api-guide/filtering/",
  "outcome": "Filterable, paginated API",
  "priority": "Must",
  "area": "Django REST Framework"
 },
 {
  "id": "security-and-tooling",
  "num": 3,
  "name": "Security and tooling",
  "topics": "Authentication; Permissions; CORS; JWT authentication awareness; Protected endpoints; CRUD REST API; API testing with Postman",
  "resource": "Django REST framework — Quickstart — https://www.django-rest-framework.org/tutorial/quickstart/&#10;Simple JWT Documentation — https://django-rest-framework-simplejwt.readthedocs.io/&#10;django-cors-headers (GitHub) — https://github.com/adamchainz/django-cors-headers&#10;Postman Docs — Get started — https://learning.postman.com/docs/getting-started/overview/",
  "outcome": "Protected API tested in Postman",
  "priority": "Must",
  "area": "Django REST Framework"
 },
 {
  "id": "querying",
  "num": 1,
  "name": "Querying",
  "topics": "What databases are; Relational databases; Tables; Rows; Columns; Data types; CREATE; INSERT; SELECT; WHERE; ORDER BY; LIMIT; UPDATE; DELETE; NULL; LIKE; IN; BETWEEN",
  "resource": "PostgreSQL Documentation — Tutorial — https://www.postgresql.org/docs/current/tutorial.html",
  "outcome": "20 queries on a bookstore database",
  "priority": "Must",
  "area": "SQL"
 },
 {
  "id": "aggregation-and-design",
  "num": 2,
  "name": "Aggregation and design",
  "topics": "Aggregate functions; COUNT; SUM; AVG; MIN; MAX; GROUP BY; HAVING; Primary keys; Foreign keys; Constraints; UNIQUE; NOT NULL; CHECK; Normalization",
  "resource": "PostgreSQL Documentation — Tutorial — https://www.postgresql.org/docs/current/tutorial.html",
  "outcome": "3-table schema with constraints",
  "priority": "Must",
  "area": "SQL"
 },
 {
  "id": "joins-and-optimisation",
  "num": 3,
  "name": "Joins and optimisation",
  "topics": "Joins; INNER JOIN; LEFT JOIN; Subqueries; Indexes; Transactions; Basic query optimization",
  "resource": "PostgreSQL Documentation — Tutorial — https://www.postgresql.org/docs/current/tutorial.html",
  "outcome": "EXPLAIN before / after an index",
  "priority": "Must",
  "area": "SQL"
 },
 {
  "id": "setup-and-django",
  "num": 1,
  "name": "Setup and Django",
  "topics": "PostgreSQL; Database creation; psql / pgAdmin; PostgreSQL with Django ORM; production database on Render",
  "resource": "PostgreSQL Documentation — Tutorial — https://www.postgresql.org/docs/current/tutorial.html&#10;PostgreSQL Downloads — https://www.postgresql.org/download/&#10;Psycopg Documentation — https://www.psycopg.org/psycopg3/docs/&#10;Render Docs — Django deployment — https://render.com/docs/deploy-django",
  "outcome": "Django running on PostgreSQL",
  "priority": "Must",
  "area": "PostgreSQL"
 },
 {
  "id": "git-basics-and-branching",
  "num": 1,
  "name": "Git basics and branching",
  "topics": "Git basics; git init; git clone; git status; git add; git commit; git log; git diff; git branch; git checkout / switch; git merge; git pull; git push; Branching workflow; Good commit messages",
  "resource": "Pro Git — https://git-scm.com/book/en/v2",
  "outcome": "Feature branch merged cleanly",
  "priority": "Must",
  "area": "Git"
 },
 {
  "id": "github-workflow",
  "num": 1,
  "name": "GitHub workflow",
  "topics": "GitHub repositories; README; .gitignore; Pull requests awareness; GitHub portfolio",
  "resource": "GitHub Docs — https://docs.github.com/en",
  "outcome": "Portfolio with 4 pinned repos",
  "priority": "Must",
  "area": "GitHub"
 },
 {
  "id": "api-testing",
  "num": 1,
  "name": "API testing",
  "topics": "Postman requests; environments; collections; tests; exporting collections",
  "resource": "Postman Docs — Get started — https://learning.postman.com/docs/getting-started/overview/",
  "outcome": "Collection with 15+ requests",
  "priority": "Must",
  "area": "Postman"
 },
 {
  "id": "testing",
  "num": 1,
  "name": "Testing",
  "topics": "Basic testing; pytest awareness; Django testing; API testing (APITestCase); Debugging; Browser DevTools",
  "resource": "pytest Documentation — https://docs.pytest.org/&#10;Django Documentation — Using Django — https://docs.djangoproject.com/en/stable/topics/&#10;Django REST framework — Quickstart — https://www.django-rest-framework.org/tutorial/quickstart/",
  "outcome": "20+ backend tests",
  "priority": "Must",
  "area": "Testing"
 },
 {
  "id": "docker-fundamentals",
  "num": 1,
  "name": "Docker fundamentals",
  "topics": "Docker fundamentals; Images; Containers; Dockerfile; Docker Compose basics",
  "resource": "Docker Docs — Get started — https://docs.docker.com/get-started/",
  "outcome": "Backend + PostgreSQL via docker compose",
  "priority": "Should",
  "area": "Docker"
 },
 {
  "id": "deployment",
  "num": 1,
  "name": "Deployment",
  "topics": "React production build; Static deployment; Django production configuration; Environment variables; PostgreSQL production database; CORS; Static files; Deployment concepts",
  "resource": "Render Docs — Static Sites — https://render.com/docs/static-sites&#10;Render Docs — Django deployment — https://render.com/docs/deploy-django",
  "outcome": "Live frontend and backend URLs",
  "priority": "Must",
  "area": "Deployment"
 }
];

export const INTERVIEW_PREP = [
 {
  "id": "language-and-framework-questions",
  "num": 1,
  "name": "Language and framework questions",
  "topics": "Python, Django, React, JavaScript, SQL, REST API and Git/GitHub interview questions; debugging questions",
  "resource": "Python 3 Documentation — The Python Tutorial — https://docs.python.org/3/tutorial/&#10;Django Documentation — Using Django — https://docs.djangoproject.com/en/stable/topics/&#10;React — Learn React / Quick Start — https://react.dev/learn&#10;MDN JavaScript Guide — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide&#10;PostgreSQL Documentation — Tutorial — https://www.postgresql.org/docs/current/tutorial.html",
  "outcome": "Written Q&A notes for each stack",
  "priority": "Must"
 },
 {
  "id": "web-concepts",
  "num": 2,
  "name": "Web concepts",
  "topics": "Basic web concepts; HTTP/HTTPS; Client-server architecture; Authentication vs authorization; Cookies / session / token basics; CORS; Database relationships",
  "resource": "MDN Learn Web Development — https://developer.mozilla.org/en-US/docs/Learn_web_development&#10;Django Documentation — Using Django — https://docs.djangoproject.com/en/stable/topics/",
  "outcome": "One-paragraph explanation of each",
  "priority": "Must"
 },
 {
  "id": "career-materials",
  "num": 3,
  "name": "Career materials",
  "topics": "Project explanation; Resume preparation; GitHub portfolio; LinkedIn / profile preparation; Mock interviews; Coding assessment preparation; Job applications",
  "resource": "GitHub Docs — https://docs.github.com/en&#10;Striver's A2Z DSA Sheet - TakeUforward — https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
  "outcome": "Resume, profile, 5 applications sent",
  "priority": "Must"
 }
];

export const PROJECT_CURRICULUM = [
 {
  "module": "Project 0 - Python CLI Task Manager (01 Nov-06 Nov)",
  "details": "Dates: 01-Nov-2026 to 06-Nov-2026 (Day 26-31). Technologies: Python (functions, classes, exceptions, pathlib, JSON, pytest). Features: Menu; CRUD; input validation; functions; classes; exceptions; JSON persistence",
  "outcome": "Milestone: Menu-driven app that survives restarts and bad input; 8+ tests; tagged v1.0. GitHub: Repo python-task-manager, README, tag v1.0. Testing: 8+ pytest tests and a 15-case manual script. Deployment: Not deployed (CLI); README documents how to run."
 },
 {
  "module": "Project 1 - Responsive Expense Tracker (30 Oct-05 Nov)",
  "details": "Dates: 30-Oct-2026 to 05-Nov-2026 (Day 24-30). Technologies: HTML, CSS (Flexbox/Grid), JavaScript, localStorage. Features: Responsive UI; forms; DOM events; validation; localStorage; clean layout; mobile support",
  "outcome": "Milestone: Add / edit / delete / filter expenses with totals, usable on a phone. GitHub: Repo expense-tracker with README and screenshots. Testing: 15-case manual checklist and Lighthouse audit. Deployment: Render Static Sites (or GitHub Pages)."
 },
 {
  "module": "Project 2 - React Task Manager (18 Nov-24 Nov)",
  "details": "Dates: 18-Nov-2026 to 24-Nov-2026 (Day 43-49). Technologies: React (Vite), JavaScript, React Router, localStorage. Features: Components; props; state; forms; filtering; routing; local persistence; reusable components",
  "outcome": "Milestone: Routed task manager with add / edit / complete / delete / filter and persistence. GitHub: Repo react-task-manager with README and component diagram. Testing: 20-case manual checklist; React DevTools Profiler check. Deployment: npm run build and Render Static Sites."
 },
 {
  "module": "Project 3 - Django + PostgreSQL Library Manager (09 Dec-14 Dec)",
  "details": "Dates: 09-Dec-2026 to 14-Dec-2026 (Day 64-69). Technologies: Django, PostgreSQL, Django templates, Django auth. Features: Models; migrations; authentication; CRUD; relationships; admin; database integration",
  "outcome": "Milestone: Multi-user library app with reviews, search, pagination on PostgreSQL. GitHub: Repo django-library with README, ERD and screenshots; feature branch + pull request. Testing: 15+ Django tests. Deployment: Production-readiness check locally (DEBUG=False, collectstatic); full deploy is done for the capstone."
 },
 {
  "module": "Final Capstone - TrackIt (21 Dec-04 Jan)",
  "details": "Dates: 21-Dec-2026 to 04-Jan-2027 (Day 76-90). Technologies: React (Vite) + Django + Django REST Framework + PostgreSQL + JWT + Docker + Render. Features: Registration; login; logout; authentication; role / permission handling; dashboard; CRUD; status; priority; category; search; filtering; pagination; validation; error handling; loading states; responsive UI; PostgreSQL; REST API; Postman testing; GitHub; README; deployment",
  "outcome": "Milestone: Deployed full-stack app where every required feature works end to end on the live URL. GitHub: Monorepo trackit (backend/ frontend/), README with screenshots, architecture and API docs, release v1.0. Testing: Postman collection (15+ requests), 20+ backend tests, manual end-to-end checklist. Deployment: Backend + PostgreSQL on Render (Django guide); frontend on Render Static Sites; CORS and env vars configured."
 }
];
