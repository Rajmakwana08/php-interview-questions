import { useState } from 'react'
import './App.css'

interface Question {
  id: number;
  question: string;
  answer: string;
  codeExample?: string;
}

function App() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "1. Define Open Source Software and explain its characteristics.",
      answer: "",
      codeExample: `
🧩 Definition: Open Source Software (OSS)

Open Source Software means software whose source code is freely available to the public.
Anyone can view, modify, and distribute the code according to their needs.

💡 In short:
Open Source Software = Free to use + Free to modify + Free to share

⚙️ Characteristics of Open Source Software

| Characteristic           | Explanation                                                                             |
| -------------------------| ----------------------------------------------------------------------------------------|
| 1️⃣ Free Availability    | The software can be downloaded and used freely without paying any license fee.          |
| 2️⃣ Source Code Access   | The source code is open, so users can study how it works and make improvements.         |
| 3️⃣ Modifiable           | Users can edit or modify the code to suit their own requirements.                       |
| 4️⃣ Community Support    | A large community of developers helps in updating, fixing bugs, and improving features. |
| 5️⃣ Platform Independent | Most open-source software runs on multiple operating systems (Windows, Linux, Mac).     |
| 6️⃣ Regular Updates      | Because many developers contribute, the software is frequently updated and improved.    |
| 7️⃣ Transparency         | Since the code is visible to all, there is no hidden functionality or security risk.    |


💡 Examples of Open Source Software

  Operating Systems: Linux, Ubuntu
  Web Servers: Apache, Nginx
  Databases: MySQL, PostgreSQL
  Programming Languages: PHP, Python


✅ In short:

Open Source Software allows users to freely use, modify, and share programs — encouraging collaboration, innovation, and transparency.


      `
    },
    {
      id: 2,
      question: "2. Explain advantages and disadvantages of OSS.",
      answer: "",
      codeExample: `
🟢 Advantages of Open Source Software

Free to use – You don’t have to pay money to use it.
Open code – You can see and change the code as you like.
Community help – Many people around the world help fix problems.
Secure – Because many people check the code, errors are found quickly.
Flexible – You can modify it to fit your needs.
No company control – You are not dependent on one company for updates.



🔴 Disadvantages of Open Source Software

Less official support – No company help; you must depend on online forums.
Need technical knowledge – You must know how to install or change the code.
Compatibility problems – May not work well with other paid software.
Too many updates – Frequent updates can sometimes cause small issues.
Security risk if old – If you don’t update it, hackers can find weaknesses.



💡 In short:

Good: Free, flexible, safe, and community-supported
Bad: Needs skill, no official help, and may have small issues

      `
    },
    {
      id: 3,
      question: "3. Differentiate between Open Source and Closed Source Software.",
      answer: "",
      codeExample: `
| Open Source Software (OSS)                         | Closed Source Software (CSS)                              |
| ---------------------------------------------------| ----------------------------------------------------------|
| The source code is open and available to everyone. | The source code is hidden and not shared with users.      |
| Free to use and modify by anyone.                  | Not free — you need to buy a license to use it.           |
| Users can change or improve the software.          | Only the company that created it can change the software. |
| Has community support (users help each other).     | Has official support from the company.                    |
| More flexible and customizable.                    | Less flexible; you must use it as it is.                  |
| Example: Linux, Apache, MySQL, PHP                 | Example: Windows, MS Office, Adobe Photoshop              |


💡 In short:

Open Source → Free, editable, community-based
Closed Source → Paid, private, company-controlled

      `
    },      
    {
      id: 4,
      question: "4. Explain FOSS with its key features.",
      answer: "",
      codeExample: `
🧩 FOSS – Free and Open Source Software

Definition:
FOSS means Free and Open Source Software.
It is software that is free to use, copy, modify, and share, and its source code is available to everyone.
It combines the ideas of Free Software (freedom to use) and Open Source Software (transparency of code).



🔑 Key Features of FOSS:

Free to Use – Anyone can download and use it without paying money.
Open Source Code – The source code is visible to all users.
Freedom to Modify – Users can change or improve the software.
Free Distribution – You can share it with others freely.
Community Support – Large groups of developers help in fixing bugs and adding features.
Transparency – Everyone can see how the software works.
Security – Open review of code makes it more secure.



💡 Examples:

Linux
Apache Web Server
Mozilla Firefox
MySQL`
    },  
    {
      id: 5,
      question: "5. Explain the LAMP stack and its importance in open-source web development.",
      answer: "",
      codeExample: `
💻 LAMP Stack

Definition:
The LAMP stack is a group of open-source software used together to build and run dynamic websites and web applications.
The word LAMP stands for:

L → Linux (Operating System)
A → Apache (Web Server)
M → MySQL (Database)
P → PHP (Programming Language)


⚙️ How It Works:

Linux – Acts as the base operating system where everything runs.
Apache – Handles web requests and delivers web pages to users.
MySQL – Stores and manages website data (like user info, posts, etc.).
PHP – Processes the logic of the website and connects the web pages to the database.



🌟 Importance of LAMP in Open-Source Web Development:

Completely Free – All components are open-source and free to use.
Cross-Platform – Works on many systems (not only Linux).
Flexible and Customizable – Developers can modify code as needed.
Strong Community Support – Many developers contribute and share solutions.
Secure and Reliable – Used by millions of websites worldwide.
Easy to Develop and Deploy – Simple setup for hosting web apps.



💡 Example Use:

A PHP-based website (like WordPress) runs on a LAMP stack:
The code is written in PHP
Data is stored in MySQL
The website runs on Apache
The system is hosted on Linux

      `
    },  
    {
      id: 6,
      question: "6. What are Open Source Licenses? Give examples.",
      answer: "",
      codeExample: `
💡 What are Open Source Licenses?

An Open Source License is a legal permission that tells users how they can use, share, and modify open-source software.
It protects both the developer’s rights and the user’s freedom to use the software.


⚙️ Why Licenses Are Important

They allow others to use your software legally.
They set rules for copying, changing, or distributing the software.
They protect developers from misuse or false ownership claims.


🧩 Types of Open Source Licenses

There are mainly two types:

Permissive License – Very flexible

    Allows anyone to use, modify, and distribute freely.
    Even closed-source projects can use it.
    💬 Example: MIT License, Apache License 2.0, BSD License


Copyleft License – Must stay open

    Anyone who modifies and shares the software must keep it open-source.
    💬 Example: GNU General Public License (GPL), Mozilla Public License



🧠 Examples of Popular Open Source Licenses

| License Name                     | Description                                                                   |
| -------------------------------- | ----------------------------------------------------------------------------- |
| MIT License                      | Very simple and allows almost any use with credit to the author.              |
| GNU GPL                          | Requires any modified version to also remain open source.                     |
| Apache License 2.0               | Allows commercial use and modification, includes patent protection.           |
| BSD License                      | Similar to MIT, very permissive and simple.                                   |
| Mozilla Public License (MPL)     | Allows combining open and closed code, but modified MPL files must stay open. |



💬 Example in real life:

Linux uses the GNU GPL License.
Apache Web Server uses the Apache License 2.0.
React.js uses the MIT License.

      `
    },  
    {
      id: 7,
      question: "7. Explain how community collaboration supports OSS success.",
      answer: "",
      codeExample: `
💡 How Community Collaboration Supports Open Source Software (OSS) Success

Community collaboration means that many developers, users, and organizations work together to improve open-source software.
This teamwork is the main reason why OSS grows fast and becomes successful.


⚙️ How the Community Helps OSS

🧑‍💻 Continuous Improvement
  Developers around the world find and fix bugs, add new features, and improve performance.


🧩 Knowledge Sharing
  Users share ideas, tutorials, and solutions that help others learn and use the software easily.


🛠️ Faster Problem Solving
  When many people test and review code, issues are found and solved quickly.


🌍 Global Support
  A large, diverse community ensures the software works on many systems and languages.


💡 Innovation
  Different developers bring creative ideas that make the software better and more useful.


🏆 Trust and Quality
  Open collaboration makes the code transparent — anyone can check its quality and security.



📘 Example

The Linux operating system and Python language succeed because thousands of contributors keep improving them together.
      `
    },  
    {
      id: 8,
      question: "8. List any five examples of OSS with their uses.",
      answer: "",
      codeExample: `
💻 Five Examples of Open Source Software (OSS) and Their Uses

| Software Name   | Type / Category            | Main Use                                                           |
| ----------------| -------------------------- | ------------------------------------------------------------------ |
| Linux           | Operating System           | Used to run computers, servers, and mobile devices (like Android). |
| Apache          | Web Server                 | Used to host and manage websites on the internet.                  |
| MySQL           | Database Management System | Used to store and manage data for websites and applications.       |
| Mozilla Firefox | Web Browser                | Used to browse the internet safely and quickly.                    |
| LibreOffice     | Office Suite               | Used to create documents, spreadsheets, and presentations.         |

      
✅ In short:
These open-source tools are free, customizable, and widely used in web development, education, and businesses.
      `
    },  
    {
      id: 9,
      question: "9. Compare FOSS and proprietary software in detail.",
      answer: "",
      codeExample: `
💻 Comparison between FOSS and Proprietary Software

| Basis         | FOSS (Free and Open Source Software)                                              | Proprietary Software                                                         |
| --------------| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Meaning       | Software that is free to use, modify, and share. Source code is open to everyone. | Software owned by a company or individual. Source code is hidden from users. |
| Source Code   | Available to all users.                                                           | Kept secret and not shared.                                                  |
| Cost          | Usually free of cost.                                                             | Usually paid or requires a license.                                          |
| Customization | Can be modified or improved by anyone.                                            | Cannot be modified without permission.                                       |
| Support       | Community support through forums and online groups.                               | Official support provided by the company.                                    |
| Security      | High — anyone can find and fix security bugs quickly.                             | Depends on the company; users must wait for updates.                         |
| Examples      | Linux, MySQL, Apache, Firefox, LibreOffice                                        | Windows, MS Office, Adobe Photoshop, Oracle DB                               |



✅ In short:

FOSS gives freedom, flexibility, and transparency.
Proprietary software gives professional support and polished features, but less control to users.
      `
    },  
    {
      id: 10,
      question: "10. Why is transparency a major strength of OSS?",
      answer: "",
      codeExample: `
💡 Why Transparency is a Major Strength of OSS

Transparency means that the source code of Open Source Software (OSS) is visible to everyone.
Anyone can see how the software works, how data is handled, and how security is implemented.


⚙️ Why it’s Important


Security – Many developers can check the code for bugs or vulnerabilities, making it safer.
Trust – Users can verify that there is no hidden malicious code or spyware.
Improvement – Developers can understand the code and suggest improvements or add new features.
Learning – Students and programmers can study real-world code to learn programming and best practices.
Accountability – Everyone can see changes, so developers are more careful and responsible.


💬 In short:

Transparency in OSS ensures that the software is secure, trustworthy, and continuously improving, making it one of its biggest strengths.

      `
    },  
    {
      id: 11,
      question: "11. Explain the basic structure and syntax of a PHP script.",
      answer: "",
      codeExample: `
💻 Basic Structure of a PHP Script

PHP Code Block
  PHP code is written inside <?php ... ?> tags.
  The server executes PHP code and returns HTML to the browser.

Statements
  Each statement ends with a semicolon ;.

Comments
  Use // for single-line comments.
  Use /* ... */ for multi-line comments.



⚙️ Basic Syntax

<?php
// Single-line comment
/*
   Multi-line comment
*/

// Output text to the browser
echo "Hello, World!";

// Declare a variable
$name = "Raj";

// Use the variable
echo "Welcome, " . $name;
?>



🧠 Explanation

  1. <?php ... ?> → PHP code starts and ends here.
  2. echo → Prints output to the browser.
  3. $name → Variable declaration (all variables start with $).
  4. . → Concatenation operator (used to join strings).
  5. Comments → Explain the code and are ignored during execution.



💡 In short:

Start tag: <?php
End tag: ?>
Statements: End with ;
Comments: // or /* ... */
Output: Use echo or print
Variables: Start with $
      
      `
    },  
    {
      id: 12,
      question: "12. What are the main features of PHP?",
      answer: "",
      codeExample: `
💻 Main Features of PHP


Open Source – PHP is free to use and modify.

Server-Side Scripting – Runs on the server and generates HTML for browsers.

Platform Independent – Works on Windows, Linux, macOS, etc.

Easy to Learn – Simple syntax, especially for people familiar with C or Java.

Fast Execution – PHP scripts are executed on the server quickly.

Supports Databases – Works with MySQL, PostgreSQL, Oracle, and many others.

Dynamic Content – Can generate dynamic web pages based on user input.

Embedded in HTML – PHP code can be written directly inside HTML.

Supports Sessions and Cookies – Useful for creating login systems and tracking users.

Object-Oriented Programming (OOP) – Supports classes, objects, inheritance, etc.

      `
    },  
    {
      id: 13,
      question: "13. Difference between variable and constant.",
      answer: "",
      codeExample: `
| Basis        | Variable                                                                              | Constant                                                                |
| -------------| --------------------------------------------------------------------------------------| ----------------------------------------------------------------------- |
| Definition   | A variable is a container that stores data which can change during program execution. | A constant is a name for a value that cannot change once it is defined. |
| Syntax       | Starts with $ symbol, e.g., $name = "Raj";                                            | Defined using define() or const, e.g., define("PI", 3.14);              |
| Value Change | Value can change anytime in the script.                                               | Value cannot be changed after declaration.                              |
| Memory       | Memory allocated can vary as value changes.                                           | Memory is fixed as value is constant.                                   |
| Use          | Used for data that may vary during execution.                                         | Used for fixed values like PI, database constants, or configuration.    |


⚡ Example in PHP

<?php
// Variable
$name = "Raj";
$name = "Meera"; // value changed

// Constant
define("PI", 3.14);
// PI = 3.15; // ❌ Error: Cannot change constant

echo $name; // Outputs: Meera
echo PI;   // Outputs: 3.14
?>


💡 In short:

Variable → changeable value
Constant → fixed value

`
    },  
    {
      id: 14,
      question: "14. Explain different data types with examples.",
      answer: "",
      codeExample: `
💻 PHP Data Types

PHP variables can store different types of data. These are the main types:

| Data Type          | Description                                                                              | Example                                        | 
| -------------------| -----------------------------------------------------------------------------------------| -----------------------------------------------|
| 1️⃣ Integer        | Whole numbers without decimal points.                                                    | $age = 22;                                     |
| 2️⃣ Float / Double | Numbers with decimal points.                                                             | $price = 99.99;                                |
| 3️⃣ String         | Sequence of characters (text).                                                           | $name = "Raj";                                 |
| 4️⃣ Boolean        | True or False value.                                                                     | $isStudent = true;                             |
| 5️⃣ Array          | Collection of multiple values stored in a single variable.                               | $fruits = array("Apple","Mango","Banana");     |
| 6️⃣ Object         | Stores data as properties and methods (OOP).                                             | $car = new Car();                              |
| 7️⃣ NULL           | Represents a variable with no value.                                                     | $x = NULL;                                     |
| 8️⃣ Resource       | Special variable holding a reference to an external resource (like database connection). | $conn = mysqli_connect("localhost","root",""); |



⚡ Example in PHP

<?php
$age = 22;               // Integer
$price = 99.99;          // Float
$name = "Raj";           // String
$isStudent = true;       // Boolean
$fruits = array("Apple","Mango","Banana"); // Array
$x = NULL;               // NULL

echo $name;              // Output: Raj
echo $age + $price;      // Output: 121.99
?>




💡 In short:

  Integer, Float → Numbers
  String → Text
  Boolean → True/False
  Array → List of values
  Object → Contains data & functions
  NULL → No value
  Resource → External references
      `
    },  
    {
      id: 15,
      question: "15. Write short note on Operators in PHP.",
      answer: "",
      codeExample: `
⚙️ Operators in PHP

Definition:
Operators are symbols used to perform operations on variables and values (like addition, comparison, etc.).

🧮 Types of Operators in PHP

| Type                              | Description                                       | Example                                                                                | 
| ----------------------------------| --------------------------------------------------| ---------------------------------------------------------------------------------------|
| 1️⃣ Arithmetic Operators          | Used to perform mathematical operations.          | + , - , * , / , % <br> Example: $sum = $a + $b;                                        | 
| 2️⃣ Assignment Operators          | Used to assign values to variables.               | = , += , -= , *= , /= , .= <br> Example: $x += 5;                                      | 
| 3️⃣ Comparison Operators          | Used to compare two values.                       | == , != , > , < , >= , <= <br> Example: if($a == $b)                                   | 
| 4️⃣ Logical Operators             | Used to combine conditions.                       | && ,                                                                                   |
| 5️⃣ String Operators              | Used to combine or join strings.                  | . (concatenation) <br> Example: $full = $fname . $lname;                               | 
| 6️⃣ Increment/Decrement Operators | Used to increase or decrease variable value by 1. | ++ , -- <br> Example: $x++;                                                            | 
| 7️⃣ Ternary Operator              | Short form of if-else.                            | condition ? value1 : value2; <br> Example: $result = ($age >= 18) ? "Adult" : "Minor"; | 


💡 In short:

Operators help PHP perform calculations, comparisons, and logic in programs easily.

      `
    },  
    {
      id: 16,
      question: "16. Explain Conditional Statements with examples.",
      answer: "",
      codeExample: `
💡 Conditional Statements in PHP

Definition:
Conditional statements are used to make decisions in PHP programs.
They allow the program to execute different blocks of code depending on whether a condition is true or false.


🔹 1. if Statement

The if statement runs a block of code only when the condition is true.

Syntax:

if (condition) {
    // code to be executed if condition is true
}


Example:

<?php
$age = 20;
if ($age >= 18) {
    echo "You are an adult.";
}
?>



🔹 2. if...else Statement

Used when you want to run one block if true and another block if false.

Syntax:

if (condition) {
    // code if condition is true
} else {
    // code if condition is false
}


Example:

<?php
$age = 15;
if ($age >= 18) {
    echo "Adult";
} else {
    echo "Minor";
}
?>



🔹 3. if...elseif...else Statement

Used when there are multiple conditions to check.

Syntax:

if (condition1) {
    // code if condition1 is true
} elseif (condition2) {
    // code if condition2 is true
} else {
    // code if none of the above are true
}


Example:

<?php
$marks = 75;
if ($marks >= 90) {
    echo "Grade A";
} elseif ($marks >= 60) {
    echo "Grade B";
} else {
    echo "Grade C";
}
?>



🔹 4. switch Statement

Used when you need to test many possible values of a single variable.
It’s easier to read than writing many if...elseif statements.

Syntax:

switch (variable) {
    case value1:
        // code to run if variable == value1
        break;

    case value2:
        // code to run if variable == value2
        break;

    default:
        // code if no cases match
}


Example:

<?php
$day = "Mon";
switch ($day) {
    case "Mon":
        echo "Start of the week";
        break;
    case "Fri":
        echo "Weekend coming soon";
        break;
    default:
        echo "Midweek day";
}
?>



🔹 5. Ternary Operator

A short form of if...else, written in a single line.

Syntax:

(condition) ? value_if_true : value_if_false;


Example:

<?php
$age = 18;
echo ($age >= 18) ? "Adult" : "Minor";
?>



🧠 In short:

if → single condition
if...else → two outcomes
if...elseif...else → multiple conditions
switch → many possible cases
?: (ternary) → short one-line condition
      
      
      `
    },  

    {
      id: 17,
      question: "17. Differentiate between for, while, and do-while loops.",
      answer: "",
      codeExample: `
🔁 Loops in PHP

Definition:
Loops are used to repeat a block of code multiple times until a condition becomes false.



🔹 1. for Loop

Use:
When the number of iterations (repeats) is known in advance.

Syntax:

for (initialization; condition; increment/decrement) {
    // code to be executed
}


Example:

<?php
for ($i = 1; $i <= 5; $i++) {
    echo "Number: $i <br>";
}
?>


Explanation:

Starts with $i = 1
Repeats until $i <= 5
Increases $i by 1 each time



🔹 2. while Loop

Use:
When the number of iterations is not known and depends on a condition.

Syntax:

while (condition) {
    // code to be executed
}


Example:

<?php
$i = 1;
while ($i <= 5) {
    echo "Number: $i <br>";
    $i++;
}
?>


Explanation:

Checks condition before running the loop.
If condition is false initially, the loop will not run.



🔹 3. do...while Loop

Use:
When you want the loop to run at least once, even if the condition is false.

Syntax:

do {
    // code to be executed
} while (condition);


Example:

<?php
$i = 1;
do {
    echo "Number: $i <br>";
    $i++;
} while ($i <= 5);
?>


Explanation:

Executes the code first, then checks the condition.
Ensures the loop runs at least once.



📊 Difference Summary

| Basis               | for Loop                              | while Loop                            | do...while Loop             |
| --------------------| ------------------------------------- | ------------------------------------- | ----------------------------|
| Condition Check     | At the beginning                      | At the beginning                      | At the end                  |
| Execution Guarantee | May not execute if condition is false | May not execute if condition is false | Executes at least once      |
| Best Used When      | Number of iterations is known         | Number of iterations is unknown       | Code must run at least once |
| Syntax              | for(init; cond; inc)                  | while(cond)                           | do{ }while(cond)            |



💡 In short:

for → use when you know how many times to loop
while → use when you don’t know how many times
do...while → runs at least once before checking
      
      `
    },  
    {
      id: 18,
      question: "18. Explain Array types and functions in PHP.",
      answer: "",
      codeExample: `
🧩 What is an Array in PHP?

An array is a collection of multiple values stored in a single variable.
It helps to store and manage a list of related data items.

Example:

<?php
$fruits = array("Apple", "Banana", "Mango");
echo $fruits[0]; // Output: Apple
?>


🔹 Types of Arrays in PHP

There are three main types of arrays:



1️⃣ Indexed Array

Stores values with numeric indexes (starting from 0).
Used for simple lists like names, numbers, etc.

Example:

<?php
$colors = array("Red", "Green", "Blue");
echo $colors[1]; // Output: Green
?>



2️⃣ Associative Array

Uses named keys (strings) instead of numbers.
Used when you want to store data with a meaningful key.

Example:

<?php
$student = array("name" => "Raj", "age" => 20, "city" => "Surat");
echo $student["name"]; // Output: Raj
?>



3️⃣ Multidimensional Array

An array that contains one or more arrays inside it.
Used for storing table-like (matrix) or complex data.

Example:

<?php
$students = array(
    array("Raj", 20, "Surat"),
    array("Jatin", 21, "Ahmedabad"),
    array("Milan", 19, "Vadodara")
);

echo $students[1][0]; // Output: Jatin
?>




🔹 Common Array Functions in PHP

Here are some useful array functions with examples 👇

1. count()

Counts total elements in an array.

<?php
$numbers = array(10, 20, 30);
echo count($numbers); // Output: 3
?>

2. array_push()

Adds one or more elements at the end of an array.

<?php
$fruits = array("Apple", "Banana");
array_push($fruits, "Mango");
print_r($fruits);
// Output: Array ( [0] => Apple [1] => Banana [2] => Mango )
?>

3. array_pop()

Removes the last element from an array.

<?php
$fruits = array("Apple", "Banana", "Mango");
array_pop($fruits);
print_r($fruits);
// Output: Array ( [0] => Apple [1] => Banana )
?>

4. array_merge()

Combines two or more arrays.

<?php
$a = array("Red", "Green");
$b = array("Blue", "Yellow");
$c = array_merge($a, $b);
print_r($c);
// Output: Array ( [0] => Red [1] => Green [2] => Blue [3] => Yellow )
?>

5. sort()

Sorts an array in ascending order.

<?php
$numbers = array(3, 1, 2);
sort($numbers);
print_r($numbers); // Output: Array ( [0] => 1 [1] => 2 [2] => 3 )
?>

6. array_reverse()

Reverses the order of elements in an array.

<?php
$letters = array("A", "B", "C");
print_r(array_reverse($letters));
// Output: Array ( [0] => C [1] => B [2] => A )
?>

7. in_array()

Checks if a value exists in an array.

<?php
$fruits = array("Apple", "Banana", "Mango");
if (in_array("Mango", $fruits)) {
    echo "Mango found!";
}
?>



🧠 Summary

| Type             | Description                | Example                      |
| -----------------| -------------------------- | -----------------------------|
| Indexed          | Uses numeric indexes       | $arr = ["A", "B", "C"];      |
| Associative      | Uses named keys            | $arr = ["name"=>"Raj"];      |
| Multidimensional | Array inside another array | $arr = [ ["A",1], ["B",2] ]; |



⚙️ Summary Table:

| Language           | Can store mixed datatypes in array? | Example                     |
| ------------------ | ----------------------------------- | --------------------------- |
| C / C++ / Java     | ❌ No                               | Only same datatype         |
| Python             | ✅ Yes                              | [1, "Raj", 3.5]            |
| PHP                | ✅ Yes                              | array("Raj", 20, "Surat")  |

      
      `
    },  
    {
      id: 19,
      question: "19. Write a PHP program using switch case for weekday messages. AND Application: Write a PHP script to display numbers 1 to 10 using a loop.",
      answer: "",
      codeExample: `
✅ 1️⃣ PHP Program using Switch Case for Weekday Messages

👉 Program:

<?php
$day = 3; // You can change the number (1 to 7)

switch ($day) {
    case 1:
        echo "Today is Monday!";
        break;
    case 2:
        echo "Today is Tuesday!";
        break;
    case 3:
        echo "Today is Wednesday!";
        break;
    case 4:
        echo "Today is Thursday!";
        break;
    case 5:
        echo "Today is Friday!";
        break;
    case 6:
        echo "Today is Saturday!";
        break;
    case 7:
        echo "Today is Sunday!";
        break;
    default:
        echo "Invalid day number!";
}
?>


👉 Output (if $day = 3):

Today is Wednesday!




✅ 2️⃣ PHP Script to Display Numbers 1 to 10 Using a Loop

👉 Program:

<?php
for ($i = 1; $i <= 10; $i++) {
    echo $i . "<br>"; // Displays each number on a new line
}
?>


👉 Output:

1
2
3
4
5
6
7
8
9
10
  
      `
    },  
    {
      id: 20,
      question: "20. Explain MySQL data types in detail with examples.",
      answer: "",
      codeExample: `
🧠 MySQL Data Types

MySQL data types define what kind of values can be stored in a table column (numbers, text, dates, etc.).
They are mainly divided into four types:


1️⃣ Numeric Data Types

Used to store numbers (integer or decimal).

| Data Type     | Description                            | Example                        |
| --------------| -------------------------------------- | -------------------------------|
| INT           | Whole numbers (no decimal).            | age INT = 25                   |
| TINYINT       | Small whole numbers (-128 to 127).     | flag TINYINT = 1               |
| SMALLINT      | Medium-sized numbers.                  | marks SMALLINT = 1500          |
| BIGINT        | Very large numbers.                    | population BIGINT = 9876543210 |
| FLOAT         | Decimal numbers (less precision).      | price FLOAT = 45.67            |
| DOUBLE        | Decimal numbers (more precision).      | distance DOUBLE = 12.3456      |
| DECIMAL(p, q) | Exact decimal values (good for money). | salary DECIMAL(8,2) = 12345.67 |



2️⃣ String (Character) Data Types

Used to store text or characters.

| Data Type  | Description                                        | Example                                       |
| -----------| -------------------------------------------------- | ----------------------------------------------|
| CHAR(n)    | Fixed-length string. Always stores n characters.   | gender CHAR(1) = 'M'                          |
| VARCHAR(n) | Variable-length string.                            | name VARCHAR(50) = 'Amit Sharma'              |
| TEXT       | Long text data.                                    | description TEXT = 'This is a long message.'  |
| ENUM       | One value from a predefined list.                  | status ENUM('Active','Inactive') = 'Active'   |
| SET        | Multiple values from a predefined list.            | colors SET('Red','Green','Blue') = 'Red,Blue' |



3️⃣ Date and Time Data Types

Used to store dates and times.

| Data Type | Description                                                  | Example                                     |
| ----------| -------------------------------------------------------------| --------------------------------------------|
| DATE      | Stores date in YYYY-MM-DD format.                            | dob DATE = '2000-05-15'                     |
| TIME      | Stores time in HH:MM:SS.                                     | login_time TIME = '09:30:00'                |
| DATETIME  | Stores both date and time.                                   | created_at DATETIME = '2025-10-27 14:45:00' |
| TIMESTAMP | Automatically updates with current time when record changes. | last_update TIMESTAMP                       |
| YEAR      | Stores year (4 digits).                                      | join_year YEAR = 2025                       |



4️⃣ Binary Data Types

Used to store binary (non-text) data like images, files, etc.

| Data Type    | Description                                     | Example           |
| -------------| ----------------------------------------------- | ------------------|
| BLOB         | Binary Large Object (used for files or images). | photo BLOB        |
| BINARY(n)    | Fixed-length binary data.                       | code BINARY(8)    |
| VARBINARY(n) | Variable-length binary data.                    | key VARBINARY(16) |



🧾 Example SQL Table:

CREATE TABLE student (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    dob DATE,
    marks DECIMAL(5,2),
    status ENUM('Pass','Fail'),
    photo BLOB
);



      `
    },  
    {
      id: 21,
      question: "21. Differentiate between MySQL and MySQLi.",
      answer: "",
      codeExample: `
🧠 Difference Between MySQL and MySQLi

| MySQL                                                                 | MySQLi                                                                |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------|
| Old version of PHP extension used to connect PHP with MySQL database. | Improved (new) version of MySQL extension with more features.         |
| Supports only procedural (function-based) programming.                | Supports both procedural and object-oriented programming.             |
| Does not support prepared statements (less secure).                   | Supports prepared statements (more secure, prevents SQL injection).   |
| Slower and deprecated (no longer used in newer PHP versions).         | Faster and actively supported by PHP.                                 |
| Example:<br> mysql_connect("localhost", "root", "", "test");          | Example:<br> $conn = mysqli_connect("localhost", "root", "", "test"); |
| Cannot handle multiple queries at once.                               | Can handle multiple queries in one call.                              |
| Less error handling.                                                  | Better error reporting and debugging.                                 |
| MySQL = My Structured Query Language                                  | MySQLi = MySQL Improved                                               |
| ❌ Does not support transactions (commit/rollback).                   | ✅ Supports transactions for safer, grouped SQL execution.           | 



✅ Example (MySQLi Procedural Style)

<?php
$conn = mysqli_connect("localhost", "root", "", "school");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

echo "Connected successfully!";
mysqli_close($conn);
?>



🧩 In Short:

MySQLi = MySQL Improved
It is more secure, faster, and recommended for all modern PHP projects. ✅
      
    `
    },  
    {
      id: 22,
      question: "22. List and explain any five MySQL string functions.",
      answer: "",
      codeExample: `
🧠 Five MySQL String Functions

| Function                          | Description                                          | Example & Output                                            |
| ----------------------------------| ---------------------------------------------------- | ------------------------------------------------------------|
| 1️⃣ CONCAT(str1, str2, …)         | Joins (combines) two or more strings together.       | SELECT CONCAT('Hello', ' ', 'World'); → Output: Hello World |
| 2️⃣ LENGTH(str)                   | Returns the number of characters in a string.        | SELECT LENGTH('Apple'); → Output: 5                         |
| 3️⃣ LOWER(str)                    | Converts all characters in a string to lowercase.    | SELECT LOWER('WELCOME'); → Output: welcome                  |
| 4️⃣ UPPER(str)                    | Converts all characters in a string to uppercase.    | SELECT UPPER('good morning'); → Output: GOOD MORNING        |
| 5️⃣ SUBSTRING(str, start, length) | Extracts a part of a string from the given position. | SELECT SUBSTRING('Database, 1, 4); → Output: Data           |


✅ Bonus Function (for practice)

| Function  | Description                                       | Example & Output                                |
| ----------| ------------------------------------------------- | ------------------------------------------------|
| TRIM(str) | Removes extra spaces from both sides of a string. | SELECT TRIM('   Hello   '); → Output: Hello     |


      `
    },  
    {
      id: 23,
      question: "23. List and explain any five MySQL date and time functions.",
      answer: "",
      codeExample: `
🧠 Five MySQL Date and Time Functions

| Function                      | Description                                      | Example & Output                                                        |
| ------------------------------| -------------------------------------------------| ------------------------------------------------------------------------|
| 1️⃣ NOW()                     | Returns the current date and time of the system. | SELECT NOW(); → Output: 2025-10-27 17:30:45                             |
| 2️⃣ CURDATE()                 | Returns the current date only (no time).         | SELECT CURDATE(); → Output: 2025-10-27                                  |
| 3️⃣ CURTIME()                 | Returns the current time only (no date).         | SELECT CURTIME(); → Output: 17:30:45                                    |
| 4️⃣ DATE_FORMAT(date, format) | Formats the date in a specific style.            | SELECT DATE_FORMAT('2025-10-27', '%d-%M-%Y'); → Output: 27-October-2025 |
| 5️⃣ DATEDIFF(date1, date2)    | Finds the difference between two dates in days.  | SELECT DATEDIFF('2025-12-31', '2025-10-27'); → Output: 65               |



✅ Bonus Function (for practice)

| Function      | Description                      | Example & Output                               |
| --------------| ---------------------------------| -----------------------------------------------|
| DAYNAME(date) | Returns the name of the weekday. | SELECT DAYNAME('2025-10-27'); → Output: Monday |



🧾 Example Query:
SELECT NOW(), CURDATE(), CURTIME(),
       DATE_FORMAT(NOW(), '%W, %D %M %Y') AS formatted_date,
       DATEDIFF('2025-12-31', CURDATE()) AS days_left;
      `
    },  
    {
      id: 24,
      question: "24. Explain CHAR, VARCHAR, and TEXT data types.",
      answer: "",
      codeExample: `
🧠 1️⃣ CHAR Data Type

Used for: Fixed-length strings.
It always reserves the same amount of space, even if the text is shorter.
Maximum size: 255 characters.
Faster for fixed-size data (like codes, IDs, etc.).

👉 Example:

CREATE TABLE student (
    gender CHAR(1)   -- stores exactly 1 character like 'M' or 'F'
);


If you insert: 'A' → stored as 'A ' (adds spaces to make it fixed length).



🧠 2️⃣ VARCHAR Data Type

Used for: Variable-length strings.
It uses only as much space as needed for the text.
Maximum size: 65,535 characters (depends on row size).
More flexible and commonly used for names, emails, etc.

👉 Example:

CREATE TABLE employee (
    name VARCHAR(50)  -- can store names up to 50 characters
);


If you insert: 'Amit' → stored as 'Amit' (no extra spaces).



🧠 3️⃣ TEXT Data Type

Used for: Storing large text (paragraphs, descriptions, articles, etc.).
Cannot have a default value.
Maximum size: 65,535 characters.

👉 Example:

CREATE TABLE article (
    content TEXT   -- can store long text or paragraphs
);



📊 Quick Comparison

| Type       | Length Type           | Used For                                    | Example                    |
| -----------| --------------------- | ------------------------------------------- | -------------------------- |
| CHAR(n)    | Fixed length          | Short, fixed-size data (e.g., gender, code) | 'M'                        |
| VARCHAR(n) | Variable length       | Normal text data (e.g., names, emails)      | 'Rahul'                    |
| TEXT       | Large variable length | Long text (e.g., article, description)      | 'This is a long message'   |




🧠 Quick Comparison Table

| Feature       | CHAR                    | VARCHAR                | TEXT                           |
| ------------- | ----------------------- | ---------------------- | ------------------------------ |
| Type          | Fixed-length            | Variable-length        | Long text                      |
| Storage       | Always uses full size   | Uses only needed space | Stored separately (large data) |
| Max Length    | 255                     | 65,535                 | 65,535 bytes                   |
| Padding       | Adds spaces             | No padding             | No padding                     |  // this mean to show bottom
| Default Value | Allowed                 | Allowed                | Not allowed                    |
| Best For      | Codes, short fixed text | Names, addresses       | Descriptions, articles         |


----------------------
🔹 CHAR → Has padding

If you define:

name CHAR(10)


and you insert 'Raj',
MySQL stores it as 'Raj ' (with 7 spaces added to make it 10 characters long).

✅ That’s called padding.



🔹 VARCHAR → No padding

If you define:

name VARCHAR(10)


and you insert 'Raj',
MySQL stores exactly 'Raj' (3 characters, no extra spaces).

✅ It does not add spaces — that’s what “no padding” means.
It still allows spaces inside your text (like 'Raj mk'), but it doesn’t auto-fill extra ones at the end.


      `
    },  
    {
      id: 25,
      question: "25. Write a PHP code to connect and disconnect from a MySQL database.",
      answer: "",
      codeExample: `
✅ PHP Code: Connect and Disconnect from MySQL Database


<?php

// Step 1: Database connection details
$servername = "localhost";  // Server name
$username = "root";         // Database username
$password = "";             // Database password
$database = "school";       // Database name


// Step 2: Create a connection
$conn = mysqli_connect($servername, $username, $password, $database);


// Step 3: Check the connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "✅ Connected successfully!<br>";


// Step 4: Close the connection
mysqli_close($conn);
echo "❌ Disconnected successfully!";
?>



🧠 Explanation (Easy Words):

mysqli_connect() → Used to connect PHP with MySQL.
mysqli_connect_error() → Shows error if connection fails.
mysqli_close() → Closes (disconnects) the connection.
echo → Prints message on screen.



🧾 Output:
✅ Connected successfully!
❌ Disconnected successfully!
      
      `
    },  
    {
      id: 26,
      question: "26. Explain ADDDATE, DATEDIFF, and DATE_FORMAT functions with examples.",
      answer: "",
      codeExample: `
🧠 1️⃣ ADDDATE() Function

👉 Use:
Used to add or subtract days from a given date.

✅ Syntax:

ADDDATE(date, number_of_days)


✅ Example:

SELECT ADDDATE('2025-10-27', 10);


➡️ Output:
2025-11-06


👉 (It adds 10 days to the given date.)

To subtract days:

SELECT ADDDATE('2025-10-27', -5);


➡️ Output: 2025-10-22

---------------------------------------------

🧠 2️⃣ DATEDIFF() Function

👉 Use:
Used to find the number of days between two dates.
(It subtracts the second date from the first date.)

✅ Syntax:

DATEDIFF(date1, date2)


✅ Example:

SELECT DATEDIFF('2025-12-31', '2025-10-27');


➡️ Output: 65
👉 (There are 65 days between Oct 27 and Dec 31.)

---------------------------------------------

🧠 3️⃣ DATE_FORMAT() Function

👉 Use:
Used to change the display format of a date.

✅ Syntax:

DATE_FORMAT(date, format)


✅ Example:

SELECT DATE_FORMAT('2025-10-27', '%d-%M-%Y');


➡️ Output: 27-October-2025



📅 Common Format Codes:

| Code | Meaning              | Example Output |
| ---- | -------------------- | -------------- |
| %d   | Day (01–31)          | 27             |
| %m   | Month number (01–12) | 10             |
| %M   | Month name           | October        |
| %Y   | Year (4 digits)      | 2025           |
| %W   | Day name             | Monday         |


✅ Summary

| Function      | Use                              | Example                              | Output          |
| --------------| -------------------------------- | -------------------------------------| ----------------|
| ADDDATE()     | Add or subtract days from a date | ADDDATE('2025-10-27', 5)             | 2025-11-01      |
| DATEDIFF()    | Find days between two dates      | DATEDIFF('2025-12-31','2025-10-27')  | 65              |
| DATE_FORMAT() | Change date format               | DATE_FORMAT('2025-10-27','%d-%M-%Y') | 27-October-2025 |

    
      `
    },  
    {
      id: 27,
      question: "27. What is Prepared Statement and how does it prevent SQL injection?",
      answer: "",
      codeExample: `
🧠 What is a Prepared Statement?

A Prepared Statement is a secure way to run SQL queries in PHP (especially when taking user input).
It allows you to write an SQL query once, and then execute it many times with different values.

✅ It helps avoid SQL injection attacks — a common hacking method that changes your SQL query using user input.

🔐 How It Works

  Step 1: SQL query is sent to the database with placeholders instead of actual data.
  Step 2: The database compiles and checks the query structure.
  Step 3: The actual values are safely added later — not directly in the query.

👉 This prevents hackers from injecting harmful SQL code.

✅ Example (PHP – MySQLi Prepared Statement)


<?php
// Connect to database
$conn = new mysqli("localhost", "root", "", "school");

// Step 1: Prepare the SQL query (with ? placeholder)
$stmt = $conn->prepare("SELECT * FROM students WHERE name = ?");

// Step 2: Bind parameter (s = string)
$stmt->bind_param("s", $student_name);

// Step 3: Set value and execute
$student_name = "Amit";
$stmt->execute();

// Step 4: Get results
$result = $stmt->get_result();

while ($row = $result->fetch_assoc()) {
    echo $row['name'] . "<br>";
}

// Close connection
$stmt->close();
$conn->close();
?>


output:
If the table students inside the school database contains a record where the name column has the value Amit, then the output will be:

Amit


If there are multiple rows with the name Amit, it will print each one on a new line:

Amit
Amit
Amit


If no record exists with that name, then there will be no output (blank screen).




💡 How It Prevents SQL Injection

🔴 Without Prepared Statement (Unsafe):

$name = $_GET['name'];
$query = "SELECT * FROM students WHERE name = '$name'";


If user enters:
Amit' OR '1'='1 → it becomes:

SELECT * FROM students WHERE name = 'Amit' OR '1'='1';


➡️ This returns all records — a successful SQL injection attack!

🟢 With Prepared Statement (Safe):

$stmt = $conn->prepare("SELECT * FROM students WHERE name = ?");
$stmt->bind_param("s", $name);
$stmt->execute();


Here, the input is treated as data, not as SQL code,
so injection does not work ✅


🧾 In Short:

| Prepared Statement                     | Prevents SQL Injection Because        |
| ---------------------------------------| ------------------------------------- |
| SQL query and data are sent separately | User input can’t modify SQL structure |
| Uses placeholders (?) for values       | Database treats values as plain text  |
| Supported by MySQLi and PDO            | Secure and efficient                  |


-----------------------------------------------------------------------------------------

🧩 Meaning of -> in PHP

The -> (arrow) is used to access a property or call a method of an object in PHP’s object-oriented programming (OOP).

💡 In simple words:

It connects an object to its function or variable.



🧠 Example from your code:
    $conn = new mysqli("localhost", "root", "", "school");


Here,
$conn is an object of the mysqli class (used for MySQL connections).

Now, look at:

    $stmt = $conn->prepare("SELECT * FROM students WHERE name = ?");



👉 ->prepare() means

  “Call the prepare() function of the object $conn.”

So $conn->prepare() = “use the prepare method from the $conn object”.



✅ Step-by-step explanation of your code:

$conn = new mysqli("localhost", "root", "", "school");
  ➡ Creates a new MySQL connection object.


$stmt = $conn->prepare("SELECT * FROM students WHERE name = ?");
  ➡ Uses that object’s prepare() method to prepare a query.


$stmt->bind_param("s", $student_name);
  ➡ Uses the statement object’s method bind_param() to safely attach data.


$stmt->execute();
  ➡ Executes the prepared statement.


$result = $stmt->get_result();  
  ➡ Fetches the query result.


$row = $result->fetch_assoc();
  ➡ Fetches each row as an associative array (like ['name' => 'Amit']).


🧩 Think of it like:

| Code                     | Meaning                                  |
| ------------------------ | ---------------------------------------- |
| $conn->prepare()         | Call prepare() using connection object   |
| $stmt->execute()         | Call execute() using statement object    |
| $result->fetch_assoc()   | Call fetch_assoc() using result object   |


✅ Summary:

-> = Access methods or properties of an object.
It’s used in Object-Oriented PHP.
Example:

    $object->method() = calls a method
    $object->property = accesses a variable inside the object


------------------------------------------------------------------------

What is injection?

Injection is a class of security attack where an attacker sends malicious input that the application treats as code or commands. 
Instead of treating the input as plain data, the system executes it, which lets the attacker change behavior, read or destroy data, run commands, etc.

The most common type people mean by “injection” is SQL Injection, but there are others (XSS, Command Injection, LDAP injection, etc.).

SQL Injection (explained simply)

What it does: Attacker inserts SQL code into input fields (like login, search) so the database runs that injected SQL.

Why it’s bad: It can let attackers read private data, modify or delete data, bypass login checks, or even drop tables.



Unsafe example (vulnerable):

    // BAD — vulnerable to SQL injection
    $name = $_GET['name'];
    $query = "SELECT * FROM users WHERE name = '$name'";
    $result = mysqli_query($conn, $query);


If name = A' OR '1'='1, the query becomes:


    SELECT * FROM users WHERE name = 'A' OR '1'='1';

— that returns all rows.
      
      `
    },  
    {
      id: 28,
      question: "28. explain Using transactions and stored procedures in MySQL ",
      answer: "",
      codeExample: `
🧠 1️⃣ Transactions in MySQL
🔹 Meaning:

A transaction is a group of one or more SQL statements that are executed together as a single unit.
If one statement fails, the whole transaction is rolled back — so your database stays safe and correct.

🔹 Main Properties (ACID):

| Property            | Meaning                                                  |
| ------------------- | -------------------------------------------------------- |
| A – Atomicity       | All statements run completely or not at all.             |
| C – Consistency     | Database remains valid before and after the transaction. |
| I – Isolation       | Each transaction runs separately from others.            |
| D – Durability      | Once committed, data is saved permanently.               |



✅ Syntax:

START TRANSACTION;

-- your SQL queries
UPDATE accounts SET balance = balance - 500 WHERE id = 1;
UPDATE accounts SET balance = balance + 500 WHERE id = 2;

COMMIT;   -- to save changes permanently
-- or use ROLLBACK; to undo if something goes wrong



💡 Example:

Imagine transferring ₹500 from Account 1 to Account 2.

START TRANSACTION;

UPDATE account SET balance = balance - 500 WHERE acc_id = 101;
UPDATE account SET balance = balance + 500 WHERE acc_id = 102;

COMMIT;



👉 If one update fails, you can use ROLLBACK; to cancel the entire transaction.


START TRANSACTION;

UPDATE account SET balance = balance - 500 WHERE acc_id = 101;
UPDATE account SET balance = balance + 500 WHERE acc_id = 102;

-- If no errors
COMMIT;

-- If any error occurs, revert back
ROLLBACK;


----------------------------------------------------------------------------------------------

🧠 2️⃣ Stored Procedures in MySQL
🔹 Meaning:

A stored procedure is a set of SQL statements saved in the database with a name.
You can call it whenever you want — like a function in programming.

It helps reuse code, reduce errors, and improve performance.


✅ Syntax:

DELIMITER $$

CREATE PROCEDURE procedure_name()
BEGIN
   -- SQL statements
END $$

DELIMITER ;



🧾 Example:

DELIMITER $$

CREATE PROCEDURE GetStudents()
BEGIN
   SELECT * FROM students;
END $$

DELIMITER ;

-- Call the procedure
CALL GetStudents();



💡 Example with Parameters:

DELIMITER $$

CREATE PROCEDURE GetStudentByID(IN student_id INT)
BEGIN
   SELECT * FROM students WHERE id = student_id;
END $$

DELIMITER ;

-- Call it
CALL GetStudentByID(5);



🧩 In Short:

| Feature  | Transaction                               | Stored Procedure                  |
| ---------| ----------------------------------------- | --------------------------------- |
| Meaning  | Group of SQL queries executed together    | Predefined SQL code stored in DB  |
| Use      | Maintain data accuracy                    | Reuse logic and simplify code     |
| Commands | START TRANSACTION, COMMIT, ROLLBACK       | CREATE PROCEDURE, CALL            |
| Benefit  | Prevents data errors                      | Saves time and reduces repetition |

      
      `
    },  
    {
      id: 29,
      question: "29. Explain advantages of MySQLi over MySQL.",
      answer: "",
      codeExample: `
🧠 MySQLi (MySQL Improved)

MySQLi is an improved version of the old MySQL extension.
It offers better performance, more features, and stronger security.

🌟 Advantages of MySQLi over MySQL


🔹 1️⃣ Supports Both Object-Oriented and Procedural Styles

MySQL → Only procedural (function-based).
MySQLi → You can use both object-oriented and procedural code.

✅ Example:

Procedural:

$conn = mysqli_connect("localhost", "root", "", "school");


Object-Oriented:

$conn = new mysqli("localhost", "root", "", "school");



🔹 2️⃣ Supports Prepared Statements

MySQLi allows prepared statements — which help prevent SQL injection attacks.
MySQL does not support them.

✅ Example:

$stmt = $conn->prepare("SELECT * FROM users WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();



🔹 3️⃣ Supports Transactions

MySQLi allows transactions using BEGIN, COMMIT, and ROLLBACK commands.
MySQL does not support this feature directly.

✅ Example:

$conn->begin_transaction();
$conn->query("UPDATE accounts SET balance = balance - 500 WHERE id = 1");
$conn->query("UPDATE accounts SET balance = balance + 500 WHERE id = 2");
$conn->commit();



🔹 4️⃣ Supports Multiple Queries

You can run more than one SQL statement at the same time using MySQLi.
MySQL does not allow that.

✅ Example:

mysqli_multi_query($conn, "SELECT * FROM students; SELECT * FROM teachers;");



🔹 5️⃣ Improved Error Handling

MySQLi provides detailed error reporting and exception handling.
Easier to debug and find problems.

✅ Example:

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}



🔹 6️⃣ Supports Object-Oriented Features

MySQLi supports OOP features like constructors, destructors, and methods.
Makes code cleaner and reusable.



🔹 7️⃣ Better Performance and Security

MySQLi uses newer APIs, better memory management, and modern encryption.
It’s faster and more secure than the old MySQL extension.



🧩 In Short:

| Feature             | MySQL           | MySQLi                       |
| ------------------- | --------------- | ---------------------------- |
| API Type            | Only Procedural | Procedural + Object-Oriented |
| Prepared Statements | ❌ No           | ✅ Yes                      |
| Transactions        | ❌ No           | ✅ Yes                      |
| Multiple Queries    | ❌ No           | ✅ Yes                      |
| Error Handling      | Basic           | Advanced                     |
| Performance         | Slower          | Faster                       |
| Security            | Low             | High                         |



✅ Conclusion:
👉 MySQLi is the modern, secure, and powerful version of MySQL.
It is recommended to always use MySQLi (or PDO) for PHP database connections today.
      
      `
    },  
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },  
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },  
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },  
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },  
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },  
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },  
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },  
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },  
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },  
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },  
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },  
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },  
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },  

    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },  
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },  
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },  
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },  
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },  
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },  
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },  

  ];

  const toggleQuestion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="app-container">
      <h1>PHP Interview Questions</h1>
      <div className="questions-container">
        {questions.map((q) => (
          <div key={q.id} className="question-item">
            <button 
              className={`question-button ${activeId === q.id ? 'active' : ''}`}
              onClick={() => toggleQuestion(q.id)}
            >
              {q.question}
            </button>
            {activeId === q.id && (
              <div className="answer-container">
                <div className="answer">
                  <h3>Answer:</h3>
                  <p>{q.answer}</p>
                </div>
                {q.codeExample && (
                  <div className="code-example">
                    <h3>Code Example:</h3>
                    <pre>
                      <code>{q.codeExample}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
