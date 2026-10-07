// Timetable extracted from "Python FullStack + DSA 92-Day Study Guide" (PDF) and the Tracker (Excel).
// The schedule is the source of truth; user progress lives in localStorage, never here.

export const PLAN = {
  "title": "Python Full Stack + DSA Journey",
  "start": "2026-10-08",
  "end": "2027-01-07",
  "totalDays": 92,
  "totalHours": 604,
  "weekdayMinutes": 360,
  "weekendMinutes": 480,
  "weekendExtraMinutes": 120,
  "blocks": [
    {
      "key": "python",
      "label": "Python",
      "minutes": 90
    },
    {
      "key": "dsa",
      "label": "DSA",
      "minutes": 90
    },
    {
      "key": "fullStack",
      "label": "Full Stack",
      "minutes": 180
    }
  ]
};

export const TIMETABLE = [
 {
  "day": 1,
  "date": "2026-10-08",
  "weekday": "Thursday",
  "week": 1,
  "phaseId": 1,
  "phase": "Phase 1 — Foundations: Python, HTML, CSS, Git",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Install Python 3 and check the version (python --version); VS Code setup; terminal / Command Prompt basics (cd, dir/ls, mkdir); Python interpreter vs running a .py file; comments; indentation; print() (CS50P Lecture 0)",
  "dsa": "Topic: Complexity Analysis: Big-O and Time Complexity\nConcept: Count the operations a loop performs; why O(1), O(log n), O(n), O(n^2) differ; drop constants\nPattern: Loop counting\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Rewrite one of today's solutions from memory at the end of the block.",
  "fullStack": "Developer setup: VS Code extensions, terminal navigation, Git install, git init / status / add / commit, create GitHub account and first repository and push. HTML: what HTML is and how a browser renders a page",
  "weekendExtra": "",
  "deliverable": "Repo python-fullstack-journey on GitHub with README.md, hello.py (prints your name and the Python version) and index.html (Hello page); 3 commits; 3 loops analysed in complexity_notes.md",
  "completionCriteria": "hello.py runs from the terminal; GitHub shows 3 commits; index.html opens in the browser; 3 complexity answers written",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Visual Studio Code Docs",
    "url": "https://code.visualstudio.com/docs"
   },
   {
    "name": "Python Downloads (python.org)",
    "url": "https://www.python.org/downloads/"
   },
   {
    "name": "Pro Git",
    "url": "https://git-scm.com/book/en/v2"
   },
   {
    "name": "GitHub Docs",
    "url": "https://docs.github.com/en"
   },
   {
    "name": "MDN HTML",
    "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
   }
  ],
  "dsaMeta": {
   "topic": "Complexity Analysis: Big-O and Time Complexity",
   "concept": "Count the operations a loop performs; why O(1), O(log n), O(n), O(n^2) differ; drop constants",
   "pattern": "Loop counting",
   "problems": 3
  },
  "projectTags": []
 },
 {
  "day": 2,
  "date": "2026-10-09",
  "weekday": "Friday",
  "week": 1,
  "phaseId": 1,
  "phase": "Phase 1 — Foundations: Python, HTML, CSS, Git",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Variables, naming conventions (snake_case), input(), print() with sep/end, basic debugging (read a traceback, print-debugging) (CS50P Lecture 0)",
  "dsa": "Topic: Basic Maths: digit extraction\nConcept: Use % 10 and // 10 to peel digits: count digits, reverse a number, palindrome number\nPattern: Digit extraction\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Rewrite one of today's solutions from memory at the end of the block.",
  "fullStack": "HTML document structure: DOCTYPE, html, head, body; headings, paragraphs, links (relative vs absolute paths), images with alt text",
  "weekendExtra": "",
  "deliverable": "greeting.py (uses input and print); 4 digit-maths functions in Python; index.html and about.html linked both ways with 1 image, 3 headings, 2 working links",
  "completionCriteria": "greeting.py handles 3 test names; all 4 maths functions pass 3 inputs each; both links work in the browser",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN HTML",
    "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
   }
  ],
  "dsaMeta": {
   "topic": "Basic Maths: digit extraction",
   "concept": "Use % 10 and // 10 to peel digits: count digits, reverse a number, palindrome number",
   "pattern": "Digit extraction",
   "problems": 4
  },
  "projectTags": []
 },
 {
  "day": 3,
  "date": "2026-10-10",
  "weekday": "Saturday",
  "week": 1,
  "phaseId": 1,
  "phase": "Phase 1 — Foundations: Python, HTML, CSS, Git",
  "isWeekend": true,
  "plannedMinutes": 360,
  "python": "Data types: int, float, bool, str, None; type(); type conversion (int(), float(), str(), bool()); f-strings (CS50P Lecture 0)",
  "dsa": "Topic: Patterns I: star and number patterns\nConcept: Outer loop controls rows, inner loop controls columns; print row by row\nPattern: Nested-loop pattern printing\nProblems: 6 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "HTML lists (ul, ol, li), tables (table, tr, th, td), semantic HTML: header, nav, main, section, article, footer",
  "weekendExtra": "",
  "deliverable": "type_lab.py (5 conversions printed with f-strings); 6 pattern programs; profile.html v1 pushed",
  "completionCriteria": "profile.html shows 0 errors in the W3C validator; every .py file runs without errors",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN HTML",
    "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
   }
  ],
  "dsaMeta": {
   "topic": "Patterns I: star and number patterns",
   "concept": "Outer loop controls rows, inner loop controls columns; print row by row",
   "pattern": "Nested-loop pattern printing",
   "problems": 6
  },
  "projectTags": []
 },
 {
  "day": 4,
  "date": "2026-10-11",
  "weekday": "Sunday",
  "week": 1,
  "phaseId": 1,
  "phase": "Phase 1 — Foundations: Python, HTML, CSS, Git",
  "isWeekend": true,
  "plannedMinutes": 480,
  "python": "Operators: arithmetic, comparison, logical, assignment, membership (in), identity (is); operator precedence (CS50P Lecture 1)",
  "dsa": "Topic: Patterns II: pyramids, diamonds, alphabet patterns\nConcept: Spaces and stars per row are formulas of the row index\nPattern: Nested loops with formulas\nProblems: 6 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "HTML forms: form, label, input types, button, select, textarea; accessibility basics (label for/id, alt text, heading order, keyboard focus)",
  "weekendExtra": "2h: Build profile.html v1 (semantic tags, a list, a table and the contact form), validate at validator.w3.org and push to GitHub; clear any backlog from Days 1-3",
  "deliverable": "operators_lab.py (all 6 operator groups demonstrated); 6 more pattern programs; contact form inside profile.html",
  "completionCriteria": "Every form field has a label; form is fully usable with keyboard; operators_lab.py output matches your written predictions",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN HTML",
    "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
   }
  ],
  "dsaMeta": {
   "topic": "Patterns II: pyramids, diamonds, alphabet patterns",
   "concept": "Spaces and stars per row are formulas of the row index",
   "pattern": "Nested loops with formulas",
   "problems": 6
  },
  "projectTags": []
 },
 {
  "day": 5,
  "date": "2026-10-12",
  "weekday": "Monday",
  "week": 1,
  "phaseId": 1,
  "phase": "Phase 1 — Foundations: Python, HTML, CSS, Git",
  "isWeekend": false,
  "plannedMinutes": 480,
  "python": "Conditionals: if, elif, else, nested conditions, ternary expression (CS50P Lecture 1)",
  "dsa": "Topic: Basic Maths II: GCD/HCF, prime check, Armstrong number\nConcept: Euclid's algorithm; test divisors only up to sqrt(n)\nPattern: Math + loops\nProblems: 5 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "CSS syntax, selectors (element, class, id, attribute, descendant), colors, units (px, rem, em, %, vw/vh), typography (font-family, size, weight, line-height)",
  "weekendExtra": "Hour 1 (60 min): style profile.html with an external style.css (8+ selectors, colors, typography) and tab through the page with the keyboard only. Hour 2 (60 min) - WEEKLY CHECKPOINT ROUTINE: re-solve 3 DSA problems from this week without looking (20 min); rebuild 1 coding exercise from memory (15); review mistakes (10); short self-test (10); update GitHub (5)\nWEEK 1 CHECKPOINTS - Python: Rebuild a script from memory using variables, input(), f-strings, operators and an if/elif/else. DSA: Re-solve 3 pattern / maths problems unaided; explain O(n) vs O(n^2) aloud. Full Stack: Rebuild a semantic page skeleton plus a form from memory in 15 minutes; explain CSS selectors. Project: Styled profile page v1 pushed to GitHub.",
  "deliverable": "grade_checker.py (if/elif/else plus a ternary); 5 maths functions; profile.html styled via external style.css",
  "completionCriteria": "style.css linked and uses at least 8 different selectors; each Python script correct on 5 test inputs",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN CSS",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
   }
  ],
  "dsaMeta": {
   "topic": "Basic Maths II: GCD/HCF, prime check, Armstrong number",
   "concept": "Euclid's algorithm; test divisors only up to sqrt(n)",
   "pattern": "Math + loops",
   "problems": 5
  },
  "checkpoint": {
   "week": 1,
   "parts": {
    "Python": "Rebuild a script from memory using variables, input(), f-strings, operators and an if/elif/else",
    "DSA": "Re-solve 3 pattern / maths problems unaided; explain O(n) vs O(n^2) aloud",
    "Full Stack": "Rebuild a semantic page skeleton plus a form from memory in 15 minutes; explain CSS selectors",
    "Project": "Styled profile page v1 pushed to GitHub"
   }
  },
  "projectTags": []
 },
 {
  "day": 6,
  "date": "2026-10-13",
  "weekday": "Tuesday",
  "week": 2,
  "phaseId": 1,
  "phase": "Phase 1 — Foundations: Python, HTML, CSS, Git",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Loops I: for loop, range(), break, continue, pass; looping over strings (CS50P Lecture 2)",
  "dsa": "Topic: Basic Recursion\nConcept: Base case + recursive case; call stack; print 1..N, sum of N, factorial, reverse array\nPattern: Shrink the problem by one\nProblems: 5 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "CSS specificity, cascade, inheritance; why !important is a last resort; CSS reset basics",
  "weekendExtra": "",
  "deliverable": "loops_lab.py (10 exercises incl. FizzBuzz and multiplication table); 5 recursive functions; specificity.html showing 5 conflicting rules and which wins",
  "completionCriteria": "All 10 loop exercises run; each recursion has a base case and passes 3 tests; you can explain every specificity result in one sentence",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN CSS",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
   }
  ],
  "dsaMeta": {
   "topic": "Basic Recursion",
   "concept": "Base case + recursive case; call stack; print 1..N, sum of N, factorial, reverse array",
   "pattern": "Shrink the problem by one",
   "problems": 5
  },
  "projectTags": []
 },
 {
  "day": 7,
  "date": "2026-10-14",
  "weekday": "Wednesday",
  "week": 2,
  "phaseId": 1,
  "phase": "Phase 1 — Foundations: Python, HTML, CSS, Git",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Loops II: while loop, nested loops, sentinel loops, validating input in a loop (CS50P Lecture 2)",
  "dsa": "Topic: Hashing Basics: frequency counting\nConcept: Count with a dict (or collections.Counter); number hashing and character hashing\nPattern: Frequency map\nProblems: 5 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "CSS box model: width, height, margin, padding, border, box-sizing: border-box; margin collapse",
  "weekendExtra": "",
  "deliverable": "guess_the_number.py (while loop, max 5 tries); 5 frequency-count solutions; box_model.html with a card and a DevTools screenshot",
  "completionCriteria": "Game ends correctly on win and loss; 5 DSA problems accepted; DevTools screenshot shows margin, padding, border of the card",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN CSS",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
   }
  ],
  "dsaMeta": {
   "topic": "Hashing Basics: frequency counting",
   "concept": "Count with a dict (or collections.Counter); number hashing and character hashing",
   "pattern": "Frequency map",
   "problems": 5
  },
  "projectTags": []
 },
 {
  "day": 8,
  "date": "2026-10-15",
  "weekday": "Thursday",
  "week": 2,
  "phaseId": 1,
  "phase": "Phase 1 — Foundations: Python, HTML, CSS, Git",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Pattern problems with nested loops (triangle, pyramid, hollow square) and string methods: upper, lower, strip, split, join, replace, find",
  "dsa": "Topic: Sorting I: Selection Sort and Bubble Sort\nConcept: Select the minimum / swap adjacent pairs; both O(n^2); bubble with early exit is O(n) best case\nPattern: Compare and swap passes\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "CSS display (block, inline, inline-block, none), position (static, relative, absolute, fixed, sticky), z-index",
  "weekendExtra": "",
  "deliverable": "string_utils.py (6 string functions); selection_sort.py and bubble_sort.py with 5 test arrays each; positioning.html with a sticky header and an absolutely positioned badge",
  "completionCriteria": "Both sorts return correct output on empty, 1-element, sorted and reverse-sorted arrays; sticky header stays on scroll",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN CSS",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
   }
  ],
  "dsaMeta": {
   "topic": "Sorting I: Selection Sort and Bubble Sort",
   "concept": "Select the minimum / swap adjacent pairs; both O(n^2); bubble with early exit is O(n) best case",
   "pattern": "Compare and swap passes",
   "problems": 3
  },
  "projectTags": []
 },
 {
  "day": 9,
  "date": "2026-10-16",
  "weekday": "Friday",
  "week": 2,
  "phaseId": 1,
  "phase": "Phase 1 — Foundations: Python, HTML, CSS, Git",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Lists: indexing, negative indexing, slicing, list methods (append, extend, insert, remove, pop, sort, reverse, index, count) (CS50P Lecture 2)",
  "dsa": "Topic: Sorting II: Insertion Sort and Merge Sort\nConcept: Insert into a sorted prefix; divide, sort halves, merge in O(n log n)\nPattern: Divide and conquer\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "Flexbox: flex container, flex-direction, justify-content, align-items, flex-wrap, gap, flex-grow / flex-shrink / flex-basis",
  "weekendExtra": "",
  "deliverable": "list_ops.py (10 exercises: rotate, dedupe, second-largest...); insertion_sort.py and merge_sort.py; flex.html with a navbar and a row of 3 cards",
  "completionCriteria": "10 list exercises run; merge sort correct on 5 arrays; navbar and cards wrap correctly when the window is narrowed",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN CSS",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
   }
  ],
  "dsaMeta": {
   "topic": "Sorting II: Insertion Sort and Merge Sort",
   "concept": "Insert into a sorted prefix; divide, sort halves, merge in O(n log n)",
   "pattern": "Divide and conquer",
   "problems": 4
  },
  "projectTags": []
 },
 {
  "day": 10,
  "date": "2026-10-17",
  "weekday": "Saturday",
  "week": 2,
  "phaseId": 1,
  "phase": "Phase 1 — Foundations: Python, HTML, CSS, Git",
  "isWeekend": true,
  "plannedMinutes": 360,
  "python": "Tuples (immutability, unpacking) and sets (add, remove, union, intersection, difference); when to use each",
  "dsa": "Topic: Sorting III: Quick Sort\nConcept: Choose a pivot and partition; average O(n log n), worst O(n^2)\nPattern: Partitioning\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "CSS Grid: grid-template-columns/rows, fr unit, gap, grid-area, repeat(auto-fit, minmax())",
  "weekendExtra": "",
  "deliverable": "tuple_set_lab.py (8 exercises); quick_sort.py; gallery.html with a 4-column grid that collapses to 2 and 1",
  "completionCriteria": "Quick sort passes 5 test arrays; gallery re-flows at 3 widths; backlog list is empty",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN CSS",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
   }
  ],
  "dsaMeta": {
   "topic": "Sorting III: Quick Sort",
   "concept": "Choose a pivot and partition; average O(n log n), worst O(n^2)",
   "pattern": "Partitioning",
   "problems": 3
  },
  "projectTags": []
 },
 {
  "day": 11,
  "date": "2026-10-18",
  "weekday": "Sunday",
  "week": 2,
  "phaseId": 1,
  "phase": "Phase 1 — Foundations: Python, HTML, CSS, Git",
  "isWeekend": true,
  "plannedMinutes": 480,
  "python": "Dictionaries: create, access, get(), keys/values/items, update, pop, loop over a dict; nested collections (list of dicts)",
  "dsa": "Topic: Arrays I: largest, second largest, check sorted, remove duplicates (sorted array)\nConcept: Single pass with tracking variables; two-pointer overwrite\nPattern: Traversal with tracking variables\nProblems: 5 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "Responsive design: viewport meta tag, media queries, mobile-first approach, responsive images, clamp() for fluid typography",
  "weekendExtra": "2h: Build a responsive photo-gallery with CSS Grid (coloured boxes are fine) and make profile.html mobile-first with 3 breakpoints (480 / 768 / 1024 px); clear backlog from Days 6-10; push",
  "deliverable": "student_records.py (list of dicts: add, search, average); 5 array solutions; profile.html responsive at 3 widths",
  "completionCriteria": "No horizontal scrolling at 360 px width; student_records.py handles a missing student without crashing",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN CSS",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
   }
  ],
  "dsaMeta": {
   "topic": "Arrays I: largest, second largest, check sorted, remove duplicates (sorted array)",
   "concept": "Single pass with tracking variables; two-pointer overwrite",
   "pattern": "Traversal with tracking variables",
   "problems": 5
  },
  "projectTags": []
 },
 {
  "day": 12,
  "date": "2026-10-19",
  "weekday": "Monday",
  "week": 2,
  "phaseId": 1,
  "phase": "Phase 1 — Foundations: Python, HTML, CSS, Git",
  "isWeekend": false,
  "plannedMinutes": 480,
  "python": "Comprehensions: list, dictionary and set comprehensions; nested comprehensions; readability rules (CS50P Lecture 9)",
  "dsa": "Topic: Arrays II: left rotate by 1 and by D places, move zeroes to end, linear search\nConcept: Reversal algorithm for rotation; two pointers for zeroes\nPattern: In-place reversal / two pointers\nProblems: 5 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "CSS transitions, transforms, keyframe animations; prefers-reduced-motion",
  "weekendExtra": "Hour 1 (60 min): write a one-page note on HTTP / HTTPS and client-server architecture (request, response, headers, status codes, DNS). Hour 2 (60 min) - WEEKLY CHECKPOINT ROUTINE: re-solve 3 DSA problems from this week without looking (20 min); rebuild 1 coding exercise from memory (15); review mistakes (10); short self-test (10); update GitHub (5)\nWEEK 2 CHECKPOINTS - Python: Rebuild a list / dict / set exercise and a comprehension from memory. DSA: Re-solve one sorting algorithm, one hashing and one array problem unaided. Full Stack: Rebuild a Flexbox navbar and a Grid card layout from memory. Project: Responsive profile page and gallery committed.",
  "deliverable": "comprehensions_lab.py (12 problems each solved with a loop and then with a comprehension); 5 array solutions; animations.html with a hover button, a rotating loader and a fade-in card",
  "completionCriteria": "Loop and comprehension versions give identical output; animations disabled when prefers-reduced-motion is set",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN CSS",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
   }
  ],
  "dsaMeta": {
   "topic": "Arrays II: left rotate by 1 and by D places, move zeroes to end, linear search",
   "concept": "Reversal algorithm for rotation; two pointers for zeroes",
   "pattern": "In-place reversal / two pointers",
   "problems": 5
  },
  "checkpoint": {
   "week": 2,
   "parts": {
    "Python": "Rebuild a list / dict / set exercise and a comprehension from memory",
    "DSA": "Re-solve one sorting algorithm, one hashing and one array problem unaided",
    "Full Stack": "Rebuild a Flexbox navbar and a Grid card layout from memory",
    "Project": "Responsive profile page and gallery committed"
   }
  },
  "projectTags": []
 },
 {
  "day": 13,
  "date": "2026-10-20",
  "weekday": "Tuesday",
  "week": 3,
  "phaseId": 1,
  "phase": "Phase 1 — Foundations: Python, HTML, CSS, Git",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Functions I: def, parameters, return values, positional, keyword and default arguments (CS50P Lecture 0)",
  "dsa": "Topic: Arrays III: union of two sorted arrays, missing number, max consecutive ones, single number (XOR)\nConcept: Two-pointer merge; sum formula and XOR cancellation\nPattern: Math or bit trick\nProblems: 5 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "Reusable CSS: custom properties (variables), utility classes; component styling (button, card, navbar, form); accessibility-aware styling (contrast, :focus-visible, minimum font size)",
  "weekendExtra": "",
  "deliverable": "functions_lab.py (8 functions using default and keyword arguments); 5 array solutions; design-system.css with 6 reusable components and components.html showing all of them",
  "completionCriteria": "Every function has a docstring and 3 tests; text contrast passes DevTools contrast check; keyboard focus is visible",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN CSS",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
   }
  ],
  "dsaMeta": {
   "topic": "Arrays III: union of two sorted arrays, missing number, max consecutive ones, single number (XOR)",
   "concept": "Two-pointer merge; sum formula and XOR cancellation",
   "pattern": "Math or bit trick",
   "problems": 5
  },
  "projectTags": []
 },
 {
  "day": 14,
  "date": "2026-10-21",
  "weekday": "Wednesday",
  "week": 3,
  "phaseId": 1,
  "phase": "Phase 1 — Foundations: Python, HTML, CSS, Git",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Functions II: *args, **kwargs, scope, LEGB rule, why global is discouraged (CS50P Lecture 9)",
  "dsa": "Topic: Arrays IV: longest subarray with sum K\nConcept: Prefix sum + hash map of first-seen prefix; sliding window when all values are positive\nPattern: Prefix sum + hashmap\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "Git workflow: git log, diff, branch, switch / checkout, merge, pull, push, .gitignore, README, good commit messages, pull request awareness (practise on GitHub)",
  "weekendExtra": "",
  "deliverable": "args_kwargs_scope.py (6 demos incl. a LEGB demo); 4 prefix-sum solutions; repo with a feature branch merged through a pull request, README and .gitignore",
  "completionCriteria": "Pull request merged on GitHub; git log shows at least 6 meaningful commit messages; scope demo output matches predictions",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Pro Git",
    "url": "https://git-scm.com/book/en/v2"
   },
   {
    "name": "GitHub Docs",
    "url": "https://docs.github.com/en"
   }
  ],
  "dsaMeta": {
   "topic": "Arrays IV: longest subarray with sum K",
   "concept": "Prefix sum + hash map of first-seen prefix; sliding window when all values are positive",
   "pattern": "Prefix sum + hashmap",
   "problems": 4
  },
  "projectTags": []
 },
 {
  "day": 15,
  "date": "2026-10-22",
  "weekday": "Thursday",
  "week": 3,
  "phaseId": 2,
  "phase": "Phase 2 — JavaScript, Python OOP, Projects 0 and 1",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "lambda, map(), filter(), reduce() (functools); sorted() and sort() with key (CS50P Lecture 9)",
  "dsa": "Topic: Arrays V: Two Sum, Sort 0s/1s/2s (Dutch National Flag), Majority Element (Moore's voting)\nConcept: Hash lookup; three-pointer partition; vote cancellation\nPattern: Hashing / multi-pointer\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "HTML + CSS capstone: build a full responsive landing page (hero, features grid, testimonial, footer) from a paper sketch; browser DevTools Elements and Network tabs",
  "weekendExtra": "",
  "deliverable": "functional_tools.py (8 exercises); 4 array solutions; landing page live on GitHub Pages or Render Static Sites",
  "completionCriteria": "Landing page URL opens on your phone; Lighthouse accessibility score of 90 or more; 4 DSA problems accepted",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN CSS",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
   },
   {
    "name": "Render Docs — Static Sites",
    "url": "https://render.com/docs/static-sites"
   }
  ],
  "dsaMeta": {
   "topic": "Arrays V: Two Sum, Sort 0s/1s/2s (Dutch National Flag), Majority Element (Moore's voting)",
   "concept": "Hash lookup; three-pointer partition; vote cancellation",
   "pattern": "Hashing / multi-pointer",
   "problems": 4
  },
  "projectTags": []
 },
 {
  "day": 16,
  "date": "2026-10-23",
  "weekday": "Friday",
  "week": 3,
  "phaseId": 2,
  "phase": "Phase 2 — JavaScript, Python OOP, Projects 0 and 1",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Modules and imports: import, from import, creating your own module, __name__ and if __name__ == \"__main__\" (CS50P Lecture 4)",
  "dsa": "Topic: Arrays VI: Kadane's algorithm, best time to buy and sell stock, rearrange array by sign\nConcept: Running sum that resets when negative; track minimum so far\nPattern: Running best / one pass\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "JavaScript basics: running JS in the browser console and in a script tag; let, const, data types, operators, template literals",
  "weekendExtra": "",
  "deliverable": "mathlib.py module imported by main.py (guarded by __name__); 4 array solutions; js-basics.html with 10 console experiments",
  "completionCriteria": "main.py runs, and importing mathlib prints nothing extra; 10 JS experiments logged in the console",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN JavaScript Guide",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
   }
  ],
  "dsaMeta": {
   "topic": "Arrays VI: Kadane's algorithm, best time to buy and sell stock, rearrange array by sign",
   "concept": "Running sum that resets when negative; track minimum so far",
   "pattern": "Running best / one pass",
   "problems": 4
  },
  "projectTags": []
 },
 {
  "day": 17,
  "date": "2026-10-24",
  "weekday": "Saturday",
  "week": 3,
  "phaseId": 2,
  "phase": "Phase 2 — JavaScript, Python OOP, Projects 0 and 1",
  "isWeekend": true,
  "plannedMinutes": 360,
  "python": "Packages, pip, virtual environments (python -m venv), requirements.txt, installing the requests package (CS50P Lecture 4)",
  "dsa": "Topic: Arrays VII: next permutation, leaders in an array, longest consecutive sequence\nConcept: Scan from the right; set-based sequence start detection\nPattern: Right-to-left scan / hash set\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "JavaScript: conditions, loops, functions, arrow functions, scope, hoisting basics",
  "weekendExtra": "",
  "deliverable": "A venv with requests installed and requirements.txt committed; 3 array solutions; js-functions.js with 10 exercises",
  "completionCriteria": "pip freeze matches requirements.txt; a new venv can be rebuilt from it; 5 broken snippets fixed",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN JavaScript Guide",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
   }
  ],
  "dsaMeta": {
   "topic": "Arrays VII: next permutation, leaders in an array, longest consecutive sequence",
   "concept": "Scan from the right; set-based sequence start detection",
   "pattern": "Right-to-left scan / hash set",
   "problems": 3
  },
  "projectTags": []
 },
 {
  "day": 18,
  "date": "2026-10-25",
  "weekday": "Sunday",
  "week": 3,
  "phaseId": 2,
  "phase": "Phase 2 — JavaScript, Python OOP, Projects 0 and 1",
  "isWeekend": true,
  "plannedMinutes": 480,
  "python": "Exception handling: try, except, else, finally, raise; common exceptions (ValueError, KeyError, FileNotFoundError); custom exceptions; defensive validation (CS50P Lecture 3)",
  "dsa": "Topic: Arrays VIII (matrix): set matrix zeroes, rotate matrix, spiral traversal\nConcept: In-place marking; transpose then reverse rows; boundary shrinking\nPattern: 2D traversal\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "JavaScript arrays and array methods (push, pop, map, filter, reduce, find, forEach, sort); objects, destructuring, spread, rest",
  "weekendExtra": "2h: JavaScript practice: fix 5 deliberately broken snippets using DevTools breakpoints and code 10 array-method one-liners; clear backlog from Days 13-17; push",
  "deliverable": "safe_input.py with 3 validators and a custom exception; 3 matrix solutions; array-methods.js with 12 exercises",
  "completionCriteria": "No input can crash safe_input.py; 12 JS exercises print expected output; 20 interview answers written",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN JavaScript Guide",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
   }
  ],
  "dsaMeta": {
   "topic": "Arrays VIII (matrix): set matrix zeroes, rotate matrix, spiral traversal",
   "concept": "In-place marking; transpose then reverse rows; boundary shrinking",
   "pattern": "2D traversal",
   "problems": 3
  },
  "projectTags": []
 },
 {
  "day": 19,
  "date": "2026-10-26",
  "weekday": "Monday",
  "week": 3,
  "phaseId": 2,
  "phase": "Phase 2 — JavaScript, Python OOP, Projects 0 and 1",
  "isWeekend": false,
  "plannedMinutes": 480,
  "python": "Files: open(), reading and writing text files, modes r/w/a, context managers (with) (CS50P Lecture 6)",
  "dsa": "Topic: Arrays IX: count subarrays with sum K, 3Sum\nConcept: Prefix-sum counting; sort + two pointers while skipping duplicates\nPattern: Prefix sum / two pointers\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "DOM: document object, querySelector / querySelectorAll, textContent, classList, creating, appending and removing elements",
  "weekendExtra": "Hour 1 (60 min): JavaScript interview set 1 - answer 20 questions aloud (var / let / const, hoisting, scope, == vs ===, closures, this basics) and write short notes. Hour 2 (60 min) - WEEKLY CHECKPOINT ROUTINE: re-solve 3 DSA problems from this week without looking (20 min); rebuild 1 coding exercise from memory (15); review mistakes (10); short self-test (10); update GitHub (5)\nWEEK 3 CHECKPOINTS - Python: Rebuild a module with a __main__ guard and a safe_input with exceptions from memory. DSA: Re-solve Two Sum, Kadane's algorithm and 3Sum unaided. Full Stack: Landing page live; write 10 array-method one-liners from memory; DOM counter. Project: Landing page deployed.",
  "deliverable": "notes_app.py that appends dated notes to notes.txt and prints them; 4 array solutions; dom-playground.html with 8 DOM manipulations",
  "completionCriteria": "notes.txt persists between runs; 4 DSA problems accepted; every DOM change visible in the page",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN JavaScript Guide",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
   },
   {
    "name": "MDN Learn Web Development",
    "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development"
   }
  ],
  "dsaMeta": {
   "topic": "Arrays IX: count subarrays with sum K, 3Sum",
   "concept": "Prefix-sum counting; sort + two pointers while skipping duplicates",
   "pattern": "Prefix sum / two pointers",
   "problems": 4
  },
  "checkpoint": {
   "week": 3,
   "parts": {
    "Python": "Rebuild a module with a __main__ guard and a safe_input with exceptions from memory",
    "DSA": "Re-solve Two Sum, Kadane's algorithm and 3Sum unaided",
    "Full Stack": "Landing page live; write 10 array-method one-liners from memory; DOM counter",
    "Project": "Landing page deployed"
   }
  },
  "projectTags": []
 },
 {
  "day": 20,
  "date": "2026-10-27",
  "weekday": "Tuesday",
  "week": 4,
  "phaseId": 2,
  "phase": "Phase 2 — JavaScript, Python OOP, Projects 0 and 1",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "pathlib (Path, exists, read_text, write_text, mkdir) and CSV reading/writing (csv module, DictReader, DictWriter) (CS50P Lecture 6)",
  "dsa": "Topic: Arrays X: 4Sum, Pascal's triangle, majority element II\nConcept: Sort + two pointers; build rows from previous row; two-candidate voting\nPattern: Two pointers / math\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "JavaScript events: click, input, submit, keyboard; addEventListener; event delegation; reading form values",
  "weekendExtra": "",
  "deliverable": "csv_report.py (reads students.csv, prints averages with pathlib); 3 array solutions; todo-dom.html (add and remove tasks using events)",
  "completionCriteria": "csv_report.py gives correct averages for a 10-row file; todo list adds and removes items with delegation",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN JavaScript Guide",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
   }
  ],
  "dsaMeta": {
   "topic": "Arrays X: 4Sum, Pascal's triangle, majority element II",
   "concept": "Sort + two pointers; build rows from previous row; two-candidate voting",
   "pattern": "Two pointers / math",
   "problems": 3
  },
  "projectTags": []
 },
 {
  "day": 21,
  "date": "2026-10-28",
  "weekday": "Wednesday",
  "week": 4,
  "phaseId": 2,
  "phase": "Phase 2 — JavaScript, Python OOP, Projects 0 and 1",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "JSON in Python: json.load, json.dump, dumps, loads; serialization and deserialization; encoding basics (UTF-8) (CS50P Lecture 6)",
  "dsa": "Topic: Arrays XI: merge overlapping intervals, merge two sorted arrays without extra space, find repeating and missing number\nConcept: Sort by start then merge; gap method; math / XOR\nPattern: Sort + sweep\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "JavaScript form validation (required, pattern, custom messages), localStorage, sessionStorage, JSON.stringify / JSON.parse",
  "weekendExtra": "",
  "deliverable": "json_store.py (save and load a list of dicts as JSON); 3 array solutions; signup-form.html with validation and localStorage saving",
  "completionCriteria": "Invalid inputs show messages; saved data survives a page refresh; JSON file loads back identical",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN JavaScript Guide",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
   }
  ],
  "dsaMeta": {
   "topic": "Arrays XI: merge overlapping intervals, merge two sorted arrays without extra space, find repeating and missing number",
   "concept": "Sort by start then merge; gap method; math / XOR",
   "pattern": "Sort + sweep",
   "problems": 3
  },
  "projectTags": []
 },
 {
  "day": 22,
  "date": "2026-10-29",
  "weekday": "Thursday",
  "week": 4,
  "phaseId": 2,
  "phase": "Phase 2 — JavaScript, Python OOP, Projects 0 and 1",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "OOP I: classes, objects, __init__, instance attributes, instance methods (CS50P Lecture 8)",
  "dsa": "Topic: Binary Search I: classic binary search, lower bound, upper bound, search insert position\nConcept: Halve the search range; maintain low / mid / high; first index where condition becomes true\nPattern: Binary search on index\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "JavaScript asynchronous code: setTimeout, Promises (then / catch), async / await, try / catch",
  "weekendExtra": "",
  "deliverable": "bank_account.py (class BankAccount with deposit, withdraw, balance); 4 binary-search solutions (iterative); async-demo.js with 3 promise chains and an async function",
  "completionCriteria": "BankAccount rejects overdrafts; binary search correct on 5 arrays incl. empty; async demo logs in the right order",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN JavaScript Guide",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
   }
  ],
  "dsaMeta": {
   "topic": "Binary Search I: classic binary search, lower bound, upper bound, search insert position",
   "concept": "Halve the search range; maintain low / mid / high; first index where condition becomes true",
   "pattern": "Binary search on index",
   "problems": 4
  },
  "projectTags": []
 },
 {
  "day": 23,
  "date": "2026-10-30",
  "weekday": "Friday",
  "week": 4,
  "phaseId": 2,
  "phase": "Phase 2 — JavaScript, Python OOP, Projects 0 and 1",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "OOP II: class attributes, class methods (@classmethod), static methods (@staticmethod), __str__ (CS50P Lecture 8)",
  "dsa": "Topic: Binary Search II: first and last occurrence, count occurrences, search in rotated sorted array\nConcept: Bias the search left or right; identify the sorted half\nPattern: Binary search with bias\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "Fetch API and HTTP: GET, POST, PUT, PATCH, DELETE, status codes, REST API basics, error handling (response.ok, catch); use the free JSONPlaceholder API",
  "weekendExtra": "",
  "deliverable": "counter_class.py (class attribute counting instances, classmethod factory, staticmethod validator); 4 binary-search solutions; api-client.html listing 10 posts from JSONPlaceholder with a loading and an error message",
  "completionCriteria": "Page shows loading text, then data; disconnecting the network shows the error message; 4 DSA problems accepted",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN JavaScript Guide",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
   }
  ],
  "dsaMeta": {
   "topic": "Binary Search II: first and last occurrence, count occurrences, search in rotated sorted array",
   "concept": "Bias the search left or right; identify the sorted half",
   "pattern": "Binary search with bias",
   "problems": 4
  },
  "projectTags": []
 },
 {
  "day": 24,
  "date": "2026-10-31",
  "weekday": "Saturday",
  "week": 4,
  "phaseId": 2,
  "phase": "Phase 2 — JavaScript, Python OOP, Projects 0 and 1",
  "isWeekend": true,
  "plannedMinutes": 360,
  "python": "OOP III: encapsulation (_protected, __private, @property), inheritance, super(), method overriding (CS50P Lecture 8)",
  "dsa": "Topic: Binary Search III: minimum in rotated sorted array, peak element, floor and ceil\nConcept: Compare mid with neighbours / endpoints to decide the side\nPattern: Binary search on structure\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "PROJECT 1 Day 1/7 - Expense Tracker: wireframes on paper (mobile + desktop), file structure, semantic HTML skeleton",
  "weekendExtra": "",
  "deliverable": "[PROJECT 1 — START] vehicle_inheritance.py (Vehicle > Car, Bike with overrides and a property); 3 binary-search solutions; Project 1 wireframes + index.html skeleton committed",
  "completionCriteria": "Wireframes photographed in /docs; skeleton passes the W3C validator; subclass overrides demonstrated",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN HTML",
    "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
   }
  ],
  "dsaMeta": {
   "topic": "Binary Search III: minimum in rotated sorted array, peak element, floor and ceil",
   "concept": "Compare mid with neighbours / endpoints to decide the side",
   "pattern": "Binary search on structure",
   "problems": 3
  },
  "projectTags": [
   "project-1"
  ]
 },
 {
  "day": 25,
  "date": "2026-11-01",
  "weekday": "Sunday",
  "week": 4,
  "phaseId": 2,
  "phase": "Phase 2 — JavaScript, Python OOP, Projects 0 and 1",
  "isWeekend": true,
  "plannedMinutes": 480,
  "python": "OOP IV: polymorphism, abstraction (abc.ABC, @abstractmethod), composition vs inheritance",
  "dsa": "Topic: Binary Search IV (answers): square root, Nth root, Koko eating bananas\nConcept: Binary search on the answer range with a feasibility check\nPattern: Binary search on answer\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "PROJECT 1 Day 2/7: responsive layout CSS (Flexbox + Grid), colour variables, mobile-first breakpoints",
  "weekendExtra": "2h: Project 1: finish the responsive layout CSS and commit; Project 0 prep: sketch the Task class and the 6 menu options on paper; clear backlog; push",
  "deliverable": "shapes_abc.py (abstract Shape with Circle / Rectangle) and a Library class composed of Book objects; 3 binary-search-on-answer solutions; Project 1 layout done",
  "completionCriteria": "Layout looks correct at 360 / 768 / 1280 px; abstract class cannot be instantiated; notes page written",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN CSS",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
   }
  ],
  "dsaMeta": {
   "topic": "Binary Search IV (answers): square root, Nth root, Koko eating bananas",
   "concept": "Binary search on the answer range with a feasibility check",
   "pattern": "Binary search on answer",
   "problems": 3
  },
  "projectTags": [
   "project-1"
  ]
 },
 {
  "day": 26,
  "date": "2026-11-02",
  "weekday": "Monday",
  "week": 4,
  "phaseId": 2,
  "phase": "Phase 2 — JavaScript, Python OOP, Projects 0 and 1",
  "isWeekend": false,
  "plannedMinutes": 480,
  "python": "PROJECT 0 Day 1/6 - Python CLI Task Manager: design the Task class (id, title, status, priority), menu loop, function structure, main guard",
  "dsa": "Topic: Binary Search V (answers II): capacity to ship packages, allocate books (concept)\nConcept: Minimise the maximum; feasibility function\nPattern: Binary search on answer\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "PROJECT 1 Day 3/7: JavaScript - render expenses from an array, add-expense form handler, running total",
  "weekendExtra": "Hour 1 (60 min): Project 1 - finish add-expense and list rendering, commit, and draft the 15-case manual test checklist. Hour 2 (60 min) - WEEKLY CHECKPOINT ROUTINE: re-solve 3 DSA problems from this week without looking (20 min); rebuild 1 coding exercise from memory (15); review mistakes (10); short self-test (10); update GitHub (5)\nWEEK 4 CHECKPOINTS - Python: Rebuild a 3-class hierarchy from memory; Project 0 menu skeleton running. DSA: Re-solve lower bound and 2 binary-search-on-answer problems unaided. Full Stack: Rebuild fetch-and-render list from memory; DOM events quiz. Project: Project 1 add and list expenses working.",
  "deliverable": "[PROJECT 0 — START] Project 0: menu with 6 options running (stubs allowed) and Task class; 3 solutions; Project 1: add and list expenses in the DOM",
  "completionCriteria": "Menu loops until Exit; adding an expense updates the list and total without reload",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN JavaScript Guide",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
   }
  ],
  "dsaMeta": {
   "topic": "Binary Search V (answers II): capacity to ship packages, allocate books (concept)",
   "concept": "Minimise the maximum; feasibility function",
   "pattern": "Binary search on answer",
   "problems": 3
  },
  "checkpoint": {
   "week": 4,
   "parts": {
    "Python": "Rebuild a 3-class hierarchy from memory; Project 0 menu skeleton running",
    "DSA": "Re-solve lower bound and 2 binary-search-on-answer problems unaided",
    "Full Stack": "Rebuild fetch-and-render list from memory; DOM events quiz",
    "Project": "Project 1 add and list expenses working"
   }
  },
  "projectTags": [
   "project-1",
   "project-0"
  ]
 },
 {
  "day": 27,
  "date": "2026-11-03",
  "weekday": "Tuesday",
  "week": 5,
  "phaseId": 2,
  "phase": "Phase 2 — JavaScript, Python OOP, Projects 0 and 1",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "PROJECT 0 Day 2/6: full CRUD inside a TaskManager class (add, list, update, delete, mark done)",
  "dsa": "Topic: Strings I: reverse words, largest odd number, longest common prefix, isomorphic strings, rotate string, valid anagram\nConcept: Split / join, character maps, sorting characters\nPattern: Hash map on characters\nProblems: 6 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "PROJECT 1 Day 4/7: edit and delete expenses, form validation (amount > 0, date required, category chosen), error messages",
  "weekendExtra": "",
  "deliverable": "Project 0: CRUD works for 5 tasks; 6 string solutions; Project 1: edit / delete / validation working",
  "completionCriteria": "Create, read, update, delete each tested manually and ticked in a checklist; empty or negative amounts are rejected",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN JavaScript Guide",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
   }
  ],
  "dsaMeta": {
   "topic": "Strings I: reverse words, largest odd number, longest common prefix, isomorphic strings, rotate string, valid anagram",
   "concept": "Split / join, character maps, sorting characters",
   "pattern": "Hash map on characters",
   "problems": 6
  },
  "projectTags": [
   "project-1",
   "project-0"
  ]
 },
 {
  "day": 28,
  "date": "2026-11-04",
  "weekday": "Wednesday",
  "week": 5,
  "phaseId": 2,
  "phase": "Phase 2 — JavaScript, Python OOP, Projects 0 and 1",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "PROJECT 0 Day 3/6: input validation helpers and custom exceptions (InvalidTaskError, TaskNotFoundError)",
  "dsa": "Topic: Strings II: sort characters by frequency, maximum nesting depth, Roman to integer, atoi, longest palindromic substring\nConcept: Frequency sort; expand around centre\nPattern: Expand around centre\nProblems: 5 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "PROJECT 1 Day 5/7: localStorage persistence, category filter, month filter, totals per category",
  "weekendExtra": "",
  "deliverable": "Project 0: every bad input path shows a friendly message; 5 string solutions; Project 1 data persists after refresh",
  "completionCriteria": "10 invalid inputs tried on Project 0 without a crash; Project 1 filter changes totals correctly",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN JavaScript Guide",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
   }
  ],
  "dsaMeta": {
   "topic": "Strings II: sort characters by frequency, maximum nesting depth, Roman to integer, atoi, longest palindromic substring",
   "concept": "Frequency sort; expand around centre",
   "pattern": "Expand around centre",
   "problems": 5
  },
  "projectTags": [
   "project-1",
   "project-0"
  ]
 },
 {
  "day": 29,
  "date": "2026-11-05",
  "weekday": "Thursday",
  "week": 5,
  "phaseId": 2,
  "phase": "Phase 2 — JavaScript, Python OOP, Projects 0 and 1",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "PROJECT 0 Day 4/6: JSON persistence with pathlib and context managers; handle missing or corrupt file",
  "dsa": "Topic: Linked List I: singly linked list - Node class, traversal, insert at head / tail / position, delete, search\nConcept: Pointer manipulation; dummy head node\nPattern: Pointer walk\nProblems: 5 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "PROJECT 1 Day 6/7: mobile support - touch-sized buttons, responsive table / cards, accessibility pass (labels, focus, contrast), Lighthouse audit",
  "weekendExtra": "",
  "deliverable": "Project 0: tasks survive restart, corrupt file handled; singly linked list class with 5 operations; Project 1 Lighthouse report saved",
  "completionCriteria": "Delete tasks.json and run again without a crash; Lighthouse accessibility and best-practices scores of 90 or more",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN Learn Web Development",
    "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development"
   }
  ],
  "dsaMeta": {
   "topic": "Linked List I: singly linked list - Node class, traversal, insert at head / tail / position, delete, search",
   "concept": "Pointer manipulation; dummy head node",
   "pattern": "Pointer walk",
   "problems": 5
  },
  "projectTags": [
   "project-1",
   "project-0"
  ]
 },
 {
  "day": 30,
  "date": "2026-11-06",
  "weekday": "Friday",
  "week": 5,
  "phaseId": 2,
  "phase": "Phase 2 — JavaScript, Python OOP, Projects 0 and 1",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "PROJECT 0 Day 5/6: search, filter and sort tasks; refactor with docstrings; write 8 tests (assert or pytest)",
  "dsa": "Topic: Linked List II: doubly linked list - insert, delete, reverse a DLL\nConcept: Maintain both prev and next pointers\nPattern: Pointer walk (two links)\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "PROJECT 1 Day 7/7: README with screenshots, manual test checklist (15 cases), push to GitHub, deploy on Render Static Sites",
  "weekendExtra": "",
  "deliverable": "[PROJECT 1 — END] Project 0: 8 passing tests; doubly linked list with insert / delete / reverse; Project 1 live URL",
  "completionCriteria": "Tests pass; Project 1 live URL works on phone; README lists features, tech and how to run",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Render Docs — Static Sites",
    "url": "https://render.com/docs/static-sites"
   },
   {
    "name": "GitHub Docs",
    "url": "https://docs.github.com/en"
   }
  ],
  "dsaMeta": {
   "topic": "Linked List II: doubly linked list - insert, delete, reverse a DLL",
   "concept": "Maintain both prev and next pointers",
   "pattern": "Pointer walk (two links)",
   "problems": 4
  },
  "projectTags": [
   "project-1",
   "project-0"
  ]
 },
 {
  "day": 31,
  "date": "2026-11-07",
  "weekday": "Saturday",
  "week": 5,
  "phaseId": 2,
  "phase": "Phase 2 — JavaScript, Python OOP, Projects 0 and 1",
  "isWeekend": true,
  "plannedMinutes": 360,
  "python": "PROJECT 0 Day 6/6: README, 15-case manual test script, tag v1.0 and push",
  "dsa": "Topic: Linked List III: middle of list (slow and fast pointers), reverse a list, detect a cycle\nConcept: Fast and slow pointers; iterative and recursive reversal\nPattern: Fast and slow pointers\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "JavaScript consolidation: build a CRUD client for JSONPlaceholder using fetch (GET / POST / PUT / PATCH / DELETE) with error handling; fix Project 1 bugs",
  "weekendExtra": "",
  "deliverable": "[PROJECT 0 — END] Project 0 released as v1.0 on GitHub; 4 linked-list solutions; fetch-crud.html demonstrating all 5 HTTP methods",
  "completionCriteria": "Project 0 README shows run steps and a screenshot; all 5 HTTP calls return expected status in the Network tab",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "MDN JavaScript Guide",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
   },
   {
    "name": "Pro Git",
    "url": "https://git-scm.com/book/en/v2"
   }
  ],
  "dsaMeta": {
   "topic": "Linked List III: middle of list (slow and fast pointers), reverse a list, detect a cycle",
   "concept": "Fast and slow pointers; iterative and recursive reversal",
   "pattern": "Fast and slow pointers",
   "problems": 4
  },
  "projectTags": [
   "project-0"
  ]
 },
 {
  "day": 32,
  "date": "2026-11-08",
  "weekday": "Sunday",
  "week": 5,
  "phaseId": 3,
  "phase": "Phase 3 — React and Project 2",
  "isWeekend": true,
  "plannedMinutes": 480,
  "python": "Iterables and iterators: iter(), next(), StopIteration, writing your own iterator class (CS50P Lecture 9)",
  "dsa": "Topic: Linked List IV: start of cycle, length of loop, palindrome linked list, remove Nth node from end\nConcept: Floyd's cycle detection; reverse second half\nPattern: Fast and slow pointers\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "React: what React is, Node.js install (Vite toolchain only, not a backend), create a Vite React app, project structure, JSX rules",
  "weekendExtra": "2h: React setup practice: recreate the Project 1 header, footer and one card as JSX (no props yet); clear backlog; push",
  "deliverable": "countdown_iterator.py (class with __iter__ / __next__); 4 linked-list solutions; first Vite app showing JSX with 3 expressions",
  "completionCriteria": "npm run dev serves your app at localhost; iterator stops cleanly; memory rebuild finished",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "React — Learn React / Quick Start",
    "url": "https://react.dev/learn"
   },
   {
    "name": "Vite — Getting Started",
    "url": "https://vite.dev/guide/"
   },
   {
    "name": "Node.js Download (needed only as the Vite toolchain)",
    "url": "https://nodejs.org/en/download"
   }
  ],
  "dsaMeta": {
   "topic": "Linked List IV: start of cycle, length of loop, palindrome linked list, remove Nth node from end",
   "concept": "Floyd's cycle detection; reverse second half",
   "pattern": "Fast and slow pointers",
   "problems": 4
  },
  "projectTags": []
 },
 {
  "day": 33,
  "date": "2026-11-09",
  "weekday": "Monday",
  "week": 5,
  "phaseId": 3,
  "phase": "Phase 3 — React and Project 2",
  "isWeekend": false,
  "plannedMinutes": 480,
  "python": "Generators: yield, generator expressions, memory advantages (CS50P Lecture 9)",
  "dsa": "Topic: Linked List V: add two numbers, odd-even list, merge two sorted lists, sort list (merge sort)\nConcept: Dummy head with carry; split and merge\nPattern: Merge with dummy node\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "React components, props, children, component composition, one component per file",
  "weekendExtra": "Hour 1 (60 min): rebuild the Project 1 add-expense feature from memory without looking at the code. Hour 2 (60 min) - WEEKLY CHECKPOINT ROUTINE: re-solve 3 DSA problems from this week without looking (20 min); rebuild 1 coding exercise from memory (15); review mistakes (10); short self-test (10); update GitHub (5)\nWEEK 5 CHECKPOINTS - Python: Rebuild Project 0 JSON save / load from memory. DSA: Re-solve reverse linked list, detect cycle and middle node unaided. Full Stack: Rebuild localStorage CRUD from memory. Project: Project 0 v1.0 tagged and Project 1 live.",
  "deliverable": "generators_lab.py (fibonacci generator, file line reader, batching); 4 linked-list solutions; React page built from 5 components passing props",
  "completionCriteria": "Generator yields first 20 Fibonacci numbers lazily; app shows props rendering correctly",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "React — Learn React / Quick Start",
    "url": "https://react.dev/learn"
   }
  ],
  "dsaMeta": {
   "topic": "Linked List V: add two numbers, odd-even list, merge two sorted lists, sort list (merge sort)",
   "concept": "Dummy head with carry; split and merge",
   "pattern": "Merge with dummy node",
   "problems": 4
  },
  "checkpoint": {
   "week": 5,
   "parts": {
    "Python": "Rebuild Project 0 JSON save / load from memory",
    "DSA": "Re-solve reverse linked list, detect cycle and middle node unaided",
    "Full Stack": "Rebuild localStorage CRUD from memory",
    "Project": "Project 0 v1.0 tagged and Project 1 live"
   }
  },
  "projectTags": []
 },
 {
  "day": 34,
  "date": "2026-11-10",
  "weekday": "Tuesday",
  "week": 6,
  "phaseId": 3,
  "phase": "Phase 3 — React and Project 2",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Closures and decorators: functions as values, nested functions, @decorator syntax, functools.wraps (CS50P Lecture 9)",
  "dsa": "Topic: Linked List VI: reverse nodes in k-group, rotate list, intersection of two lists\nConcept: Segment-wise reversal; length difference alignment\nPattern: Pointer walk + counting\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "React state: useState, event handling (onClick, onChange), lifting state up, re-render model",
  "weekendExtra": "",
  "deliverable": "decorators.py (@timer, @log_calls, @retry); 3 linked-list solutions; counter + toggle + like-button components",
  "completionCriteria": "Each decorator preserves the function name; state updates re-render without page reload",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "React — Learn React / Quick Start",
    "url": "https://react.dev/learn"
   }
  ],
  "dsaMeta": {
   "topic": "Linked List VI: reverse nodes in k-group, rotate list, intersection of two lists",
   "concept": "Segment-wise reversal; length difference alignment",
   "pattern": "Pointer walk + counting",
   "problems": 3
  },
  "projectTags": []
 },
 {
  "day": 35,
  "date": "2026-11-11",
  "weekday": "Wednesday",
  "week": 6,
  "phaseId": 3,
  "phase": "Phase 3 — React and Project 2",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Type hints (list[int], dict[str, int], Optional, Union / |), dataclasses (@dataclass, field, frozen)",
  "dsa": "Topic: Recursion II: subsequences (pick / not pick), subset sums, combination sum\nConcept: Decision tree: pick or skip; carry a path list\nPattern: Recursion with choices\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "React conditional rendering, lists and keys (why keys matter), rendering arrays of objects",
  "weekendExtra": "",
  "deliverable": "typed_models.py (3 dataclasses with type hints, run mypy-style review by eye); 4 recursion solutions; ProductList component rendering 10 items with keys",
  "completionCriteria": "No key warnings in the browser console; each recursion prints the right number of results",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "React — Learn React / Quick Start",
    "url": "https://react.dev/learn"
   }
  ],
  "dsaMeta": {
   "topic": "Recursion II: subsequences (pick / not pick), subset sums, combination sum",
   "concept": "Decision tree: pick or skip; carry a path list",
   "pattern": "Recursion with choices",
   "problems": 4
  },
  "projectTags": []
 },
 {
  "day": 36,
  "date": "2026-11-12",
  "weekday": "Thursday",
  "week": 6,
  "phaseId": 3,
  "phase": "Phase 3 — React and Project 2",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Clean code principles: meaningful names, small functions, docstrings, DRY, reusable functions; debugging with breakpoint() / pdb",
  "dsa": "Topic: Recursion III: subsets II, combination sum II, palindrome partitioning\nConcept: Skip duplicates by sorting + same-level check\nPattern: Backtracking with pruning\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "React forms and controlled components, form validation, handling multiple inputs with one state object",
  "weekendExtra": "",
  "deliverable": "Refactor Project 0 functions to under 20 lines each with docstrings; 3 backtracking solutions; SignupForm component with 4 validated fields",
  "completionCriteria": "Project 0 still passes its 8 tests after refactor; form shows an error under each invalid field",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "React — Learn React / Quick Start",
    "url": "https://react.dev/learn"
   }
  ],
  "dsaMeta": {
   "topic": "Recursion III: subsets II, combination sum II, palindrome partitioning",
   "concept": "Skip duplicates by sorting + same-level check",
   "pattern": "Backtracking with pruning",
   "problems": 3
  },
  "projectTags": []
 },
 {
  "day": 37,
  "date": "2026-11-13",
  "weekday": "Friday",
  "week": 6,
  "phaseId": 3,
  "phase": "Phase 3 — React and Project 2",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Basic testing: assert, unittest, pytest basics (test functions, fixtures, parametrize) (CS50P Lecture 5)",
  "dsa": "Topic: Backtracking: permutations, N-Queens (concept), Sudoku solver (awareness)\nConcept: Choose, explore, un-choose; used-array or swap technique\nPattern: Backtracking template\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "React useEffect: lifecycle, dependency array, cleanup, fetching data on mount",
  "weekendExtra": "",
  "deliverable": "test_project0.py with 10 pytest tests; 3 backtracking solutions; component that fetches users from JSONPlaceholder in useEffect",
  "completionCriteria": "pytest shows 10 passed; fetch runs once (no infinite loop)",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "React — Learn React / Quick Start",
    "url": "https://react.dev/learn"
   },
   {
    "name": "pytest Documentation",
    "url": "https://docs.pytest.org/"
   }
  ],
  "dsaMeta": {
   "topic": "Backtracking: permutations, N-Queens (concept), Sudoku solver (awareness)",
   "concept": "Choose, explore, un-choose; used-array or swap technique",
   "pattern": "Backtracking template",
   "problems": 3
  },
  "projectTags": []
 },
 {
  "day": 38,
  "date": "2026-11-14",
  "weekday": "Saturday",
  "week": 6,
  "phaseId": 3,
  "phase": "Phase 3 — React and Project 2",
  "isWeekend": true,
  "plannedMinutes": 360,
  "python": "Performance awareness: timeit, list vs set lookup, string concatenation vs join, linking measurements to Big-O",
  "dsa": "Topic: Bit Manipulation I: AND / OR / XOR / shifts, check ith bit, count set bits, power of two\nConcept: Bitwise operators; n & (n-1) trick\nPattern: Bit tricks\nProblems: 5 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "React useRef, useContext: refs for DOM access / persisted values, Context to avoid prop drilling (ThemeContext)",
  "weekendExtra": "",
  "deliverable": "perf_compare.py with 4 measured comparisons and a written conclusion; 5 bit solutions; theme toggle working app-wide",
  "completionCriteria": "Measurements show set lookup faster than list for 100k items; theme persists across components",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "React — Learn React / Quick Start",
    "url": "https://react.dev/learn"
   }
  ],
  "dsaMeta": {
   "topic": "Bit Manipulation I: AND / OR / XOR / shifts, check ith bit, count set bits, power of two",
   "concept": "Bitwise operators; n & (n-1) trick",
   "pattern": "Bit tricks",
   "problems": 5
  },
  "projectTags": []
 },
 {
  "day": 39,
  "date": "2026-11-15",
  "weekday": "Sunday",
  "week": 6,
  "phaseId": 3,
  "phase": "Phase 3 — React and Project 2",
  "isWeekend": true,
  "plannedMinutes": 480,
  "python": "Python and HTTP APIs: requests library (get, post, params, headers, timeout), status codes, parsing JSON (CS50P Lecture 4)",
  "dsa": "Topic: Bit Manipulation II: XOR tricks, single number II (awareness), subset generation with bitmask, swap without temp\nConcept: XOR cancels pairs; each subset is a bitmask\nPattern: Bitmask\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "React custom hooks (useFetch, useLocalStorage), clean component architecture",
  "weekendExtra": "2h: React practice: build a note-taking component with useRef auto-focus and a theme toggle via Context; clear backlog; push",
  "deliverable": "api_client.py calling a public JSON API with timeout and error handling; 4 bit solutions; useFetch and useLocalStorage hooks",
  "completionCriteria": "api_client.py prints a clear message for 404 and for no network; both hooks reused in 2 components",
  "resources": [
   {
    "name": "CS50's Introduction to Programming with Python (CS50P) - Harvard University",
    "url": "https://cs50.harvard.edu/python/"
   },
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "React — Learn React / Quick Start",
    "url": "https://react.dev/learn"
   },
   {
    "name": "Requests: HTTP for Humans",
    "url": "https://requests.readthedocs.io/"
   }
  ],
  "dsaMeta": {
   "topic": "Bit Manipulation II: XOR tricks, single number II (awareness), subset generation with bitmask, swap without temp",
   "concept": "XOR cancels pairs; each subset is a bitmask",
   "pattern": "Bitmask",
   "problems": 4
  },
  "projectTags": []
 },
 {
  "day": 40,
  "date": "2026-11-16",
  "weekday": "Monday",
  "week": 6,
  "phaseId": 3,
  "phase": "Phase 3 — React and Project 2",
  "isWeekend": false,
  "plannedMinutes": 480,
  "python": "Revision sprint: re-solve 10 list / dict / string problems from earlier days against a 45-minute timer (no hints)",
  "dsa": "Topic: Stack I: implement stack and queue with list / deque, valid parentheses, min stack\nConcept: LIFO matching; auxiliary min stack\nPattern: Stack matching\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "React Router: BrowserRouter, Routes, Route, Link, NavLink, navigation, nested routes, route parameters (useParams)",
  "weekendExtra": "Hour 1 (60 min): React interview set 1 - answer 20 questions aloud (virtual DOM, props vs state, hooks rules, keys, controlled inputs, useEffect pitfalls). Hour 2 (60 min) - WEEKLY CHECKPOINT ROUTINE: re-solve 3 DSA problems from this week without looking (20 min); rebuild 1 coding exercise from memory (15); review mistakes (10); short self-test (10); update GitHub (5)\nWEEK 6 CHECKPOINTS - Python: Write a type-hinted dataclass and a pytest test from memory. DSA: Re-solve subsets, valid parentheses and a bit trick unaided. Full Stack: Rebuild a controlled form plus useEffect fetch from memory. Project: Routed React app with a working form and fetch.",
  "deliverable": "revision_sprint.py with all 10 solutions; 4 stack solutions; 4-page routed app (Home, List, Detail by id, NotFound)",
  "completionCriteria": "At least 8 of 10 revision problems solved within time; detail page works from a URL typed directly",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "React Router Documentation",
    "url": "https://reactrouter.com/"
   }
  ],
  "dsaMeta": {
   "topic": "Stack I: implement stack and queue with list / deque, valid parentheses, min stack",
   "concept": "LIFO matching; auxiliary min stack",
   "pattern": "Stack matching",
   "problems": 4
  },
  "checkpoint": {
   "week": 6,
   "parts": {
    "Python": "Write a type-hinted dataclass and a pytest test from memory",
    "DSA": "Re-solve subsets, valid parentheses and a bit trick unaided",
    "Full Stack": "Rebuild a controlled form plus useEffect fetch from memory",
    "Project": "Routed React app with a working form and fetch"
   }
  },
  "projectTags": []
 },
 {
  "day": 41,
  "date": "2026-11-17",
  "weekday": "Tuesday",
  "week": 7,
  "phaseId": 3,
  "phase": "Phase 3 — React and Project 2",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Dunder methods: __str__, __repr__, __eq__, __len__, __lt__; @property (why Django models define __str__)",
  "dsa": "Topic: Queue: implement queue using stacks, stack using queues, circular queue\nConcept: Two-stack amortised queue\nPattern: Stack / queue conversion\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "React API integration: loading state, error state, empty state, retry button, reusable <Status> component",
  "weekendExtra": "",
  "deliverable": "money.py class with arithmetic dunders and tests; 4 queue solutions; UserList page showing loading / error / empty / data",
  "completionCriteria": "All four UI states can be triggered and seen; dunder tests pass",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "React — Learn React / Quick Start",
    "url": "https://react.dev/learn"
   }
  ],
  "dsaMeta": {
   "topic": "Queue: implement queue using stacks, stack using queues, circular queue",
   "concept": "Two-stack amortised queue",
   "pattern": "Stack / queue conversion",
   "problems": 4
  },
  "projectTags": []
 },
 {
  "day": 42,
  "date": "2026-11-18",
  "weekday": "Wednesday",
  "week": 7,
  "phaseId": 3,
  "phase": "Phase 3 — React and Project 2",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Standard library tour: collections (Counter, defaultdict, deque, namedtuple), datetime (date, timedelta, strftime)",
  "dsa": "Topic: Monotonic Stack I: next greater element I and II, next smaller element, stock span\nConcept: Maintain a decreasing / increasing stack of indices\nPattern: Monotonic stack\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "React authentication concepts (token, session, cookie), protected routes, context-based auth state (mock login) , redirect after login",
  "weekendExtra": "",
  "deliverable": "stdlib_lab.py (8 tasks using Counter, defaultdict, deque, datetime); 4 monotonic-stack solutions; AuthContext + ProtectedRoute demo with a fake login",
  "completionCriteria": "Visiting /dashboard logged out redirects to /login; logged in shows dashboard",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "React — Learn React / Quick Start",
    "url": "https://react.dev/learn"
   },
   {
    "name": "React Router Documentation",
    "url": "https://reactrouter.com/"
   }
  ],
  "dsaMeta": {
   "topic": "Monotonic Stack I: next greater element I and II, next smaller element, stock span",
   "concept": "Maintain a decreasing / increasing stack of indices",
   "pattern": "Monotonic stack",
   "problems": 4
  },
  "projectTags": []
 },
 {
  "day": 43,
  "date": "2026-11-19",
  "weekday": "Thursday",
  "week": 7,
  "phaseId": 3,
  "phase": "Phase 3 — React and Project 2",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "itertools basics (chain, product, permutations, combinations), enumerate / zip patterns, sorted with multiple keys",
  "dsa": "Topic: Monotonic Stack II: trapping rain water, largest rectangle in histogram (concept), sum of subarray minimums (awareness)\nConcept: Two pointers vs stack for water; width via previous-smaller index\nPattern: Monotonic stack / two pointers\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "PROJECT 2 Day 1/7 - React Task Manager: requirements, component tree sketch, Vite setup, folder structure (components, pages, hooks, context)",
  "weekendExtra": "",
  "deliverable": "[PROJECT 2 — START] itertools_lab.py (6 tasks); 3 solutions; Project 2 repo with component-tree diagram and routing skeleton",
  "completionCriteria": "Component tree drawn; npm run dev works; first commit pushed",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "React — Learn React / Quick Start",
    "url": "https://react.dev/learn"
   },
   {
    "name": "Vite — Getting Started",
    "url": "https://vite.dev/guide/"
   }
  ],
  "dsaMeta": {
   "topic": "Monotonic Stack II: trapping rain water, largest rectangle in histogram (concept), sum of subarray minimums (awareness)",
   "concept": "Two pointers vs stack for water; width via previous-smaller index",
   "pattern": "Monotonic stack / two pointers",
   "problems": 3
  },
  "projectTags": [
   "project-2"
  ]
 },
 {
  "day": 44,
  "date": "2026-11-20",
  "weekday": "Friday",
  "week": 7,
  "phaseId": 3,
  "phase": "Phase 3 — React and Project 2",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Environment variables in Python: os.environ, python-dotenv, .env files, keeping secrets out of Git",
  "dsa": "Topic: Sliding Window I: maximum sum subarray of size K, longest substring without repeating characters, max consecutive ones III\nConcept: Fixed and variable window with expand / shrink\nPattern: Sliding window\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "PROJECT 2 Day 2/7: task list state, AddTaskForm with validation, TaskItem and TaskList components",
  "weekendExtra": "",
  "deliverable": "config.py reading SECRET_KEY and DEBUG from .env (with .env in .gitignore); 4 window solutions; tasks can be added and listed",
  "completionCriteria": ".env is not in Git history; empty title rejected in the form",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "React — Learn React / Quick Start",
    "url": "https://react.dev/learn"
   },
   {
    "name": "GitHub Docs",
    "url": "https://docs.github.com/en"
   }
  ],
  "dsaMeta": {
   "topic": "Sliding Window I: maximum sum subarray of size K, longest substring without repeating characters, max consecutive ones III",
   "concept": "Fixed and variable window with expand / shrink",
   "pattern": "Sliding window",
   "problems": 4
  },
  "projectTags": [
   "project-2"
  ]
 },
 {
  "day": 45,
  "date": "2026-11-21",
  "weekday": "Saturday",
  "week": 7,
  "phaseId": 3,
  "phase": "Phase 3 — React and Project 2",
  "isWeekend": true,
  "plannedMinutes": 360,
  "python": "Logging module (levels, basicConfig, file handler) and debugging with pdb; reading stack traces",
  "dsa": "Topic: Sliding Window II: longest repeating character replacement, fruit into baskets, minimum window substring (concept)\nConcept: Window validity condition with a count map\nPattern: Variable sliding window\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "PROJECT 2 Day 3/7: complete, delete, edit tasks; priority and due date fields; filter by status",
  "weekendExtra": "",
  "deliverable": "logging_demo.py writing to app.log with 3 levels; 3 window solutions; edit / complete / delete / filter working",
  "completionCriteria": "Filter shows correct counts; app.log contains INFO and ERROR lines",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "React — Learn React / Quick Start",
    "url": "https://react.dev/learn"
   }
  ],
  "dsaMeta": {
   "topic": "Sliding Window II: longest repeating character replacement, fruit into baskets, minimum window substring (concept)",
   "concept": "Window validity condition with a count map",
   "pattern": "Variable sliding window",
   "problems": 3
  },
  "projectTags": [
   "project-2"
  ]
 },
 {
  "day": 46,
  "date": "2026-11-22",
  "weekday": "Sunday",
  "week": 7,
  "phaseId": 3,
  "phase": "Phase 3 — React and Project 2",
  "isWeekend": true,
  "plannedMinutes": 480,
  "python": "Python interview prep I: mutable vs immutable, list vs tuple, shallow vs deep copy, is vs ==, dictionary behaviour, common gotchas",
  "dsa": "Topic: Two Pointers: container with most water, 3Sum revisit, remove duplicates, sort colours revisit\nConcept: Move the pointer on the limiting side\nPattern: Two pointers\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "PROJECT 2 Day 4/7: React Router pages (Home, Tasks, Task detail /tasks/:id, About), nested layout route with shared navbar",
  "weekendExtra": "2h: Project 2: finish edit-in-place, priority colour tags and the status filter; clear backlog; push",
  "deliverable": "python_qa.md with 20 written answers with code examples; 4 two-pointer solutions; routed Project 2 with layout and detail pages",
  "completionCriteria": "Every route reachable by URL; 20 Q&A written in your own words",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "React Router Documentation",
    "url": "https://reactrouter.com/"
   }
  ],
  "dsaMeta": {
   "topic": "Two Pointers: container with most water, 3Sum revisit, remove duplicates, sort colours revisit",
   "concept": "Move the pointer on the limiting side",
   "pattern": "Two pointers",
   "problems": 4
  },
  "projectTags": [
   "project-2"
  ]
 },
 {
  "day": 47,
  "date": "2026-11-23",
  "weekday": "Monday",
  "week": 7,
  "phaseId": 3,
  "phase": "Phase 3 — React and Project 2",
  "isWeekend": false,
  "plannedMinutes": 480,
  "python": "Python interview prep II: *args / **kwargs, decorators, generators, closures, GIL awareness, mutable default argument trap",
  "dsa": "Topic: Heaps I: heap concept, Python heapq (min-heap, negate for max-heap), kth largest element, sort a nearly sorted array\nConcept: Heap keeps the min / max at the root in O(log n)\nPattern: Heap of size K\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "PROJECT 2 Day 5/7: persistence with useLocalStorage hook; derived state (counts, overdue tasks); sort options",
  "weekendExtra": "Hour 1 (60 min): Project 2 - write the 20-case manual test checklist and rebuild the useLocalStorage hook from memory. Hour 2 (60 min) - WEEKLY CHECKPOINT ROUTINE: re-solve 3 DSA problems from this week without looking (20 min); rebuild 1 coding exercise from memory (15); review mistakes (10); short self-test (10); update GitHub (5)\nWEEK 7 CHECKPOINTS - Python: Answer 10 Python interview questions aloud; use Counter and defaultdict from memory. DSA: Re-solve a sliding-window, a monotonic-stack and a heap problem unaided. Full Stack: Rebuild a routed app with route params from memory. Project: Project 2 persistence done (tasks survive refresh).",
  "deliverable": "Extend python_qa.md to 40 answers with runnable examples; 4 heap solutions; tasks survive refresh",
  "completionCriteria": "40 answers written; refreshing the browser keeps all tasks",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "React — Learn React / Quick Start",
    "url": "https://react.dev/learn"
   }
  ],
  "dsaMeta": {
   "topic": "Heaps I: heap concept, Python heapq (min-heap, negate for max-heap), kth largest element, sort a nearly sorted array",
   "concept": "Heap keeps the min / max at the root in O(log n)",
   "pattern": "Heap of size K",
   "problems": 4
  },
  "checkpoint": {
   "week": 7,
   "parts": {
    "Python": "Answer 10 Python interview questions aloud; use Counter and defaultdict from memory",
    "DSA": "Re-solve a sliding-window, a monotonic-stack and a heap problem unaided",
    "Full Stack": "Rebuild a routed app with route params from memory",
    "Project": "Project 2 persistence done (tasks survive refresh)"
   }
  },
  "projectTags": [
   "project-2"
  ]
 },
 {
  "day": 48,
  "date": "2026-11-24",
  "weekday": "Tuesday",
  "week": 8,
  "phaseId": 3,
  "phase": "Phase 3 — React and Project 2",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Python interview prep III: OOP questions (inheritance, MRO, abstract classes, dunder methods); build an Employee / Manager hierarchy",
  "dsa": "Topic: Heaps II: top K frequent elements, merge K sorted lists, find median from data stream (concept)\nConcept: Counter + heap; two heaps\nPattern: Heap + hashmap\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "PROJECT 2 Day 6/7: reusable components (Button, Modal, Input, Badge), form validation polish, performance basics (React.memo, useMemo, useCallback), clean architecture review",
  "weekendExtra": "",
  "deliverable": "employees.py with 3 classes and 8 tests; 3 heap solutions; Project 2 refactored into reusable components",
  "completionCriteria": "No component over ~100 lines; unnecessary re-renders removed (checked in React DevTools Profiler)",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "React — Learn React / Quick Start",
    "url": "https://react.dev/learn"
   }
  ],
  "dsaMeta": {
   "topic": "Heaps II: top K frequent elements, merge K sorted lists, find median from data stream (concept)",
   "concept": "Counter + heap; two heaps",
   "pattern": "Heap + hashmap",
   "problems": 3
  },
  "projectTags": [
   "project-2"
  ]
 },
 {
  "day": 49,
  "date": "2026-11-25",
  "weekday": "Wednesday",
  "week": 8,
  "phaseId": 3,
  "phase": "Phase 3 — React and Project 2",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Python data pipeline: read a CSV, clean rows, aggregate with dict / Counter, write JSON and CSV outputs",
  "dsa": "Topic: Greedy I: assign cookies, lemonade change, fractional knapsack, jump game\nConcept: Sort then take the locally best choice; prove with an exchange argument\nPattern: Greedy choice\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "PROJECT 2 Day 7/7: manual test checklist (20 cases), README with screenshots, npm run build, deploy on Render Static Sites, push",
  "weekendExtra": "",
  "deliverable": "[PROJECT 2 — END] pipeline.py turning sales.csv into summary.json; 4 greedy solutions; Project 2 live URL",
  "completionCriteria": "Production build deployed and opens on phone; README complete; 20 test cases ticked",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Render Docs — Static Sites",
    "url": "https://render.com/docs/static-sites"
   },
   {
    "name": "React — Learn React / Quick Start",
    "url": "https://react.dev/learn"
   }
  ],
  "dsaMeta": {
   "topic": "Greedy I: assign cookies, lemonade change, fractional knapsack, jump game",
   "concept": "Sort then take the locally best choice; prove with an exchange argument",
   "pattern": "Greedy choice",
   "problems": 4
  },
  "projectTags": [
   "project-2"
  ]
 },
 {
  "day": 50,
  "date": "2026-11-26",
  "weekday": "Thursday",
  "week": 8,
  "phaseId": 4,
  "phase": "Phase 4 — SQL, PostgreSQL, Django and Project 3",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Python sqlite3 module: connect, execute, parameterised queries, fetchall; SQL injection awareness",
  "dsa": "Topic: Greedy II: Jump Game II, N meetings in one room, minimum platforms, non-overlapping intervals\nConcept: Sort by end time; sweep with counters\nPattern: Interval greedy\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "SQL I: what databases are, relational model, install PostgreSQL, psql and pgAdmin, create a database, tables, rows, columns, data types, CREATE TABLE, INSERT, SELECT",
  "weekendExtra": "",
  "deliverable": "sqlite_demo.py (create table, insert 5 rows with ? placeholders, query); 4 greedy solutions; PostgreSQL database bookstore with a books table and 10 rows",
  "completionCriteria": "SELECT * returns 10 rows in psql; Python script is safe against ' OR 1=1 input",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "PostgreSQL Documentation — Tutorial",
    "url": "https://www.postgresql.org/docs/current/tutorial.html"
   },
   {
    "name": "PostgreSQL Downloads",
    "url": "https://www.postgresql.org/download/"
   }
  ],
  "dsaMeta": {
   "topic": "Greedy II: Jump Game II, N meetings in one room, minimum platforms, non-overlapping intervals",
   "concept": "Sort by end time; sweep with counters",
   "pattern": "Interval greedy",
   "problems": 4
  },
  "projectTags": []
 },
 {
  "day": 51,
  "date": "2026-11-27",
  "weekday": "Friday",
  "week": 8,
  "phaseId": 4,
  "phase": "Phase 4 — SQL, PostgreSQL, Django and Project 3",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "String processing practice set: palindromes, anagrams, word counts, caesar cipher, using dict / Counter / sets",
  "dsa": "Topic: Binary Trees I: TreeNode class, preorder / inorder / postorder recursive, level order (BFS)\nConcept: DFS order differs by when the node is visited; BFS with a queue\nPattern: Tree DFS / BFS\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "SQL II: WHERE, ORDER BY, LIMIT, UPDATE, DELETE, NULL, LIKE, IN, BETWEEN",
  "weekendExtra": "",
  "deliverable": "string_practice.py (8 problems with tests); 4 tree traversal solutions; bookstore_queries.sql with 20 queries",
  "completionCriteria": "20 SQL queries produce expected rows; tree traversals correct on a 7-node tree",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "PostgreSQL Documentation — Tutorial",
    "url": "https://www.postgresql.org/docs/current/tutorial.html"
   }
  ],
  "dsaMeta": {
   "topic": "Binary Trees I: TreeNode class, preorder / inorder / postorder recursive, level order (BFS)",
   "concept": "DFS order differs by when the node is visited; BFS with a queue",
   "pattern": "Tree DFS / BFS",
   "problems": 4
  },
  "projectTags": []
 },
 {
  "day": 52,
  "date": "2026-11-28",
  "weekday": "Saturday",
  "week": 8,
  "phaseId": 4,
  "phase": "Phase 4 — SQL, PostgreSQL, Django and Project 3",
  "isWeekend": true,
  "plannedMinutes": 360,
  "python": "Python and PostgreSQL: install psycopg, connect, run SELECT / INSERT with parameters, commit and rollback",
  "dsa": "Topic: Binary Trees II: height / maximum depth, balanced binary tree, diameter\nConcept: Return height from recursion; compute side-effect values bottom-up\nPattern: Tree recursion (post-order)\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "SQL III: aggregate functions (COUNT, SUM, AVG, MIN, MAX), GROUP BY, HAVING",
  "weekendExtra": "",
  "deliverable": "pg_demo.py inserting and reading rows from bookstore; 3 tree solutions; 20 aggregate queries saved",
  "completionCriteria": "Each query result checked against a hand count; transaction rollback demonstrated once",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "PostgreSQL Documentation — Tutorial",
    "url": "https://www.postgresql.org/docs/current/tutorial.html"
   },
   {
    "name": "Psycopg Documentation",
    "url": "https://www.psycopg.org/psycopg3/docs/"
   }
  ],
  "dsaMeta": {
   "topic": "Binary Trees II: height / maximum depth, balanced binary tree, diameter",
   "concept": "Return height from recursion; compute side-effect values bottom-up",
   "pattern": "Tree recursion (post-order)",
   "problems": 3
  },
  "projectTags": []
 },
 {
  "day": 53,
  "date": "2026-11-29",
  "weekday": "Sunday",
  "week": 8,
  "phaseId": 4,
  "phase": "Phase 4 — SQL, PostgreSQL, Django and Project 3",
  "isWeekend": true,
  "plannedMinutes": 480,
  "python": "Python for Django I: decorators in practice (write @login_required-style decorator), args / kwargs forwarding",
  "dsa": "Topic: Binary Trees III: same tree, symmetric tree, lowest common ancestor, right / left view, zig-zag level order\nConcept: Mirror comparison; return node when both sides found\nPattern: Tree recursion / BFS levels\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "SQL IV: primary keys, foreign keys, constraints (UNIQUE, NOT NULL, CHECK), normalization (1NF-3NF), designing a 3-table schema",
  "weekendExtra": "2h: SQL practice: add 30 more rows to the bookstore and write 20 aggregate and filter queries; clear backlog; push SQL files to GitHub",
  "deliverable": "auth_decorator.py with tests; 4 tree solutions; schema.sql for books, authors, reviews with keys and constraints",
  "completionCriteria": "Inserting a duplicate or NULL violating a constraint fails as intended; 20 SQL answers written",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "PostgreSQL Documentation — Tutorial",
    "url": "https://www.postgresql.org/docs/current/tutorial.html"
   }
  ],
  "dsaMeta": {
   "topic": "Binary Trees III: same tree, symmetric tree, lowest common ancestor, right / left view, zig-zag level order",
   "concept": "Mirror comparison; return node when both sides found",
   "pattern": "Tree recursion / BFS levels",
   "problems": 4
  },
  "projectTags": []
 },
 {
  "day": 54,
  "date": "2026-11-30",
  "weekday": "Monday",
  "week": 8,
  "phaseId": 4,
  "phase": "Phase 4 — SQL, PostgreSQL, Django and Project 3",
  "isWeekend": false,
  "plannedMinutes": 480,
  "python": "Python for Django II: class inheritance and mixins; read how Django generic views are built from mixins",
  "dsa": "Topic: Binary Trees IV: construct tree from preorder + inorder, boundary / vertical views (awareness), serialise and deserialise (concept)\nConcept: Hash map of inorder index; recursion on ranges\nPattern: Divide tree by index range\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "SQL V: joins - INNER JOIN, LEFT JOIN, joining 3 tables, aliases",
  "weekendExtra": "Hour 1 (60 min): SQL interview set - answer 20 questions aloud (joins, keys, normalization, indexes, GROUP BY vs WHERE vs HAVING). Hour 2 (60 min) - WEEKLY CHECKPOINT ROUTINE: re-solve 3 DSA problems from this week without looking (20 min); rebuild 1 coding exercise from memory (15); review mistakes (10); short self-test (10); update GitHub (5)\nWEEK 8 CHECKPOINTS - Python: Rebuild the CSV-to-JSON pipeline and a sqlite3 script from memory. DSA: Re-solve 3 tree problems (height, LCA, level order) unaided. Full Stack: Write 10 SQL queries (joins + group by) from memory; self-test. Project: Project 2 deployed; bookstore SQL schema and queries complete.",
  "deliverable": "mixins_demo.py (LoggingMixin, ValidationMixin on a model-like class); 3 tree solutions; 15 join queries",
  "completionCriteria": "Join results explained in comments (why rows appear or are missing); mixin order demonstrated",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "PostgreSQL Documentation — Tutorial",
    "url": "https://www.postgresql.org/docs/current/tutorial.html"
   }
  ],
  "dsaMeta": {
   "topic": "Binary Trees IV: construct tree from preorder + inorder, boundary / vertical views (awareness), serialise and deserialise (concept)",
   "concept": "Hash map of inorder index; recursion on ranges",
   "pattern": "Divide tree by index range",
   "problems": 3
  },
  "checkpoint": {
   "week": 8,
   "parts": {
    "Python": "Rebuild the CSV-to-JSON pipeline and a sqlite3 script from memory",
    "DSA": "Re-solve 3 tree problems (height, LCA, level order) unaided",
    "Full Stack": "Write 10 SQL queries (joins + group by) from memory; self-test",
    "Project": "Project 2 deployed; bookstore SQL schema and queries complete"
   }
  },
  "projectTags": []
 },
 {
  "day": 55,
  "date": "2026-12-01",
  "weekday": "Tuesday",
  "week": 9,
  "phaseId": 4,
  "phase": "Phase 4 — SQL, PostgreSQL, Django and Project 3",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Python for Django III: type hints and dataclasses for a service layer; separating business logic from I/O",
  "dsa": "Topic: Binary Search Trees I: search, insert, validate BST (min / max bounds)\nConcept: Inorder of a BST is sorted; carry allowed range\nPattern: BST property\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "SQL VI: subqueries, indexes (B-tree, CREATE INDEX), transactions (BEGIN / COMMIT / ROLLBACK), EXPLAIN for basic query optimisation",
  "weekendExtra": "",
  "deliverable": "orders_service.py (dataclasses + functions + tests); 4 BST solutions; EXPLAIN output before / after an index on a 10k-row table",
  "completionCriteria": "EXPLAIN shows Index Scan after indexing; transaction rollback leaves tables unchanged",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "PostgreSQL Documentation — Tutorial",
    "url": "https://www.postgresql.org/docs/current/tutorial.html"
   }
  ],
  "dsaMeta": {
   "topic": "Binary Search Trees I: search, insert, validate BST (min / max bounds)",
   "concept": "Inorder of a BST is sorted; carry allowed range",
   "pattern": "BST property",
   "problems": 4
  },
  "projectTags": []
 },
 {
  "day": 56,
  "date": "2026-12-02",
  "weekday": "Wednesday",
  "week": 9,
  "phaseId": 4,
  "phase": "Phase 4 — SQL, PostgreSQL, Django and Project 3",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Python custom exceptions and error handling patterns for web apps (domain errors vs system errors)",
  "dsa": "Topic: Binary Search Trees II: kth smallest, LCA of a BST, inorder successor, floor / ceil in BST\nConcept: Use sorted inorder and BST direction rules\nPattern: BST traversal\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "Django I: what Django is (MVT), install in a virtual environment, startproject, startapp, manage.py, project structure, settings.py, runserver, first view",
  "weekendExtra": "",
  "deliverable": "errors.py exception hierarchy with tests; 4 BST solutions; Django project 'library' running at 127.0.0.1:8000 with a Hello view",
  "completionCriteria": "Welcome page returns 200 in browser; startproject / startapp commands explained in your notes",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Django Documentation — Writing your first Django app",
    "url": "https://docs.djangoproject.com/en/stable/intro/tutorial01/"
   },
   {
    "name": "Django Documentation — How to install Django",
    "url": "https://docs.djangoproject.com/en/stable/topics/install/"
   }
  ],
  "dsaMeta": {
   "topic": "Binary Search Trees II: kth smallest, LCA of a BST, inorder successor, floor / ceil in BST",
   "concept": "Use sorted inorder and BST direction rules",
   "pattern": "BST traversal",
   "problems": 4
  },
  "projectTags": []
 },
 {
  "day": 57,
  "date": "2026-12-03",
  "weekday": "Thursday",
  "week": 9,
  "phaseId": 4,
  "phase": "Phase 4 — SQL, PostgreSQL, Django and Project 3",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "argparse: build a command-line tool with arguments and flags (CS50P Lecture 9)",
  "dsa": "Topic: Graphs I: representation (adjacency list and matrix), BFS, DFS, number of provinces\nConcept: Visited set; queue for BFS, recursion / stack for DFS\nPattern: Graph traversal\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "Django II: urls.py and URL routing (path, include, converters), views.py, request / response objects, templates (variables, tags, inheritance)",
  "weekendExtra": "",
  "deliverable": "wordcount_cli.py with --lines / --words flags; 4 graph solutions; Django app with 3 URLs and a base.html extended by 2 templates",
  "completionCriteria": "Unknown URL returns 404; template inheritance used for navbar; CLI prints help with -h",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Django Documentation — Writing your first Django app",
    "url": "https://docs.djangoproject.com/en/stable/intro/tutorial01/"
   },
   {
    "name": "Django Documentation — Using Django",
    "url": "https://docs.djangoproject.com/en/stable/topics/"
   }
  ],
  "dsaMeta": {
   "topic": "Graphs I: representation (adjacency list and matrix), BFS, DFS, number of provinces",
   "concept": "Visited set; queue for BFS, recursion / stack for DFS",
   "pattern": "Graph traversal",
   "problems": 4
  },
  "projectTags": []
 },
 {
  "day": 58,
  "date": "2026-12-04",
  "weekday": "Friday",
  "week": 9,
  "phaseId": 4,
  "phase": "Phase 4 — SQL, PostgreSQL, Django and Project 3",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Python data seeding: random, string and datetime to generate realistic sample data; Faker awareness",
  "dsa": "Topic: Graphs II: number of islands, flood fill, rotten oranges (multi-source BFS)\nConcept: Grid as implicit graph; 4-direction moves\nPattern: Grid BFS / DFS\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "Django III: static files (STATIC_URL, staticfiles), models.py, field types, Django ORM basics, makemigrations, migrate",
  "weekendExtra": "",
  "deliverable": "seed_data.py producing 200 realistic book records as JSON; 3 grid-graph solutions; Book model migrated with CSS file served as static",
  "completionCriteria": "migrate runs cleanly; static CSS applied to page; JSON has 200 valid records",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Django Documentation — Writing your first Django app",
    "url": "https://docs.djangoproject.com/en/stable/intro/tutorial01/"
   },
   {
    "name": "Django Documentation — Using Django",
    "url": "https://docs.djangoproject.com/en/stable/topics/"
   }
  ],
  "dsaMeta": {
   "topic": "Graphs II: number of islands, flood fill, rotten oranges (multi-source BFS)",
   "concept": "Grid as implicit graph; 4-direction moves",
   "pattern": "Grid BFS / DFS",
   "problems": 3
  },
  "projectTags": []
 },
 {
  "day": 59,
  "date": "2026-12-05",
  "weekday": "Saturday",
  "week": 9,
  "phaseId": 4,
  "phase": "Phase 4 — SQL, PostgreSQL, Django and Project 3",
  "isWeekend": true,
  "plannedMinutes": 360,
  "python": "Python requests with retries, timeouts and session reuse; designing a small API client class",
  "dsa": "Topic: Graphs III: cycle detection (undirected, directed), bipartite check\nConcept: DFS colouring; parent tracking\nPattern: Graph colouring / cycle detection\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "Django IV: Django admin (register, list_display, search_fields), CRUD views (list, detail, create, update, delete), Forms and ModelForms",
  "weekendExtra": "",
  "deliverable": "ApiClient class with tests using a public API; 3 graph solutions; Book CRUD (list / add / edit / delete) in the browser and in admin",
  "completionCriteria": "All 4 CRUD actions work; form shows validation errors; admin lists books with search",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Django Documentation — Writing your first Django app",
    "url": "https://docs.djangoproject.com/en/stable/intro/tutorial01/"
   },
   {
    "name": "Django Documentation — Using Django",
    "url": "https://docs.djangoproject.com/en/stable/topics/"
   }
  ],
  "dsaMeta": {
   "topic": "Graphs III: cycle detection (undirected, directed), bipartite check",
   "concept": "DFS colouring; parent tracking",
   "pattern": "Graph colouring / cycle detection",
   "problems": 3
  },
  "projectTags": []
 },
 {
  "day": 60,
  "date": "2026-12-06",
  "weekday": "Sunday",
  "week": 9,
  "phaseId": 4,
  "phase": "Phase 4 — SQL, PostgreSQL, Django and Project 3",
  "isWeekend": true,
  "plannedMinutes": 480,
  "python": "Refactoring session: apply type hints, docstrings, small functions to your last 3 Python scripts",
  "dsa": "Topic: Graphs IV: topological sort (DFS and Kahn's BFS), course schedule I and II\nConcept: Indegree array; DFS finish order reversed\nPattern: Topological ordering\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "Django V: model relationships (OneToOne, ForeignKey / one-to-many, ManyToMany), QuerySets, filter, exclude, order_by, related lookups",
  "weekendExtra": "2h: Django practice: finish Book CRUD with Author / Genre relationships end-to-end without copying the tutorial; clear backlog; push",
  "deliverable": "3 scripts refactored and committed; 3 topological-sort solutions; Author / Book / Genre relations working with 10 shell queries",
  "completionCriteria": "Django shell queries return expected rows; 20 Django answers written",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Django Documentation — Using Django",
    "url": "https://docs.djangoproject.com/en/stable/topics/"
   }
  ],
  "dsaMeta": {
   "topic": "Graphs IV: topological sort (DFS and Kahn's BFS), course schedule I and II",
   "concept": "Indegree array; DFS finish order reversed",
   "pattern": "Topological ordering",
   "problems": 3
  },
  "projectTags": []
 },
 {
  "day": 61,
  "date": "2026-12-07",
  "weekday": "Monday",
  "week": 9,
  "phaseId": 4,
  "phase": "Phase 4 — SQL, PostgreSQL, Django and Project 3",
  "isWeekend": false,
  "plannedMinutes": 480,
  "python": "pytest for service code: fixtures, parametrize, testing exceptions with pytest.raises; coverage awareness",
  "dsa": "Topic: Graphs V: shortest path in unweighted graph (BFS), Dijkstra's algorithm with heapq\nConcept: Priority queue relaxes edges; BFS levels = distance\nPattern: Shortest path\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "Django VI: connect Django to PostgreSQL (psycopg), environment variables with .env, settings organisation, SECRET_KEY safety",
  "weekendExtra": "Hour 1 (60 min): Django interview set 1 - answer 20 questions aloud (MVT, ORM, migrations, relationships, QuerySet laziness, select_related). Hour 2 (60 min) - WEEKLY CHECKPOINT ROUTINE: re-solve 3 DSA problems from this week without looking (20 min); rebuild 1 coding exercise from memory (15); review mistakes (10); short self-test (10); update GitHub (5)\nWEEK 9 CHECKPOINTS - Python: Rebuild a custom exception hierarchy and a pytest test from memory. DSA: Re-solve BFS, DFS and number of islands unaided. Full Stack: Rebuild a Django model + CRUD view + ModelForm from memory. Project: Book CRUD with relationships running on PostgreSQL.",
  "deliverable": "15 pytest tests for orders_service; 3 shortest-path solutions; library project running on PostgreSQL with secrets in .env",
  "completionCriteria": "python manage.py migrate creates tables in PostgreSQL; .env ignored by Git",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Django Documentation — Using Django",
    "url": "https://docs.djangoproject.com/en/stable/topics/"
   },
   {
    "name": "PostgreSQL Documentation — Tutorial",
    "url": "https://www.postgresql.org/docs/current/tutorial.html"
   }
  ],
  "dsaMeta": {
   "topic": "Graphs V: shortest path in unweighted graph (BFS), Dijkstra's algorithm with heapq",
   "concept": "Priority queue relaxes edges; BFS levels = distance",
   "pattern": "Shortest path",
   "problems": 3
  },
  "checkpoint": {
   "week": 9,
   "parts": {
    "Python": "Rebuild a custom exception hierarchy and a pytest test from memory",
    "DSA": "Re-solve BFS, DFS and number of islands unaided",
    "Full Stack": "Rebuild a Django model + CRUD view + ModelForm from memory",
    "Project": "Book CRUD with relationships running on PostgreSQL"
   }
  },
  "projectTags": []
 },
 {
  "day": 62,
  "date": "2026-12-08",
  "weekday": "Tuesday",
  "week": 10,
  "phaseId": 4,
  "phase": "Phase 4 — SQL, PostgreSQL, Django and Project 3",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Security basics in Python: hashlib, secrets, base64; decode a JWT header and payload by hand",
  "dsa": "Topic: Graphs VI: network delay time, connected components with Union-Find (DSU) awareness\nConcept: Disjoint set with path compression\nPattern: Dijkstra / DSU\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "Django VII: authentication - registration, login, logout, password hashing, login_required, user-specific data",
  "weekendExtra": "",
  "deliverable": "jwt_decode.py printing header and payload of a sample token; 3 graph solutions; working register / login / logout pages",
  "completionCriteria": "Passwords are stored hashed (verify in admin); logged-out users are redirected from protected pages",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Django Documentation — Using Django",
    "url": "https://docs.djangoproject.com/en/stable/topics/"
   }
  ],
  "dsaMeta": {
   "topic": "Graphs VI: network delay time, connected components with Union-Find (DSU) awareness",
   "concept": "Disjoint set with path compression",
   "pattern": "Dijkstra / DSU",
   "problems": 3
  },
  "projectTags": []
 },
 {
  "day": 63,
  "date": "2026-12-09",
  "weekday": "Wednesday",
  "week": 10,
  "phaseId": 4,
  "phase": "Phase 4 — SQL, PostgreSQL, Django and Project 3",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Python project prep: package layout, __init__.py, relative imports, settings via environment; mini-practice for Project 3 utilities",
  "dsa": "Topic: Dynamic Programming I: memoization vs tabulation, Fibonacci, climbing stairs, frog jump\nConcept: Overlapping subproblems; define state and transition\nPattern: 1D DP\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "Django VIII: authorization - permissions, groups, user.is_staff, object-level checks, middleware basics, Django testing (TestCase, Client)",
  "weekendExtra": "",
  "deliverable": "utils package with 4 modules and tests; 4 DP solutions each in memo and tabulation form; 5 Django tests passing",
  "completionCriteria": "python manage.py test shows 5 passed; non-owner cannot edit another user's record",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Django Documentation — Using Django",
    "url": "https://docs.djangoproject.com/en/stable/topics/"
   }
  ],
  "dsaMeta": {
   "topic": "Dynamic Programming I: memoization vs tabulation, Fibonacci, climbing stairs, frog jump",
   "concept": "Overlapping subproblems; define state and transition",
   "pattern": "1D DP",
   "problems": 4
  },
  "projectTags": []
 },
 {
  "day": 64,
  "date": "2026-12-10",
  "weekday": "Thursday",
  "week": 10,
  "phaseId": 4,
  "phase": "Phase 4 — SQL, PostgreSQL, Django and Project 3",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "PROJECT 3 support: write helper functions for Personal Library Manager (ISBN validation, date helpers) with tests",
  "dsa": "Topic: Dynamic Programming II (1D): house robber I and II, frog jump with K steps\nConcept: Take or skip with adjacent constraint\nPattern: 1D DP with choices\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "PROJECT 3 Day 1/6 - Django + PostgreSQL Personal Library Manager: requirements, ERD (User, Author, Book, Genre, Review), project setup, PostgreSQL database",
  "weekendExtra": "",
  "deliverable": "[PROJECT 3 — START] isbn.py + 8 tests; 3 DP solutions; Project 3 ERD image and repo with settings reading .env",
  "completionCriteria": "ERD shows 1-to-many and many-to-many; python manage.py check passes",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Django Documentation — Using Django",
    "url": "https://docs.djangoproject.com/en/stable/topics/"
   },
   {
    "name": "PostgreSQL Documentation — Tutorial",
    "url": "https://www.postgresql.org/docs/current/tutorial.html"
   }
  ],
  "dsaMeta": {
   "topic": "Dynamic Programming II (1D): house robber I and II, frog jump with K steps",
   "concept": "Take or skip with adjacent constraint",
   "pattern": "1D DP with choices",
   "problems": 3
  },
  "projectTags": [
   "project-3"
  ]
 },
 {
  "day": 65,
  "date": "2026-12-11",
  "weekday": "Friday",
  "week": 10,
  "phaseId": 4,
  "phase": "Phase 4 — SQL, PostgreSQL, Django and Project 3",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "PROJECT 3 support: CSV export script for books (stdlib csv) used later as a management command",
  "dsa": "Topic: Dynamic Programming III (2D grid): unique paths I and II, minimum path sum, triangle\nConcept: dp[i][j] from top and left neighbours\nPattern: 2D grid DP\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "PROJECT 3 Day 2/6: models, migrations, admin configuration, seed data via a management command",
  "weekendExtra": "",
  "deliverable": "export_books.py; 4 grid-DP solutions; models migrated and 50 seeded books visible in admin",
  "completionCriteria": "Admin shows relations; seed command is idempotent (run twice, no duplicates)",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Django Documentation — Using Django",
    "url": "https://docs.djangoproject.com/en/stable/topics/"
   }
  ],
  "dsaMeta": {
   "topic": "Dynamic Programming III (2D grid): unique paths I and II, minimum path sum, triangle",
   "concept": "dp[i][j] from top and left neighbours",
   "pattern": "2D grid DP",
   "problems": 4
  },
  "projectTags": [
   "project-3"
  ]
 },
 {
  "day": 66,
  "date": "2026-12-12",
  "weekday": "Saturday",
  "week": 10,
  "phaseId": 4,
  "phase": "Phase 4 — SQL, PostgreSQL, Django and Project 3",
  "isWeekend": true,
  "plannedMinutes": 360,
  "python": "PROJECT 3 support: Python tests for model methods and utilities",
  "dsa": "Topic: Dynamic Programming IV (subsequences): subset sum, partition equal subset sum, 0/1 knapsack\nConcept: Include or exclude item; space optimisation to 1D\nPattern: Knapsack DP\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "PROJECT 3 Day 3/6: CRUD views and templates for books and authors, ModelForms, messages framework, pagination",
  "weekendExtra": "",
  "deliverable": "Model tests added; 3 knapsack solutions; books / authors CRUD with pagination",
  "completionCriteria": "Create, edit, delete flows show success messages; pagination shows 10 per page",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Django Documentation — Using Django",
    "url": "https://docs.djangoproject.com/en/stable/topics/"
   }
  ],
  "dsaMeta": {
   "topic": "Dynamic Programming IV (subsequences): subset sum, partition equal subset sum, 0/1 knapsack",
   "concept": "Include or exclude item; space optimisation to 1D",
   "pattern": "Knapsack DP",
   "problems": 3
  },
  "projectTags": [
   "project-3"
  ]
 },
 {
  "day": 67,
  "date": "2026-12-13",
  "weekday": "Sunday",
  "week": 10,
  "phaseId": 4,
  "phase": "Phase 4 — SQL, PostgreSQL, Django and Project 3",
  "isWeekend": true,
  "plannedMinutes": 480,
  "python": "PROJECT 3 support: input sanitisation and validation helpers",
  "dsa": "Topic: Dynamic Programming V: coin change, target sum, unbounded knapsack / rod cutting\nConcept: Unbounded: stay on the same item; bottom-up amounts\nPattern: Unbounded knapsack\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "PROJECT 3 Day 4/6: authentication (register, login, logout), per-user reviews, one-to-many and many-to-many usage in pages",
  "weekendExtra": "2h: Project 3: finish reviews and authentication pages, draft README and ERD, run all tests; clear backlog; push",
  "deliverable": "Validators with tests; 3 DP solutions; users can register and review books",
  "completionCriteria": "A user can edit only their own reviews; pull request merged on GitHub",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Django Documentation — Using Django",
    "url": "https://docs.djangoproject.com/en/stable/topics/"
   },
   {
    "name": "GitHub Docs",
    "url": "https://docs.github.com/en"
   }
  ],
  "dsaMeta": {
   "topic": "Dynamic Programming V: coin change, target sum, unbounded knapsack / rod cutting",
   "concept": "Unbounded: stay on the same item; bottom-up amounts",
   "pattern": "Unbounded knapsack",
   "problems": 3
  },
  "projectTags": [
   "project-3"
  ]
 },
 {
  "day": 68,
  "date": "2026-12-14",
  "weekday": "Monday",
  "week": 10,
  "phaseId": 4,
  "phase": "Phase 4 — SQL, PostgreSQL, Django and Project 3",
  "isWeekend": false,
  "plannedMinutes": 480,
  "python": "PROJECT 3 support: reporting script with grouped statistics (average rating per genre) using Counter and defaultdict",
  "dsa": "Topic: Dynamic Programming VI (strings): longest common subsequence, longest palindromic subsequence, edit distance\nConcept: 2D table over two prefixes\nPattern: String DP\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "PROJECT 3 Day 5/6: search, filter by genre / author, ordering, QuerySet optimisation (select_related, prefetch_related)",
  "weekendExtra": "Hour 1 (60 min): Project 3 - finish search and filter pages; practise a pull request on a feature branch and merge it. Hour 2 (60 min) - WEEKLY CHECKPOINT ROUTINE: re-solve 3 DSA problems from this week without looking (20 min); rebuild 1 coding exercise from memory (15); review mistakes (10); short self-test (10); update GitHub (5)\nWEEK 10 CHECKPOINTS - Python: Rebuild a small utility module with tests from memory. DSA: Re-solve 3 DP problems of different shapes unaided. Full Stack: Rebuild a Django permission check and a model test from memory. Project: Project 3 reviews, authentication and search working.",
  "deliverable": "report.py; 3 string-DP solutions; search and filter pages with query count checked",
  "completionCriteria": "Detail page runs under 10 queries (checked with django.db.connection.queries)",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Django Documentation — Using Django",
    "url": "https://docs.djangoproject.com/en/stable/topics/"
   }
  ],
  "dsaMeta": {
   "topic": "Dynamic Programming VI (strings): longest common subsequence, longest palindromic subsequence, edit distance",
   "concept": "2D table over two prefixes",
   "pattern": "String DP",
   "problems": 3
  },
  "checkpoint": {
   "week": 10,
   "parts": {
    "Python": "Rebuild a small utility module with tests from memory",
    "DSA": "Re-solve 3 DP problems of different shapes unaided",
    "Full Stack": "Rebuild a Django permission check and a model test from memory",
    "Project": "Project 3 reviews, authentication and search working"
   }
  },
  "projectTags": [
   "project-3"
  ]
 },
 {
  "day": 69,
  "date": "2026-12-15",
  "weekday": "Tuesday",
  "week": 11,
  "phaseId": 4,
  "phase": "Phase 4 — SQL, PostgreSQL, Django and Project 3",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "PROJECT 3 support: write 10 more tests, finish documentation of utilities",
  "dsa": "Topic: Dynamic Programming VII: longest increasing subsequence (O(n^2) and idea of O(n log n)), best time to buy and sell stock with cooldown\nConcept: State machine DP; patience sorting idea\nPattern: DP on sequences\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "PROJECT 3 Day 6/6: Django tests, DEBUG=False check and collectstatic, README with ERD and screenshots, GitHub push",
  "weekendExtra": "",
  "deliverable": "[PROJECT 3 — END] Utilities documented; 3 DP solutions; Project 3 tagged v1.0",
  "completionCriteria": "python manage.py test passes (15 or more tests); README has setup steps, ERD and screenshots; app runs with DEBUG=False locally",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Django Documentation — Using Django",
    "url": "https://docs.djangoproject.com/en/stable/topics/"
   },
   {
    "name": "GitHub Docs",
    "url": "https://docs.github.com/en"
   }
  ],
  "dsaMeta": {
   "topic": "Dynamic Programming VII: longest increasing subsequence (O(n^2) and idea of O(n log n)), best time to buy and sell stock with cooldown",
   "concept": "State machine DP; patience sorting idea",
   "pattern": "DP on sequences",
   "problems": 3
  },
  "projectTags": [
   "project-3"
  ]
 },
 {
  "day": 70,
  "date": "2026-12-16",
  "weekday": "Wednesday",
  "week": 11,
  "phaseId": 5,
  "phase": "Phase 5 — DRF, Capstone, Docker and Deployment",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "JSON API handling in Python: build a script that pages through an API, handles 4xx / 5xx and saves results",
  "dsa": "Topic: Tries I: implement Trie (insert, search, startsWith) with dict nodes\nConcept: Each node maps character to child; end-of-word flag\nPattern: Prefix tree\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "Django REST framework I: REST concepts, HTTP methods, status codes, install DRF, serializers, ModelSerializer, first API endpoint for Book",
  "weekendExtra": "",
  "deliverable": "paginated_fetch.py with tests using a mock; Trie class with 3 operations; GET /api/books/ returns JSON in the browser",
  "completionCriteria": "Endpoint returns 200 and 50 books; serializer fields chosen deliberately",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Django REST framework — Quickstart",
    "url": "https://www.django-rest-framework.org/tutorial/quickstart/"
   },
   {
    "name": "Django REST framework — Filtering and Pagination guides",
    "url": "https://www.django-rest-framework.org/api-guide/filtering/"
   }
  ],
  "dsaMeta": {
   "topic": "Tries I: implement Trie (insert, search, startsWith) with dict nodes",
   "concept": "Each node maps character to child; end-of-word flag",
   "pattern": "Prefix tree",
   "problems": 3
  },
  "projectTags": []
 },
 {
  "day": 71,
  "date": "2026-12-17",
  "weekday": "Thursday",
  "week": 11,
  "phaseId": 5,
  "phase": "Phase 5 — DRF, Capstone, Docker and Deployment",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Python requests against your own DRF endpoint: GET, POST with JSON body, error responses",
  "dsa": "Topic: Tries II: longest word with all prefixes, count words with prefix, replace words\nConcept: Prefix counters on nodes\nPattern: Prefix tree counters\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "DRF II: API views (@api_view, APIView), generic views (ListCreateAPIView, RetrieveUpdateDestroyAPIView), URL routing",
  "weekendExtra": "",
  "deliverable": "drf_client.py creating and reading a book; 3 trie solutions; full CRUD API with generic views",
  "completionCriteria": "All 5 CRUD operations succeed via script and browsable API with correct status codes (200, 201, 204, 404)",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Django REST framework — Quickstart",
    "url": "https://www.django-rest-framework.org/tutorial/quickstart/"
   }
  ],
  "dsaMeta": {
   "topic": "Tries II: longest word with all prefixes, count words with prefix, replace words",
   "concept": "Prefix counters on nodes",
   "pattern": "Prefix tree counters",
   "problems": 3
  },
  "projectTags": []
 },
 {
  "day": 72,
  "date": "2026-12-18",
  "weekday": "Friday",
  "week": 11,
  "phaseId": 5,
  "phase": "Phase 5 — DRF, Capstone, Docker and Deployment",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Python mixed practice set 1: 6 timed problems on strings, dicts, comprehensions, generators",
  "dsa": "Topic: Mixed 1 (timed): arrays, hashing, strings, two pointers - 2 mediums in 45 minutes plus review\nConcept: Identify pattern first, then code\nPattern: Pattern recognition\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "DRF III: ViewSets, ModelViewSet, routers (DefaultRouter), nested resource design",
  "weekendExtra": "",
  "deliverable": "practice_set1.py with 6 solutions and timings; 4 mixed problems; Author and Book ViewSets under a router",
  "completionCriteria": "At least 4 of 6 Python tasks solved in time; router lists endpoints at /api/",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Django REST framework — Quickstart",
    "url": "https://www.django-rest-framework.org/tutorial/quickstart/"
   }
  ],
  "dsaMeta": {
   "topic": "Mixed 1 (timed): arrays, hashing, strings, two pointers - 2 mediums in 45 minutes plus review",
   "concept": "Identify pattern first, then code",
   "pattern": "Pattern recognition",
   "problems": 4
  },
  "projectTags": []
 },
 {
  "day": 73,
  "date": "2026-12-19",
  "weekday": "Saturday",
  "week": 11,
  "phaseId": 5,
  "phase": "Phase 5 — DRF, Capstone, Docker and Deployment",
  "isWeekend": true,
  "plannedMinutes": 360,
  "python": "Python mixed practice set 2: OOP and file-handling mini problems",
  "dsa": "Topic: Mixed 2 (timed): linked list, stack, queue, recursion - 2 mediums in 45 minutes plus review\nConcept: Template per pattern\nPattern: Pattern recognition\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "DRF IV: validation (field and object level), custom error responses, pagination, filtering (django-filter), search and ordering filters",
  "weekendExtra": "",
  "deliverable": "practice_set2.py; 4 mixed problems; filter / search / paginate on books API",
  "completionCriteria": "?search=, ?ordering= and ?page= all work; invalid payload returns clear 400 JSON",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Django REST framework — Quickstart",
    "url": "https://www.django-rest-framework.org/tutorial/quickstart/"
   },
   {
    "name": "Django REST framework — Filtering and Pagination guides",
    "url": "https://www.django-rest-framework.org/api-guide/filtering/"
   }
  ],
  "dsaMeta": {
   "topic": "Mixed 2 (timed): linked list, stack, queue, recursion - 2 mediums in 45 minutes plus review",
   "concept": "Template per pattern",
   "pattern": "Pattern recognition",
   "problems": 4
  },
  "projectTags": []
 },
 {
  "day": 74,
  "date": "2026-12-20",
  "weekday": "Sunday",
  "week": 11,
  "phaseId": 5,
  "phase": "Phase 5 — DRF, Capstone, Docker and Deployment",
  "isWeekend": true,
  "plannedMinutes": 480,
  "python": "Python interview mock: 15 minutes of rapid-fire Q&A recorded on your phone, then review gaps",
  "dsa": "Topic: Mixed 3 (timed): trees, BST, heaps - 2 mediums in 45 minutes plus review\nConcept: Recursion plus traversal choice\nPattern: Pattern recognition\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "DRF V: authentication (session, token), JWT with Simple JWT, permissions (IsAuthenticated, IsAdminUser, custom permission), protected endpoints",
  "weekendExtra": "2h: Capstone preparation: write requirements and user stories for TrackIt; clear backlog; push",
  "deliverable": "Mock recording + list of 5 weak answers; 4 mixed problems; token obtain / refresh endpoints; protected view returning 401 without token",
  "completionCriteria": "401 without token, 200 with token (checked in Postman); 5 web-concept paragraphs written",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Simple JWT Documentation",
    "url": "https://django-rest-framework-simplejwt.readthedocs.io/"
   },
   {
    "name": "Django REST framework — Quickstart",
    "url": "https://www.django-rest-framework.org/tutorial/quickstart/"
   }
  ],
  "dsaMeta": {
   "topic": "Mixed 3 (timed): trees, BST, heaps - 2 mediums in 45 minutes plus review",
   "concept": "Recursion plus traversal choice",
   "pattern": "Pattern recognition",
   "problems": 4
  },
  "projectTags": []
 },
 {
  "day": 75,
  "date": "2026-12-21",
  "weekday": "Monday",
  "week": 11,
  "phaseId": 5,
  "phase": "Phase 5 — DRF, Capstone, Docker and Deployment",
  "isWeekend": false,
  "plannedMinutes": 480,
  "python": "Python scripts to test your API end-to-end (create, list, delete) with assertions",
  "dsa": "Topic: Mixed 4 (timed): graphs - BFS, DFS, topological sort, shortest path - 2 problems in 45 minutes\nConcept: Choose BFS vs DFS vs Dijkstra from constraints\nPattern: Pattern recognition\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "DRF VI: CORS (django-cors-headers), Postman collection (environments, tests), API testing with APITestCase",
  "weekendExtra": "Hour 1 (60 min): web fundamentals - write one paragraph each on HTTP vs HTTPS, authentication vs authorization, cookies / sessions / tokens and CORS. Hour 2 (60 min) - WEEKLY CHECKPOINT ROUTINE: re-solve 3 DSA problems from this week without looking (20 min); rebuild 1 coding exercise from memory (15); review mistakes (10); short self-test (10); update GitHub (5)\nWEEK 11 CHECKPOINTS - Python: Write a requests script with error handling against your own API from memory. DSA: Re-solve one tree, one graph and one DP problem from the timed mixed sets. Full Stack: Rebuild a ViewSet + router + JWT login in Postman from memory. Project: Project 3 v1.0 tagged; DRF API with JWT and Postman tests done.",
  "deliverable": "e2e_api_test.py; 3 graph problems; Postman collection exported to /docs with 15 requests; 8 APITestCase tests",
  "completionCriteria": "Postman tests all green; React dev server origin allowed by CORS",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Postman Docs — Get started",
    "url": "https://learning.postman.com/docs/getting-started/overview/"
   },
   {
    "name": "django-cors-headers (GitHub)",
    "url": "https://github.com/adamchainz/django-cors-headers"
   },
   {
    "name": "Django REST framework — Quickstart",
    "url": "https://www.django-rest-framework.org/tutorial/quickstart/"
   }
  ],
  "dsaMeta": {
   "topic": "Mixed 4 (timed): graphs - BFS, DFS, topological sort, shortest path - 2 problems in 45 minutes",
   "concept": "Choose BFS vs DFS vs Dijkstra from constraints",
   "pattern": "Pattern recognition",
   "problems": 3
  },
  "checkpoint": {
   "week": 11,
   "parts": {
    "Python": "Write a requests script with error handling against your own API from memory",
    "DSA": "Re-solve one tree, one graph and one DP problem from the timed mixed sets",
    "Full Stack": "Rebuild a ViewSet + router + JWT login in Postman from memory",
    "Project": "Project 3 v1.0 tagged; DRF API with JWT and Postman tests done"
   }
  },
  "projectTags": []
 },
 {
  "day": 76,
  "date": "2026-12-22",
  "weekday": "Tuesday",
  "week": 12,
  "phaseId": 5,
  "phase": "Phase 5 — DRF, Capstone, Docker and Deployment",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Capstone support: model the domain in plain Python dataclasses first (User, Category, Issue) to confirm fields",
  "dsa": "Topic: Mixed 5 (timed): DP - 2 problems in 45 minutes, identify state and transition first\nConcept: State, transition, base case\nPattern: Pattern recognition\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "CAPSTONE Day 1/15 - TrackIt issue and task management system: requirements, user stories, ERD, API contract table, repo layout (backend/ frontend/), Django project + PostgreSQL setup",
  "weekendExtra": "",
  "deliverable": "[FINAL CAPSTONE — START] Domain dataclasses file; 2 DP solutions; docs/requirements.md, ERD, API contract; backend project running",
  "completionCriteria": "API contract lists every endpoint with method, URL, auth, status codes; first commit pushed",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Django REST framework — Quickstart",
    "url": "https://www.django-rest-framework.org/tutorial/quickstart/"
   },
   {
    "name": "PostgreSQL Documentation — Tutorial",
    "url": "https://www.postgresql.org/docs/current/tutorial.html"
   },
   {
    "name": "GitHub Docs",
    "url": "https://docs.github.com/en"
   }
  ],
  "dsaMeta": {
   "topic": "Mixed 5 (timed): DP - 2 problems in 45 minutes, identify state and transition first",
   "concept": "State, transition, base case",
   "pattern": "Pattern recognition",
   "problems": 3
  },
  "projectTags": [
   "capstone"
  ]
 },
 {
  "day": 77,
  "date": "2026-12-23",
  "weekday": "Wednesday",
  "week": 12,
  "phaseId": 5,
  "phase": "Phase 5 — DRF, Capstone, Docker and Deployment",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Capstone support: write custom validators in Python (title length, due date in the future) to reuse in serializers",
  "dsa": "Topic: Revision: re-solve arrays and binary search problems without looking\nConcept: Recall pattern then code\nPattern: Revision\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "CAPSTONE Day 2/15: backend models (custom user role field, Category, Issue with status, priority, assignee, due date), migrations, admin",
  "weekendExtra": "",
  "deliverable": "validators.py with tests; 4 re-solved problems; models migrated, admin working with seed data",
  "completionCriteria": "Admin shows 20 seeded issues across 4 categories; status / priority use choices",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Django Documentation — Using Django",
    "url": "https://docs.djangoproject.com/en/stable/topics/"
   },
   {
    "name": "Django REST framework — Quickstart",
    "url": "https://www.django-rest-framework.org/tutorial/quickstart/"
   }
  ],
  "dsaMeta": {
   "topic": "Revision: re-solve arrays and binary search problems without looking",
   "concept": "Recall pattern then code",
   "pattern": "Revision",
   "problems": 4
  },
  "projectTags": [
   "capstone"
  ]
 },
 {
  "day": 78,
  "date": "2026-12-24",
  "weekday": "Thursday",
  "week": 12,
  "phaseId": 5,
  "phase": "Phase 5 — DRF, Capstone, Docker and Deployment",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Capstone support: pytest tests for validators and permission helpers",
  "dsa": "Topic: Revision: re-solve strings, linked list, recursion and backtracking problems\nConcept: Recall pattern then code\nPattern: Revision\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "CAPSTONE Day 3/15: registration, login (JWT obtain / refresh), logout (token blacklist or client discard), current-user endpoint",
  "weekendExtra": "",
  "deliverable": "10 passing pytest/Django tests for helpers; 4 re-solved problems; auth endpoints tested in Postman",
  "completionCriteria": "Register > login > /me works; wrong password returns 401 with clear message",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Simple JWT Documentation",
    "url": "https://django-rest-framework-simplejwt.readthedocs.io/"
   },
   {
    "name": "Django REST framework — Quickstart",
    "url": "https://www.django-rest-framework.org/tutorial/quickstart/"
   }
  ],
  "dsaMeta": {
   "topic": "Revision: re-solve strings, linked list, recursion and backtracking problems",
   "concept": "Recall pattern then code",
   "pattern": "Revision",
   "problems": 4
  },
  "projectTags": [
   "capstone"
  ]
 },
 {
  "day": 79,
  "date": "2026-12-25",
  "weekday": "Friday",
  "week": 12,
  "phaseId": 5,
  "phase": "Phase 5 — DRF, Capstone, Docker and Deployment",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Capstone support: logging and error-response format utilities",
  "dsa": "Topic: Revision: re-solve stack, queue, sliding window, two pointers, heaps, greedy problems\nConcept: Recall pattern then code\nPattern: Revision\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "CAPSTONE Day 4/15: Issue CRUD API (ModelViewSet), role-based permissions (admin sees all, user sees own / assigned), object-level permission class",
  "weekendExtra": "",
  "deliverable": "Consistent JSON error format; 4 re-solved problems; Issue CRUD with permissions",
  "completionCriteria": "User A cannot edit user B's issue (403); admin can; all verified in Postman",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Django REST framework — Quickstart",
    "url": "https://www.django-rest-framework.org/tutorial/quickstart/"
   }
  ],
  "dsaMeta": {
   "topic": "Revision: re-solve stack, queue, sliding window, two pointers, heaps, greedy problems",
   "concept": "Recall pattern then code",
   "pattern": "Revision",
   "problems": 4
  },
  "projectTags": [
   "capstone"
  ]
 },
 {
  "day": 80,
  "date": "2026-12-26",
  "weekday": "Saturday",
  "week": 12,
  "phaseId": 5,
  "phase": "Phase 5 — DRF, Capstone, Docker and Deployment",
  "isWeekend": true,
  "plannedMinutes": 360,
  "python": "Capstone support: Python script that seeds 100 realistic issues through the API",
  "dsa": "Topic: Revision: re-solve tree and BST problems\nConcept: Recall pattern then code\nPattern: Revision\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "CAPSTONE Day 5/15: search, filter by status / priority / category, ordering, pagination, validation and error handling",
  "weekendExtra": "",
  "deliverable": "seed_via_api.py creating 100 issues; 4 re-solved problems; filter / search / pagination endpoints",
  "completionCriteria": "?status=open&priority=high&search=login&page=2 returns correct results; 100 issues created by script",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Django REST framework — Quickstart",
    "url": "https://www.django-rest-framework.org/tutorial/quickstart/"
   },
   {
    "name": "Postman Docs — Get started",
    "url": "https://learning.postman.com/docs/getting-started/overview/"
   }
  ],
  "dsaMeta": {
   "topic": "Revision: re-solve tree and BST problems",
   "concept": "Recall pattern then code",
   "pattern": "Revision",
   "problems": 4
  },
  "projectTags": [
   "capstone"
  ]
 },
 {
  "day": 81,
  "date": "2026-12-27",
  "weekday": "Sunday",
  "week": 12,
  "phaseId": 5,
  "phase": "Phase 5 — DRF, Capstone, Docker and Deployment",
  "isWeekend": true,
  "plannedMinutes": 480,
  "python": "Capstone support: refactor backend code to type hints and docstrings",
  "dsa": "Topic: Revision: re-solve graph problems\nConcept: Recall pattern then code\nPattern: Revision\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "CAPSTONE Day 6/15: backend API tests (APITestCase) for auth, CRUD, permissions, filters; fix bugs",
  "weekendExtra": "2h: Capstone: export the final Postman collection with tests and update the README API section; clear backlog; push",
  "deliverable": "Backend refactored; 3 re-solved problems; 20 backend tests passing",
  "completionCriteria": "python manage.py test shows 20 or more passed; recording saved",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Django REST framework — Quickstart",
    "url": "https://www.django-rest-framework.org/tutorial/quickstart/"
   },
   {
    "name": "Django Documentation — Using Django",
    "url": "https://docs.djangoproject.com/en/stable/topics/"
   }
  ],
  "dsaMeta": {
   "topic": "Revision: re-solve graph problems",
   "concept": "Recall pattern then code",
   "pattern": "Revision",
   "problems": 3
  },
  "projectTags": [
   "capstone"
  ]
 },
 {
  "day": 82,
  "date": "2026-12-28",
  "weekday": "Monday",
  "week": 12,
  "phaseId": 5,
  "phase": "Phase 5 — DRF, Capstone, Docker and Deployment",
  "isWeekend": false,
  "plannedMinutes": 480,
  "python": "Capstone support: Python debugging drill - fix 5 deliberately broken scripts",
  "dsa": "Topic: Revision: re-solve DP problems\nConcept: Recall pattern then code\nPattern: Revision\nProblems: 3 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "CAPSTONE Day 7/15: React frontend setup (Vite), folder structure, router, layout, API service module with auth header, environment variables (VITE_API_URL)",
  "weekendExtra": "Hour 1 (60 min): project explanation practice - record a 3-minute walkthrough (problem, stack, architecture, hardest bug, what you would improve). Hour 2 (60 min) - WEEKLY CHECKPOINT ROUTINE: re-solve 3 DSA problems from this week without looking (20 min); rebuild 1 coding exercise from memory (15); review mistakes (10); short self-test (10); update GitHub (5)\nWEEK 12 CHECKPOINTS - Python: Python mock Q&A: 15 questions, timed. DSA: Re-solve 3 problems from your error log. Full Stack: Rebuild a protected DRF endpoint and an authenticated request from memory. Project: Capstone backend complete and tested; frontend skeleton running.",
  "deliverable": "5 bugs fixed with notes; 3 re-solved problems; frontend skeleton calling the API",
  "completionCriteria": "Public endpoint data appears on a page; API base URL comes from env file",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "React — Learn React / Quick Start",
    "url": "https://react.dev/learn"
   },
   {
    "name": "Vite — Getting Started",
    "url": "https://vite.dev/guide/"
   },
   {
    "name": "React Router Documentation",
    "url": "https://reactrouter.com/"
   }
  ],
  "dsaMeta": {
   "topic": "Revision: re-solve DP problems",
   "concept": "Recall pattern then code",
   "pattern": "Revision",
   "problems": 3
  },
  "checkpoint": {
   "week": 12,
   "parts": {
    "Python": "Python mock Q&A: 15 questions, timed",
    "DSA": "Re-solve 3 problems from your error log",
    "Full Stack": "Rebuild a protected DRF endpoint and an authenticated request from memory",
    "Project": "Capstone backend complete and tested; frontend skeleton running"
   }
  },
  "projectTags": [
   "capstone"
  ]
 },
 {
  "day": 83,
  "date": "2026-12-29",
  "weekday": "Tuesday",
  "week": 13,
  "phaseId": 5,
  "phase": "Phase 5 — DRF, Capstone, Docker and Deployment",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Capstone support: write a Python smoke-test script run after each deploy",
  "dsa": "Topic: Mock coding assessment 1: 2 problems in 60 minutes, then 30 minutes review\nConcept: Timed pattern selection\nPattern: Assessment simulation\nProblems: 2 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "CAPSTONE Day 8/15: register and login forms, AuthContext, token storage and refresh handling, logout, ProtectedRoute, role-aware UI",
  "weekendExtra": "",
  "deliverable": "smoke_test.py; mock 1 score and review notes; working auth flow in React",
  "completionCriteria": "Refresh keeps you logged in; protected pages redirect when logged out",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "React — Learn React / Quick Start",
    "url": "https://react.dev/learn"
   },
   {
    "name": "React Router Documentation",
    "url": "https://reactrouter.com/"
   },
   {
    "name": "Simple JWT Documentation",
    "url": "https://django-rest-framework-simplejwt.readthedocs.io/"
   }
  ],
  "dsaMeta": {
   "topic": "Mock coding assessment 1: 2 problems in 60 minutes, then 30 minutes review",
   "concept": "Timed pattern selection",
   "pattern": "Assessment simulation",
   "problems": 2
  },
  "projectTags": [
   "capstone"
  ]
 },
 {
  "day": 84,
  "date": "2026-12-30",
  "weekday": "Wednesday",
  "week": 13,
  "phaseId": 5,
  "phase": "Phase 5 — DRF, Capstone, Docker and Deployment",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Capstone support: write a data-export script (issues to CSV) for the README demo",
  "dsa": "Topic: Weak-topic day 1: choose the weakest topic from your error log and re-solve 4 problems\nConcept: Targeted repetition\nPattern: Error-log driven\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "CAPSTONE Day 9/15: dashboard (counts by status and priority) and issue list with loading, error and empty states",
  "weekendExtra": "",
  "deliverable": "export_issues.py; 4 re-solved weak problems; dashboard and list pages",
  "completionCriteria": "All three UI states (loading, error, empty) visible and tested by stopping the API",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "React — Learn React / Quick Start",
    "url": "https://react.dev/learn"
   }
  ],
  "dsaMeta": {
   "topic": "Weak-topic day 1: choose the weakest topic from your error log and re-solve 4 problems",
   "concept": "Targeted repetition",
   "pattern": "Error-log driven",
   "problems": 4
  },
  "projectTags": [
   "capstone"
  ]
 },
 {
  "day": 85,
  "date": "2026-12-31",
  "weekday": "Thursday",
  "week": 13,
  "phaseId": 5,
  "phase": "Phase 5 — DRF, Capstone, Docker and Deployment",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Capstone support: Python interview mock 2 - 20 questions, 30 minutes",
  "dsa": "Topic: Weak-topic day 2: re-solve 4 problems from the second-weakest topic\nConcept: Targeted repetition\nPattern: Error-log driven\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "CAPSTONE Day 10/15: create, edit and delete issue forms with validation, confirmation dialogs, server-error display",
  "weekendExtra": "",
  "deliverable": "Scored mock with gaps listed; 4 re-solved problems; issue forms working end-to-end",
  "completionCriteria": "Server validation errors show next to the right field; delete asks for confirmation",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "React — Learn React / Quick Start",
    "url": "https://react.dev/learn"
   }
  ],
  "dsaMeta": {
   "topic": "Weak-topic day 2: re-solve 4 problems from the second-weakest topic",
   "concept": "Targeted repetition",
   "pattern": "Error-log driven",
   "problems": 4
  },
  "projectTags": [
   "capstone"
  ]
 },
 {
  "day": 86,
  "date": "2027-01-01",
  "weekday": "Friday",
  "week": 13,
  "phaseId": 5,
  "phase": "Phase 5 — DRF, Capstone, Docker and Deployment",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Capstone support: tidy requirements.txt, pin versions, document setup commands",
  "dsa": "Topic: Mock coding assessment 2: 2 problems in 60 minutes, then review\nConcept: Timed pattern selection\nPattern: Assessment simulation\nProblems: 2 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "CAPSTONE Day 11/15: search box, filters, pagination controls, responsive layout (mobile table-to-cards), accessibility pass",
  "weekendExtra": "",
  "deliverable": "Setup section in README tested on a clean venv; mock 2 notes; polished responsive list page",
  "completionCriteria": "Works at 360 px width; fresh clone runs following README only",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "React — Learn React / Quick Start",
    "url": "https://react.dev/learn"
   },
   {
    "name": "MDN CSS",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
   }
  ],
  "dsaMeta": {
   "topic": "Mock coding assessment 2: 2 problems in 60 minutes, then review",
   "concept": "Timed pattern selection",
   "pattern": "Assessment simulation",
   "problems": 2
  },
  "projectTags": [
   "capstone"
  ]
 },
 {
  "day": 87,
  "date": "2027-01-02",
  "weekday": "Saturday",
  "week": 13,
  "phaseId": 5,
  "phase": "Phase 5 — DRF, Capstone, Docker and Deployment",
  "isWeekend": true,
  "plannedMinutes": 360,
  "python": "Capstone support: Python environment audit - settings read only from environment, no secrets in repo",
  "dsa": "Topic: Weak-topic day 3: Trie, bit manipulation, greedy, heaps - 4 problems\nConcept: Targeted repetition\nPattern: Error-log driven\nProblems: 4 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "CAPSTONE Day 12/15 + Docker: images, containers, Dockerfile, Docker Compose basics (Django + PostgreSQL); run the backend with docker compose up",
  "weekendExtra": "",
  "deliverable": "Secrets audit checklist; 4 problems; Dockerfile and docker-compose.yml running backend + database",
  "completionCriteria": "docker compose up serves the API at localhost; no secret appears in git history",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Docker Docs — Get started",
    "url": "https://docs.docker.com/get-started/"
   },
   {
    "name": "Django Documentation — Using Django",
    "url": "https://docs.djangoproject.com/en/stable/topics/"
   }
  ],
  "dsaMeta": {
   "topic": "Weak-topic day 3: Trie, bit manipulation, greedy, heaps - 4 problems",
   "concept": "Targeted repetition",
   "pattern": "Error-log driven",
   "problems": 4
  },
  "projectTags": [
   "capstone"
  ]
 },
 {
  "day": 88,
  "date": "2027-01-03",
  "weekday": "Sunday",
  "week": 13,
  "phaseId": 5,
  "phase": "Phase 5 — DRF, Capstone, Docker and Deployment",
  "isWeekend": true,
  "plannedMinutes": 480,
  "python": "Capstone support: final backend code review with a checklist (naming, errors, tests)",
  "dsa": "Topic: Write a one-page DSA pattern cheat sheet in your own words with Python templates\nConcept: Summarise patterns\nPattern: Consolidation\nProblems: 2 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "CAPSTONE Day 13/15: production configuration (gunicorn, whitenoise, DATABASE_URL, env vars) and deploy backend and PostgreSQL on Render",
  "weekendExtra": "2h: Deployment preparation: audit .env.example, ALLOWED_HOSTS, DEBUG and CORS origins before the frontend deploy; clear backlog; push",
  "deliverable": "Code review checklist done; cheat sheet in repo; backend live on a Render URL; resume v1",
  "completionCriteria": "Live /api/ endpoint responds; resume v1 has 3 project bullets each starting with an action verb",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Render Docs — Django deployment",
    "url": "https://render.com/docs/deploy-django"
   },
   {
    "name": "Django Documentation — Using Django",
    "url": "https://docs.djangoproject.com/en/stable/topics/"
   }
  ],
  "dsaMeta": {
   "topic": "Write a one-page DSA pattern cheat sheet in your own words with Python templates",
   "concept": "Summarise patterns",
   "pattern": "Consolidation",
   "problems": 2
  },
  "projectTags": [
   "capstone"
  ]
 },
 {
  "day": 89,
  "date": "2027-01-04",
  "weekday": "Monday",
  "week": 13,
  "phaseId": 5,
  "phase": "Phase 5 — DRF, Capstone, Docker and Deployment",
  "isWeekend": false,
  "plannedMinutes": 480,
  "python": "Capstone support: run smoke_test.py against the live API and fix issues",
  "dsa": "Topic: Mock coding assessment 3: 2 problems in 60 minutes, then review\nConcept: Timed pattern selection\nPattern: Assessment simulation\nProblems: 2 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve this week's 3 hardest problems without hints; update the error log.",
  "fullStack": "CAPSTONE Day 14/15: deploy React build as Render Static Site, set VITE_API_URL, CORS for production origin, end-to-end test of every feature",
  "weekendExtra": "Hour 1 (60 min): resume draft (project bullets with numbers), GitHub profile README, LinkedIn headline and About. Hour 2 (60 min) - WEEKLY CHECKPOINT ROUTINE: re-solve 3 DSA problems from this week without looking (20 min); rebuild 1 coding exercise from memory (15); review mistakes (10); short self-test (10); update GitHub (5)\nWEEK 13 CHECKPOINTS - Python: Clean Python utilities with type hints and tests. DSA: Review mock 2; re-solve what you missed. Full Stack: Redeploy walkthrough: ship a tiny change to both services. Project: Capstone deployed (backend + frontend); resume draft started.",
  "deliverable": "Smoke test report; mock 3 notes; live frontend URL talking to live backend",
  "completionCriteria": "Register, login, create, edit, delete, search, filter and logout all work on the live site",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "Render Docs — Static Sites",
    "url": "https://render.com/docs/static-sites"
   },
   {
    "name": "django-cors-headers (GitHub)",
    "url": "https://github.com/adamchainz/django-cors-headers"
   }
  ],
  "dsaMeta": {
   "topic": "Mock coding assessment 3: 2 problems in 60 minutes, then review",
   "concept": "Timed pattern selection",
   "pattern": "Assessment simulation",
   "problems": 2
  },
  "checkpoint": {
   "week": 13,
   "parts": {
    "Python": "Clean Python utilities with type hints and tests",
    "DSA": "Review mock 2; re-solve what you missed",
    "Full Stack": "Redeploy walkthrough: ship a tiny change to both services",
    "Project": "Capstone deployed (backend + frontend); resume draft started"
   }
  },
  "projectTags": [
   "capstone"
  ]
 },
 {
  "day": 90,
  "date": "2027-01-05",
  "weekday": "Tuesday",
  "week": 14,
  "phaseId": 6,
  "phase": "Phase 6 — Polish, Portfolio and Job Readiness",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Capstone support: final Python cleanup and docstrings pass",
  "dsa": "Topic: Review mistakes: re-solve the 5 problems you failed most often\nConcept: Targeted repetition\nPattern: Error-log driven\nProblems: 5 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "CAPSTONE Day 15/15: polish UI, README (screenshots, architecture diagram, features, setup, API docs, live links), clean commit history, release tag v1.0",
  "weekendExtra": "",
  "deliverable": "[FINAL CAPSTONE — END] Cleanup commit; 5 re-solved problems; capstone README complete",
  "completionCriteria": "Another person can set up the project from the README alone; release v1.0 exists on GitHub",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "GitHub Docs",
    "url": "https://docs.github.com/en"
   }
  ],
  "dsaMeta": {
   "topic": "Review mistakes: re-solve the 5 problems you failed most often",
   "concept": "Targeted repetition",
   "pattern": "Error-log driven",
   "problems": 5
  },
  "projectTags": [
   "capstone"
  ]
 },
 {
  "day": 91,
  "date": "2027-01-06",
  "weekday": "Wednesday",
  "week": 14,
  "phaseId": 6,
  "phase": "Phase 6 — Polish, Portfolio and Job Readiness",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Python interview mock 3 and final revision of python_qa.md",
  "dsa": "Topic: Final sweep: finish the highest-frequency unsolved items from Striver's sheet\nConcept: Prioritise by interview frequency\nPattern: Gap filling\nProblems: 5 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "Job preparation: resume final, GitHub portfolio (pinned repos, READMEs), LinkedIn profile, project explanation script, Django / React / JS / SQL / REST / Git interview rapid review",
  "weekendExtra": "",
  "deliverable": "Resume PDF; LinkedIn updated; 4 pinned repos; 5 solved problems",
  "completionCriteria": "Resume is one page; every pinned repo has a README with run steps and live link",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "GitHub Docs",
    "url": "https://docs.github.com/en"
   }
  ],
  "dsaMeta": {
   "topic": "Final sweep: finish the highest-frequency unsolved items from Striver's sheet",
   "concept": "Prioritise by interview frequency",
   "pattern": "Gap filling",
   "problems": 5
  },
  "projectTags": []
 },
 {
  "day": 92,
  "date": "2027-01-07",
  "weekday": "Thursday",
  "week": 14,
  "phaseId": 6,
  "phase": "Phase 6 — Polish, Portfolio and Job Readiness",
  "isWeekend": false,
  "plannedMinutes": 360,
  "python": "Final Python review and plan: list what to keep practising after Day 92",
  "dsa": "Topic: Final mock plus DSA retrospective and post-plan schedule\nConcept: Timed pattern selection\nPattern: Assessment simulation\nProblems: 2 (Striver A2Z)\nPython: Implement every solution in Python. Where Striver explains in C++: understand the C++ logic from Striver, then implement the same solution in Python. State time and space complexity.\nRevision: Re-solve 2 problems from two days ago without hints; add mistakes to the error log.",
  "fullStack": "Mock interview (45 min: 15 projects, 15 concepts, 15 debugging), submit first 5 job applications, final checkpoint: Python, DSA, Full Stack and Project all reviewed against the readiness checklist",
  "weekendExtra": "",
  "deliverable": "Mock interview notes; 5 applications logged in a tracker; readiness checklist completed. FINAL WEEK-14 CHECKPOINT: Python - 15-minute interview mock; DSA - re-solve 5 problems from the error log; Full Stack - redeploy-from-scratch walkthrough; Project - capstone v1.0, README and live links verified.",
  "completionCriteria": "Checklist in the PDF fully ticked or gaps recorded with dates; 5 applications sent",
  "resources": [
   {
    "name": "Python 3 Documentation — The Python Tutorial",
    "url": "https://docs.python.org/3/tutorial/"
   },
   {
    "name": "Striver's A2Z DSA Sheet - TakeUforward",
    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
   },
   {
    "name": "GitHub Docs",
    "url": "https://docs.github.com/en"
   }
  ],
  "dsaMeta": {
   "topic": "Final mock plus DSA retrospective and post-plan schedule",
   "concept": "Timed pattern selection",
   "pattern": "Assessment simulation",
   "problems": 2
  },
  "projectTags": []
 }
];
