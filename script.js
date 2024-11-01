const languages = [
    {
        name: "AL",
        description: "A proprietary language used for programming Allen-Bradley PLCs in industrial automation.",
        creator: "Allen-Bradley (Rockwell Automation)",
        type: "High-level (Automation)",
        companiesUsingIt: "Manufacturing, automation industries",
        idePrograms: "RSLogix, Studio 5000"
    },
    {
        name: "ActionScript",
        description: "Object-oriented language used primarily for developing websites and software on the Adobe Flash platform.",
        creator: "Gary Grossman (1998)",
        type: "High-level",
        companiesUsingIt: "Adobe, Flash-based game development",
        idePrograms: "Adobe Flash Builder, Animate"
    },
    {
        name: "Ada",
        description: "High-level, statically typed language used in mission-critical systems like aviation and defense.",
        creator: "Jean Ichbiah (1980)",
        type: "High-level",
        companiesUsingIt: "Boeing, Lockheed Martin",
        idePrograms: "GNAT, AdaCore"
    },
    {
        name: "Agda",
        description: "A functional programming language and proof assistant for developing mathematical proofs.",
        creator: "Ulf Norell",
        type: "High-level (Proof assistant)",
        companiesUsingIt: "Academia, research",
        idePrograms: "Emacs, VS Code (with extensions)"
    },
    {
        name: "Android",
        description: "An open-source operating system primarily written in Java and Kotlin, used for mobile app development.",
        creator: "Google",
        type: "High-level (Mobile Development)",
        companiesUsingIt: "Google, Samsung, various app developers",
        idePrograms: "Android Studio, IntelliJ IDEA"
    },
    {
        name: "AppEngine",
        description: "A cloud computing platform for developing and hosting web applications.",
        creator: "Google",
        type: "High-level (Web development)",
        companiesUsingIt: "Google, various startups",
        idePrograms: "Google Cloud Console, Eclipse"
    },
    {
        name: "Appcelerator Titanium",
        description: "A cross-platform mobile app development framework.",
        creator: "Appcelerator, Inc.",
        type: "High-level (Mobile Development)",
        companiesUsingIt: "Mobile app development firms",
        idePrograms: "Appcelerator Studio"
    },
    {
        name: "ArchLinuxPackages",
        description: "A package manager for Arch Linux, helping manage software installations.",
        creator: "Arch Linux community",
        type: "Package management tool",
        companiesUsingIt: "Arch Linux community",
        idePrograms: "Pacman, yay"
    },
    {
        name: "Autotools",
        description: "A suite of programming tools for building and configuring software packages.",
        creator: "Free Software Foundation",
        type: "Build system",
        companiesUsingIt: "Open-source projects",
        idePrograms: "Autoconf, Automake"
    },
    {
        name: "Ballerina",
        description: "A cloud-native programming language designed for microservices and distributed applications.",
        creator: "WSO2",
        type: "High-level",
        companiesUsingIt: "WSO2, enterprises using microservices",
        idePrograms: "Ballerina IDE, IntelliJ IDEA"
    },
    {
        name: "C",
        description: "A general-purpose language that forms the basis of many modern languages, known for its speed and efficiency.",
        creator: "Dennis Ritchie (1972)",
        type: "High-level (System programming)",
        companiesUsingIt: "Microsoft, Apple, NASA",
        idePrograms: "Code::Blocks, Visual Studio, Eclipse"
    },
    {
        name: "C++",
        description: "An extension of C with object-oriented features, used in system software, games, and applications.",
        creator: "Bjarne Stroustrup (1985)",
        type: "High-level",
        companiesUsingIt: "Microsoft, Adobe, Google",
        idePrograms: "CLion, Visual Studio, Code::Blocks"
    },
    {
        name: "CFWheels",
        description: "A web framework for building ColdFusion applications.",
        creator: "CFWheels community",
        type: "Web framework",
        companiesUsingIt: "Web development companies",
        idePrograms: "Sublime Text, VS Code"
    },
    {
        name: "CMake",
        description: "A cross-platform build system that helps developers manage the build process using simple scripts.",
        creator: "Kitware",
        type: "Build system",
        companiesUsingIt: "Open-source projects, Google",
        idePrograms: "CMake GUI, CLion"
    },
    {
        name: "CUDA",
        description: "A parallel computing platform and API developed by NVIDIA, used for general computing on GPUs.",
        creator: "NVIDIA",
        type: "High-level (Parallel Computing)",
        companiesUsingIt: "NVIDIA, AI startups, gaming industries",
        idePrograms: "Nsight IDE, Visual Studio"
    },
    {
        name: "CakePHP",
        description: "A rapid development framework for PHP, designed to make developing web applications simpler.",
        creator: "Cake Software Foundation",
        type: "High-level (Web)",
        companiesUsingIt: "MySQL, Siemens, Cisco",
        idePrograms: "PHPStorm, Sublime Text"
    },
    {
        name: "ChefCookbook",
        description: "A configuration management tool used in Chef automation for managing infrastructure.",
        creator: "Opscode (now Chef Software, Inc.)",
        type: "Configuration management tool",
        companiesUsingIt: "AWS, Facebook, Airbnb",
        idePrograms: "Chef Workstation"
    },
    {
        name: "Clojure",
        description: "A modern, functional dialect of Lisp that focuses on immutability and concurrency.",
        creator: "Rich Hickey (2007)",
        type: "High-level",
        companiesUsingIt: "Walmart, Funding Circle",
        idePrograms: "IntelliJ IDEA, Emacs, VS Code"
    },
    {
        name: "CodeIgniter",
        description: "A lightweight PHP framework for building web applications rapidly.",
        creator: "EllisLab",
        type: "High-level (Web)",
        companiesUsingIt: "Web developers, startups",
        idePrograms: "PHPStorm, NetBeans"
    },
    {
        name: "Common Lisp",
        description: "A powerful, multi-paradigm programming language descended from Lisp, used for symbolic computation.",
        creator: "ANSI",
        type: "High-level",
        companiesUsingIt: "NASA, AT&T, Boeing",
        idePrograms: "CLISP, SBCL, Emacs"
    },
    {
        name: "Composer",
        description: "A dependency manager for PHP, used to manage project libraries and packages.",
        creator: "Nils Adermann, Jordi Boggiano (2011)",
        type: "Dependency manager",
        companiesUsingIt: "PHP-based companies, GitHub",
        idePrograms: "Command-line based (no specific IDE)"
    },
    {
        name: "Concrete5",
        description: "An open-source content management system (CMS) that focuses on ease of use for creating websites.",
        creator: "Andrew Embler (2003)",
        type: "CMS",
        companiesUsingIt: "Small to medium-sized businesses, freelancers",
        idePrograms: "Sublime Text, Visual Studio Code"
    },
    {
        name: "Coq",
        description: "A formal proof management system allowing development of mathematical proofs and verified software.",
        creator: "INRIA",
        type: "High-level (Proof assistant)",
        companiesUsingIt: "Academia, research institutions",
        idePrograms: "CoqIDE, VS Code (with plugins)"
    },
    {
        name: "CraftCMS",
        description: "A flexible CMS platform designed for developers to build custom websites and applications.",
        creator: "Pixel & Tonic",
        type: "CMS",
        companiesUsingIt: "Digital agencies, web developers",
        idePrograms: "Sublime Text, PHPStorm"
    },
    {
        name: "D",
        description: "A systems programming language with high-level features, similar to C++ but with enhanced memory safety and concurrency.",
        creator: "Walter Bright (1999)",
        type: "High-level (System)",
        companiesUsingIt: "eBay, Netflix, Facebook",
        idePrograms: "DLangIDE, Visual Studio Code"
    },
    {
        name: "DM (Data Management)",
        description: "A toolkit for developing object-oriented databases in Smalltalk.",
        creator: "Cincom Systems",
        type: "High-level",
        companiesUsingIt: "Cincom, GemStone",
        idePrograms: "Smalltalk IDEs"
    },
    {
        name: "Dart",
        description: "A client-optimized language developed by Google, primarily used for web and mobile apps.",
        creator: "Google (2011)",
        type: "High-level",
        companiesUsingIt: "Google, Alibaba, Adobe",
        idePrograms: "IntelliJ IDEA, Android Studio"
    },
   {
    name: "Delphi",
    description: "A high-level, object-oriented language derived from Pascal, used for desktop, mobile, and enterprise applications.",
    creator: "Anders Hejlsberg (1995, Borland)",
    type: "High-level",
    companiesUsingIt: "Embarcadero, Microsoft, NASA",
    idePrograms: "RAD Studio, Delphi IDE"
},
{
    name: "Drupal",
    description: "An open-source content management framework written in PHP, used for websites and applications.",
    creator: "Dries Buytaert (2001)",
    type: "CMS",
    companiesUsingIt: "Tesla, University of Oxford, NASA",
    idePrograms: "PHPStorm, Acquia Dev Desktop"
},
{
    name: "EPiServer",
    description: "A digital experience platform offering CMS, e-commerce, and digital marketing services.",
    creator: "Elektropost Stockholm",
    type: "CMS",
    companiesUsingIt: "Volvo, Electrolux, Siemens",
    idePrograms: "Visual Studio, EPiServer CMS"
},
{
    name: "Eagle",
    description: "A PCB (Printed Circuit Board) design software with a schematic editor and layout editor.",
    creator: "CadSoft Computer GmbH",
    type: "Design tool",
    companiesUsingIt: "Electronics companies, hobbyists",
    idePrograms: "Eagle CAD, Fusion 360"
},
{
    name: "Elisp",
    description: "A dialect of Lisp used for scripting in Emacs, allowing customization and extension of the editor.",
    creator: "Richard Stallman (1985)",
    type: "Scripting language",
    companiesUsingIt: "GNU Project, Emacs users",
    idePrograms: "Emacs"
},
{
    name: "Elixir",
    description: "A functional language built on the Erlang VM, designed for scalability and maintainability in distributed systems.",
    creator: "José Valim (2011)",
    type: "High-level",
    companiesUsingIt: "Discord, PepsiCo, Pinterest",
    idePrograms: "IntelliJ IDEA, Visual Studio Code"
},
{
    name: "Elm",
    description: "A functional language for building web applications with a focus on simplicity, reliability, and performance.",
    creator: "Evan Czaplicki (2012)",
    type: "High-level (Web)",
    companiesUsingIt: "NoRedInk, Microsoft, Pivotal",
    idePrograms: "Elm Reactor, IntelliJ IDEA"
},
{
    name: "Erlang",
    description: "A general-purpose, functional programming language used for building fault-tolerant, concurrent systems.",
    creator: "Ericsson (Joe Armstrong)",
    type: "High-level",
    companiesUsingIt: "WhatsApp, Ericsson, Cisco",
    idePrograms: "Erlang IDE, IntelliJ IDEA, Eclipse"
},
{
    name: "ExpressionEngine",
    description: "A flexible content management system for websites, focusing on ease of use and customizability.",
    creator: "EllisLab",
    type: "CMS",
    companiesUsingIt: "Small businesses, web developers",
    idePrograms: "Sublime Text, PHPStorm"
},
{
    name: "ExtJs",
    description: "A JavaScript framework for building cross-platform web applications with a rich user interface.",
    creator: "Jack Slocum (2006)",
    type: "High-level (Web)",
    companiesUsingIt: "Adobe, Samsung, Panasonic",
    idePrograms: "Sencha IDE, VS Code"
},
{
    name: "Fancy",
    description: "A small and expressive language inspired by Ruby and Python, aimed at simplicity and ease of use.",
    creator: "Christopher Bertels",
    type: "High-level",
    companiesUsingIt: "Hobbyists, small projects",
    idePrograms: "VS Code, Sublime Text"
},
{
    name: "Finale",
    description: "A music notation software that allows composers to create and edit sheet music.",
    creator: "Phil Farrand (1988)",
    type: "Music software",
    companiesUsingIt: "Music composers, educators",
    idePrograms: "Finale Software"
},
{
    name: "FlaxEngine",
    description: "A game engine offering a streamlined workflow and support for C++ and C# for developing high-quality games.",
    creator: "Flax Studios",
    type: "Game engine",
    companiesUsingIt: "Independent game developers",
    idePrograms: "Flax Editor, Visual Studio"
},
{
    name: "ForceDotCom",
    description: "A cloud-based development platform by Salesforce for building business apps with minimal infrastructure.",
    creator: "Salesforce",
    type: "High-level (Enterprise)",
    companiesUsingIt: "Salesforce, Accenture, Capgemini",
    idePrograms: "Salesforce Developer Console, VS Code with Salesforce Extensions"
},
{
    name: "Fortran",
    description: "One of the earliest high-level programming languages, primarily used for scientific and engineering computations.",
    creator: "John Backus (1957)",
    type: "High-level",
    companiesUsingIt: "NASA, Intel, IBM",
    idePrograms: "Visual Studio, Eclipse Photran, Code::Blocks"
},
{
    name: "FuelPHP",
    description: "A simple, flexible PHP framework that supports the rapid development of web applications.",
    creator: "Dan Horrigan, Jelmer Schreuder",
    type: "High-level (Web)",
    companiesUsingIt: "Web development companies, startups",
    idePrograms: "PHPStorm, Sublime Text"
},
{
    name: "GWT (Google Web Toolkit)",
    description: "A development toolkit for building and optimizing complex browser-based applications in Java.",
    creator: "Google (2006)",
    type: "High-level (Web)",
    companiesUsingIt: "Google, Red Hat, Accenture",
    idePrograms: "IntelliJ IDEA, Eclipse"
},
{
    name: "Gcov",
    description: "A test coverage program used to analyze and visualize code coverage in C and C++ programs.",
    creator: "GNU Project",
    type: "Testing tool",
    companiesUsingIt: "Open-source projects, embedded systems",
    idePrograms: "GCC (GNU Compiler Collection), VS Code"
},
{
    name: "GitBook",
    description: "A modern documentation platform designed for team collaboration, enabling easy creation and management of docs.",
    creator: "FriendCode, Inc.",
    type: "Documentation tool",
    companiesUsingIt: "Adobe, SoundCloud, Lumen",
    idePrograms: "GitBook Editor, Markdown editors"
},
{
    name: "GitHub Pages",
    description: "A web hosting service that allows developers to host websites directly from GitHub repositories.",
    creator: "GitHub",
    type: "Hosting service",
    companiesUsingIt: "GitHub users, developers",
    idePrograms: "GitHub Editor, Markdown editors"
},
{
    name: "Go (Golang)",
    description: "A statically typed, compiled language designed at Google for system programming and large-scale web applications.",
    creator: "Robert Griesemer, Rob Pike, Ken Thompson (2007)",
    type: "High-level",
    companiesUsingIt: "Google, Uber, Dropbox",
    idePrograms: "GoLand, VS Code"
},
{
    name: "Godot",
    description: "An open-source, cross-platform game engine used for developing both 2D and 3D games.",
    creator: "Juan Linietsky, Ariel Manzur",
    type: "Game engine",
    companiesUsingIt: "Indie game developers, nonprofits",
    idePrograms: "Godot Editor, VS Code"
},
{
    name: "Gradle",
    description: "An open-source build automation tool used to build, test, and deploy software.",
    creator: "Hans Dockter (2007)",
    type: "Build tool",
    companiesUsingIt: "LinkedIn, Netflix, Adobe",
    idePrograms: "IntelliJ IDEA, Eclipse"
},
{
    name: "Grails",
    description: "An open-source web application framework based on the Groovy language and built on top of the Spring framework.",
    creator: "Graeme Rocher (2005)",
    type: "High-level (Web)",
    companiesUsingIt: "Netflix, LinkedIn, Google",
    idePrograms: "IntelliJ IDEA, VS Code, NetBeans"
},
{
    name: "Haskell",
    description: "A purely functional programming language with strong static typing, widely used in academic and industry for its expressiveness.",
    creator: "Simon Peyton Jones (1990)",
    type: "High-level",
    companiesUsingIt: "Facebook, Barclays, GitHub",
    idePrograms: "GHC (Glasgow Haskell Compiler), VS Code, IntelliJ IDEA"
},
{
    name: "IAR",
    description: "A development toolchain primarily used for embedded system development, supporting various microcontrollers.",
    creator: "IAR Systems",
    type: "Toolchain",
    companiesUsingIt: "Texas Instruments, Bosch, Intel",
    idePrograms: "IAR Embedded Workbench"
},
{
    name: "IGOR Pro",
    description: "A scientific data analysis and graphing software environment, used for data visualization and analysis in labs.",
    creator: "WaveMetrics",
    type: "Data analysis tool",
    companiesUsingIt: "NASA, academia, research institutions",
    idePrograms: "IGOR Pro"
},
{
    name: "Idris",
    description: "A functional programming language with dependent types, enabling precise types and strong correctness guarantees.",
    creator: "Edwin Brady (2009)",
    type: "High-level",
    companiesUsingIt: "Academia, research",
    idePrograms: "VS Code, Atom"
},
{
    name: "JBoss",
    description: "An open-source application server for building, deploying, and hosting Java applications.",
    creator: "Red Hat",
    type: "Application server",
    companiesUsingIt: "Red Hat, Hertz, HSBC",
    idePrograms: "JBoss Developer Studio, Eclipse"
},
{
    name: "JENKINS_HOME",
    description: "An open-source automation server that helps build, test, and deploy software in continuous integration and delivery pipelines.",
    creator: "Kohsuke Kawaguchi (2004)",
    type: "Automation tool",
    companiesUsingIt: "Google, Netflix, LinkedIn",
    idePrograms: "Jenkins Dashboard, VS Code"
},
{
    name: "Java",
    description: "A general-purpose, object-oriented language used for building everything from web apps to mobile and desktop software.",
    creator: "James Gosling (1995)",
    type: "High-level",
    companiesUsingIt: "Amazon, IBM, LinkedIn",
    idePrograms: "IntelliJ IDEA, Eclipse, NetBeans"
},
{
    name: "Jekyll",
    description: "A static site generator written in Ruby that transforms plain text into static websites and blogs.",
    creator: "Tom Preston-Werner (2008)",
    type: "Static site generator",
    companiesUsingIt: "GitHub, freelancers, small businesses",
    idePrograms: "VS Code, Sublime Text"
},
{
    name: "Joomla",
    description: "An open-source CMS used for building websites and online applications, with extensive flexibility and community support.",
    creator: "Open Source Matters (2005)",
    type: "CMS",
    companiesUsingIt: "IKEA, Harvard, eBay",
    idePrograms: "JoomDev, PHPStorm"
},
{
    name: "Julia",
    description: "A high-level, high-performance programming language for technical computing, combining ease of use with performance.",
    creator: "Jeff Bezanson, Stefan Karpinski, et al. (2012)",
    type: "High-level",
    companiesUsingIt: "NASA, Intel, MIT",
    idePrograms: "Juno, VS Code, Atom"
},
{
    name: "KiCad",
    description: "An open-source software suite for electronic design automation (EDA), used for designing PCB layouts.",
    creator: "Jean-Pierre Charras (1992)",
    type: "Design tool",
    companiesUsingIt: "Electronics industry, hobbyists",
    idePrograms: "KiCad EDA, Fusion 360"
},
{
    name: "Kohana",
    description: "A lightweight PHP framework for building web applications quickly, offering flexibility and simplicity.",
    creator: "Kohana community",
    type: "High-level (Web)",
    companiesUsingIt: "Web developers, startups",
    idePrograms: "PHPStorm, Sublime Text"
},
{
    name: "Kotlin",
    description: "A statically typed programming language for the JVM and Android, combining object-oriented and functional programming features.",
    creator: "JetBrains (2011)",
    type: "High-level",
    companiesUsingIt: "Google, Pinterest, Trello",
    idePrograms: "IntelliJ IDEA, Android Studio"
},
{
    name: "LabVIEW",
    description: "A system-design platform and development environment for visual programming, used in data acquisition, instrument control, and industrial automation.",
    creator: "National Instruments",
    type: "Visual programming",
    companiesUsingIt: "NASA, Boeing, CERN",
    idePrograms: "LabVIEW IDE, NI Tools"
},
{
    name: "Laravel",
    description: "A PHP framework that offers an elegant syntax for web development and supports the MVC (Model-View-Controller) architecture.",
    creator: "Taylor Otwell (2011)",
    type: "High-level (Web)",
    companiesUsingIt: "9GAG, Pfizer, startups",
    idePrograms: "PHPStorm, Sublime Text"
},
{
    name: "Leiningen",
    description: "A build automation and dependency management tool for Clojure projects, simplifying project setup, testing, and deployment.",
    creator: "Phil Hagelberg (2010)",
    type: "Build tool",
    companiesUsingIt: "Clojure projects, startups",
    idePrograms: "Command-line tool, Emacs"
},
{
    name: "LemonStand",
    description: "A now-discontinued e-commerce platform that allowed developers to build and customize online stores.",
    creator: "LemonStand (2010–2019)",
    type: "E-commerce platform",
    companiesUsingIt: "E-commerce developers (discontinued)",
    idePrograms: "PHPStorm, Sublime Text"
},
{
    name: "Lilypond",
    description: "A music engraving program for creating high-quality sheet music, similar to Finale or Sibelius.",
    creator: "Han-Wen Nienhuys, Jan Nieuwenhuizen",
    type: "Music software",
    companiesUsingIt: "Music composers, publishers",
    idePrograms: "LilyPond Editor, Frescobaldi"
},
{
    name: "Lithium",
    description: "A lightweight PHP framework for developing web applications with flexibility and simplicity.",
    creator: "Union of Rad (2011)",
    type: "High-level (Web)",
    companiesUsingIt: "Web developers, startups",
    idePrograms: "PHPStorm, Sublime Text"
},
{
    name: "Lua",
    description: "A lightweight, embeddable scripting language commonly used in game development and embedded systems.",
    creator: "Roberto Ierusalimschy (1993)",
    type: "High-level",
    companiesUsingIt: "Adobe, Blizzard, Roblox",
    idePrograms: "Lua IDE, VS Code"
},
{
    name: "Magento",
    description: "An open-source e-commerce platform that provides a flexible shopping cart system and powerful customization for online stores.",
    creator: "Varien (now Adobe) (2008)",
    type: "E-commerce platform",
    companiesUsingIt: "Ford, Coca-Cola, Nike",
    idePrograms: "Magento Cloud, PHPStorm"
},
{
    name: "Maven",
    description: "A build automation tool primarily used for Java projects, helping manage project builds, dependencies, and documentation.",
    creator: "Apache Software Foundation (2004)",
    type: "Build tool",
    companiesUsingIt: "IBM, Red Hat, Netflix",
    idePrograms: "IntelliJ IDEA, Eclipse"
},
{
    name: "Mercury",
    description: "A logic/functional programming language for real-world applications, with strong static typing and determinism.",
    creator: "Zoltan Somogyi, Fergus Henderson (1995)",
    type: "High-level",
    companiesUsingIt: "Academia, research institutions",
    idePrograms: "VS Code, Mercury IDE"
},
{
    name: "MetaProgrammingSystem",
    description: "A language workbench that supports the development of domain-specific languages (DSLs) and language engineering.",
    creator: "JetBrains",
    type: "High-level (DSL)",
    companiesUsingIt: "JetBrains, language tool developers",
    idePrograms: "JetBrains MPS"
},
{
    name: "Nanoc",
    description: "A static site generator that allows developers to create websites by transforming simple templates into HTML.",
    creator: "Denis Defreyne",
    type: "Static site generator",
    companiesUsingIt: "Freelancers, web developers",
    idePrograms: "VS Code, Sublime Text"
},
{
    name: "Nim",
    description: "A statically typed, compiled systems programming language that offers performance comparable to C, with Python-like syntax.",
    creator: "Andreas Rumpf (2008)",
    type: "High-level",
    companiesUsingIt: "Status, ZeroTier",
    idePrograms: "Nim IDE, VS Code"
},
{
    name: "Node.js",
    description: "A JavaScript runtime built on Chrome’s V8 engine, allowing server-side scripting and building scalable network applications.",
    creator: "Ryan Dahl (2009)",
    type: "High-level",
    companiesUsingIt: "LinkedIn, Netflix, Walmart",
    idePrograms: "VS Code, WebStorm"
},
{
    name: "OCaml",
    description: "A general-purpose functional programming language with a strong emphasis on expressiveness and safety.",
    creator: "INRIA (1996)",
    type: "High-level",
    companiesUsingIt: "Facebook, Jane Street, Bloomberg",
    idePrograms: "VS Code, OCaml IDE"
},
{
    name: "Objective-C",
    description: "A general-purpose, object-oriented language that adds Smalltalk-style messaging to C, primarily used for macOS and iOS development.",
    creator: "Brad Cox, Tom Love (1984)",
    type: "High-level",
    companiesUsingIt: "Apple, IBM, Intel",
    idePrograms: "Xcode, AppCode, Sublime Text"
},
{
    name: "Opa",
    description: "A web development framework that integrates both client-side and server-side logic, making web apps secure and scalable.",
    creator: "MLstate",
    type: "High-level (Web)",
    companiesUsingIt: "Freelancers, small businesses",
    idePrograms: "Opa IDE, VS Code"
},
{
    name: "OpenCart",
    description: "An open-source e-commerce platform that allows businesses to create and manage online stores with a simple, user-friendly interface.",
    creator: "OpenCart Ltd.",
    type: "E-commerce platform",
    companiesUsingIt: "Small to medium-sized businesses",
    idePrograms: "OpenCart Dashboard, VS Code"
},
{
    name: "OracleForms",
    description: "A software tool for creating data entry systems that access Oracle databases, widely used in enterprise applications.",
    creator: "Oracle Corporation",
    type: "High-level",
    companiesUsingIt: "Oracle, IBM, enterprise companies",
    idePrograms: "Oracle Forms Builder, JDeveloper"
},
{
    name: "Packer",
    description: "An open-source tool used to automate the creation of machine images for multiple platforms, improving consistency in deployments.",
    creator: "HashiCorp",
    type: "Automation tool",
    companiesUsingIt: "Amazon, Google, Microsoft",
    idePrograms: "VS Code, Packer CLI"
},
{
    name: "Perl",
    description: "A high-level, general-purpose programming language known for its text-processing capabilities and use in system administration, web development, and networking.",
    creator: "Larry Wall (1987)",
    type: "High-level",
    companiesUsingIt: "Booking.com, BBC, DuckDuckGo",
    idePrograms: "Padre, VS Code, Sublime Text"
},
{
    name: "Phalcon",
    description: "A high-performance PHP framework delivered as a C extension, designed for creating fast web applications with low overhead.",
    creator: "Andres Gutierrez",
    type: "High-level (Web)",
    companiesUsingIt: "Shopify, Rocket.Chat, SiteGround",
    idePrograms: "PHPStorm, Sublime Text"
},
{
    name: "Play Framework",
    description: "A reactive web framework written in Java and Scala, designed to be highly scalable and make development simpler and more productive.",
    creator: "Guillaume Bort (2007)",
    type: "High-level (Web)",
    companiesUsingIt: "LinkedIn, Coursera, Glovo",
    idePrograms: "IntelliJ IDEA, Eclipse"
},
{
    name: "Plone",
    description: "An open-source content management system (CMS) used for building secure and flexible websites and web applications.",
    creator: "Alexander Limi, Alan Runyan (2001)",
    type: "CMS",
    companiesUsingIt: "NASA, Novartis, Oxfam",
    idePrograms: "PyCharm, VS Code, Plone IDE"
},
{
    name: "PrestaShop",
    description: "An open-source e-commerce platform designed to create and manage online stores, offering extensive customization options.",
    creator: "Igor Schlumberger, Bruno Lévêque (2007)",
    type: "E-commerce platform",
    companiesUsingIt: "Decathlon, McDonald’s, L’Oreal",
    idePrograms: "PrestaShop Admin Panel, VS Code"
},
{
    name: "Processing",
    description: "A flexible software sketchbook and language for learning how to code within the context of the visual arts, especially for creating graphics and interactive art.",
    creator: "Ben Fry, Casey Reas (2001)",
    type: "High-level",
    companiesUsingIt: "Graphic designers, artists",
    idePrograms: "Processing IDE"
}
{
    name: "PureScript",
    description: "A strongly typed, purely functional programming language that compiles to JavaScript, used for building reliable web applications.",
    creator: "Phil Freeman (2013)",
    type: "High-level (Web)",
    companiesUsingIt: "Lumi, SlamData",
    idePrograms: "VS Code, Atom, PureScript IDE"
},
{
    name: "Python",
    description: "A versatile, high-level, interpreted language known for its readability and broad use in web development, data science, automation, and more.",
    creator: "Guido van Rossum (1991)",
    type: "High-level",
    companiesUsingIt: "Google, Netflix, Instagram",
    idePrograms: "PyCharm, VS Code, IDLE"
},
{
    name: "Qooxdoo",
    description: "A universal JavaScript framework for creating feature-rich web applications and advanced user interfaces.",
    creator: "1&1 Internet AG",
    type: "High-level (Web)",
    companiesUsingIt: "Web developers, small businesses",
    idePrograms: "VS Code, Sublime Text"
},
{
    name: "Qt",
    description: "A cross-platform software development framework for building applications with native graphical user interfaces.",
    creator: "Haavard Nord, Eirik Chambe-Eng (1991)",
    type: "Framework",
    companiesUsingIt: "Autodesk, Panasonic, Mercedes-Benz",
    idePrograms: "Qt Creator, VS Code"
},
{
    name: "R",
    description: "A programming language and software environment widely used for statistical computing, data analysis, and visualization.",
    creator: "Ross Ihaka, Robert Gentleman (1993)",
    type: "High-level",
    companiesUsingIt: "Google, Facebook, Twitter",
    idePrograms: "RStudio, VS Code"
},
{
    name: "ROS (Robot Operating System)",
    description: "A set of software libraries and tools used to build robot applications, including hardware abstraction and low-level device control.",
    creator: "Willow Garage (2007)",
    type: "Middleware",
    companiesUsingIt: "Open Robotics, NASA, Bosch",
    idePrograms: "ROS IDE, VS Code"
},
{
    name: "Racket",
    description: "A general-purpose, multi-paradigm programming language derived from Scheme, used in computer science education and research.",
    creator: "Matthias Felleisen (1995)",
    type: "High-level",
    companiesUsingIt: "Academia, research institutions",
    idePrograms: "DrRacket, VS Code, Emacs"
},
{
    name: "Rails (Ruby on Rails)",
    description: "A full-stack web application framework written in Ruby that follows the model-view-controller (MVC) architecture.",
    creator: "David Heinemeier Hansson (2004)",
    type: "High-level (Web)",
    companiesUsingIt: "Airbnb, GitHub, Shopify",
    idePrograms: "RubyMine, Sublime Text, VS Code"
},
{
    name: "Raku",
    description: "A member of the Perl family of languages, designed to be a highly capable and expressive language for multi-threading and concurrency.",
    creator: "Larry Wall (2019)",
    type: "High-level",
    companiesUsingIt: "Community-driven, open source projects",
    idePrograms: "Comma IDE, Sublime Text, VS Code"
},
{
    name: "ReScript",
    description: "A strongly typed, functional programming language that compiles to JavaScript, focused on creating fast and maintainable web applications.",
    creator: "The ReScript Team (2020)",
    type: "High-level (Web)",
    companiesUsingIt: "Facebook, Bloomberg, Esy",
    idePrograms: "VS Code, Sublime Text, ReScript IDE"
},
{
    name: "Rhodes/Rhomobile",
    description: "A cross-platform mobile application development framework using HTML, CSS, and JavaScript.",
    creator: "Motorola Solutions (2008)",
    type: "High-level (Mobile)",
    companiesUsingIt: "Enterprise mobility solutions, startups",
    idePrograms: "Rhodes IDE, VS Code"
},
{
    name: "Ruby",
    description: "A dynamic, open-source programming language that emphasizes simplicity and productivity with an elegant syntax.",
    creator: "Yukihiro “Matz” Matsumoto (1995)",
    type: "High-level",
    companiesUsingIt: "Airbnb, GitHub, Shopify",
    idePrograms: "RubyMine, Sublime Text, VS Code"
},
{
    name: "Rust",
    description: "A systems programming language that focuses on speed, memory safety, and concurrency without the need for garbage collection.",
    creator: "Graydon Hoare (2010)",
    type: "High-level",
    companiesUsingIt: "Dropbox, Microsoft, Mozilla",
    idePrograms: "VS Code, IntelliJ IDEA, Sublime Text"
},
{
    name: "SCons",
    description: "A software construction tool used to automate the process of building code, with flexibility and support for cross-platform builds.",
    creator: "Steven Knight (2001)",
    type: "Build tool",
    companiesUsingIt: "NASA, Amazon, Google",
    idePrograms: "VS Code, Sublime Text"
},
{
    name: "Sass",
    description: "A CSS preprocessor that extends CSS with variables, nested rules, and mixins, making it easier to maintain and write large stylesheets.",
    creator: "Hampton Catlin, Natalie Weizenbaum",
    type: "High-level (Web)",
    companiesUsingIt: "Airbnb, GitHub, Twitter",
    idePrograms: "VS Code, Sublime Text, Atom"
},
{
    name: "Scala",
    description: "A high-level language that combines object-oriented and functional programming paradigms, designed to be concise and scalable.",
    creator: "Martin Odersky (2004)",
    type: "High-level",
    companiesUsingIt: "LinkedIn, Twitter, Airbnb",
    idePrograms: "IntelliJ IDEA, VS Code"
},
{
    name: "Scheme",
    description: "A minimalist dialect of Lisp, focusing on a small set of core language features, often used in teaching and research.",
    creator: "Guy L. Steele Jr., Gerald Jay Sussman",
    type: "High-level",
    companiesUsingIt: "Academia, research institutions",
    idePrograms: "DrRacket, VS Code, Emacs"
},
{
    name: "Scrivener",
    description: "A writing tool used primarily for organizing and drafting long documents like books, scripts, and research papers.",
    creator: "Literature and Latte (2007)",
    type: "Writing tool",
    companiesUsingIt: "Authors, screenwriters, researchers",
    idePrograms: "Scrivener Software"
},
{
    name: "Sdcc (Small Device C Compiler)",
    description: "An optimizing C compiler for microcontrollers, enabling the development of C programs for small embedded systems.",
    creator: "Sandeep Dutta (1999)",
    type: "Compiler tool",
    companiesUsingIt: "Embedded systems developers, hobbyists",
    idePrograms: "VS Code, Eclipse"
},
{
    name: "SeamGen",
    description: "A development framework for building scalable, transactional Java EE web applications.",
    creator: "Red Hat",
    type: "High-level (Web)",
    companiesUsingIt: "Red Hat, enterprise software",
    idePrograms: "Eclipse, IntelliJ IDEA"
},
{
    name: "SketchUp",
    description: "A 3D modeling software used in architecture, interior design, landscape architecture, and video game design.",
    creator: "@Last Software (acquired by Trimble)",
    type: "3D modeling tool",
    companiesUsingIt: "Google, architects, game developers",
    idePrograms: "SketchUp, LayOut"
},
{
    name: "Smalltalk",
    description: "An object-oriented, dynamically typed language known for its simplicity and pioneering role in GUI development.",
    creator: "Alan Kay, Dan Ingalls, Adele Goldberg",
    type: "High-level",
    companiesUsingIt: "JPMorgan Chase, Siemens, Texas Instruments",
    idePrograms: "Pharo, Squeak, VisualWorks"
},
{
    name: "Stella",
    description: "An open-source Atari 2600 emulator that allows developers to run and develop games for the Atari platform.",
    creator: "Bradford W. Mott (1996)",
    type: "Emulator",
    companiesUsingIt: "Atari game enthusiasts, developers",
    idePrograms: "Stella Emulator, VS Code"
},
{
    name: "SugarCRM",
    description: "A customer relationship management (CRM) platform used by businesses to manage customer interactions, sales, and marketing.",
    creator: "John Roberts, Clint Oram (2004)",
    type: "CRM system",
    companiesUsingIt: "IBM, Audi, Lenovo",
    idePrograms: "SugarCRM Dashboard, VS Code"
},
{
    name: "Swift",
    description: "A general-purpose, compiled programming language developed by Apple, designed for iOS, macOS, watchOS, and tvOS development.",
    creator: "Chris Lattner (2014)",
    type: "High-level",
    companiesUsingIt: "Apple, LinkedIn, Lyft",
    idePrograms: "Xcode, AppCode"
},
{
    name: "Symfony",
    description: "A PHP framework for building web applications, known for its reusable PHP components and focus on performance.",
    creator: "Fabien Potencier (2005)",
    type: "High-level (Web)",
    companiesUsingIt: "BlaBlaCar, Spotify, Yahoo!",
    idePrograms: "PHPStorm, VS Code"
},
{
    name: "SymphonyCMS",
    description: "An open-source content management system designed to give developers full control over the structure and content of a website.",
    creator: "Overture (2006)",
    type: "CMS",
    companiesUsingIt: "Freelancers, web developers",
    idePrograms: "Symphony CMS IDE, Sublime Text"
},
{
    name: "TeX",
    description: "A typesetting system designed for the production of technical and scientific documentation, especially in mathematics.",
    creator: "Donald Knuth (1978)",
    type: "Typesetting tool",
    companiesUsingIt: "Academia, publishing, researchers",
    idePrograms: "TeXShop, TeXworks"
},
{
    name: "Terraform",
    description: "An open-source infrastructure-as-code software tool, used for building, changing, and versioning infrastructure safely and efficiently.",
    creator: "HashiCorp (2014)",
    type: "Automation tool",
    companiesUsingIt: "AWS, Google, Microsoft",
    idePrograms: "VS Code, Terraform CLI"
},
{
    name: "Textpattern",
    description: "An open-source content management system for creating blogs, websites, and web applications, known for its flexibility and simplicity.",
    creator: "Dean Allen (2003)",
    type: "CMS",
    companiesUsingIt: "Small to medium businesses, freelancers",
    idePrograms: "Sublime Text, VS Code"
},
{
    name: "TurboGears2",
    description: "A full-stack web framework for building flexible and scalable web applications in Python.",
    creator: "Kevin Dangoor (2005)",
    type: "High-level (Web)",
    companiesUsingIt: "Web developers, startups",
    idePrograms: "PyCharm, Sublime Text"
},
{
    name: "TwinCAT3",
    description: "A software platform for PC-based control systems and automation, commonly used in industrial settings for PLC programming.",
    creator: "Beckhoff Automation",
    type: "High-level (Automation)",
    companiesUsingIt: "Manufacturing, industrial automation",
    idePrograms: "TwinCAT IDE, Visual Studio"
},
{
    name: "Typo3",
    description: "An open-source content management system primarily used for enterprise-level websites and intranets, known for scalability and flexibility.",
    creator: "Kasper Skårhøj (1997)",
    type: "CMS",
    companiesUsingIt: "Lufthansa, Audi, University of Cambridge",
    idePrograms: "PHPStorm, VS Code"
},
{
    name: "Unity",
    description: "A cross-platform game engine used for developing video games and simulations for computers, consoles, and mobile devices.",
    creator: "Unity Technologies (2005)",
    type: "Game engine",
    companiesUsingIt: "Electronic Arts, Ubisoft, Microsoft",
    idePrograms: "Unity Editor, VS Code"
},
{
    name: "Unreal Engine",
    description: "A popular game engine developed by Epic Games, used for developing high-quality video games and real-time 3D projects.",
    creator: "Epic Games (1998)",
    type: "Game engine",
    companiesUsingIt: "Epic Games, game developers",
    idePrograms: "Unreal Editor, Visual Studio"
},
{
    name: "VVVV",
    description: "A hybrid visual and textual programming environment for developing multimedia and interactive applications.",
    creator: "Meso Digital Media (1998)",
    type: "Visual programming",
    companiesUsingIt: "Interactive artists, visual designers",
    idePrograms: "VVVV IDE"
},
{
    name: "Visual Studio",
    description: "An integrated development environment (IDE) from Microsoft used for developing software, web applications, and services.",
    creator: "Microsoft (1997)",
    type: "IDE",
    companiesUsingIt: "Microsoft, Google, startups",
    idePrograms: "Visual Studio, VS Code"
},
{
    name: "Waf",
    description: "A build automation tool designed to be portable, flexible, and easy to use, widely used in software engineering projects.",
    creator: "Thomas Nagy (2006)",
    type: "Build tool",
    companiesUsingIt: "NASA, Google, KDE",
    idePrograms: "Waf CLI, VS Code"
},
{
    name: "WordPress",
    description: "A popular open-source content management system used for building websites and blogs, known for its flexibility and large plugin ecosystem.",
    creator: "Matt Mullenweg (2003)",
    type: "CMS",
    companiesUsingIt: "The New Yorker, BBC, Sony",
    idePrograms: "WordPress Dashboard, Sublime Text"
},
{
    name: "Xojo",
    description: "A cross-platform development tool for building native apps for desktop, web, mobile, and Raspberry Pi using a high-level, easy-to-learn language.",
    creator: "Geoff Perlman (1997)",
    type: "High-level",
    companiesUsingIt: "Hobbyists, small businesses",
    idePrograms: "Xojo IDE"
},
{
    name: "Yeoman",
    description: "A set of tools and scaffolding framework for building modern web applications, helping developers generate project templates quickly.",
    creator: "Google (2012)",
    type: "High-level (Web)",
    companiesUsingIt: "Web developers, startups",
    idePrograms: "Yeoman CLI, VS Code"
},
{
    name: "Yii",
    description: "A high-performance, component-based PHP framework for developing large-scale web applications rapidly.",
    creator: "Qiang Xue (2008)",
    type: "High-level (Web)",
    companiesUsingIt: "Deloitte, General Motors, startups",
    idePrograms: "PHPStorm, Sublime Text, VS Code"
},
{
    name: "Zend Framework",
    description: "A collection of professional PHP packages for building web applications and services, following best practices like modularity and reusability.",
    creator: "Zend Technologies (2006)",
    type: "High-level (Web)",
    companiesUsingIt: "Cisco WebEx, BNP Paribas, startups",
    idePrograms: "PHPStorm, Sublime Text, NetBeans"
},
{
    name: "Zephir",
    description: "A high-level programming language designed for creating PHP extensions, mixing the simplicity of PHP with the performance of C.",
    creator: "Phalcon Team (2013)",
    type: "High-level (PHP extensions)",
    companiesUsingIt: "PHP-based companies, startups",
    idePrograms: "Sublime Text, PHPStorm, VS Code"
},
{
    name: "Zig",
    description: "A general-purpose programming language designed for robustness, optimal performance, and manual memory management, aimed at systems programming.",
    creator: "Andrew Kelley (2015)",
    type: "High-level",
    companiesUsingIt: "Systems programming, hobbyists",
    idePrograms: "VS Code, Sublime Text, Zig IDE"
}



    // Add more languages here as needed
];

function categorizeLanguage() {
    const languageInput = document.getElementById("languageInput").value.toLowerCase();
        console.log("User input:", languageInput);  // Log the input for debuggin
    const language = languages.find(lang => lang.name.toLowerCase() === languageInput);

    if (language) {
        document.getElementById("result").innerHTML = `
            <strong>Name:</strong> ${language.name}<br>
            <strong>Description:</strong> ${language.description}<br>
            <strong>Creator:</strong> ${language.creator}<br>
            <strong>Type:</strong> ${language.type}<br>
            <strong>Companies Using It:</strong> ${language.companiesUsingIt}<br>
            <strong>IDE/Programs:</strong> ${language.idePrograms}
        `;
    } else {
        document.getElementById("result").innerText = "Language not found in the database.";
    }
}

