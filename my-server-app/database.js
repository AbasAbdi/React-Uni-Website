var sqlite3 = require("sqlite3").verbose();

// open the database
let db = new sqlite3.Database("University.db", (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  }
  console.log("Connected to the students database.");
});

// Creating the tables for the database
const sql =
  "CREATE TABLE students(student_id INTEGER PRIMARY KEY NOT NULL, course_id INTEGER NOT NULL, isStudent text, fName text, lName text, email text, password text, address1 text, address2 text, city text, state text, zip text, country text, gMaths text, gEnglish text, gcse text, aLevels text, diploma text, HE text, ucas INTEGER, IELTS INTEGER, degree text, EPQ1 text, EPQ2 text, EPQ3 text, workExp text, FOREIGN KEY (course_id) REFERENCES courses(course_id) ON DELETE CASCADE ON UPDATE CASCADE)";

const sql2 =
  "CREATE TABLE assessment(assess_id INTEGER PRIMARY KEY NOT NULL, student_id INTEGER NOT NULL, module_id INTEGER NOT NULL, name text, marks text, FOREIGN KEY (student_id) REFERENCES students(student_id), FOREIGN KEY (module_id) REFERENCES modules(module_id) ON DELETE CASCADE ON UPDATE CASCADE)";

const sql3 =
  "CREATE TABLE courses(course_id INTEGER PRIMARY KEY NOT NULL, course_img text, course_type text, course_name text, course_desc text, course_ov1 text, course_ov2 text, course_ov3 text, ukReq_points text, ukReq_title text, ukReq_sec text, ukReq_list1 text, ukReq_list2 text, ukReq_list3 text, ukReq_gcse text, euInt_points text, euInt_title text, euInt_p1 text, euInt_p2 text, euInt_p3 text)";
const sql4 =
  "CREATE TABLE modules(module_id INTEGER NOT NULL, course_id INTEGER NOT NULL, level text, module_name text, module_type text, module_desc text, PRIMARY KEY (module_id,course_id) FOREIGN KEY (course_id) REFERENCES courses(course_id) ON DELETE CASCADE ON UPDATE CASCADE)";

db.run(sql, (err) => {
  if (err) {
    // Students table already created
    console.log("Students table already created.");
  } else {
    console.log("Students table created.");

    // First time Students table created, insert some rows
    console.log("First time Students table is created, creating some rows.");

    // I just wanted to start the Student ID's from my Student ID
    // but otherwise this has no relevance to the application as it's ignored.
    var insert = "INSERT INTO students(student_id, course_id) VALUES(?,?)";
    db.run(insert, [21422705, 50]);
  }
});
db.run(sql2, (err) => {
  if (err) {
    // Assessment table already created
    console.log("Assessment table already created.");
  } else {
    console.log("Assessment table created.");
  }
});

db.run(sql3, (err) => {
  if (err) {
    // Courses table already created
    console.log("Courses table already created.");
  } else {
    console.log("Courses table created.");

    // First time Courses table created, insert some rows
    console.log("First time Courses table created, creating some rows.");

    var insert =
      "INSERT INTO courses(course_id, course_img, course_type, course_name,  course_desc, course_ov1,course_ov2,course_ov3, ukReq_points, ukReq_title, ukReq_sec, ukReq_list1, ukReq_list2, ukReq_list3, ukReq_gcse, euInt_points, euInt_title, euInt_p1, euInt_p2, euInt_p3) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    //Undergraduates | #u
    // BSc (Hons) Computer Science Course | #c1
    db.run(insert, [
      50,
      "https://i.ibb.co/yy5R119/Career-Information-Technology-CE13-Computer-And-Information-Systems-CE8-CE20.jpg",
      "Undergraduate",
      "BSc (Hons) Computer Science",
      "Gain the computing knowledge and skills that employers need. Influenced by the latest research and industry requirements, the degree is accredited by the Institution of Engineering and Technology with Full Incorporated Engineering Status.",
      "This computer science degree is designed to meet the high demand for IT graduates with up-to-date knowledge and skills. Accredited with Full Incorporated Engineering status (IEng) by the Institution of Engineering and Technology (IET), this course will give you a qualification recognised by the industry once you graduate.",
      "Influenced by the latest research and industry requirements, the course will focus on practical skills. We will give you the tools and knowledge to design and develop software for a variety of applications, from mobile systems to large-scale solutions for enterprises.",
      "You will also learn about the science behind computing and software development and the impact of artificial intelligence (AI).",
      "112",
      "UCAS points required from level 3 qualifications",
      "These can include:",
      "A Levels at grade B, B and C, or above",
      "BTEC Extended Diploma with Distinction, Merit, Merit",
      "Access to HE Diploma",
      "You also need GCSE English and Maths (grade 9 – 4 / A* - C) or Level 2 equivalents.",
      "6.0",
      "IELTS or above",
      "You need to meet our English language requirement - a minimum of IELTS 5.5 for each of the 4 individual components (Reading, Writing, Speaking and Listening). We also accept other English language examination equivalents.",
      "You also need academic qualifications at the same level as UK applicants. In some countries where teaching is in English, we may accept local qualifications.",
      "We offer pre-sessional English language courses if you do not meet these requirements.",
    ]);

    // BSc (Hons) Civil Engineering Course | #c2
    db.run(insert, [
      60,
      "https://i.ibb.co/W541LBc/Career-Civil-And-Environmental-Engineering-CE4-CE5-CE19-CE23-CE24.jpg",
      "Undergraduate",
      "BSc (Hons) Civil Engineering",
      "Supported on this accredited course by our highly experienced staff along with the expertise of leading industry consultants and businesses, you'll gain the key skills and knowledge required to become a chartered civil engineer.",
      "Do you want to become a professional civil engineer? On our civil engineering degree, you will gain the key analytical, technical and practical skills required for a civil engineer to design complex civil engineering structures, effectively manage/lead construction projects and communicate effectively with other areas of expertise to successfully accomplish large projects.",
      "The expertise of our academic staff, and that of industry partners and relevant professional bodies will feed directly into your degree training. Civil engineers design, build, supervise and maintain infrastructure projects and systems. These include buildings, roads, airports, tunnels, dams, bridges, waterways, drinking water supply and sewage systems.",
      "You will study a broad discipline in civil engineering that qualifies you to professionally work and provide a better life for many people and protect natural environment. All this is achieved through your abilities, skills and knowledge to conceive, design, build and maintain the infrastructure that our towns and cities rely on.",
      "120",
      "UCAS points required from level 3 qualifications",
      "These can include:",
      "A Levels at grade B, B and C, or above",
      "BTEC Extended Diploma with Distinction, Merit, Merit",
      "Access to HE Diploma",
      "You also need GCSE English and Maths (grade 9 – 4 / A* - C) or Level 2 equivalents.",
      "6.0",
      "IELTS or above",
      "You need to meet our English language requirement - a minimum of IELTS 5.5 for each of the 4 individual components (Reading, Writing, Speaking and Listening). We also accept other English language examination equivalents.",
      "You also need academic qualifications at the same level as UK applicants. In some countries where teaching is in English, we may accept local qualifications.",
      "We offer pre-sessional English language courses if you do not meet these requirements.",
    ]);

    // BSc (Hons) Business Studies Course | #c3
    db.run(insert, [
      70,
      "https://i.ibb.co/WcsPYR1/Career-Business-Studies-B3-Business-Studies-With-Entrepreneurship-B4-Business-Studies-With-Finance-B.jpg",
      "Undergraduate",
      "BSc (Hons) Business Studies",
      "Designed to give you strong real-world knowledge and skills, this course will help you meet the challenges of today's complex, dynamic business world. The degree gives full academic exemptions to the Chartered Management Institute.",
      "Do you want to face the challenges of the business world with more confidence? Join one of the country’s longest-established business studies courses to develop your knowledge and professional skills in this exciting field.",
      "This degree has built a reputation in the UK and abroad for meeting students’ educational and professional needs. You will learn from teaching staff with high levels of expertise in a range of business sectors and benefit from our close links with professional bodies.",
      "Developed in partnership with public and private local business organisations, this course will give you an up-to-date, real-world understanding of the contemporary business world.",
      "112",
      "UCAS points required from level 3 qualifications",
      "These can include:",
      "A Levels at grade B, B and C, or above",
      "BTEC Extended Diploma with Distinction, Merit, Merit",
      "Access to HE Diploma",
      "You also need GCSE English and Maths (grade 9 – 4 / A* - C) or Level 2 equivalents.",
      "6.0",
      "IELTS or above",
      "You need to meet our English language requirement - a minimum of IELTS 5.5 for each of the 4 individual components (Reading, Writing, Speaking and Listening). We also accept other English language examination equivalents.",
      "You also need academic qualifications at the same level as UK applicants. In some countries where teaching is in English, we may accept local qualifications.",
      "We offer pre-sessional English language courses if you do not meet these requirements.",
    ]);

    // BSc (Hons) Biomedical Science Course | #c4
    db.run(insert, [
      80,
      "https://i.ibb.co/ByS9nXT/Biomedical-Science.jpg",
      "Undergraduate",
      "BSc (Hons) Biomedical Science",
      "If you would like to learn about the human body and how it works, as well as find the causes of disease then Biomedical Science is for you. It is a practical and diverse course which can lead to several careers including pharmaceutical research, medicine, dentistry, academia or biomedical product marketing.",
      "This course is designed to enhance your knowledge of biological and medical sciences to enable understanding and to analyse the basis of human disease.",
      "It will involve the study and knowledge of the human body, to conduct medical research on a variety of common health conditions.",
      "There are various areas to specialise in for example, genetics, microbiology, and immunology. The course will prepare you for the required skills needed to become a biomedical scientist, such as practical skills for performing the research to make a breakthrough.",
      "112-120",
      "UCAS points required from level 3 qualifications",
      "These can include:",
      "A Levels at grade B, B and C, or above",
      "BTEC Extended Diploma with Distinction, Merit, Merit",
      "Access to HE Diploma",
      "You also need GCSE English and Maths (grade 9 – 4 / A* - C) or Level 2 equivalents.",
      "7.0",
      "IELTS or above",
      "You need to meet our English language requirement - a minimum of IELTS 5.5 for each of the 4 individual components (Reading, Writing, Speaking and Listening). We also accept other English language examination equivalents.",
      "You also need academic qualifications at the same level as UK applicants. In some countries where teaching is in English, we may accept local qualifications.",
      "We offer pre-sessional English language courses if you do not meet these requirements.",
    ]);

    // Postgraduates | #p
    // MSc Artificial Intelligence Course | #p1
    db.run(insert, [
      90,
      "https://uswfoxtail.blob.core.windows.net/foxtail-prod-uploads/images/GettyI.6642426a.fill-1366x700.format-jpeg.jpegquality-80.jpg",
      "Postgraduate",
      "MSc Artificial Intelligence",
      "If you would like to be at forefront of the ongoing technological revolution then our MSc Artificial Intelligence course is for you. On this course you will gain both theoretical and practical knowledge to work across disciplines and implement AI systems where they are needed.",
      "Artificial intelligence (AI) is redefining the way we live, allowing us to automate processes and enhance our quality of life. The resulting new technologies create the need for trained experts with a deep understanding of their intricacies and applications.",
      "As well as learning the technical skills, you will have the chance to explore realistic applications through group and individual projects. We have contacts with major technology companies, perfect for opportunities within industry-initiated and healthcare-related projects.",
      "N/A",
      "N/A",
      "You should have an honours degree (2:2 or above) from a UK university or equivalent in computing, or business or engineering with a significant level of computing.",
      "We will also consider equivalent professional qualifications or a relevant HND provided you can demonstrate relevant work experience. In this case you will have to complete an interview with your application and some optional modules may not be available without a first degree in computing. All applications are considered individually. ",
      "N/A",
      "N/A",
      "N/A",
      "N/A",
      "6.5",
      "IELTS or above",
      "You need to meet our English language requirement - a minimum of IELTS 5.5 for each of the 4 individual components (Reading, Writing, Speaking and Listening). Other equivalent English language examinations will be considered. ",
      "You also need academic qualifications at the same level as UK applicants. In some countries where teaching is in English, we may accept local qualifications.",
      "We offer pre-sessional English language courses if you do not meet these requirements.",
    ]);

    // MSc Health Informatics Course | #p2
    db.run(insert, [
      100,
      "https://www.uwl.ac.uk/sites/uwl/files/styles/16_by_9_960_x_540/public/import/Career_HealthInformatics_CE28_ComputerScience_CE7.jpg?itok=VnHTUWSv",
      "Postgraduate",
      "MSc Health Informatics",
      "Do you have an inquisitive, analytical mind and a desire to pursue a career in computing and biology, medicine or healthcare? Develop your skills in using data to improve health outcomes on this professionally-focused course.",
      "The initiative to digitise health and genomics information has created a strong demand for medical informatics professionals. This course will provide you with the broad grounding you need for a range of careers as a health informatics or bioinformatics practitioner in the public and private sectors, within the UK or overseas. ",
      "We have designed this degree for graduates with analytical and inquisitive minds who want to work in professional roles that encompass computing and biology, medicine or healthcare. Your studies will help you to develop the Information Communications Technology (ICT) skills and knowledge required to support and improve health and healthcare delivery. ",
      "N/A",
      "N/A",
      "You should have an honours degree (2:2 or above) from a UK university or equivalent in computing or healthcare science.",
      "We will also consider equivalent professional qualifications or a relevant HND provided you can demonstrate relevant work experience. In this case you will have to complete an interview with your application and some optional modules may not be available without a first degree in computing. All applications are considered individually.",
      "N/A",
      "N/A",
      "N/A",
      "N/A",
      "6.5",
      "IELTS or above",
      "You need to meet our English language requirement - a minimum of IELTS 5.5 for each of the 4 individual components (Reading, Writing, Speaking and Listening). Other equivalent English language examinations will be considered.",
      "You also need academic qualifications at the same level as UK applicants. In some countries where teaching is in English, we may accept local qualifications.",
      "We offer pre-sessional English language courses if you do not meet these requirements.",
    ]);

    // MSc International Business Management | #p3
    db.run(insert, [
      110,
      "https://www.uwl.ac.uk/sites/uwl/files/styles/16_by_9_960_x_540/public/import/Career_InternationalBusinessManagement_B7_B14.jpg?itok=6xO0dB4m",
      "Postgraduate",
      "MSc International Business Management",
      "One of our most popular postgraduate courses, this master's degree welcomes students from a range of backgrounds, including those looking to boost their existing careers, change direction or get a great start in management.",
      "Whether you want to kick-start a brand new career, boost your existing experience or change career direction, our MSc International Business Management can provide you with the knowledge, skills and confidence to flourish.",
      "This degree is one of the most popular Masters courses we offer. It offers you the opportunity to develop professionally and academically as well as gain practical business management experience.",
      "With a focus on current business needs in a multicultural, global environment, this course will help you to develop as a confident professional. This course has accreditation from the Chartered Management Institute (CMI).",
      "N/A",
      "You should have an honours degree (2:2 or above) from a UK university or equivalent.",
      "We may also offer you a place based on relevant experience or training, normally from within the work environment. All applications are considered individually.",
      "N/A",
      "N/A",
      "N/A",
      "N/A",
      "6.5",
      "IELTS or above",
      "You need to meet our English language requirement - a minimum of IELTS 5.5 for each of the 4 individual components (Reading, Writing, Speaking and Listening). Other equivalent English language examinations will be considered.",
      "You also need academic qualifications at the same level as UK applicants. In some countries where teaching is in English, we may accept local qualifications.",
      "We offer pre-sessional English language courses if you do not meet these requirements.",
    ]);

    // MA Creative Media Entrepreneurship Courses | #p4
    db.run(insert, [
      120,
      "https://www.uwl.ac.uk/sites/uwl/files/styles/16_by_9_960_x_540/public/2019-02/media%20career.jpg?h=c587e810&itok=NHRafT15",
      "Postgraduate",
      "MA Creative Media Entrepreneurship",
      "Do you have an inquisitive, analytical mind and a desire to pursue a career in computing and biology, medicine or healthcare? Develop your skills in using data to improve health outcomes on this professionally-focused course.",
      "Kickstart your entrepreneurial journey today with a media-savvy outlook with this hands-on, innovation-driven course.   You will learn what it takes to start your own successful business or turbocharge an existing company, whether it is starting a production company, creative agency or online business, developing a product or service, or using media to widen your influence.    You will be able to take your ideas from the classroom to the real world with practical modules designed to help you execute your goals.",
      "The knowledge and skills gained on this course will help shape your identity as an independent media entrepreneur able to seize opportunities and navigate the terrain of an ever-changing media landscape.",
      "N/A",
      "N/A",
      "You need an honours degree (2:1 or above) in a relevant subject. We will also consider your application if you have a 2:2 plus a portfolio of relevant work.",
      "We take into account experience or training, normally from within the work environment. All applications are considered individually. If you have the relevant qualifications and experience, you will be invited to attend an interview to discuss your application.",
      "N/A",
      "N/A",
      "N/A",
      "N/A",
      "6.5",
      "IELTS or above",
      "You need to meet our English language requirement - a minimum of IELTS 5.5 for each of the 4 individual components (Reading, Writing, Speaking and Listening). Other equivalent English language examinations will be considered.",
      "You also need academic qualifications at the same level as UK applicants. In some countries where teaching is in English, we may accept local qualifications.",
      "We offer pre-sessional English language courses if you do not meet these requirements. If you have the relevant qualifications and experience, you will be invited to attend an interview to discuss your application.",
    ]);
  }
});

db.run(sql4, (err) => {
  if (err) {
    // Module table already created
    console.log("Module table already created: " + err);
  } else {
    console.log("Module table created.");
    //First time Module table created, insert some rows
    console.log("First time Module table created, creating some rows.");

    var insert =
      "INSERT INTO modules(module_id, course_id, level, module_name, module_type, module_desc) VALUES(?,?,?,?,?,?)";

    // Computer Science Modules | #um1
    db.run(insert, [
      10,
      50,
      "Level 4",
      "Computer Architecture",
      "This is a compulsory module.",
      "This module will help you to learn the basic concepts behind current computer hardware, software and supporting technologies. As you learn these principles, you will understand how computers work beyond the statements of their high-level language, and this will allow you to write more efficient code.",
    ]);
    db.run(insert, [
      11,
      50,
      "Level 4",
      "Programming",
      "This is a compulsory module.",
      "This module covers basic programming concepts and fundamentals using Java programming language.You will get an overview of programming paradigms and techniques, analysis of problems and design using pseudo-code and flowcharts. You will also learn basic program elements and structure development supported by version-controlled code repositories.",
    ]);
    db.run(insert, [
      12,
      50,
      "Level 4",
      "Maths for Computing",
      "This is a compulsory module.",
      "This module will teach you the basic mathematical concepts and techniques of discrete structures. You will study mathematical logic, sets, relations and functions. The module will develop your skills in expressing problems in mathematical language, using mathematical techniques to find solutions to problems and communicating mathematical ideas clearly and succinctly.",
    ]);
    db.run(insert, [
      13,
      50,
      "Level 4",
      "Algorithms & Data Types",
      "This is a compulsory module.",
      "This module will help you to gain the knowledge and competence to deal with basic data structures and algorithms. You will learn how to specify collections using abstract data types (ADTs) and to implement them using a variety of techniques such as linked lists and trees. You'll also use a range of algorithms, including searching and sorting.",
    ]);
    db.run(insert, [
      14,
      50,
      "Level 4",
      "Information Systems & Data Types",
      "This is a compulsory module.",
      "You will gain the knowledge and skills to design and implement a relational database. It will cover information security and database management issues and an awareness of the central role of relational and other types of databases.",
    ]);
    db.run(insert, [
      15,
      50,
      "Level 4",
      "Data Communications",
      "This is a compulsory module.",
      "This module adopts a top-down approach to data communication networking, beginning at the application layer and working down towards the physical layer. After completing the five-layer network architecture, the module focuses on wireless network and its security.",
    ]);
    db.run(insert, [
      16,
      50,
      "Level 5",
      "Theory of Computation",
      "This is a compulsory module.",
      "You will gain the knowledge and understanding of fundamental concepts of computational theory and computational complexity. You will learn how to examine whether a given problem can be solved computationally.",
    ]);
    db.run(insert, [
      17,
      50,
      "Level 5",
      "Mobile Web App Development",
      "This is a compulsory module.",
      "This module will allow you to gain experience in developing mobile web applications, and have an introduction to the tools, languages and design techniques required for building functional applications. During the module you will gain exposure to a programming language that can support native mobile application development, and you will be introduced to the Model-View-Controller (MVC) software design pattern.",
    ]);
    db.run(insert, [
      18,
      50,
      "Level 5",
      "Artificial Intelligence",
      "This is a compulsory module.",
      "In this module you will gain insights into key techniques within the field of artificial intelligence (AI). Aspects of AI you'll cover include agents, environments and learning as well as techniques such as regression, classification, clustering, reinforcement learning, learning recommendation and decision support systems.",
    ]);

    db.run(insert, [
      19,
      50,
      "Level 5",
      "Functional Programming",
      "This is a compulsory module.",
      "This module provides you with the chance to gain further experience with another programming paradigm. You will learn how to write programs using a functional programming language, Haskell. An example of building an application with Functional Programming following the model Function as a Service (FAAS) is one way of achieving a serverless architecture and is used when building microservices applications of cloud computing.",
    ]);
    db.run(insert, [
      20,
      50,
      "Level 5",
      "Group Research Project",
      "This is a compulsory module.",
      "This module will introduce you to collaboration and research skills, and develop your basic understanding of research approaches. You will gain experience of working collaboratively as part of a project team and have opportunities to adopt different team roles to deliver a solution and project.",
    ]);
    db.run(insert, [
      21,
      50,
      "Level 5",
      "Human-Centred Computing",
      "This is a compulsory module.",
      "This module is about human and technical aspects of interactive computing systems and organisations. In the course of taking this module, you'll consider the interplay between human users, designers, developers and computers. Therefore, its basis is in psychology and human factors as well as in software engineering and interaction design.",
    ]);
    db.run(insert, [
      22,
      50,
      "Level 6",
      "Applied Software Engineering",
      "This is a compulsory module.",
      "Software engineering is concerned with the construction of large software programs. This module will bring together the tools and techniques you covered in earlier modules that deal with software development, drawing on concepts from object-oriented and relational design.",
    ]);
    db.run(insert, [
      23,
      50,
      "Level 6",
      "Machine Learning",
      "This is a compulsory module.",
      "This module familiarises the students with some basic machine learning algorithms and techniques and their applications, as well as general questions related to analysing and handling large data sets. Several software libraries and data sets publicly available will be used to illustrate the application of these algorithms. The emphasis will be thus on machine learning algorithms and applications, with some broad explanation of the underlying principles.",
    ]);
    db.run(insert, [
      24,
      50,
      "Level 6",
      "Project",
      "This is a compulsory module.",
      "You will investigate a topic of interest and prepare a project proposal. You will then present your ideas to the school for approval and once this has been approved, you will begin a detailed literature review of your chosen field. You will choose and follow a suitable development methodology leading to an implementation which you will evaluate.",
    ]);
    db.run(insert, [
      25,
      50,
      "Level 6",
      "Cyber Security",
      "This is one of TWO optional modules you will need to choose.",
      "You will be introduced to fundamental cyber security concepts including Cryptography, Authentication, Authorisation, and Auditing with an emphasis on their application.",
    ]);
    db.run(insert, [
      26,
      50,
      "Level 6",
      "Distributed Systems",
      "This is one of TWO optional modules you will need to choose.",
      "You will cover the fundamental concepts and models, algorithmic and architectural techniques, developmental principles and approaches of modern distributed systems. You will enhance your critical analysis, problem solving and technical skills in distributed systems software design and implementation.",
    ]);
    db.run(insert, [
      27,
      50,
      "Level 6",
      "Database and Analytics",
      "This is one of TWO optional modules you will need to choose.",
      "There has been an explosion in data, much of which is not fully structured, but contains valuable information such as search trends, consumer behaviour and other patterns. This module aims to cover some of the developments in the broad range of Big Data problems. It will give you a good understanding of data structures, software development procedures and the range of analytical tool used to undertake a wide range of standard and custom analyses to provide data solutions to these issues.",
    ]);
    db.run(insert, [
      28,
      50,
      "Level 6",
      "IT Consultancy",
      "This is one of TWO optional modules you will need to choose.",
      "This module covers the principles of IT management consultancy and its practices and techniques. You will learn about business organisation, business models, introduction to management consultancy, organisation diagnosis and solution development, and management consulting process approach and skills",
    ]);

    // Civil Engineering Modules | #um2
    db.run(insert, [
      10,
      60,
      "Level 4",
      "Structural Mechanics",
      "This is a compulsory module.",
      "This module covers a core subject of civil and structural engineering courses. It will help you to understand the fundamental principles that determine how structures are analysed. You will learn to analyse the forces and stresses that normally act on the parts of structures.",
    ]);
    db.run(insert, [
      11,
      60,
      "Level 4",
      "Construction Materials",
      "This is a compulsory module.",
      "This module will give you an overview of the principal materials used by the construction industry. By studying various materials' engineering performance characteristics, their impact on users and their sustainability factors, you will learn how the most appropriate materials are chosen.",
    ]);
    db.run(insert, [
      12,
      60,
      "Level 4",
      "Land Surveying for Civil Engineering 1",
      "This is a compulsory module.",
      "On this module, you will gain theoretical and practical experience on land surveying exercises. Regular fieldwork practice in this module will enable you to produce a portfolio of land surveying work that will demonstrate their skills and personal development towards a completed knowledge on working with two main land surveying equipment including level and theodolite instruments.",
    ]);
    db.run(insert, [
      13,
      60,
      "Level 4",
      "Land Surveying for Civil Engineering 2",
      "This is a compulsory module.",
      "On this module, you will gain more advanced theoretical and practical skills to improve your technical knowledge and understanding about the use of spatial information in design and construction projects. It would enable you to develop theoretical knowledge and practical skills necessary to use surveying equipment used for setting-out on a construction project through theodolite and total station.",
    ]);
    db.run(insert, [
      14,
      60,
      "Level 4",
      "Mathematics for Civil Engineers 1",
      "This is a compulsory module.",
      "On this module you will gain the mathematical background you need to study engineering. You will work with algebra and trigonometry principles, specifically matrix algebra, the essential principles and applications of differential calculus and the use of associated functions. In addition, you will learn how to apply mathematics to engineering problems involving vectors and statistics.",
    ]);
    db.run(insert, [
      15,
      60,
      "Level 4",
      "Mathematics for Civil Engineers 2",
      "This is a compulsory module.",
      "On this module you will study the mathematical background needed for undergraduate engineering studies. Topics include integration, separation of variables to solve first order differential equations, applications of calculus in areas such as maxima and minima, velocity and acceleration, centroids, volumes and solids of revolution, root mean square and average values. An introduction to statistics and probability will cover studies of measures of central tendency, mean, median and mode, measures of dispersion (standard deviation and variance), variables and graphs, elementary probability theory, binomial and normal distribution, elementary sampling theory and curve fitting.",
    ]);
    db.run(insert, [
      16,
      60,
      "Level 5",
      "CAD for Civil Engineering",
      "This is a compulsory module.",
      "On this module, you will gain the practical experience and skills for drawing of civil engineering maps by using sketches and the most relevant computer software tool known as CAD. This will enable you to produce executive plans used for various sections of construction such as structure and architecture.",
    ]);

    db.run(insert, [
      17,
      60,
      "Level 5",
      "Civil Engineering Construction",
      "This is a compulsory module.",
      "The module aims to give you a clear appreciation of the physical reality of civil and environmental engineering, so that your designs and proposals can be constructed as efficiently and safely as possible.",
    ]);
    db.run(insert, [
      18,
      60,
      "Level 5",
      "Structural Analysis",
      "This is a compulsory module.",
      "On this module, you will gain the understanding of fluid in the civil engineering structures such as pipelines, reservoirs, rivers and channels. This module will improve your technical knowledge and analytical skills to calculate forces and pressures in hydraulic structures based on a few well-known relations such as Archimedes Principle and energy equations. You will be able to calculate hydrostatic forces on hydraulic structures such as weirs, dams and calculate pressure and velocity of venturi meter and orifice.",
    ]);
    db.run(insert, [
      19,
      60,
      "Level 5",
      "Structural Design",
      "This is a compulsory module.",
      "This module enables you to enhance your knowledge of structural analysis and structural design to determine loads and material properties on structural elements. It teaches you how to apply hand calculation methods for the analysis and distribution of loads. You will be able to apply the code requirement for design of structural elements and develop skills in modelling engineering problems.",
    ]);
    db.run(insert, [
      20,
      60,
      "Level 5",
      "Project Management",
      "This is a compulsory module.",
      "This module will introduce you to collaboration and research skills, and develop your basic understanding of research approaches. You will gain experience of working collaboratively as part of a project team and have opportunities to adopt different team roles to deliver a solution and project.",
    ]);
    db.run(insert, [
      21,
      60,
      "Level 5",
      "Fluid Mechanics",
      "This is a compulsory module.",
      "On this module, you will gain the understanding of fluid in the civil engineering structures such as pipelines, reservoirs, rivers and channels. This module will improve your technical knowledge and analytical skills to calculate forces and pressures in hydraulic structures based on a few well-known relations such as Archimedes Principle and energy equations. You will be able to calculate hydrostatic forces on hydraulic structures such as weirs, dams and calculate pressure and velocity of venturi meter and orifice.",
    ]);
    db.run(insert, [
      22,
      60,
      "Level 6",
      "Soil Mechanics and Geology",
      "This is a compulsory module.",
      "On this module your learning will focus on the significance and influence of geological history on the formation and behaviour of soils. It should also enhance your understanding of the engineering properties and behaviour of soil as an engineering material.",
    ]);
    db.run(insert, [
      23,
      60,
      "Level 6",
      "Advanced Engineering Mathematics",
      "This is a compulsory module.",
      "On this module, you will extend your knowledge of the fundamental mathematical methods used in engineering. The module includes study of Laplace transforms, Fourier analysis, ordinary differential equations, introduction to partial differential equations, and complex variables. In addition, the module will develop your skills in expressing problems in mathematical language, using mathematical techniques to find solutions to problems and communicating mathematical ideas clearly and succinctly.",
    ]);
    db.run(insert, [
      24,
      60,
      "Level 6",
      "Structural Design Project",
      "This is a compulsory module.",
      "This module will give you the chance to apply all that you have learnt about analysis and design throughout the first and second years to a practical project.",
    ]);
    db.run(insert, [
      25,
      60,
      "Level 6",
      "Geotechnical Design",
      "This is a compulsory module.",
      "This module will teach you how to analyse the variables involved in designing soil structures. You will also learn how to evaluate the interaction of soils with structures placed in or on soils. Furthermore, you will be introduced to the use of Eurocode 7 for basic geotechnical design.",
    ]);
    db.run(insert, [
      26,
      60,
      "Level 6",
      "Transport Infrastructure Engineering",
      "This is a compulsory module.",
      "This module will help you to develop a fundamental knowledge and understanding of infrastructure engineering design. It will cover the main instances of highways design in terms of geometric features, road materials and pavements. You will also explore railway and airport engineering design elements.",
    ]);
    db.run(insert, [
      27,
      60,
      "Level 6",
      "Hydraulics",
      "This is a compulsory module.",
      "The aim of this module is to develop your technical knowledge and understanding of the concepts of hydraulics and provide you with an overview of the analytical skills needed to design open channels flow and hydraulic structures. You also learn concepts and applications of engineering hydrology and hydrological processes in civil engineering projects. Flood control and management strategies in catchment areas are delivered and various SuDS techniques and their design to mitigate flood volume and improve water quality of runoff are analysed.",
    ]);
    db.run(insert, [
      28,
      60,
      "Level 6",
      "Project Dissertation (Civil Engineering)",
      "This is a compulsory module.",
      "On this module, you will gain the experience of undertaking an independent research work in a civil engineering field. This in turn will enable you to in-depth investigate a subject you have interest. The module also provides you with an opportunity to expand their intellectual and technical skills. You will be supervised by a member of staff in Civil Engineering course to develop and synthesise research ideas and conceptual designs in civil engineering projects and understand the philosophy of sustainable design and construction in civil engineering.",
    ]);

    // BSc (Hons) Business Studies Modules | #um3
    db.run(insert, [
      10,
      70,
      "Level 4",
      "Professional Skills for Business",
      "This is a compulsory module.",
      "In this module you will develop your professional skills to help you to effectively use resources, develop critical thinking and evaluate information.",
    ]);
    db.run(insert, [
      11,
      70,
      "Level 4",
      "Introduction to Human Resource Management (HRM)",
      "This is a compulsory module.",
      "In this module you will cover the different approaches that can be taken to the management of human resources in a variety of business settings. You will discuss the nature of human resource management. Functional aspects of managing people will be used to illustrate how economic, legal and technical factors can influence managerial behaviour.",
    ]);
    db.run(insert, [
      12,
      70,
      "Level 4",
      "Researching Business Data",
      "This is a compulsory module.",
      "During this module you will study the collection, analysis and interpretation of business data, helping you learn how to make sense of numbers in order to arrive at meaningful conclusions and informed decisions. You will be provided with a range of research and analytical methods for gathering primary and published data, summarising data, measuring change and measuring association.",
    ]);
    db.run(insert, [
      13,
      70,
      "Level 4",
      "Business Accounting",
      "This is a compulsory module.",
      "In this module you will look at business accounting, which is broken down into two areas; financial accounting and management accounting. Financial accounting is concerned with recording the day to day activities of a business and producing periodic summaries. Management accounting covers the supply of accounting information to internal management to plan and control business activities. During this module you will produce final accounts for an organisation and interpret them. At this foundation stage you will also cover areas such as cost classification, break even analysis and preparing cash budgets.",
    ]);
    db.run(insert, [
      14,
      70,
      "Level 4",
      "Principles of Marketing",
      "This is a compulsory module.",
      "On this module you'll study the products that customers want and ways to inform customers of product benefits and convenient locations for sale. Through this you will come to understand the value of keeping customers happy and of doing so more effectively than the competition.",
    ]);
    db.run(insert, [
      15,
      70,
      "Level 4",
      "Information, Communications and Technology (ICT)",
      "This is a compulsory module.",
      "During this module you will be introduced to information systems and technology that can help businesses to gain competitive advantage by collecting, organising and using information in an efficient way. You will also have the opportunity to develop your skills and knowledge of commonly used software applications.",
    ]);
    db.run(insert, [
      16,
      70,
      "Level 5",
      "Business Economics",
      "This is a compulsory module.",
      "On this module you will learn how to develop greater understanding and awareness of how a business operates, particularly from an economic perspective. You will also develop the ability to use a range of skills to diagnose and solve problems.",
    ]);

    db.run(insert, [
      17,
      70,
      "Level 5",
      "Enterprise and Business Development",
      "This is a compulsory module.",
      "You will evaluate the skills and approaches the entrepreneur brings to the process of value creation and the factors that encourage the move to entrepreneurship. You will understand how to locate, analyse and evaluate sources of information related to the development of a business plan which demonstrates the commercial viability of a proposed business start-up.",
    ]);
    db.run(insert, [
      18,
      70,
      "Level 5",
      "Managing Business Operations",
      "This is a compulsory module.",
      "On this practical module you will learn about the processes that produce or deliver goods and services. You will explore issues such as designing processes, making decisions about location, layout and capacity management, managing the supply chain, and managing quality.",
    ]);
    db.run(insert, [
      19,
      70,
      "Level 5",
      "Project Management",
      "This is a compulsory module.",
      "This module offers opportunity to examine the approaches, practices, contributions and skills involved in project management. Responsibilities for projects involve ability to analyse business needs, design solutions, plan, test, and co-ordinate implementation, being aware of the human factor requirements and the use of computer-based information system tools.",
    ]);
    db.run(insert, [
      20,
      70,
      "Level 5",
      "Business Ethics",
      "This is a compulsory module.",
      "During this module you will deepen your understanding of current debates on the conduct of business in a challenging global environment. Using different ethical theories, you will analyse the implications of creating and sustaining an ethical approach to entrepreneurial activities, as well as approaches to the management of business ethics.",
    ]);
    db.run(insert, [
      21,
      70,
      "Level 5",
      "Organisational Behaviour",
      "This is a compulsory module.",
      "On this module you will gain critical knowledge of how organisations work, and how individuals and groups affect organisational success or failure. You will explore the emerging workplace realities of self-leadership, networks, knowledge management and virtual teams, as well as organisational learning and working within culturally diverse work-place communities.",
    ]);
    db.run(insert, [
      22,
      70,
      "Level 6",
      "Strategic Management",
      "This is a compulsory module.",
      "This module will build on the concepts and approaches to business policy developed at level 5. You will study the integrated nature of strategic management decisions and use case studies to show how strategic management applies to a range of business and not-for-profit organisations.",
    ]);
    db.run(insert, [
      23,
      70,
      "Level 6",
      "International Trade, Finance and Investment",
      "This is a compulsory module.",
      "During this module you will develop an in-depth understanding of the World Trade Organisation (WTO), trade agreements and trade investment.",
    ]);
    db.run(insert, [
      24,
      70,
      "Level 6",
      "Business Research Project (year-long)",
      "This is a compulsory module.",
      "On this module you will critically examine the major issues faced by companies engaged in identifying and developing their overseas operations, including economics, politics, finance, marketing, human resource management and operations management. You will also explore how the international economic and political environment influences company policies.",
    ]);
    db.run(insert, [
      25,
      70,
      "Level 6",
      "International Business",
      "This is a compulsory module.",
      "On this module you will critically examine the major issues faced by companies engaged in identifying and developing their overseas operations, including economics, politics, finance, marketing, human resource management and operations management. You will also explore how the international economic and political environment influences company policies.",
    ]);
    db.run(insert, [
      26,
      70,
      "Level 6",
      "Managing Small and Medium Sized Enterprises",
      "This is a compulsory module.",
      "This module will help you to gain an insight into the nature of SMEs and the people who run them. You will engage in a consultancy-type project in which you will evaluate a small business and develop a growth or development strategy for them.",
    ]);
    db.run(insert, [
      27,
      70,
      "Level 6",
      "Innovation and Knowledge Management",
      "This is an optional module.",
      "This module is designed to give students an understanding of the role of knowledge assets as a key to corporate success and particularly in relation to innovation. It examines how organisations create, utilise and exploit knowledge in the globalising knowledge-based economy, and the wider social and economic factors affecting knowledge creation and transfer.",
    ]);
    db.run(insert, [
      28,
      70,
      "Level 6",
      "International Marketing",
      "This is a compulsory module.",
      "This module addresses critical understanding and ability in assessing the effectiveness of international marketing theory and practice. It targets principles and issues that drive markets world-wide. Students will develop insight and investigative ability concerning issues facing a business that needs to research markets and develop and implement market strategies, techniques and methods across a range of international sectors.",
    ]);

    // BSc (Hons) Biomedical Science Modules | #um4
    db.run(insert, [
      10,
      80,
      "Level 4",
      "Molecules and Cells",
      "This module, shared with students on other biomedical sciences degrees, introduces you to the basic structure, composition and function of cells. This includes core concepts relating to the organisation and specialisation of eukaryotes, prokaryotes, viruses, and cellular components.",
    ]);
    db.run(insert, [
      11,
      80,
      "Level 4",
      "The Human Body: Principles of Anatomy and Physiology",
      "This is a compulsory module.",
      "This module aims to comprehensively introduce the students to the anatomy and physiology of the human body and to provide the background knowledge required to understand disease processes.",
    ]);
    db.run(insert, [
      12,
      80,
      "Level 4",
      "Medical Microbiology ",
      "This is a compulsory module.",
      "This module, which is taught across other biomedical sciences courses, explains the crucial role microbes play in maintaining the natural environment. It will teach you to use appropriate techniques for assessing microbial diversity. You will examine the role of microbes in disease processes and how the immune system protects against infections.",
    ]);
    db.run(insert, [
      13,
      80,
      "Level 4",
      "Fundamentals Of Biochemistry",
      "This is a compulsory module.",
      "This module, which is taught across other biomedical sciences courses, explains the crucial role microbes play in maintaining the natural environment. It will teach you to use appropriate techniques for assessing microbial diversity. You will examine the role of microbes in disease processes and how the immune system protects against infections.",
    ]);
    db.run(insert, [
      14,
      80,
      "Level 4",
      "Genetics Of Disease",
      "This is a compulsory module.",
      "This module, taught on other biomedical courses, provides knowledge and understanding of the structure of nucleic acids (DNA and RNA) and how these molecules encode the properties of cells.",
    ]);
    db.run(insert, [
      15,
      80,
      "Level 4",
      "Molecular Biology",
      "This is a compulsory module.",
      "On this module you will learn to integrate theoretical concepts and their laboratory application. You will consider the role of nucleic acids in directing protein synthesis and human phenotypic characteristics, as well as genetic fingerprinting and DNA analysis.",
    ]);
    db.run(insert, [
      16,
      80,
      "Level 5",
      "Principles of Biological Chemistry",
      "This is a compulsory module.",
      "You will join others studying biomedical science courses to learn about chemical processes required to understand pharmacological principles. These include basic thermodynamic principles and biological energetics, principles of chemical reaction rates to quantify enzymatic reactions and pharmacokinetics.",
    ]);

    db.run(insert, [
      17,
      80,
      "Level 5",
      "Essential Skills for Biological Sciences",
      "This is a compulsory module.",
      "If you wish to improve your communication skills, both spoken and written, this module is for you. This module is taught on other biomedical science courses and focuses on listening, questioning and respecting others, as well as contributing to discussions, preparing and giving presentations and thinking creatively to develop appropriate solutions.",
    ]);
    db.run(insert, [
      18,
      80,
      "Level 5",
      "Innovation in Biology",
      "This is a compulsory module.",
      "You will be able to explore themes which drive biological research in UK and globally. You will join other biomedical science students in developing study skills to investigate research topics and communicate your findings and views on them.",
    ]);
    db.run(insert, [
      19,
      80,
      "Level 5",
      "Skills: Practical Methods",
      "This is a compulsory module.",
      "This module, taught on other biomedical science courses, introduces you to a range of practical skills and analytical techniques that are applicable to modern biology. You are equipped to understand the relevance of experimental skills across all biological disciplines to develop your research skills and understand the relationship between quantitative skills and key skills.",
    ]);
    db.run(insert, [
      20,
      80,
      "Level 5",
      "Data Analysis",
      "This is a compulsory module.",
      "This module teaches students to develop an awareness of data analysis, presentation and interpretation.",
    ]);
    db.run(insert, [
      21,
      80,
      "Level 5",
      "Genetics, Genomics and Human Health",
      "This is a compulsory module.",
      "This module provides students with a deeper understanding of molecular and cellular aspects of microbial genetics, new tools of genetic engineering, present day genomic technologies and the post genomic era.",
    ]);
    db.run(insert, [
      22,
      80,
      "Level 6",
      "Final Year Project",
      "This is a compulsory module.",
      "The module aims to provide the students with experience of in-depth and independent project work. FYP topics are related to staff expertise and include a broad range of both non-laboratory and laboratory-based projects.",
    ]);
    db.run(insert, [
      23,
      80,
      "Level 6",
      "Clinical Immunology and Haematology",
      "This is a compulsory module.",
      "In this module you will gain knowledge of the main components of the mammalian immune system and the role of the blood cells. You will examine the blood group antigens and the blood components for transfusion as well as diseases associated with blood cells.",
    ]);
    db.run(insert, [
      24,
      80,
      "Level 6",
      "Applied Molecular Medicine",
      "This is a compulsory module.",
      "You will learn about the use of molecular and computational approaches in the study and treatment of human disease. The module will demonstrate how regenerative medicine and the extracellular matrix defines specific disease processes and their treatments. The use of stem cell therapeutics will be examined.",
    ]);
    db.run(insert, [
      25,
      80,
      "Level 6",
      "Fundamentals of Genes and Cancer",
      "This is an optional module.",
      "You will learn about the way cancer occurs at molecular and cellular levels, the role of oncogenes and tumour suppressor genes in the development of human cancer. You will be taught the hallmarks of cancer and the therapeutic strategies and limitations. Finally you will learn about technologies such as bio-informatics shaping cancer progression. You will be able to critically evaluate and interpret published literature in the field of cancer biology.",
    ]);
    db.run(insert, [
      26,
      80,
      "Level 6",
      "Current Perspectives in Bioscience",
      "This is an optional module.",
      "The module aims to enable you to take a critical look at science, its past, present and future – how it relates to society, how it is perceived by scientists and non-scientists, and how best to approach some of the problems confronting applied science in the current era.",
    ]);
    db.run(insert, [
      27,
      80,
      "Level 6",
      "The Biology and Treatment of Cancer",
      "This is an optional module.",
      "This module aims to provide a detailed understanding of cancer, including the genes involved in carcinogenesis, epidemiology, diagnosis and treatment.",
    ]);
    db.run(insert, [
      28,
      80,
      "Level 6",
      "Endocrine Disorders",
      "This is an optional module.",
      "This module aims to study a selected range of endocrine disease processes, including origins and treatment, at the biochemical and molecular level using a case-based problem solving approach.",
    ]);

    // MSc Artificial Intelligence Modules | #pm1
    db.run(insert, [
      10,
      90,
      "Year 1",
      "Artificial Intelligence",
      "This is a compulsory module.",
      "This module will introduce you to the fundamentals of AI with a focus on the structures, resources and processes that together make up an intelligent agent. The techniques, models and tools that can be used to simulate the “intelligent” processes. The skills and capabilities necessary to critically review AI literature and/or products, to synthesise ideas, to systematically solve AI problems and to communicate effectively. Ontop of all this, you will gain the knowledge and skills required to understand the fundamentals of AI, to solve real world problem more “intelligently”, and ultimately to build intelligent artefacts. Currently popular approaches include statistical methods, computational intelligence and traditional symbolic AI. There are a large number of tools used in AI, including mathematical optimization, logic, probability, and many others. AI has become an essential part of the technology industry, providing the heavy lifting for many of the most difficult problems in computer science.",
    ]);
    db.run(insert, [
      11,
      90,
      "Year 1",
      "Machine Learning",
      "This is a compulsory module.",
      "Machine learning is an application of artificial intelligence that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. This module familiarises the students with some basic machine learning algorithms and techniques and their applications, as well as general questions related to analysing and handling large data sets. Several software libraries and data sets publicly available will be used to illustrate the application of these algorithms. The emphasis will be thus on machine learning algorithms and applications, with some broad explanation of the underlying principles.",
    ]);
    db.run(insert, [
      12,
      90,
      "Year 1",
      "Deep Learning",
      "This is a compulsory module.",
      "This module provides an introduction to a machine learning You will learn the fundamentals, models, algorithms, implementation and recent progress of deep learning, and obtain hands-on experience on training neural networks. You will start with exploring artificial neural networks (ANNs) and its operation, gradually moving onto exploring the approaches to develop large ANNs with many layers, also called deep neural networks (DNNs). This is followed by the understanding of how deep learning works and approaches to train the networks covering the technical know-how such as vanishing/exploding gradient problems, activation function and training optimiser, which is often known as “deep learning”.",
    ]);
    db.run(insert, [
      13,
      90,
      "Year 1",
      "Responsible Ai",
      "This is a compulsory module.",
      "The module will enable you to focus on current ethical issues in AI and undertake an investigation into how to resolve them in future. You will learn current framework in place for development of ethical AI solutions and will be asked to apply those principles. You will be able to specialise in societal, legal and ethical impact of AI and learn skills required to design these systems.",
    ]);
    db.run(insert, [
      14,
      90,
      "Year 1",
      "Research Methods",
      "This is a compulsory module.",
      "This module will ensure that you are fully prepared to undertake applied research at master’s level. You will be able to pursue your research ideas and back them up with appropriate data and statistics. The assessment of the module will prepare you for the delivery of a dissertation proposal.",
    ]);
    db.run(insert, [
      15,
      90,
      "Year 1",
      "Dissertation",
      "This is a compulsory module.",
      "The dissertation aims to develop and demonstrate advanced knowledge and skills in an agreed topic area related to the studied master's programme. As preparation for the dissertation, you will be given grounding in both quantitative and qualitative methods of data collection and analysis appropriate to conducting empirical and/or experimental research.",
    ]);
    db.run(insert, [
      16,
      90,
      "Year 1",
      "Big Data Analytics",
      "This is an optional module.",
      "Big data is a fast-growing field and skills in the area are some of the most in demand today, and big data technologies covers a range of architectures, frameworks and algorithms designed to handle very large, often highly complex datasets. The module will enable the students to understand big data, its applications and associated issues for storing, managing, processing and analysing massive amounts datasets, as well as get familiar with big data software tools and frameworks underpinning big data analytics. Students will also acquire the knowledge of statistical, mathematical and machine learning techniques, and develop the ability to design and implement big data analytics modelling and applications to real-world problems.",
    ]);

    db.run(insert, [
      17,
      90,
      "Year 1",
      "Computer Vision",
      "This is an optional module.",
      "The module covers computational algorithms for learning from data, data-driven decision making and complex problem solving. This module will look at the underlying principles of machine learning, the advantages and limitations of the various approaches and effective ways of applying them. Machine learning is the science of getting computers to act without being explicitly programmed. In the past decade, machine learning has given us self-driving cars, practical speech recognition, effective web search, and a vastly improved understanding of the human genome. In this module, you will learn about the most effective machine learning techniques, and gain practice implementing them and getting them to work. More importantly, you will gain the practical know-how needed apply these techniques to new problems.",
    ]);
    db.run(insert, [
      18,
      90,
      "Year 1",
      "Employability Skills and Employment",
      "This is an optional module.",
      "This module will give you an opportunity to prepare for employment. In addition to learning about the industry requirements for a professional career, you will develop study skills at postgraduate level to prepare you for the rest of your course.",
    ]);
    db.run(insert, [
      19,
      90,
      "Year 1",
      "Learning and Professional Development",
      "This is an optional module.",
      "This preparatory module is for all students enrolling on master's courses. On it, you will study Learning and Professional Development (LPD), which is designed to orientate new master's students, and especially international students, to master's-level study.",
    ]);
    db.run(insert, [
      20,
      90,
      "Year 1",
      "Quantitative Data Analysis",
      "This is an optional module.",
      "The aim of this module is to develop knowledge and skills of the quantitative data analysis methods that underpin data science. Content covers a practical understanding of core statistical methods in data science application and research, such as bivariate and multivariate methods, regression and graphical models. A focus is also placed on learning to evaluate the strengths and weaknesses of methods alongside an understanding of how and when to use or combine methods.",
    ]);
    db.run(insert, [
      21,
      90,
      "Year 1",
      "Genetics, Genomics and Human Health",
      "This is an optional module.",
      "The aim of this module is to provide an introduction to data management and exploration. An overview of current industry standard processes to modern data analysis will be presented, and you will learn to design and plan a predictive analytics project. Basic concepts of data management and retrieval will be discussed. Well established strategies and approaches to data understanding, data preparation and cleaning will be presented.",
    ]);

    // MSc Health Informatics Course  | #pm2
    db.run(insert, [
      10,
      100,
      "Year 1",
      "Postgraduate and Professional Study Skills",
      "This is a compulsory module.",
      "On this module you'll develop your knowledge and skills for your studies in a workplace context. You'll learn basic IT skills and project management expertise within academic and professional roles. You'll also develop your problem-solving techniques and understand how to search for knowledge on a given topic.",
    ]);
    db.run(insert, [
      11,
      100,
      "Year 1",
      "IT for Health Research",
      "This is a compulsory module.",
      "The aim of this is to allow you to make effective use of information and associated technology. You'll learn the significance of technology within the NHS and international health care contexts and how to apply computer concepts for the health care professional.",
    ]);
    db.run(insert, [
      12,
      100,
      "Year 1",
      "Quantitative Methodology for Health Research",
      "This is a compulsory module.",
      "TThis module will develop your ability to carry out research in health informatics. You will be able to discuss the concept of scientific knowledge and concept information, discuss a variety of research methods, select and justify an appropriate choice of research method for a research question, write a research proposal and discuss a research project.",
    ]);
    db.run(insert, [
      13,
      100,
      "Year 1",
      "Data Management in Healthcare",
      "This is a compulsory module.",
      "Data is revolutionising healthcare. The benefits of data ñ when correctly used ñ extend to patients, providers and board members, and the technology can make centralised patient management a reality. The aim of this module is to give you knowledge and hands-on experience of developments in the broad range of data-driven healthcare.",
    ]);
    db.run(insert, [
      14,
      100,
      "Year 1",
      "Research Methods",
      "This is a compulsory module.",
      "This module will ensure that you are fully prepared to undertake applied research at master’s level. You will be able to pursue your research ideas and back them up with appropriate data and statistics. The assessment of the module will prepare you for the delivery of a dissertation proposal.",
    ]);
    db.run(insert, [
      15,
      100,
      "Year 1",
      "Dissertation",
      "This is a compulsory module.",
      "The dissertation aims to develop and demonstrate advanced knowledge and skills in an agreed topic area related to the studied master's programme. As preparation for the dissertation, you will be given grounding in both quantitative and qualitative methods of data collection and analysis appropriate to conducting empirical and/or experimental research.",
    ]);
    db.run(insert, [
      16,
      100,
      "Year 1",
      "Informatics for Health and Social Care",
      "This is an optional module.",
      "You'll consider the past, present, and future of informatics within health care. After completing this module you'll understand primary and community health care informatics from the quality and information systems literature. You'll also critically appraise current events in the light of political, legislative, and cultural influences as well as the role of clinical coding within primary and community health care.",
    ]);

    db.run(insert, [
      17,
      100,
      "Year 1",
      "Information & Communication Technology for Care",
      "This is an optional module.",
      "In this module you will evaluate technologies and their constraints within the primary and community health care. You will examine the electronic health records, and have the understanding to be able to evaluate the legal and ethical implications of new technology.",
    ]);
    db.run(insert, [
      18,
      100,
      "Year 1",
      "Quality Assurance for Health Care",
      "This is an optional module.",
      "This module will give you an appreciation of quality assurance and the ability to apply it within the NHS. You will evaluate initiatives in terms of your ability to deliver quality assurance, understand the information and constraints upon quality management within the health care system and appraise the development of clinical governance.",
    ]);
    db.run(insert, [
      19,
      100,
      "Year 1",
      "Knowledge Management",
      "This is an optional module.",
      "In this module you will be exposed to the concepts and fundamental principles of knowledge management. You will explore the methods, techniques and circumstances in which knowledge management principles can be applied. It will provide you with a range of views on the social, behavioural and organisational conditions associated with bioinformatics knowledge and data management. It will also introduce you to a range of tools and techniques to support the curation, management and dissemination of knowledge including knowledge representation, ontologies, data mining and knowledge storage.",
    ]);
    db.run(insert, [
      20,
      100,
      "Year 1",
      "Consultancy and Technological Innovation",
      "This is an optional module.",
      "On this module you will explore the skills needed to understand, and work in, the complex multi-sourced environment that supports business change. Focusing on the strategic management of leading-edge technology, you will examine the organisational structure of IT, including systems integrators and consultancy, and gain an overview of the IT consulting world, its principles and practice.",
    ]);
    db.run(insert, [
      21,
      100,
      "Year 1",
      "Learning and Professional Development",
      "This is an optional module.",
      "This preparatory module is for all students enrolling on master's courses. On it, you will study Learning and Professional Development (LPD), which is designed to orientate new master's students, and especially international students, to master's-level study.",
    ]);
    // MSc International Business Management |  #pm3
    db.run(insert, [
      10,
      110,
      "Year 1",
      "Global Marketing and Digital Business",
      "This is a compulsory module.",
      "The speed with which global marketers have to adjust their strategies is increasing significantly. Everything gets more digital and mobile and technology innovations are happening faster and faster. Driven by digital transformation and globalisation, competitive pressures continue to increase for all size of businesses. This requires marketers always keep track of new online marketing channels and trends to stay competitive. This module helps you to gain proficiency in digital marketing in a global environment. It enables you to make informed decision on a range of marketing tools including content management, social media, email marketing/marketing automation, campaign management, analytics and Search Engine optimisation; to plan, implement and measure the impact of digital strategies suited to today’s global customers and to find meaning in global user behaviour.",
    ]);
    db.run(insert, [
      11,
      110,
      "Year 1",
      "Business Intelligence",
      "This is a compulsory module.",
      "This module will introduce you to information systems and the essentials of information and knowledge management. It will help you to better understand how managers use these essentials to assess risk, evaluate competing strategies and to support effective resource allocation. You will also cover ideas of how technologies help to inform decision makers.",
    ]);
    db.run(insert, [
      12,
      110,
      "Year 1",
      "New Venture Development",
      "This is a compulsory module.",
      "On this module you will explore issues such as the entrepreneurial environment and factors that contribute to the birth, survival or death, and growth of new ventures. You will learn about the value of creativity and innovation in the small business sector. You'll also develop practical entrepreneurial skills and the ability to create and present a feasible business plan.",
    ]);
    db.run(insert, [
      13,
      110,
      "Year 1",
      "Consultancy in Practice",
      "This is a compulsory module.",
      "This module will help you develop a practical understanding of business consultancy from the perspective of both the client and the consultant. You will work on a consultancy project to develop the personal, planning and problem-solving skills you need to perform the consultancy task. You will learn how to apply key consultancy tools and techniques to plan, monitor and manage projects, evaluate briefs and assess consultancy proposals.",
    ]);
    db.run(insert, [
      14,
      110,
      "Year 1",
      "International Business Environment and Trade",
      "This is a compulsory module.",
      "Business is global, so leading business managers need to know about the historical, economical and legal frame work within which international business operates. This module will build your knowledge and understanding of the political, economic and business considerations that international commercial and carriage of goods entail. You will gain a critical awareness of the complexities of operating in a global environment.",
    ]);
    db.run(insert, [
      15,
      110,
      "Year 1",
      "Cross Cultural Management and Leadership",
      "This is a compulsory module.",
      "This module will help you to understand the challenges and opportunities that managers face when working across or within different cultures. You will develop a critical approach to studying cross-cultural management and leadership, recognise the complexity of managing across different cultures and contexts, and understand contemporary perspectives on leadership, management and development.",
    ]);
    db.run(insert, [
      16,
      110,
      "Year 1",
      "Corporate Responsibility",
      "This is an optional module.",
      "In this module you will develop an understanding of the nature of business ethics, corporate governance and social responsibility. You will look at how organisations achieve effective corporate performance by managing values and beliefs, which will help you to formulate and apply norms and codes of ethical behaviour to operations and conduct.",
    ]);

    db.run(insert, [
      17,
      110,
      "Year 1",
      "Corporate Financial Management",
      "This is an optional module.",
      "This module will give you a thorough grounding in the theories and techniques that underpin corporate finance. The rest of the course will build on what you learn here. You will focus on advanced issues in finance, including money market securities, bond markets and the yield curve, share markets, foreign exchange, derivatives, portfolio theory, and efficient markets.",
    ]);
    db.run(insert, [
      18,
      110,
      "Year 1",
      "Contemporary Marketing Challenges",
      "This is an optional module.",
      "This module aims to create a productive discourse on contemporary marketing challenges, future digital marketing trends and their impact on marketing, industry and consumers. The module will also investigate the importance of thought leadership approaches to ethics, sustainability and technology in the fields of digital marketing and globalisation.",
    ]);
    db.run(insert, [
      19,
      110,
      "Year 1",
      "International Project Management and Practice",
      "This is an optional module.",
      "This module introduces the concepts of strategic planning and project management with an emphasis on business development related tasks. The initial focus is on long-term business planning, as well as managing individual projects, using established strategic and project management tools and techniques. The module looks at managing complex multiple projects in close alignment with an organisation's business strategy. The module will enhance the management of business activities both on strategic and operational level in order to create and sustain competitive advantage at the international level.",
    ]);
    db.run(insert, [
      20,
      110,
      "Year 1",
      "Design Thinking for International Business",
      "This is an optional module.",
      "Design thinking is an important skillset for professionals working in entrepreneurial as well as in established businesses. International businesses such as Apple, Google and Pepsi, to mention just a few, are increasingly using design thinking to tackle their business challenges. This module provides students of international business with an opportunity to gain first-hand experience of design thinking. Students will work in teams to re-design a product or service that falls short of its customers' expectations.",
    ]);
    db.run(insert, [
      21,
      110,
      "Year 1",
      "Employment Law",
      "This is an optional module.",
      "During this module you will learn how to explain and advise on key principles underpinning UK and EU employment law. You will focus on the formation and termination of the employment contract, unfair dismissal, equality legislation, collective employment law, and the operation of the employment tribunal system.",
    ]);

    // MA Creative Media Entrepreneurship Courses |  #pm4
    db.run(insert, [
      10,
      120,
      "Year 1",
      "Professional Business",
      "This is a compulsory module.",
      "On this module you will be offered an understanding of the media and creative industry terrain, including a detailed insight into a range of contemporary concepts and practices. The module covers media economics, intellectual property, copyright, budgeting, scheduling, contracts, back-end revenues and legal frameworks.",
    ]);
    db.run(insert, [
      11,
      120,
      "Year 1",
      "Creative 1: Working Ideas",
      "This is a compulsory module.",
      "You will extend your understanding by looking at how the principles in the first Professional Business module are applied to creative work. You'll gain an understanding of the role of a media or creative professional, how external requirements impact on output and how to make use of market research and analytics.",
    ]);
    db.run(insert, [
      12,
      120,
      "Year 1",
      "Professional Business 2: Implementing Plans",
      "This is a compulsory module.",
      "On this module you will make the critical move from theory to practice. Topics covered include identifying USPs, understanding and engaging with marketing including building audiences, advanced IP, the impact of regulation and competition law and investment growth strategies.",
    ]);
    db.run(insert, [
      13,
      120,
      "Year 1",
      "Creative 2: USP, Commissioning and Delivery, plus preliminary project work",
      "This is a compulsory module.",
      "You will be taught how to align the economic and business principles you learnt in the Professional Business 2 module with professional levels of creative output. You'll deepen your understanding of USPs for your product, service or business plan, learn how to work collaboratively and develop your pitching and presentation skills.",
    ]);
    db.run(insert, [
      14,
      120,
      "Year 1",
      "Project for MA Creative Media Entrepreneurship",
      "This is a compulsory module.",
      "On this module you'll be expected to utilise a strong understanding, knowledge and critical awareness of all aspects of media and creative industry practice by completing your final project. You'll have the opportunity to demonstrate that you have acquired a range of advanced skills that will foster lifetime learning through professional practice in an ever-changing industry.",
    ]);
    db.run(insert, [
      15,
      120,
      "Year 1",
      "Media Design & Production",
      "This is a compulsory module.",
      "The aims of this module is to introduce you to the building blocks of modern multimedia applications, such as media production, media transportation and service models, quality of experience, human-application interaction.",
    ]);
    db.run(insert, [
      16,
      120,
      "Year 1",
      "Design Practices in Digital Industries",
      "This is an optional module.",
      "This module will introduce you to an immersive, human-centered, prototype-driven process for innovation that can be applied to a digital product and service design. Enhance your capacity to think innovatively, create ideas rapidly, and actualize concept and ideas systematically in a competitive global digital market. Finally, it will equip you with essential methods and skills for creative resolution of problems through a series of group activities.",
    ]);

    db.run(insert, [
      17,
      120,
      "Year 1",
      "Digital Media Audiences and Markets",
      "This is an optional module.",
      "This module will introduce you to the major issues related to users engagement with digital media. The module examines the evolution of the interactions of audiences with digital media; characteristics of digital media markets; implications of new digital media platforms on the experience of audiences and the associated businesses. Case studies will also be presented.",
    ]);
    db.run(insert, [
      18,
      120,
      "Year 1",
      "Social Identities and Media",
      "This is an optional module.",
      "The aim of this module is to examine media representations of social identities with particular focus on gender, race, class and sexuality and its intersections. Combining key theories from critical theory, cultural studies, film, gender studies and communication studies, the module will explore processes and practices of production and re-production of social identities making emphasis on said productions on media, paying special attention to questions of racism, colonialism and capitalism.",
    ]);
    db.run(insert, [
      19,
      120,
      "Year 1",
      "Advanced 3D media environments",
      "This is an optional module.",
      "The aim of this module is to introduce and enhance understanding of the main concepts and state-of-the-art applications of 3D multimedia, i.e. immersive audio and video.",
    ]);
    db.run(insert, [
      20,
      120,
      "Year 1",
      "Internet of Things and Applications",
      "This is an optional module.",
      "The aims of this module is to provide you with the knowledge and understanding of computing concepts related to the emerging IoT platforms and devices and their deployment.",
    ]);
    db.run(insert, [
      21,
      120,
      "Year 1",
      "Cloud applications and services",
      "This is an optional module.",
      "The aim of this module is to provide you with an overview of the cloud technology with a special emphasis on cloud applications and the associated challenges.",
    ]);
  }
});
// export as module, called db
module.exports = db;
