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
}

