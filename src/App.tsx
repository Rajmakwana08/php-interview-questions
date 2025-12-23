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
      id: 8888,
      question: "Mid paper question answers",
      answer: "",
      codeExample: `
      
✅ Q1 (a) – Short Questions (1 mark each)

1) What is the main difference between open-source and closed-source software?

Open-source software → Source code is publicly available, can be modified.
Closed-source software → Source code is private; users cannot modify it.


2) Who is the creator of PHP?

👉 Rasmus Lerdorf



3) One difference between MySQL and MySQLi?

MySQL → Older extension, procedural only.
MySQLi → Improved version, supports procedural + object-oriented and prepared statements.




✅ Q1 (b) – MCQs / True-False / Fill blanks (1 mark each)

1) Best defines open-source philosophy
👉 b) Software whose source code is publicly available


2) Open Source Software allows users to modify source code. (True/False)
👉 True


3) The switch statement is used for?

👉 c) Function call (wrong)
Correct answer: Branching / decision making
But from options:
👉 d) String concatenation = WRONG
👉 b) Function call = WRONG
👉 a) Looping = WRONG
Correct option should be Branching, but not in list.
So in exam, choose none OR write branching.


4) Function to execute SQL query in PHP
👉 mysqli_query()


5) Default MySQL port number
👉 a) 3306


6) Most commonly used open-source database with PHP
👉 c) MySQL


7) Function used to create array
👉 b) array()


---------------------------------------------------------------------------


✅ Q2(a) – 2-Mark Questions

1) Write any two advantages of using open-source software in web development.

✔ Free to use
✔ Easy to modify/customize
✔ Large community support
✔ No licensing cost
✔ Secure due to frequent updates


2) Importance of FOSS (Free and Open Source Software)

Promotes collaboration and innovation
Reduces software cost
Provides source code access → easy to modify
No vendor lock-in
Highly customizable


-----------------


✅ Q2(b) – 3-Mark Questions

1) PHP program using conditional + loop to display numbers 1 to 10

<?php
for($i = 1; $i <= 10; $i++){
    if($i % 2 == 0){
        echo "$i is Even <br>";
    } else {
        echo "$i is Odd <br>";
    }
}
?>



2) Process of creating and using user-defined functions in PHP

Steps:

1. Use function keyword
2. Give function name
3. Write logic
4. Call the function

Example:

<?php
function greet($name){
    echo "Hello, $name!";
}

greet("Raj");
?>


---------------------------------------------------------------------------


✅ Q3 – Attempt ANY TWO (5 marks each)

Q3(i) PHP script demonstrating conditional + loops
<?php
for($i = 1; $i <= 15; $i++){
    if($i % 3 == 0){
        echo "$i is divisible by 3<br>";
    } else if($i % 2 == 0){
        echo "$i is even<br>";
    } else {
        echo "$i is odd<br>";
    }
}
?>


Explanation:

Loop prints numbers
Conditions check if number is even, odd, or divisible by 3



Q3(ii) Variable scope in PHP

✔ 1. Local Scope
Declared inside function → used inside only.


✔ 2. Global Scope
Declared outside function → cannot be used inside unless declared global.


✔ 3. Static Scope
Variable keeps its value between function calls.


✔ 4. Super Global Variables
$_GET, $_POST, $_SESSION, $_SERVER — available anywhere.

Examples:

<?php
$globalVar = 10;

function demo(){
    global $globalVar; // access global var
    static $count = 0;
    $count++;
    echo "Global: $globalVar, Count: $count<br>";
}

demo();
demo();
demo();
?>



Q3(iii) Use of associative arrays vs indexed arrays

✔ Indexed Array

Stores data with numeric index
$arr[0] = "Raj"


✔ Associative Array

Stores data with key → value
$emp["name"] = "Raj"


Why associative arrays are better for structured data?

  Easy to understand
  Keys represent meaning
  Better for storing records (employee, product, student data)

Example:

$student = [
  "name" => "Raj",
  "age" => 21,
  "course" => "MCA"
];


---------------------------------------------------------------------------


✅ Q4(a) Employee bonus program (5 Marks)

⭐ Requirement:

Calculate bonus based on ratings.

Example:

Rating = 5 → 20% bonus
Rating = 4 → 15% bonus
Rating = 3 → 10% bonus
Below 3 → No bonus

⭐ Program using conditions + loops

<?php
$employees = [
  ["name" => "Amit", "salary" => 30000, "rating" => 5],
  ["name" => "Raj", "salary" => 25000, "rating" => 3],
  ["name" => "Neha", "salary" => 28000, "rating" => 4]
];

foreach($employees as $emp){
    if($emp["rating"] == 5)
        $bonus = $emp["salary"] * 0.20;
    else if($emp["rating"] == 4)
        $bonus = $emp["salary"] * 0.15;
    else if($emp["rating"] == 3)
        $bonus = $emp["salary"] * 0.10;
    else
        $bonus = 0;

    echo $emp["name"] . " bonus: " . $bonus . "<br>";
}
?>



✅ Q4(b) Fetch sales reports using date ranges

✔ MySQL Date Functions Used

DATE() → extract date
BETWEEN → filter date range
CURDATE() → today
NOW() → current timestamp

⭐ PHP + MySQL program

<?php
$con = mysqli_connect("localhost","root","","shop");

$start = "2025-01-01";
$end = "2025-01-31";

$query = "SELECT * FROM sales
          WHERE date BETWEEN '$start' AND '$end'";

$result = mysqli_query($con, $query);

while($row = mysqli_fetch_assoc($result)){
    echo $row['product'] . " - " . $row['amount'] . "<br>";
}
?>




⭐ OR

Q4(b) Connecting to multiple MySQL databases (5 marks)

Program Structure

<?php

$db1 = mysqli_connect("localhost","root","","students_db");
$db2 = mysqli_connect("localhost","root","","sales_db");

$q1 = mysqli_query($db1, "SELECT * FROM students");
$q2 = mysqli_query($db2, "SELECT * FROM sales");

echo "Student Data:<br>";
while($row = mysqli_fetch_assoc($q1)){
    echo $row['name']."<br>";
}

echo "Sales Data:<br>";
while($row = mysqli_fetch_assoc($q2)){
    echo $row['product']." - ".$row['amount']."<br>";
}

?>



✔ Explanation:

Two DB connections
Two queries
Fetch data from both DBs for analytics
      
      `
    },  
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },  
    {
      id: 31,
      question: "31. Difference between GET and POST.",
      answer: "",
      codeExample: `
✅ Difference between GET and POST (Easy Explanation)

| GET                                     | POST                                  |
| ----------------------------------------| --------------------------------------|
| Sends data in URL                       | Sends data in request body (hidden)   |
| Less secure (data visible in URL)       | More secure (data not visible in URL) |
| Can send small amount of data           | Can send large amount of data         |
| Used for viewing/fetching data          | Used for submitting/inserting data    |
| URL becomes long (has query string)     | URL remains clean                     |
| Can be bookmarked                       | Cannot be bookmarked                  |
| Example URL: page.php?name=Raj&age=20   | No data shown in URL                  |
| Faster (cached by browser)              | Slightly slower                       |
| Good for: search, filters, reading data | Good for: login, forms, payments      |


✅ Simple Example

GET Method

<form method="GET" action="welcome.php">
    Name: <input type="text" name="username">
    <input type="submit">
</form>


➡ Data will appear in URL like:
welcome.php?username=Raj



POST Method

<form method="POST" action="welcome.php">
    Name: <input type="text" name="username">
    <input type="submit">
</form>


➡ Data is sent hidden, not shown in URL.
      
      `
    },  
    {
      id: 32,
      question: "32. Explain form handling with PHP.",
      answer: "",
      codeExample: `
✅ Form Handling in PHP (Easy Explanation)

Form handling means collecting data from an HTML form and processing it using PHP.

When a user fills a form → clicks submit → data is sent to a PHP script using GET or POST → PHP reads that 
data → shows output or stores in DB.


✅ How Form Handling Works? (Simple Steps)

1. Create an HTML form
2. Choose method → GET or POST
3. Set action → PHP file that will receive form data
4. Use PHP superglobals:
  $_GET[] → to read GET data
  $_POST[] → to read POST data
5. Process or print output


✅ Example: HTML Form + PHP Handling

⭐ Step 1: HTML Form (form.html)

<!DOCTYPE html>
<html>
<body>

<form action="handle.php" method="POST">
    Name: <input type="text" name="username"><br><br>
    Age: <input type="number" name="age"><br><br>
    <input type="submit" value="Submit">
</form>

</body>
</html>



⭐ Step 2: PHP File to Handle Data (handle.php)

<?php
$name = $_POST['username'];   // read name from form
$age  = $_POST['age'];        // read age from form

echo "Your Name is: " . $name . "<br>";
echo "Your Age is: " . $age;
?>



✅ Output

If user enters:

Name: Raj
Age: 20


Then output:

Your Name is: Raj
Your Age is: 20



✅ Important PHP Superglobal Variables

| Variable      | Use                              |
| ------------- | -------------------------------- |
| $_GET[]       | Read form data sent through GET  |
| $_POST[]      | Read form data sent through POST |
| $_REQUEST[]   | Reads both GET + POST data       |



✅ Why POST is preferred for form handling?

More secure
Does not show data in URL
Can send large data
Used for login, registration, payments
      
      `
    },  
    {
      id: 33,
      question: "33. What is sanitization & validation?",
      answer: "",
      codeExample: `
✅ What is Validation? (Simple Meaning)

Validation means checking whether the user’s input is correct, complete, and acceptable.

✔️ Validation = Is the data valid?
✔️ Ensures rules are followed.


✅ Examples of Validation

Email format must be correct
✔ test@example.com
✘ test@.com


Age must be a number
✔ 25
✘ abc


Password must be at least 8 characters

✔ mypassword123
✘ 1234


⭐ PHP Validation Example

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email!";
}




✅ What is Sanitization? (Simple Meaning)

Sanitization means cleaning the input to remove harmful or unwanted characters.

✔️ Sanitization = Make the data safe.
✔️ Removes special characters that may cause hacking (XSS, SQL injection).

✅ Examples of Sanitization

Remove HTML tags
Input: <script>alert(1)</script>
Output: alert(1)

Remove extra spaces
Input: " John "
Output: "John"

Escape harmful symbols
Input: O'Reilly
Output: O\'Reilly


⭐ PHP Sanitization Example

$name = filter_var($name, FILTER_SANITIZE_STRING);


🔍 Difference Between Validation & Sanitization (Easy)

| Validation                                        | Sanitization                                                 |
| ------------------------------------------------- | ------------------------------------------------------------ |
| Checks if the data is correct or not              | Cleans the data to make it safe                              |
| Rejects wrong or invalid data                     | Allows data but removes harmful parts                        |
| Ensures data follows rules (format, length, type) | Removes extra spaces, tags, or symbols                       |
| Example: "Is this email format correct?"          | Example: "Remove HTML tags from input"                       |
| Stops form submission if rules fail               | Does not stop submission; just cleans input                  |
| Used for checking correctness                     | Used for security and cleanliness                            |
| Ensures data is meaningful                        | Ensures data cannot be used for hacking (XSS, SQL Injection) |
| Example: Age must be a number                     | Example: Convert "  John " → "John"                          |
| Example: Password must be 8+ chars                | Example: Remove <script> tags                                |
| Helps maintain data quality                       | Helps protect the system from attacks                        |


🎯 Simple Example Combining Both

$email = $_POST['email'];

// Sanitization
$email = filter_var($email, FILTER_SANITIZE_EMAIL);

// Validation

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid Email!";
} else {
    echo "Valid.";
}


--------------------------------------------------------------

Yes — both are constants in PHP:

✔ FILTER_SANITIZE_EMAIL
✔ FILTER_VALIDATE_EMAIL

✅ What does “constant” mean?

A constant is a value in PHP that:

✔ has a fixed name
✔ has a fixed value
✔ cannot change while the program is running

You cannot modify it like a variable.


🧠 Simple way to remember:

A variable can change → like a water bottle
A constant stays the same → like a solid rock


🔍 Example of a variable:
$x = 10;
$x = 20;   // you changed it


🔍 Example of a constant:

define("PI", 3.14);
echo PI;


You cannot do this:

PI = 4;   // ❌ Error


🧩 So what about PHP filter constants?

FILTER_VALIDATE_EMAIL and FILTER_SANITIZE_EMAIL are predefined constants.

That means PHP has already defined them for you.

Example:

  echo FILTER_VALIDATE_EMAIL;  // prints a number (the constant value)

You cannot change their value.



🎯 Why constants here?

Because PHP uses them as fixed identifiers to tell filter_var() what type of task to perform.

Examples:

  FILTER_VALIDATE_EMAIL → “Validate this as email”
  FILTER_SANITIZE_EMAIL → “Clean this email”

These cannot change, because PHP relies on them.

🧠 Summary

✔ Yes — both are constants.
✔ Constant = a value that cannot be changed.
✔ PHP has many built-in constants for filters.
✔ They help functions like filter_var() know what to do.

If you want, I can explain how constants work internally or show more examples!




✅ What is filter_var()?

filter_var() is a built-in PHP function used to:

✔ Validate data
✔ Sanitize (clean) data

It helps you check if user input is safe and correct format.

🎯 Simple meaning:

Think of filter_var() like a filter machine:
You give it a value (email, number, URL, etc.)
You tell it what type of filter to apply
It returns either:
  ✔ The cleaned value
  ✔ The validated value
  ❌ Or false if invalid

🧩 Syntax

filter_var(value, filter_type);


Example:

filter_var($email, FILTER_VALIDATE_EMAIL);

→ Checks if $email is a valid email format.


🚿 FILTER_SANITIZE_*

Used to clean unwanted characters.

Example:

filter_var($email, FILTER_SANITIZE_EMAIL);

→ Removes illegal characters from email.


✔ FILTER_VALIDATE_*

Used to check format.

Example:

  filter_var($email, FILTER_VALIDATE_EMAIL);

→ Returns email if valid, or false if invalid.


🔍 Examples

1️⃣ Validate an email:
filter_var("test@gmail.com", FILTER_VALIDATE_EMAIL);

✔ Returns: "test@gmail.com"
❌ Returns: false for invalid email.


2️⃣ Sanitize an email:
filter_var("raj!!@gmail.com", FILTER_SANITIZE_EMAIL);

✔ Returns: "raj@gmail.com"
(it cleans the bad characters)


3️⃣ Validate an integer:

filter_var(100, FILTER_VALIDATE_INT);


🧠 Summary

filter_var() = PHP's function to filter, clean, or validate data.

| Purpose  | Example                 | Meaning               |
| -------- | ----------------------- | --------------------- |
| Validate | FILTER_VALIDATE_EMAIL   | Checks if valid email |
| Sanitize | FILTER_SANITIZE_EMAIL   | Cleans email          |

      `
    },
    {
      id: 34,
      question: "34. Explain Sessions with example.",
      answer: "",
      codeExample: `
✅ What is a Session in PHP?

A Session is used to store data for a user temporarily (until the browser is closed).


✔ Simple Words:

A session is like a temporary bag given to a user when they visit a website.
You can store values in this bag (like username, user ID) and use them on any page.


✅ Why do we need Sessions?

To remember a user across multiple pages
Used for login system
Used for shopping cart
Used to store data temporarily during browsing


✅ How Sessions Work? (Simple)

1. session_start() creates a session.
2. PHP gives a unique Session ID to the user.
3. You can store data in $_SESSION[].
4. You can access this data on any page.
5. When browser closes → session deletes.



✅ PHP Session Example (Easy & Short)

Page 1: store_session.php

<?php
session_start();  // Start session

$_SESSION['username'] = "Raj";  // Store data
echo "Session data stored!";
?>



Page 2: get_session.php

<?php
session_start();  // Continue same session

echo "Welcome, " . $_SESSION['username'];
?>


Output:

Welcome, Raj


🚫 Destroy Session (Logout)

<?php
session_start();
session_destroy();
echo "Session ended!";
?>


⭐ Summary (Easy Words)

Session = Temporary storage for each user.
Data stays until the user closes the browser or you destroy it.
Used in login, cart, user tracking.
      `
    },
    {
      id: 35,
      question: "35. Explain Cookies with example.",
      answer: "",
      codeExample: `
🍪 What Are Cookies?

A Cookie is a small piece of data stored in the user's browser.

✔ Simple Words:

A cookie is like a small note saved in your browser.
Websites use this note to remember you next time you visit.


⭐ Why are Cookies used?

To remember username
To remember preferences (theme, language)
To keep users logged in
To track user activity


🕒 Cookie Life

Cookies can stay:

  For minutes
  For days
  For months
  Even after closing the browser

(depends on expiry time)



🍪 PHP Cookie Example (Easy & Short)

✔ Set a Cookie

<?php
setcookie("username", "Raj", time() + 3600);  
// cookie expires in 1 hour

echo "Cookie set!";
?>


✔ Get (Read) a Cookie

<?php
echo "Hello, " . $_COOKIE['username'];
?>


Output:

Hello, Raj


✔ Delete a Cookie

<?php
setcookie("username", "", time() - 3600);  
echo "Cookie deleted!";
?>
      
      `
    },  
    {
      id: 36,
      question: "36. Difference between Session and Cookie.",
      answer: "",
      codeExample: `
✅ Difference Between Session and Cookie

| Session                                         | Cookie                                                |
| ------------------------------------------------| ----------------------------------------------------- |
| Stores data on the server                       | Stores data in the client (browser)                   |
| More secure because data is not visible to user | Less secure because data is stored on user's computer |
| Data is lost when browser is closed             | Data can remain for hours/days/months                 |
| Can store large data                            | Can store very small data (4KB)                       |
| Slower compared to cookies                      | Faster because browser accesses data directly         |
| Used for login, cart, sensitive data            | Used for remember-me, preferences, tracking           |
| Needs session_start()                           | Needs setcookie()                                     |
| Identified using Session ID                     | Identified using Cookie name                          |


      
      `
    },
    {
      id: 37,
      question: "37. Explain error reporting in PHP.",
      answer: "",
      codeExample: `
✅ What is Error Reporting in PHP?

Error reporting in PHP means showing or hiding errors that happen in a PHP script.
It helps developers find mistakes while writing code.

PHP errors include:

  Syntax errors
  Runtime errors
  Warnings
  Notices



⭐ Why is Error Reporting Needed?

To debug your program
To find mistakes quickly
To avoid showing errors to users on a live website
To maintain security (hide sensitive error info)


🔧 How to Enable and Disable Error Reporting

✔ Enable all errors

<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>

✔ Hide all errors

<?php
error_reporting(0);
?>


📝 Common Error Levels

| Error Level   | Meaning                                      |
| ------------- | -------------------------------------------- |
| E_ERROR       | Serious errors (script stops)                |
| E_WARNING     | Warning (script continues)                   |
| E_NOTICE      | Minor mistakes (possible undefined variable) |
| E_ALL         | Shows all errors                             |



⭐ Example of Error Reporting

<?php
error_reporting(E_ALL);      // Show all errors
ini_set("display_errors", 1);

echo $name; // Notice: variable not defined
?>


Output:

Notice: Undefined variable: name


📌 Summary (Easy Words)

Error reporting helps you see and fix errors.
error_reporting() controls which errors are shown.
display_errors decides whether errors are shown on screen.
In development → Enable errors.
In live website → Disable errors.


display_errors is a PHP configuration directive (a setting), not a keyword.
      
      `
    },
    {
      id: 38,
      question: "38. Explain custom error handler.",
      answer: "",
      codeExample: `
✅ What is a Custom Error Handler in PHP?

A custom error handler allows you to create your own function to handle errors instead of PHP’s default 
error messages.

✔ You decide how the error should be displayed
✔ You can log errors, show friendly messages, or hide sensitive details


⭐ Why use a Custom Error Handler?

To show user-friendly errors
To hide PHP’s internal messages (for security)
To log errors to a file
To create custom error formats
To handle different types of errors differently


🔧 How to Create a Custom Error Handler

Step 1: Create your own function
Step 2: Tell PHP to use it using set_error_handler()

✅ Simple Custom Error Handler Example

<?php

// Step 1: Custom error handling function
function myErrorHandler($error_no, $error_msg) {
    echo "Oops! Something went wrong. <br>";
    echo "Error Details: [$error_no] $error_msg";
}

// Step 2: Set this function as error handler
set_error_handler("myErrorHandler");

// Step 3: Create an error
echo $x;  // $x is not defined → triggers custom handler
?>


⭐ Output

Oops! Something went wrong.
Error Details: [8] Undefined variable: x


🔥 What happened here?

echo $x; created a Notice error
PHP sent the error to your function (myErrorHandler)
Your custom message was displayed instead of PHP's default error


📝 Key Points (Easy Words)

set_error_handler() replaces PHP’s normal error display

Custom handler function receives:
  Error number
  Error message


You can:
  Show friendly messages
  Log errors to file
  Ignore small errors
  Stop script if error is serious
      
      `
    },
    {
      id: 39,
      question: "39. Explain try–catch with example.",
      answer: "",
      codeExample: `
✅ What is try–catch in PHP?

try–catch is used to handle exceptions (runtime errors) in PHP.

✔ Code that may cause an error → write inside try
✔ If an error happens → catch block runs
✔ This prevents the program from crashing


⭐ Why use try–catch?

To stop the program from breaking
To show a user-friendly message
To handle errors safely
To write clean, controlled code


🔧 Syntax

try {
    // risky code
}
catch (Exception $e) {
    // what to do if error comes
}


✅ Easy Example

<?php

try {
    $num = 10;
    if ($num == 0) {
        throw new Exception("Number cannot be zero!");
    }

    echo 100 / $num;  // safe
}
catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}

?>


⭐ Output
10


If $num = 0, output becomes:

  Error: Number cannot be zero!


✔ Explanation in simple words

try → Check code that may fail
throw new Exception() → Create a custom error
catch → Receives the error and handles it
$e->getMessage() → Shows the error message
      

------------------------------------------------------------------------------


✅ Full Code
<?php

try {
    $num = 10;
    if ($num == 0) {
        throw new Exception("Number cannot be zero!");
    }

    echo 100 / $num;  // safe
}
catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}

?>


🔍 Step-by-Step Explanation
1. try { ... }

try block means:

  “Try to run this code.
  If anything goes wrong, jump to the catch block.”

So PHP will watch for errors/exceptions inside this block.


2. $num = 10;

You set $num to 10.


3. if ($num == 0)

You check:

  “Is $num equal to 0?”

If yes → something is wrong (you can’t divide by zero).


4. throw new Exception("Number cannot be zero!");

This line manually creates an error.

throw means:
  👉 Stop code inside try block
  👉 Jump to catch block
  👉 Send an error message

new Exception("...") creates an exception object with a message.

This line runs only if $num == 0.


5. echo 100 / $num;

Since $num = 10, this is safe.

100 ÷ 10 = 10
So output will be:

  10

If $num was 0 → exception would be thrown.


6. catch (Exception $e) { ... }

This block will run only if an exception happens.

$e is the object that contains:

  the error message
  error type
  line number, etc.

Inside catch block:

  echo "Error: " . $e->getMessage();


getMessage() returns the message you wrote:

  Number cannot be zero!


📌 Example Output

Case 1: $num = 10

No error → prints:

  10


Case 2: $num = 0

Exception → prints:

  Error: Number cannot be zero!



🧠 Why use try–catch?

To handle errors safely without crashing the program.


Useful for:

Division by zero
File not found
Database errors
API errors
Invalid user input
      `
    },
    {
      id: 40,
      question: "40. Explain multiple catch blocks.",
      answer: "",
      codeExample: `
Multiple Catch Blocks in PHP

A try–catch structure can have multiple catch blocks.
Each catch block handles a different type of exception.
This allows more precise control over error handling.


Why use multiple catch blocks?

  Different exceptions need different responses.
  You can catch specific errors first, general ones last.
  Makes debugging and error messages more accurate.


Example: Multiple Catch Blocks

<?php
try {
    $num = 10 / 0;  // Division by zero → Warning converted to ErrorException
}
catch (DivisionByZeroError $e) {
    echo "Cannot divide by zero.<br>";
}
catch (Error $e) {
    echo "General PHP Error: " . $e->getMessage() . "<br>";
}
catch (Exception $e) {
    echo "Exception occurred: " . $e->getMessage();
}
?>


How this works

1. PHP tries the code in try{}.
2. If division by zero occurs:
  First catch checks for DivisionByZeroError.
3. If not matched, it goes to next catch.
4. Last catch handles any remaining Exception.


Key Points

  Catch blocks run in order (top to bottom).
  Place specific exceptions first, general ones later.
  Only one catch block runs for a given error.
  Helps build cleaner, safer error-handling systems.
      

another example :
catch (InvalidArgumentException $e) {
      echo "Error: ".$e->getMessage()."\n";
}
      `
    },
    {
      id: 41,
      question: "41. What is AJAX?",
      answer: "",
      codeExample: `
⭐ What is AJAX?

AJAX (Asynchronous JavaScript and XML)
is a technique used in web development that allows a webpage to request data from the server without 
reloading the entire page.


🔥 In simple words:

AJAX = Update part of a webpage without refreshing it.


⭐ Why AJAX is used?

To make web pages faster and more interactive
To load data in the background
To submit forms without refreshing
To update only one section (like chat message, search suggestions)


⭐ Example (Very Simple)

👉 HTML:

<button onclick="loadData()">Get Message</button>
<div id="result"></div>


👉 JavaScript (AJAX request):

function loadData() {
  let xhr = new XMLHttpRequest();     // create request object
  xhr.open("GET", "data.php", true);  // request file
  xhr.onload = function() {
    document.getElementById("result").innerHTML = xhr.responseText;
  };
  xhr.send();
}


👉 PHP (data.php):

echo "Hello, this is AJAX response!";


⭐ Result:

When you click the button:
✔ Data loads from data.php
✔ Only the <div> updates
✔ Page does NOT refresh
      
meaning of Asynchronous:
👉 Asynchronous = Does NOT wait. Keeps running.
------------------------------------------------------------------------------

AJAX is not directly part of PHP — but PHP is used with AJAX
✅ PHP does NOT execute AJAX

  AJAX happens inside the browser, using JavaScript.
  PHP runs on the server, not in the browser.

So how do they work together?

AJAX (JavaScript) sends a request to a PHP file without reloading the webpage.

Simple Flow:

1. User clicks button
2. JavaScript (AJAX) sends request → getData.php
3. PHP runs, processes request (database, logic, etc.)
4. PHP returns result (JSON, text, HTML)
5. AJAX receives response and updates the page dynamically.


✔ Example: AJAX calling PHP
HTML + JavaScript AJAX

<button onclick="loadData()">Load Data</button>
<div id="result"></div>

<script>
function loadData() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "data.php", true);

    xhr.onload = function() {
        document.getElementById("result").innerHTML = xhr.responseText;
    };

    xhr.send();
}
</script>


PHP file (data.php)

<?php
echo "This data is coming from PHP!";
?>


📌 Key Point

AJAX uses JavaScript to talk to PHP.
PHP cannot do AJAX, but it responds to AJAX.

      `
    },
    {
      id: 42,
      question: "42. Explain AJAX workflow.",
      answer: "",
      codeExample: `
✅ AJAX Workflow (How AJAX Works)

AJAX = Asynchronous JavaScript And XML
(It works with PHP, Node, Python, Java — any backend.)

AJAX allows a webpage to send/receive data without reloading the whole page.


🚀 AJAX Workflow – Step-by-Step

1. User performs an action

Example:

  Clicks a button
  Chooses from dropdown
  Types something in search box

👉 JavaScript captures this action.


2. JavaScript creates an AJAX request

JavaScript uses:
  XMLHttpRequest
  or fetch()
  or jQuery $.ajax()
This request is sent to a server-side file (PHP, etc.).


3. AJAX sends data to the server

Example:

fetch("server.php?name=Raj")

This sends a request behind the scenes (asynchronously).


4. Server processes the request

Backend (PHP) receives the request.

Example (server.php):

<?php
$name = $_GET['name'];
echo "Hello $name!";
?>

Server sends back a response (text, JSON, HTML, etc.).


5. AJAX receives server response

JavaScript receives the response without page reload.


6. JavaScript updates the webpage

Example:

document.getElementById("result").innerHTML = response;

Only a small part of the page updates → page does NOT reload.


📌 Summary (Very Short)

| Step | Explanation                        |
| ---- | ---------------------------------- |
| 1    | User triggers an event             |
| 2    | JS creates AJAX request            |
| 3    | Request sent to server (PHP)       |
| 4    | Server processes & sends back data |
| 5    | JS receives response               |
| 6    | Webpage updates without reload     |


✔ Simple Visual Diagram (Text Format)

User Action
     ↓
JavaScript (AJAX request)
     ↓
Server (PHP)
     ↓
Response (JSON/HTML/Text)
     ↓
JavaScript updates webpage




      `
    },
    {
      id: 43,
      question: "43. Write AJAX + PHP example.",
      answer: "",
      codeExample: `
✅ AJAX + PHP Example
Goal:

When user clicks a button, AJAX sends data to PHP without reloading the page, and shows the result.

📌 1. HTML + JavaScript (AJAX Code)
<!DOCTYPE html>
<html>
<body>

<input type="text" id="name" placeholder="Enter Name">
<button onclick="sendData()">Send</button>

<p id="result"></p>

<script>
function sendData() {
    let userName = document.getElementById("name").value;

    // Create AJAX object
    let xhr = new XMLHttpRequest();

    // Call PHP file
    xhr.open("POST", "process.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");   //You are telling the server how your data is formatted when you send it.
                                                                                 //example name=Raj, key=value&key2=value2 ...
    // When PHP sends response
    xhr.onload = function() {
        document.getElementById("result").innerHTML = this.responseText;
    };

    // Send data to PHP
    xhr.send("name=" + userName);
}
</script>

</body>
</html>



📌 2. PHP File: process.php
<?php
// Read data sent from AJAX
$name = $_POST['name'];

// Send response back to AJAX
echo "Hello, " . $name;
?>



✔ How it works (short):

User enters name → clicks button
JavaScript sends data to PHP using AJAX (POST).
PHP receives data and returns a message.
JavaScript updates the webpage without reload.
      

------------------------------------------------------------------------------


get method example :


<!DOCTYPE html>
<html>
<body>

<input type="text" id="name" placeholder="Enter Name">
<button onclick="sendData()">Send</button>

<p id="result"></p>

<script>
function sendData() {
    let userName = document.getElementById("name").value;

    // Create AJAX object
    let xhr = new XMLHttpRequest();

    // Send data using GET (added in URL)
    xhr.open("GET", "process.php?name=" + encodeURIComponent(userName), true);

    // When PHP sends response
    xhr.onload = function() {
        document.getElementById("result").innerHTML = this.responseText;
    };

    // GET does NOT send body, so no xhr.send(data)
    xhr.send();
}
</script>

</body>
</html>



💡 PHP (process.php)
<?php
echo "Hello, " . $_GET['name'];
?>



| Code                                | Means                                      |
| ----------------------------------- | ------------------------------------------ |
| xhr.responseText                    | Directly using the variable name           |
| this.responseText (inside onload)   | Browser automatically sets this to xhr     |


🔍 WHY we don’t write setRequestHeader() in GET?

Because:
✔ GET sends data inside the URL
✔ GET does not send a body
✔ Therefore no content type is needed

Only POST needs this header to describe the body format.

📌 Summary
| Method   | Where Data Goes | Need Request Header?   |
| -------- | --------------- | -----------------------|
| GET      | URL             | ❌ No                 |
| POST     | Request body    | ✅ Yes                |

      `
    },
    {
      id: 44,
      question: "44. Explain exception handling in detail.",
      answer: "",
      codeExample: `
✅ Exception Handling in PHP (Detailed Explanation)

Exception Handling is a mechanism in PHP that allows you to detect errors, handle them safely, and 
continue program execution without crashing the script.

Instead of stopping the program when an error happens, PHP throws an Exception object, and you handle it 
using:

try
catch
throw
finally (optional)

⭐ Why Do We Need Exception Handling?

Because errors happen in real projects:

  Database not connected
  File not found
  API request failed
  Wrong user input

Instead of showing a scary error, we can show a safe, user-friendly message.

🔷 Keywords Used in Exception Handling

1️⃣ try block

Code that may cause an error.
PHP watches this block.

try {
    // risky code
}


2️⃣ catch block

Runs only if an exception occurs.
Receives the exception object.

catch (Exception $e) {
    echo $e->getMessage();
}


3️⃣ throw

Used to manually create (throw) an exception.
throw new Exception("Something went wrong");


4️⃣ finally (optional)

Always runs — error or no error.
Used for cleanup (closing DB, files, etc.)

finally {
    echo "Done!";
}


✅ Simple Example of Exception Handling

<?php
try {
    $num = 0;

    if ($num === 0) {
        throw new Exception("Number cannot be zero!");
    }

    echo 10 / $num;
}

catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}

finally {
    echo " — Process Finished";
}
?>


Output:

Error: Number cannot be zero! — Process Finished


📌 finally runs even when an error happens.

⭐ How It Works (Simple Explanation)
      
| Part      | Meaning                                  |
| --------- | ---------------------------------------- |
| try       | Code that might break                    |
| throw     | When error happens, throw exception      |
| catch     | Catches exception and shows safe message |
| finally   | Always runs at the end                   |

      `
    },
    {
      id: 45,
      question: "45. How to avoid errors in PHP?",
      answer: "",
      codeExample: `
✅ How to Avoid Errors in PHP

Avoiding errors in PHP means writing clean, safe, and predictable code. Below are the best methods:


1. Use Proper Error Reporting (During Development)

Enable errors while developing so you can find mistakes early.

error_reporting(E_ALL);
ini_set("display_errors", 1);

Why?
You can quickly see undefined variables, wrong function names, missing semicolons, etc.


2. Turn Off Error Display in Production

On live servers, errors should not be shown to users.

ini_set("display_errors", 0);

Why?
Showing errors can reveal sensitive information (file paths, queries, etc.).


3. Always Use try–catch Blocks

Wrap risky code inside try–catch to prevent the script from crashing.

try {
    $num = 10 / 0;
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}


4. Validate User Input

Always check if the input is correct before using it.

Example:

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email!";
}


Why?
Avoids type errors, SQL errors, unexpected null values, etc.


5. Sanitize User Input

Remove dangerous characters before using input.

$name = filter_var($name, FILTER_SANITIZE_STRING);

Why?
Prevents HTML/JS and SQL injection issues.


6. Use isset() and empty() Before Accessing Variables

Avoid “undefined index” or “undefined variable” errors.

if (isset($_POST['name'])) {
    echo $_POST['name'];
}


7. Use file_exists() Before Reading Files
if (file_exists("data.txt")) {
    $content = file_get_contents("data.txt");
}


Why?
Prevents file-not-found errors.


8. Use Prepared Statements for Database Queries

Avoid SQL errors and injections.

$stmt = $conn->prepare("SELECT * FROM users WHERE email=?");
$stmt->bind_param("s", $email);
$stmt->execute();


9. Check Database Connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


10. Write Comments and Keep Code Clean

Helps avoid logical mistakes and confusion.


11. Use Version Control (Git)

You can recover from mistakes and avoid breaking the project.


12. Test Your Code Regularly

Run small pieces frequently to avoid big failures later.


✅ Simple Summary

| Method              | Why it Avoids Errors          |
| ------------------- | ----------------------------- |
| Error reporting on  | Detect mistakes early         |
| try–catch           | Prevent crashes               |
| Validate input      | Avoid wrong data              |
| Sanitize input      | Avoid unsafe data             |
| Check variables     | Avoid undefined index errors  |
| Prepared statements | Avoid SQL errors              |
| Check file/database | Avoid missing resource errors |

      `
    },
    {
      id: 51,
      question: "51. Explain Classes & Objects with example.",
      answer: "",
      codeExample: `
Classes & Objects in PHP

Class

A class is a blueprint/template.
It defines properties (variables) and methods (functions).
It does NOT take memory until an object is created.


Object

An object is created from a class.
It actually stores data and can use class functions.
You can create many objects from one class.


Simple Example
Step-by-step:

1. Create a Class

<?php
class Car {
    public $model;      // property
    public $color;      // property

    public function startEngine() {   // method
        return "Engine Started!";
    }
}
?>


2. Create an Object

<?php
$myCar = new Car();  // object

$myCar->model = "BMW";  
$myCar->color = "Black";

echo $myCar->startEngine();  // calling method
?>


Output:
Engine Started!


Explanation in Easy Words

| Term           | Meaning                              |
| -------------- | ------------------------------------ |
| Class          | Blueprint (design) of something.     |
| Object         | Actual item made from the blueprint. |
| Properties     | Data/variables inside the class.     |
| Methods        | Functions inside the class.          |
| new            | Used to create object from class.    |


Real-Life Analogy

  Class = Mobile Phone Design
  Object = Actual Mobile Phone you use
  Many phones can be created from one design → same like many objects from one class.
      
      `
    },
    {
      id: 52,
      question: "52. Explain Methods in OOP with example.",
      answer: "",
      codeExample: `
✅ Methods in OOP (PHP)

Methods are functions written inside a class.
They define the behavior / actions of an object.

A class = blueprint
An object = real thing created from class
A method = function that object can perform

✅ Simple Example
Class with Method

<?php
class Car {

    // Method
    function startEngine() {
        echo "Engine started!";
    }
}

// Create object
$myCar = new Car();

// Call method
$myCar->startEngine();
?>


Output
Engine started!


📝 Explanation

class Car → blueprint of car
function startEngine() → method written inside class
$myCar = new Car() → object created
$myCar->startEngine() → calling the method using object



✅ Methods with Parameters Example

<?php
class Calculator {

    // Method with parameters
    function add($a, $b) {
        return $a + $b;   // returns sum
    }
}

$obj = new Calculator();

echo $obj->add(10, 20);  // passing values
?>


Output
30


⭐ Methods Key Points

| Feature              | Explanation                          |
| -------------------- | ------------------------------------ |
| Defined inside class | Methods are functions within a class |
| Called by object     | $object->methodName()                |
| Can take parameters  | Input values to method               |
| Can return output    | return statement                     |
| Represent behavior   | What the object can do               |

      
      `
    },
    {
      id: 53,
      question: "53. What is Inheritance? Explain with example.",
      answer: "",
      codeExample: `
✅ What is Inheritance? (Simple Explanation)

Inheritance allows one class (child) to use the properties and methods of another class (parent).

👉 It helps to reuse code and reduce duplication.


Example in real life:

  A Car is a Vehicle (Child → Parent).
  Car inherits features like engine, wheels, speed.


✅ Simple PHP Inheritance Example


Parent Class (Animal.php)

<?php
class Animal {
    public $name;

    function eat() {
        echo "Animal is eating<br>";
    }
}
?>



Child Class (Dog.php)

<?php
class Dog extends Animal {

    function bark() {
        echo "Dog is barking<br>";
    }
}
?>



Main File (index.php)

<?php
require 'Animal.php';
require 'Dog.php';

$dog = new Dog();
$dog->name = "Tommy";

echo $dog->name . "<br>";
$dog->eat();   // From parent class
$dog->bark();  // From child class
?>



✔ Parent functions reused
✔ Child has extra features
✔ Classes written in separate PHP tags



✅ Types of Inheritance in PHP

PHP supports these:


1. Single Inheritance

✔ One parent → One child

A → B

Example:

Animal → Dog


2. Multilevel Inheritance

✔ Child → becomes parent of another child

A → B → C

Example:

Animal → Dog → BabyDog


3. Hierarchical Inheritance

✔ One parent → multiple children

    A
   / \\
  B   C


Example:

Vehicle → Car, Bike



❌ PHP does NOT support Multiple Inheritance

(One child extending multiple parents)

A + B → C  (NOT allowed in PHP)

But you can use Traits to achieve this behavior.
      
      
      `
    },
    {
      id: 54,
      question: "54. Write example of Constructor & Destructor.",
      answer: "",
      codeExample: `
✅ Constructor & Destructor in PHP (Simple Explanation)
Constructor

Special method that runs automatically when object is created.
Used for initialization (ex: assign default values).


Destructor

Special method that runs automatically when object is destroyed.
Used for cleanup (ex: closing file, database connection).



✅ Simple PHP Example

✔ Constructor Example

<?php
class Student {
    public $name;

    // Constructor
    function __construct($studentName) {
        $this->name = $studentName;
        echo "Constructor Called: Student name is $this->name<br>";
    }
}

// Create object
$stu1 = new Student("Raj");
?>


Output
Constructor Called: Student name is Raj



✔ Destructor Example

<?php
class Demo {
    // Destructor
    function __destruct() {
        echo "Destructor Called: Object Deleted";
    }
}

// Create object
$obj = new Demo();

// When script ends, destructor automatically runs
?>


Output
Destructor Called: Object Deleted



💡 Constructor + Destructor Together

<?php
class Person {
    public $name;

    function __construct($n) {
        $this->name = $n;
        echo "Hello $this->name, object created!<br>";
    }

    function __destruct() {
        echo "Goodbye $this->name, object destroyed!";
    }
}

$p = new Person("Mohan");
?>


Output

Hello Mohan, object created!
Goodbye Mohan, object destroyed!


🎯 Key Points   

| Constructor                               | Destructor                          |
| ----------------------------------------- | ----------------------------------- |
| Runs automatically when object is created | Runs automatically when script ends |
| Used for setup                            | Used for cleanup                    |
| __construct()                             | __destruct()                        |
| Can accept parameters                     | Cannot accept parameters            |

      `
    },
    {
      id: 55,
      question: "55. What is Self keyword? What is Parent keyword?",
      answer: "",
      codeExample: `
✅ What is self Keyword in PHP?

self = used to access class’s own properties and methods.

Used inside the same class.
Works with static properties/methods.
Used with :: (scope resolution operator).


⭐ Example of self

<?php
class Test {
    public static $name = "Raj";

    public static function showName() {
        echo self::$name; // accessing same class static property
    }
}

Test::showName();
?>


✔ Output:
Raj



✅ What is parent Keyword in PHP?

parent = used to access methods or properties of the parent (base) class.

Used in inheritance.
Used when child wants to use parent class methods.
Used with :: (scope resolution operator).


⭐ Example of parent

<?php
class A {
    public function message() {
        echo "Message from Parent Class A";
    }
}

class B extends A {
    public function show() {
        parent::message(); // calling parent class method
    }
}

$obj = new B();
$obj->show();
?>


✔ Output:

Message from Parent Class A


🔍 Quick Difference: self vs parent

| Keyword      | Used For                                     | Meaning          |
| ------------ | -------------------------------------------- | ---------------- |
| self::       | Access class’s own static methods/properties | “Use same class” |
| parent::     | Access parent class methods/properties       | “Use base class” |



----------------------------------------------------------------------------------


What is static keyword in PHP?

The static keyword is used to create properties (variables) and methods (functions) in a class that belong 
to the class itself, not to any object.

✔ You can access static members without creating an object
✔ Static properties keep their value between function calls
✔ Static methods cannot use $this (because they don’t work with objects)


1. Static Property Example

Static property = shared by all objects.

<?php

class Counter {
    public static $count = 0;  // static property

    public function increase() {
        self::$count++;  // accessing static property
    }
}

$obj1 = new Counter();
$obj1->increase();

$obj2 = new Counter();
$obj2->increase();

echo Counter::$count; // Output: 2
?>


Why result is 2?

Because static $count is shared—both objects increase the same value.


2. Static Method Example

Static method = call directly using class name.

<?php

class MathTool {
    public static function add($a, $b) {
        return $a + $b;
    }
}

echo MathTool::add(5, 3); // Output: 8
?>


✔ No need to create an object
✔ Works directly with class


3. Static inside a function

Static variables remember their value even after function ends.

<?php

function test() {
    static $x = 0;
    $x++;
    echo $x . "<br>";
}

test(); // 1
test(); // 2
test(); // 3
?>


When to use static?

Use static when:
  You want a value shared across all objects
  You want to call a method without creating an object
  You have helper/utility functions (like Math functions)
  You need counters or logs


Important Rules

✓ Access static items with
self::$variable
self::method()

✓ Cannot use $this inside static methods
(because $this is for objects, but static is for class)
      
      `
    },
    {
      id: 56,
      question: "56. Explain Object Cloning with example.",
      answer: "",
      codeExample: `
⭐ Object Cloning in PHP

Object Cloning means creating a copy of an existing object.

In PHP, we clone an object using the keyword:


clone


When you clone:

A new object is created.
All properties of the old object are copied.
Both objects become separate copies (changing one does NOT affect the other).


✅ Simple Example
File: obj1.php

<?php

class Student {
    public $name;
    public $course;
}

$student1 = new Student();
$student1->name = "Raj";
$student1->course = "BCA";

$student2 = clone $student1;   // cloning

$student2->name = "Amit";      // change copied object

echo "Student 1: " . $student1->name . "<br>";
echo "Student 2: " . $student2->name;

?>


🎯 Output

Student 1: Raj
Student 2: Amit


Meaning:

  Changing $student2 does not change $student1.
  They are separate objects after cloning.


  
⭐ Using __clone() Method

If you want some extra action during cloning (like resetting values), PHP provides the magic method:

__clone()


Example with __clone()

<?php

class Book {
    public $title;
    public $price;

    public function __clone() {
        // This runs automatically during cloning
        $this->price = 0;  
    }
}

$book1 = new Book();
$book1->title = "PHP Guide";
$book1->price = 500;

$book2 = clone $book1;

echo $book1->price . "<br>";  // 500
echo $book2->price;           // 0 (reset in __clone)

?>


✔ Key Points

| Feature         | Description                                  |
| --------------- | -------------------------------------------- |
| clone keyword   | Creates a copy of object                     |
| __clone()       | Special method that runs during cloning      |
| Separate memory | Cloned object changes do NOT affect original |
| Used for        | Creating duplicate objects safely            |

      
      `
    },
    {
      id: 57,
      question: "57. Explain OOP with MySQL using database class.",
      answer: "",
      codeExample: `
✅ OOP with MySQL Using Database Class (Easy Explanation)

OOP with MySQL means:

  We create a Database class
  That class handles connection, insert, update, delete, select
  Then we create an object of that class and use it anywhere.

This makes code clean, reusable, and easy to manage.



✅ Simple Example: Database Class in PHP

📌 database.php
<?php
class Database {
    private $conn;

    // Constructor → Connect to MySQL
    public function __construct($host, $user, $pass, $db) {
        $this->conn = new mysqli($host, $user, $pass, $db);

        if ($this->conn->connect_error) {
            die("Connection Failed: " . $this->conn->connect_error);
        }
    }

    // SELECT data
    public function getData($sql) {
        $result = $this->conn->query($sql);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    // INSERT, UPDATE, DELETE
    public function executeQuery($sql) {
        return $this->conn->query($sql);
    }

    // Destructor → Close Database
    public function __destruct() {
        $this->conn->close();
    }
}
?>



✅ Using the Database Class
📌 fetch_users.php

<?php
include "database.php";

$db = new Database("localhost", "root", "", "testdb");

$data = $db->getData("SELECT * FROM users");

foreach ($data as $row) {
    echo $row['name'] . "<br>";
}
?>



📌 insert_user.php

<?php
include "database.php";

$db = new Database("localhost", "root", "", "testdb");

$sql = "INSERT INTO users (name, email) VALUES ('Raj', 'raj@gmail.com')";
$db->executeQuery($sql);

echo "User Inserted Successfully!";
?>


✅ Why Use OOP for Database?

| Feature              | Benefit                        |
| -------------------- | ------------------------------ |
| Reusability          | Same class used for many pages |
| Security             | One place to update queries    |
| Clean Code           | Logic separated from design    |
| Easy Maintenance     | Only one class to modify       |



⭐ Summary (Very Simple)

Create a Database class
Use constructor to connect
Use functions for select and insert/update/delete
Use destructor to close connection
Create an object to use database anywhere
      
      `
    },
    {
      id: 58,
      question: "58. Difference between Class and Object.",
      answer: "",
      codeExample: `
✅ Difference between Class and Object
    
| Class                                              | Object                                                 |
| ---------------------------------------------------| -------------------------------------------------------|
| Class is a blueprint / template.                   | Object is a real instance created from a class.        |
| It defines properties and methods.                 | It uses properties and methods of the class.           |
| It does not occupy memory until object is created. | It occupies memory.                                    |
| Class is like a plan of a house.                   | Object is the actual built house.                      |
| You can create many objects from one class.        | Each object is unique but created from the same class. |
| Class is declared using the class keyword.         | Object is created using the new keyword.               |
| Example: class Car { }                             | Example: $c1 = new Car();                              |



✅ Simple Example (Separate PHP tags as you want)

Class

<?php
class Car {
    public $brand;
    public $color;

    public function start() {
        echo "Car is starting...";
    }
}
?>



Object

<?php
$myCar = new Car();        // Creating object
$myCar->brand = "Honda";   // Access property
$myCar->color = "Red";

echo $myCar->brand;        // Output: Honda
$myCar->start();           // Calling method
?>


⭐ Super Easy Explanation

Class = Design / Blueprint
Object = Real thing created from the design
      
      `
    },
    {
      id: 59,
      question: "59. Why OOP is used in PHP?",
      answer: "",
      codeExample: `
✅ Why OOP is used in PHP?

(OOP = Object-Oriented Programming)

OOP is used in PHP because it makes coding cleaner, faster, reusable, and easy to manage, especially for 
large projects.


⭐ Main Reasons Why OOP is Used in PHP

1. Reusability of Code

Once you create a class, you can use it many times.
Avoids writing the same code again.
Example: Database class, User class, Email class.


2. Easy to Maintain

Code is organized into classes → easier to update and fix.
You change something in one class, and it affects all objects.


3. Better Organization

Data + functions stay together inside a class.
Makes the project look clean and structured.


4. Security

OOP gives access modifiers:
  public
  private
  protected
Helps hide important data (Encapsulation).


5. Supports Real-World Modeling

Everything can be represented as objects.
Example: Car, Student, Product, Order.


6. Inheritance reduces code

Child classes can use parent class methods.
Less code → faster development.


7. Polymorphism

Same function name but different behavior.
Used in frameworks and large systems.


8. Used in Modern PHP Frameworks

All major frameworks use OOP:

  Laravel
  CodeIgniter
  Symfony
  WordPress (mostly)

So to work professionally, OOP is required.


⭐ Final Short Answer

OOP is used in PHP because it provides code reusability, security, easy maintenance, better structure, 
real-world modeling, inheritance, and is required for modern frameworks.
      
      `
    },
    {
      id: 60,
      question: "60. Explain method overriding and method overloading with example.",
      answer: "",
      codeExample: `
✅ Method Overriding (Supported in PHP)

Definition:
When a child class redefines a method of the parent class, using the same name and same parameters.

👉 Used in Inheritance
👉 Runtime Polymorphism


✔ Example of Method Overriding

File: ParentClass.php

<?php
class ParentClass {
    public function showMessage() {
        echo "Message from Parent Class";
    }
}
?>


File: ChildClass.php

<?php
class ChildClass extends ParentClass {
    // Overriding parent method
    public function showMessage() {
        echo "Message from Child Class";
    }
}
?>


File: test.php

<?php
include "ParentClass.php";
include "ChildClass.php";

$obj = new ChildClass();
$obj->showMessage();   // Output: Message from Child Class
?>


✔ Child method replaces Parent method.



❌ Method Overloading (NOT supported like Java)

PHP does NOT support method overloading by same method name with different parameters.

BUT
PHP supports overloading using Magic Methods:

__call() → for calling missing methods
__callStatic() → for missing static methods


✔ PHP Method Overloading Example (Using __call)

File: Test.php

<?php
class Student {
    // Overloading using magic method
    public function __call($name, $arguments) {
        echo "Method: $name | Arguments: ";
        print_r($arguments);
    }
}
?>


File: run.php

<?php
include "Test.php";

$obj = new Student();

$obj->details("Raj");  
$obj->details("Raj", 21);  
?>


Output:

Method: details | Arguments: Array ( [0] => Raj )
Method: details | Arguments: Array ( [0] => Raj [1] => 21 )



✔ Same method name can accept different arguments using __call()
✔ This is PHP style method overloading.



✅ Difference Table

| Feature           | Method Overriding     | Method Overloading                     |
| ----------------- | --------------------- | -------------------------------------- |
| Supported in PHP? | ✔ Yes                 | ✔ Partially (Magic methods)           |
| Used in           | Inheritance           | Same class                             |
| Method name       | Same                  | Same                                   |
| Parameters        | Same                  | Different                              |
| Purpose           | Replace parent method | Handle different argument types/counts |
| Binding           | Runtime               | Runtime                                |



⭐ Quick Summary

Overriding → Child class replaces parent class method.
Overloading → Same method name with different arguments (via __call).  



------------------------------------------------------------------------------


✅ What is __call()?

__call() is a magic method in PHP.

✔ It runs automatically
✔ When you try to call a non-existing method on an object.


Syntax

public function __call($methodName, $arguments) { }


Simple Example

<?php
class Test {
    public function __call($method, $args) {
        echo "Method '$method' does not exist!<br>";
        print_r($args);
    }
}

$obj = new Test();
$obj->hello("Raj", 20); 
?>


Output

Method 'hello' does not exist!
Array ( [0] => Raj [1] => 20 )



✅ What is __callStatic()?

__callStatic() is also a magic method, BUT:

✔ Used for static method calls
✔ Runs when a static non-existing method is called


Syntax

public static function __callStatic($methodName, $arguments) { }


Example

<?php
class Demo {
    public static function __callStatic($method, $args) {
        echo "Static method '$method' not found!<br>";
        print_r($args);
    }
}

Demo::foo(100, 200);
?>


Output

Static method 'foo' not found!
Array ( [0] => 100 [1] => 200 )



🔍 Difference between __call() and __callStatic()

| Feature          | __call()                             | __callStatic()                             |
| ---------------- | -------------------------------------| -------------------------------------------|
| When it is used? | When object calls a missing method   | When class calls a missing static method   |
| Call type        | $obj->method()                       | ClassName::method()                        |
| Static or not?   | Works for non-static methods         | Works for static methods                   |
| Method type      | Called on object instance            | Called on class without creating object    |
| Example          | $obj->hello()                        | Demo::hello()                              |


✅ What is print_r()?

print_r() is a built-in PHP function used to print arrays and objects in a readable format.

Example

<?php
$arr = ["Raj", 25, "PHP"];
print_r($arr);
?>


Output

Array ( [0] => Raj [1] => 25 [2] => PHP )

Used mainly for:

✔ Debugging
✔ Checking object values
✔ Printing array contents


🔥 Final Summary

__call()

  Triggered when calling object method that doesn’t exist
  Example: $obj->abc()


__callStatic()

  Triggered when calling static method that doesn’t exist
  Example: Test::abc()


print_r()

  Displays arrays/objects in readable format
  Used for debugging


-----------------------------------------------------------------------------


✅ Meaning of :: in PHP

:: is called the Scope Resolution Operator.

It is used to access:

  Static methods
  Static properties
  Class constants
  Class methods without creating an object

In your example:

  Demo::foo();

You are calling a static method (or trying to).


🧠 Why is __callStatic() executed?

Because foo() does not exist in the class.


PHP checks:


1️⃣ Does Demo class have a static function named foo()?
❌ No, it doesn’t.


2️⃣ So PHP calls the magic method:

public static function __callStatic($method, $args)


🔍 So this happens:

Demo::foo(100, 200);


PHP runs:

$method = "foo"
$args = [100, 200]


Output:

Static method 'foo' not found!
Array ( [0] => 100 [1] => 200 )


--------------------------

✅ Difference Between :: and -> (Simple Table)

| Operator               | Symbol | Used For                                                | Example       | Meaning                           |
| -----------------------| -------| --------------------------------------------------------| --------------| ----------------------------------|
| Static Access Operator | ::     | Access static methods, static properties, and constants | Demo::test(); | Use class without creating object |
| Object Access Operator | ->     | Access normal (non-static) methods and properties       | $obj->test(); | Requires creating an object first |



📌 More Easy Explanation — Row by Row

| Concept             | ::                     | ->                   |
| ------------------- | -----------------------| ---------------------|
| Need object?        | ❌ No object required  | ✔ Yes, needs object |
| Used in static?     | ✔ Yes                  | ❌ No               |
| Used in non-static? | ❌ No                  | ✔ Yes               |
| Access type         | Class level            | Object level         |
| Example             | Demo::hello()          | $d->hello()          |


📘 Example to Understand Clearly

Using :: (static)

class Test {
    public static function hello() {
        echo "Static Hello!";
    }
}

Test::hello();

Using -> (object)
class Test {
    public function hello() {
        echo "Object Hello!";
    }
}

$obj = new Test();
$obj->hello();
      `
    },
    {
      id: 61,
      question: "61. Explain access modifiers (public/protected/private).",
      answer: "",
      codeExample: `
✅ Access Modifiers in PHP (public, protected, private)

Access modifiers define who can access the properties and methods of a class.

1️⃣ public

Accessible from anywhere
  Inside the class
  Outside the class
  In child classes (inheritance)
Most open access.

✔ Example
class Test {
    public $name = "Raj";

    public function showName() {
        echo $this->name;
    }
}

$obj = new Test();
$obj->showName();      // Allowed
echo $obj->name;       // Allowed



2️⃣ protected

Accessible only:

  Inside the class
  Inside child classes

❌ Not accessible from outside the class

✔ Example
class A {
    protected $value = 100;
}

class B extends A {
    public function show() {
        echo $this->value;   // Allowed
    }
}

$obj = new B();
$obj->show();             // Allowed
echo $obj->value;         // ❌ ERROR (outside class)



3️⃣ private

Accessible only:
  Inside the same class
❌ Not accessible in child classes
❌ Not accessible outside

✔ Example

class A {
    private $secret = "Hidden";

    public function showSecret() {
        echo $this->secret;   // Allowed
    }
}

class B extends A {
    public function test() {
        echo $this->secret;   // ❌ ERROR (child class cannot access private)
    }
}

$obj = new A();
$obj->showSecret();          // Allowed
echo $obj->secret;           // ❌ ERROR (outside)



📌 Quick Comparison Table

| Modifier      | Same Class | Child Class | Outside Class |
| ------------- | ---------- | ----------- | ------------- |
| public        | ✔ Yes      | ✔ Yes      | ✔ Yes         |
| protected     | ✔ Yes      | ✔ Yes      | ❌ No         |
| private       | ✔ Yes      | ❌ No      | ❌ No         |


🎯 Simple Real-Life Example

class BankAccount {

    public $name;           // anyone can see your name
    protected $balance;     // only you + bank system
    private $pin;           // only you (class)

    public function __construct($n, $b, $p) {
        $this->name = $n;
        $this->balance = $b;
        $this->pin = $p;
    }

    public function showBalance() {
        echo "Balance: " . $this->balance;
    }
}

$obj = new BankAccount("Raj", 5000, 1234);

echo $obj->name;        // ✔ Allowed
$obj->showBalance();    // ✔ Allowed

echo $obj->balance;     // ❌ Not allowed (protected)
echo $obj->pin;         // ❌ Not allowed (private)
      


-------------------------------------------------------------


“Inside <?php ?> multiple classes are allowed? You earlier said it is not possible?”

✔ Yes — multiple classes CAN exist inside one PHP file.
✔ That is completely allowed and normal.

What I said earlier was something different:


🔥 One class cannot access another class’s private property.

Not "you cannot write multiple classes in one file."
These are two different things.

Let me explain cleanly 👇

✅ 1. Multiple classes inside a single PHP file → ALLOWED

Example:

<?php
class A {}
class B {}
class C {}
?>


✔ 100% valid
✔ No error
✔ Used in many real projects


❌ 2. Child class cannot access parent’s private property

This is the rule that caused confusion.

class A {
    private $secret = "Hidden";
}

class B extends A {
    public function test() {
        echo $this->secret;  // ❌ ERROR (private not accessible)
    }
}


So the error is because of private, not because of multiple classes.


🎯 Why does this work?

$obj = new B();
$obj->showSecret(); // Allowed


Because showSecret() is inside class A, where $secret is private.
Inside the same class, private properties ARE allowed.


🎯 Why does this give error?

class B extends A {
    public function test() {
        echo $this->secret; // ❌ ERROR
    }
}


Because child class B cannot access A’s private property.

Even though both classes are inside one PHP file —
private visibility rules still apply.



✔ Final Summary (Easy)

| Concept                                           | Allowed? | Reason                           |
| ------------------------------------------------- | -------- | -------------------------------- |
| Multiple classes in one PHP file                  | ✔ YES    | PHP supports it                  |
| Access parent’s private property from child       | ❌ NO    | Private = only inside same class |
| Access private property inside its own class      | ✔ YES    | That’s how private works         |
| Access private property from outside using object | ❌ NO    | Not allowed                      |


If you want, I can show you the difference between:

private
protected
public
      
      `
    },
    {
      id: 62,
      question: "62. Write code for simple PHP class.",
      answer: "",
      codeExample: `

      ✅ Simple PHP Class Example

<?php

class Car {
    public $brand;     // property
    public $color;     // property

    // Method to set car details
    public function setDetails($brand, $color) {
        $this->brand = $brand;   // using $this to access object property
        $this->color = $color;
    }

    // Method to display car details
    public function showDetails() {
        echo "Brand: " . $this->brand . "<br>";
        echo "Color: " . $this->color;
    }
}

$car1 = new Car();           // creating object
$car1->setDetails("BMW", "Black");
$car1->showDetails();

?>


🔍 Explanation (Easy & Simple)

1. Class

A blueprint/template.
Contains properties (variables) and methods (functions).


2. Object

Created from the class.
Has its own data.


3. Important keywords

$this → used inside class to access object properties.
new → used to create object.
      
      `
    },
    {
      id: 63,
      question: "63. variable like types, type casting, etc..",
      answer: "",
      codeExample: `
✅ What is a Variable in PHP?

A variable is used to store data (value) in a program.

📌 In PHP, a variable starts with $

Syntax
$variable_name = value;

Example
$name = "Raj";
$age = 20;


✅ Rules for PHP Variables

Must start with $
Cannot start with a number
Case-sensitive ($name ≠ $Name)
Can contain letters, numbers, _


✅ Types of Variables in PHP (Based on Scope)

1️⃣ Local Variable

Declared inside a function
Used only inside that function

Example
function show() {
    $x = 10;   // local variable
    echo $x;
}
show();


2️⃣ Global Variable

Declared outside a function
To use inside function → use global keyword

Example
$x = 20;   // global variable

function test() {
    global $x;
    echo $x;
}
test();


3️⃣ Static Variable

Value is not destroyed after function ends

Example
function counter() {
    static $count = 0;
    $count++;
    echo $count . "<br>";
}
counter();
counter();
counter();


Output

1
2
3



✅ PHP Data Types (Variable Types)

1️⃣ Integer
$a = 10;

2️⃣ Float (Decimal)
$b = 10.5;

3️⃣ String
$name = "Raj";

4️⃣ Boolean
$isLogin = true;

5️⃣ Array
$colors = array("Red", "Blue", "Green");

6️⃣ NULL
$x = null;


✅ Dynamic Typing in PHP

PHP decides variable type automatically

$x = 10;      // integer
$x = "Raj";   // string




✅ Type Casting in PHP

Changing one data type to another.

Syntax
(type) variable;


🔹 Types of Type Casting

1️⃣ Integer Casting
$x = "10";
$y = (int)$x;
echo $y;

2️⃣ Float Casting
$x = "10.5";
$y = (float)$x;

3️⃣ String Casting
$x = 100;
$y = (string)$x;

4️⃣ Boolean Casting
$x = 1;
$y = (bool)$x;



✅ Type Checking Functions

| Function    | Use             |
| ------------| --------------- |
| is_int()    | checks integer  |
| is_float()  | checks float    |
| is_string() | checks string   |
| is_bool()   | checks boolean  |
| gettype()   | shows data type |

Example
$x = 10;
echo gettype($x);


Output
integer



✅ Variable Variables

Variable name stored inside another variable 😄

Example

$name = "age";
$$name = 20;
echo $age;


Output
20



✅ Constants (Difference from Variable)

Value cannot change

No $ sign

Syntax
define("PI", 3.14);
echo PI;



⭐ Summary (Very Easy Words)

Variable = storage for data
$ is compulsory
PHP supports dynamic typing
Types: int, float, string, boolean, array
Type casting = change data type
Scope types: local, global, static
      
      
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
      id: 1.1,
      question: "1. HTML Page Design your Profile page with following details: - Personal Details - Educational Details - Profile Picture - Link of your workspace directory",
      answer: "",
      codeExample: `
<!DOCTYPE html>
<html>
<head>
    <title>My Profile Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f2f2f2;
        }
        .container {
            width: 60%;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px gray;
        }
        h1, h2 {
            text-align: center;
            color: #333;
        }
        img {
            display: block;
            margin: 10px auto;
            border-radius: 50%;
            width: 150px;
            height: 150px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
        }
        table, th, td {
            border: 1px solid gray;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
        a {
            display: block;
            text-align: center;
            margin-top: 15px;
            font-weight: bold;
            text-decoration: none;
            color: blue;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>My Profile</h1>

    <!-- Profile Picture -->
    <img src="profile.jpg" alt="My Profile Picture">

    <!-- Personal Details -->
    <h2>Personal Details</h2>
    <table>
        <tr>
            <th>Name</th>
            <td>Raj Makwana</td>
        </tr>
        <tr>
            <th>Date of Birth</th>
            <td>01-Jan-2002</td>
        </tr>
        <tr>
            <th>Email</th>
            <td>raj@example.com</td>
        </tr>
        <tr>
            <th>Mobile</th>
            <td>+91 9876543210</td>
        </tr>
    </table>

    <!-- Educational Details -->
    <h2>Educational Details</h2>
    <table>
        <tr>
            <th>Course</th>
            <th>Institute</th>
            <th>Year</th>
            <th>Result</th>
        </tr>
        <tr>
            <td>BCA</td>
            <td>XYZ College</td>
            <td>2023</td>
            <td>First Class</td>
        </tr>
        <tr>
            <td>MCA</td>
            <td>Parul University</td>
            <td>2025</td>
            <td>Pursuing</td>
        </tr>
    </table>

    <!-- Workspace Directory -->
    <a href="http://localhost/workspace/" target="_blank">My Workspace Directory</a>
</div>

</body>
</html>

      
      
      `
    },  
    {
      id: 2.2,
      question: "2. Web Page design with CSS Create a general stylesheet to apply on your developed webpages. [ Use CSS class, CSS Groups and CSS tags ]",
      answer: "",
      codeExample: `
<!DOCTYPE html>
<html>
<head>
    <title>Web Page with General Stylesheet</title>
    <style>
        /* CSS Tag Selector */
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            margin: 20px;
        }

        h1 {
            text-align: center;
            color: darkblue;
        }

        p {
            font-size: 16px;
            color: #333;
        }

        /* CSS Class Selector */
        .box {
            border: 2px solid gray;
            background: white;
            padding: 15px;
            margin: 10px;
            border-radius: 8px;
            box-shadow: 0px 0px 5px gray;
        }

        .highlight {
            color: red;
            font-weight: bold;
        }

        /* CSS Group Selector */
        h2, h3, h4 {
            color: darkgreen;
            font-family: Verdana, sans-serif;
        }

        /* CSS ID Selector (optional for uniqueness) */
        #footer {
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
            color: gray;
        }
    </style>
</head>
<body>

    <h1>Welcome to My Web Page</h1>

    <div class="box">
        <h2>About Me</h2>
        <p>Hello, my name is <span class="highlight">Raj Makwana</span>. I am pursuing MCA at Parul University.</p>
    </div>

    <div class="box">
        <h3>My Skills</h3>
        <ul>
            <li>Web Development</li>
            <li>Database Management</li>
            <li>Programming in C, C++, PHP</li>
        </ul>
    </div>

    <div class="box">
        <h4>Contact</h4>
        <p>Email: raj@example.com</p>
        <p>Phone: +91 9876543210</p>
    </div>

    <div id="footer">
        © 2025 My Profile Page
    </div>

</body>
</html>

      
      `
    },  
    {
      id: 3.3,
      question: "3. Registration Form Web Develop an online Admission Registration page.",
      answer: "",
      codeExample: `
<!DOCTYPE html>
<html>
<head>
    <title>Admission Registration</title>
</head>
<body>
    <h1>Admission Registration Form</h1>
    <form method="post">
        <label>Name:</label>
        <input type="text" name="name" required><br><br>

        <label>Email:</label>
        <input type="email" name="email" required><br><br>

        <label>Phone:</label>
        <input type="text" name="phone" required><br><br>

        <label>Course:</label>
        <select name="course">
            <option>BCA</option>
            <option>B.Sc IT</option>
            <option>B.Tech</option>
            <option>MCA</option>
        </select><br><br>

        <input type="submit" value="Register">
    </form>
    
</body>
</html>
<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    echo "<h1>Registration Successful</h1>";
    echo "Name: " . $_POST['name'] . "<br>";
    echo "Email: " . $_POST['email'] . "<br>";
    echo "Phone: " . $_POST['phone'] . "<br>";
    echo "Course: " . $_POST['course'] . "<br>";
}
?>
      
      `
    },  
    {
      id: 4.4,
      question: "4. Type Conversion through Script Write a script to perform all possible type casting and conversion operations in PHP. Design output page in following format. Variable Name Variable Type Converted Type Converted Value",
      answer: "",
      codeExample: `
<!DOCTYPE html>
<html>
<head>
    <title>Type Conversion in PHP</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f2f2f2;
            margin: 20px;
        }
        table {
            width: 80%;
            margin: auto;
            border-collapse: collapse;
            background: white;
        }
        th, td {
            border: 1px solid gray;
            padding: 10px;
            text-align: center;
        }
        th {
            background: darkblue;
            color: white;
        }
    </style>
</head>
<body>

<h2 align="center">Type Conversion in PHP</h2>

<?php
// Define variables
$intVar = 100;       // Integer
$floatVar = 45.67;   // Float
$strVar = "123";     // String
$boolVar = true;     // Boolean

// Array to store test cases
$variables = [
    "intVar"   => $intVar,
    "floatVar" => $floatVar,
    "strVar"   => $strVar,
    "boolVar"  => $boolVar
];

// Function to display conversions
function displayConversion($name, $value, $convertedType, $convertedValue) {
    echo "<tr>
            <td>$name</td>
            <td>" . gettype($value) . "</td>
            <td>$convertedType</td>
            <td>$convertedValue</td>
          </tr>";
}

echo "<table>";
echo "<tr>
        <th>Variable Name</th>
        <th>Variable Type</th>
        <th>Converted Type</th>
        <th>Converted Value</th>
    </tr>";

// Conversion examples
foreach ($variables as $name => $value) {
    // Convert to Integer
    displayConversion($name, $value, "Integer", (int)$value);

    // Convert to Float
    displayConversion($name, $value, "Float", (float)$value);

    // Convert to String
    displayConversion($name, $value, "String", (string)$value);

    // Convert to Boolean
    displayConversion($name, $value, "Boolean", (bool)$value);
}

echo "</table>";
?>

</body>
</html>

      
      
      `
    },  
    {
      id: 5.5,
      question: "5. Login and SignUp Page Display Login and SignUp page and redirect to Profile or Registration page accordingly.",
      answer: "",
      codeExample: `
signup.php


<?php
$conn = mysqli_connect("localhost", "root", "", "student_db");

if(isset($_POST['signup'])){
    $user = $_POST['username'];
    $pass = $_POST['password'];
    $insert = "INSERT INTO users(username,password) VALUES('$user','$pass')";
    mysqli_query($conn, $insert);
    echo "you acoount has been created";
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Signup Page</title>
    <style>
        body {
            font-family: Arial;
            background: linear-gradient(135deg, #74ebd5, #ACB6E5);
            text-align: center;
            padding-top: 80px;
        }
        form {
            background: white;
            width: 300px;
            margin: auto;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 0 10px gray;
        }
        input {
            width: 90%;
            padding: 8px;
            margin: 8px;
        }
        input[type=submit] {
            background: #007bff;
            color: white;
            border: none;
            cursor: pointer;
        }
        .msg {
            margin-top: 20px;
            color: green;
        }
    </style>
</head>
<body>
    <form method="POST">
        <h2>Sign Up</h2>
        <input type="text" name="username" placeholder="Enter Username" required><br>
        <input type="password" name="password" placeholder="Enter Password" required><br>
        <input type="submit" name="signup" value="Register">
        <div class='msg'>You have account than <a href='login.php'>Login Here</a></div>
    </form>
    
</body>
</html>


<!-- 
CREATE DATABASE student_db;
USE student_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(255)
); 
-->


----------------------------------------------------------------------


login.php

<?php
session_start();
$conn = mysqli_connect("localhost", "root", "", "student_db");

if(isset($_POST['login'])){
    $user = $_POST['username'];
    $pass = $_POST['password'];
    $check = "SELECT * FROM users WHERE username='$user' AND password='$pass'";
    $result = mysqli_query($conn, $check);

    if(mysqli_num_rows($result) > 0){
        $_SESSION['username'] = $user;
        header("Location: profile.php");
    } else {
        echo "<div class='msg'>Invalid Login!</div>";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
    <style>
        body {
            font-family: Arial;
            background: linear-gradient(135deg, #f6d365, #fda085);
            text-align: center;
            padding-top: 80px;
        }
        form {
            background: white;
            width: 300px;
            margin: auto;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 0 10px gray;
        }
        input {
            width: 90%;
            padding: 8px;
            margin: 8px;
        }
        input[type=submit] {
            background: #28a745;
            color: white;
            border: none;
            cursor: pointer;
        }
        .msg {
            margin-top: 20px;
            color: red;
        }
    </style>
</head>
<body>
    <form method="POST">
        <h2>Login</h2>
        <input type="text" name="username" placeholder="Enter Username" required><br>
        <input type="password" name="password" placeholder="Enter Password" required><br>
        <input type="submit" name="login" value="Login">
        <p>Don’t have an account? <a href="signup.php">Sign Up</a></p>
    </form>
</body>
</html>


----------------------------------------------------------------------


login.php

<?php
session_start();
session_destroy();
header("Location: login.php");
?>


----------------------------------------------------------------------


profile.php

<?php
session_start();
if(!isset($_SESSION['username'])){
    header("Location: login.php");
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Profile Page</title>
    <style>
        body {
            background: linear-gradient(135deg, #89f7fe, #66a6ff);
            text-align: center;
            padding-top: 100px;
            font-family: Arial;
        }
        .box {
            background: white;
            width: 350px;
            margin: auto;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 0 10px gray;
        }
        a {
            text-decoration: none;
            color: white;
            background: #dc3545;
            padding: 8px 15px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="box">
        <h2>Welcome, <?php echo $_SESSION['username']; ?> 🎉</h2>
        <p>You are successfully logged in.</p>
        <a href="logout.php">Logout</a>
    </div>
</body>
</html>


      
      
      `
    },  
    {
      id: 6.6,
      question: "6. Student Result Generation System Develop a Student Result Generation System. Provide following facilities: - Students Exam Detail Entry - Marks entry - Result Generation - Marksheet and Result Analysis",
      answer: "",
      codeExample: `
student_entry.php


<?php
$conn = mysqli_connect("localhost", "root", "", "student_result");

if(isset($_POST['save'])){
    $name = $_POST['name'];
    $roll = $_POST['roll'];
    $s1 = $_POST['s1'];
    $s2 = $_POST['s2'];
    $s3 = $_POST['s3'];

    mysqli_query($conn, "INSERT INTO students(name, roll_no, subject1, subject2, subject3)
                         VALUES('$name','$roll','$s1','$s2','$s3')");
    echo "<p style='color:green;'>Record Saved!</p>";
}
?>
<!DOCTYPE html>
<html>
<head>
<title>Student Entry</title>
<style>
body{
  font-family:Arial;
  background:#f2f2f2;
  text-align:center;
}
form{
  background:white;
  width:320px;
  margin:auto;
  padding:20px;
  border-radius:10px;
  box-shadow:0 0 10px gray;
}
input{
  margin:5px;
  padding:8px;
  width:90%;
}
input[type=submit]{
  background:#007bff;
  color:white;
  border:none;
  cursor:pointer;
}
</style>
</head>
<body>
<h2>Student Detail Entry</h2>
  <form method="POST">
    <input type="text" name="name" placeholder="Name" required><br>
    <input type="text" name="roll" placeholder="Roll No" required><br>
    <input type="number" name="s1" placeholder="Subject 1 Marks" required><br>
    <input type="number" name="s2" placeholder="Subject 2 Marks" required><br>
    <input type="number" name="s3" placeholder="Subject 3 Marks" required><br>
    <input type="submit" name="save" value="Save">
  </form>
</body>
</html>

<!-- 
CREATE DATABASE student_result;

USE student_result;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    roll_no VARCHAR(20),
    subject1 INT,
    subject2 INT,
    subject3 INT
); 
-->



----------------------------------------------------------------------


maksheet.php

<?php
$conn = mysqli_connect("localhost", "root", "", "student_result");

if(isset($_POST['search'])){
    $roll = $_POST['roll'];
    $res = mysqli_query($conn, "SELECT * FROM students WHERE roll_no='$roll'");
    $row = mysqli_fetch_assoc($res);

    if($row){
        $total = $row['subject1'] + $row['subject2'] + $row['subject3'];
        $avg = $total / 3;
        $result = ($avg >= 35) ? "Pass" : "Fail";
    } else {
        echo "<p style='color:red;'>No Record Found!</p>";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
<title>Marksheet</title>
<style>
body{
    font-family:Arial;
    text-align:center;
    background:#e3f2fd;
}
table{
    margin:auto;
    border-collapse:collapse;
    width:60%;
}
th,td{
    border:1px solid gray;
    padding:8px;
}
th{
    background:#007bff;
    color:white;
}
</style>
</head>
<body>
<h2>Student Marksheet</h2>
    <form method="POST">
        <input type="text" name="roll" placeholder="Enter Roll No" required>
        <input type="submit" name="search" value="View Result">
    </form>
<?php if(isset($row)){ ?>
    <table>
        <tr><th>Name</th><td><?= $row['name'] ?></td></tr>
        <tr><th>Roll No</th><td><?= $row['roll_no'] ?></td></tr>
        <tr><th>Subject 1</th><td><?= $row['subject1'] ?></td></tr>
        <tr><th>Subject 2</th><td><?= $row['subject2'] ?></td></tr>
        <tr><th>Subject 3</th><td><?= $row['subject3'] ?></td></tr>
        <tr><th>Total</th><td><?= $total ?></td></tr>
        <tr><th>Average</th><td><?= $avg ?></td></tr>
        <tr><th>Result</th><td style="color:<?= $result=='Pass'?'green':'red' ?>;"><?= $result ?></td></tr>
    </table>
<?php } ?>
</body>
</html>

      
      
      `
    },  
    {
      id: 7.7,
      question: "7. Server-side Validations using regular Expression Design online placement registration form. Check for the validity of entered fields using regular expressions.",
      answer: "",
      codeExample: `
<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];

    // Regular Expressions
    $namePattern = "/^[A-Za-z ]+$/";
    $emailPattern = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/";
    $mobilePattern = "/^[0-9]{10}$/";

    if(!preg_match($namePattern, $name))
        echo "Invalid Name!<br>";
    elseif(!preg_match($emailPattern, $email))
        echo "Invalid Email!<br>";
    elseif(!preg_match($mobilePattern, $mobile))
        echo "Invalid Mobile Number!<br>";
    else
        echo "✅ Registration Successful!";
}
?>
<form method="POST">
    <h3>Placement Registration</h3>
    Name: <input type="text" name="name"><br><br>
    Email: <input type="text" name="email"><br><br>
    Mobile: <input type="text" name="mobile"><br><br>
    <input type="submit" name="submit" value="Register">
</form>

      
      
      `
    },  

    {
      id: 8.8,
      question: "8. Sending a Mail Develop a php script to send a mail. [ For Example: Forgot password recovery mail.]",
      answer: "",
      codeExample: `
<?php
 $to = "user@example.com";
 $subject = "Password Recovery";
 $message = "Click here to reset your password: https://example.com/reset";
 $headers = "From: noreply@example.com";

 if(mail($to, $subject, $message, $headers))
     echo "Mail Sent Successfully!";
 else
     echo "Mail Sending Failed!";
?> 
      
      `
    },  
    {
      id: 9.9,
      question: "9. Menu Driven Program Write a menu driven program to perform various file operations. - Display size of file - Display Last Access, changed, modified time of file - Display details about owner and user of File - Display type of file - Delete a file - Copy a file - Traverse a directory in hierarchy - Remove a directory",
      answer: "",
      codeExample: `
<!DOCTYPE html>
<html>
<head>
<title>File Operations</title>
<style>
body{
    font-family:Arial;
    text-align:center;
    background:#f2f2f2;
}
form{
    background:white;
    width:300px;
    margin:auto;
    padding:15px;
    border-radius:10px;
}
input,select{
    margin:5px;
    padding:6px;
    width:90%;
}
input[type=submit]{
    background:#007bff;
    color:white;
    border:none;
}
.result{
    background:#e8f5e9;
    padding:8px;
    margin:10px;
}
</style>
</head>
<body>

<h3>Menu Driven File Operations</h3>
<form method="POST">
  <input type="text" name="filename" placeholder="Enter File/Folder" required><br>
  <select name="choice">
    <option value="size">File Size</option>
    <option value="time">File Time</option>
    <option value="type">File Type</option>
    <option value="delete">Delete File</option>
    <option value="copy">Copy File</option>
    <option value="traverse">Show Directory Files</option>
  </select><br>
  <input type="submit" name="ok" value="OK">
</form>

<?php
if(isset($_POST['ok'])){
  $f = $_POST['filename'];
  $c = $_POST['choice'];
  echo "<div class='result'>";
  switch($c){
    case "size": echo "Size: ".filesize($f)." bytes"; break;
    case "time": echo "Modified: ".date("d-m-Y H:i:s", filemtime($f)); break;
    case "type": echo "Type: ".filetype($f); break;
    case "delete": echo unlink($f)?"File Deleted!":"Delete Failed!"; break;
    case "copy": echo copy($f,"copy_".basename($f))?"File Copied!":"Copy Failed!"; break;
    case "traverse":
      if(is_dir($f)){
        $files=scandir($f);
        foreach($files as $x) if($x!="." && $x!="..") echo "$x<br>";
      } else echo "Not a Directory!";
      break;
  }
  echo "</div>";
}
?>
</body>
</html>

      
      
      `
    },  
    {
      id: 10.10,
      question: "10. 13. Image Manipulation Develop a web application to perform PHP image manipulation. Perform following tasks: - Load image - Resize image - Crop image - Merge (watermark) - Output image to browser with format conversion.",
      answer: "",
      codeExample: `
index.php 

<!DOCTYPE html>
<html>
<head><title>Image Manipulation</title></head>
<body>
<h2>Image Manipulation</h2>

<form method="POST" action="process.php" enctype="multipart/form-data">
    <input type="file" name="img" required><br><br>
    <input type="submit" value="Process Image">
</form>

</body>
</html>




process.php

<?php
 //LOAD IMAGE
$src = $_FILES['img']['tmp_name'];
$image = imagecreatefromjpeg($src);

// Resize
$resize = imagescale($image, 200, 200);

// Crop
$crop = imagecrop($resize, ["x"=>0,"y"=>0,"width"=>200,"height"=>200]);

// Watermark
$black = imagecolorallocate($crop, 0,0,0);
imagestring($crop, 5, 5, 5, "MK", $black);

// OUTPUT ONLY IMAGE
header("Content-Type: image/png");
imagepng($crop);

// Clean memory
imagedestroy($image);
imagedestroy($resize);
imagedestroy($crop);
?>

      
      `
    },  
    {
      id: 11.11,
      question: "11.11 Simple Image Gallery Write a php scipt to design a simple gallery",
      answer: "",
      codeExample: `
gallery.php

<!DOCTYPE html>
<html>
<head>
<title>Image Gallery</title>
<style>
body{font-family:Arial;text-align:center;background:#f2f2f2;}
.gallery img{
    width:250px;
    height:250px;
    object-fit:cover;
    margin:10px;
    border-radius:8px;
    box-shadow:0 0 5px gray;
}
</style>
</head>

<body>

<h2>Simple Image Gallery (Using Array)</h2>

<div class="gallery">
<?php
// Array of images
$images = array(
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg"
);

// Display each image
foreach($images as $img){
    echo "<img src='$img'>";
}
?>
</div>

</body>
</html>

      
      `
    },  
    {
      id: 12.12,
      question: "12. Error and Exception Handling Develop a web application to perform Error and Exception Handling Operations. Implement proper requirements for demonstration.",
      answer: "",
      codeExample: `
<!DOCTYPE html>
<html>
<head>
<title>Error & Exception Handling</title>
<style>
body{font-family:Arial;text-align:center;background:#f2f2f2;padding-top:30px;}
form{background:white;width:300px;margin:auto;padding:15px;border-radius:10px;}
input{width:90%;padding:7px;margin:8px;}
</style>
</head>
<body>

<h2>Error & Exception Handling</h2>

<form method="POST">
    <input type="number" name="num" placeholder="Enter a Number" required>
    <input type="submit" name="ok" value="Check">
</form>

<?php

// ---------------------------
//  Custom Error Handler
// ---------------------------
function myError($no, $msg){
    echo "<p style='color:red;'>Error: $msg</p>";
}
set_error_handler("myError");

// ---------------------------
//  Custom Exception Class
// ---------------------------
class MyException extends Exception{}

// ---------------------------
//  Main Processing
// ---------------------------
if(isset($_POST['ok'])){
    
    try{
        $n = $_POST['num'];

        // Trigger Built-in Error
        if($n < 0){
            trigger_error("Negative numbers not allowed!");
        }

        // Custom Exception
        if($n == 0){
            throw new MyException("Number cannot be Zero");
        }

        echo "<p style='color:green;'>Valid Number: $n</p>";
    
    } catch(MyException $e){
        echo "<p style='color:red;'>Exception: ".$e->getMessage()."</p>";
    }
}

?>

</body>
</html>

      
      `
    },  
    {
      id: 13.13,
      question: "13. Dynamic Search Box using AJAX Develop a dynamic search box to find records using php and AJAX. [For Example: Google Search]",
      answer: "",
      codeExample: `
fetch.php

<?php

// Sample data (like Google suggestions)
$data = array(
    "apple", "banana", "ball", "cat", "car", 
    "dog", "dell", "elephant", "fish", "google",
    "grapes", "house", "horse", "icecream", "india"
);

$q = strtolower($_GET["q"]);
$output = "";

// Return matching results
if($q != ""){
    foreach($data as $item){
        if(strpos(strtolower($item), $q) !== false){
            $output .= $item . "<br>";
        }
    }
}

echo ($output == "") ? "No results" : $output;
?>



search.php
<!DOCTYPE html>
<html>
<head>
<title>AJAX Search</title>
<style>
body{font-family:Arial;text-align:center;margin-top:40px;}
#result{margin-top:10px;font-size:18px;}
input{padding:8px;width:250px;}
</style>
</head>
<body>

<h2>Dynamic Search Box (AJAX + PHP)</h2>

<input type="text" id="search" placeholder="Type to search..." onkeyup="findData()">
<div id="result"></div>

<script>
function findData(){
    let text = document.getElementById("search").value;

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("result").innerHTML = this.responseText;
        }
    };
    ajax.open("GET","fetch.php?q="+text,true);
    ajax.send();
}
</script>

</body>
</html>

      `
    },  
    {
      id: 14.14,
      question: "14. Event Webpage [Object Oriented Concepts] Develop an online Event webpage. Provide admin to set font-size, color and event label for each event. Create Event class with constructor/Destructor. Use show_event() method to display eventlist.",
      answer: "",
      codeExample: `
<!DOCTYPE html>
<html>
<head>
<title>Event Webpage</title>
<style>
body{font-family:Arial;text-align:center;background:#f2f2f2;padding-top:20px;}
form{background:white;width:320px;margin:auto;padding:15px;border-radius:10px;}
input{margin:5px;padding:7px;width:90%;}
input[type=submit]{background:#007bff;color:white;border:none;}
.event-box{margin-top:20px;padding:10px;}
</style>
</head>
<body>

<h2>Online Event Webpage (OOP in PHP)</h2>

<form method="POST">
    <input type="text" name="label" placeholder="Event Name" required><br>
    <input type="number" name="size" placeholder="Font Size (px)" required><br>
    <input type="text" name="color" placeholder="Color (red/blue/#000)" required><br>
    <input type="submit" name="add" value="Add Event">
</form>

<?php

class Event{

    public $label;
    public $size;
    public $color;

    // Constructor
    function __construct($label, $size, $color){
        $this->label = $label;
        $this->size = $size;
        $this->color = $color;
    }

    // Show Event Method
    function show_event(){
        echo "<div class='event-box' 
              style='font-size:$this->size" . "px; color:$this->color;'> 
              📌 $this->label 
              </div>";
    }

    // Destructor
    function __destruct(){
        // For closing messages if needed
    }
}

if(isset($_POST['add'])){
    $ev = new Event($_POST['label'], $_POST['size'], $_POST['color']);
    $ev->show_event();
}
?>

</body>
</html>

      
      `
    }, 
    {
      id: 15.15,
      question: "15. Object Oriented PHP Web Application Printed on : 09-07-2021 04:44 PM Page 4 of 4 Create a web forum application that has a Member class for forum members containing methods such as createPost(), editProfile(), showProfile(). Create a class called Administrator that is a child of the Member class by adding extra methods such as createForum(), deleteForm() and banMember(). Override login() or logout method of parent class in child class.",
      answer: "",
      codeExample: `
<!DOCTYPE html>
<html>
<head>
<title>OOP Forum Application</title>
<style>
body{font-family:Arial;text-align:center;background:#f2f2f2;padding-top:20px;}
.box{background:white;width:350px;margin:auto;padding:15px;border-radius:8px;box-shadow:0 0 10px gray;text-align:left;}
</style>
</head>
<body>

<h2>OOP Forum Application</h2>

<div class="box">
<?php

# ---------------------------
# Member Class (Parent Class)
# ---------------------------
class Member {

    public $name;
    public $email;

    function __construct($name, $email){
        $this->name  = $name;
        $this->email = $email;
    }

    function login(){
        echo "<p>$this->name logged in (Member)</p>";
    }

    function createPost($msg){
        echo "<p>Post Created: $msg</p>";
    }

    function editProfile($newName){
        $this->name = $newName;
        echo "<p>Profile Updated: New Name = $this->name</p>";
    }

    function showProfile(){
        echo "<p>Profile:<br>Name: $this->name<br>Email: $this->email</p>";
    }
}

# --------------------------------------
# Administrator Class (Child of Member)
# --------------------------------------
class Administrator extends Member {

    // Method Overriding (login override)
    function login(){
        echo "<p>$this->name logged in as <b>Administrator</b></p>";
    }

    function createForum(){
        echo "<p>Forum Created Successfully!</p>";
    }

    function deleteForum(){
        echo "<p>Forum Deleted Successfully!</p>";
    }

    function banMember($user){
        echo "<p>Member '$user' has been banned.</p>";
    }
}

# ---------------------------
# Object Testing / Demo
# ---------------------------

echo "<h3>Member Actions</h3>";
$m = new Member("Raj", "raj@example.com");
$m->login();
$m->createPost("Hello, this is my first post!");
$m->editProfile("Raj Makwana");
$m->showProfile();

echo "<hr>";

echo "<h3>Administrator Actions</h3>";
$admin = new Administrator("Admin", "admin@example.com");
$admin->login();          // Overridden method
$admin->createForum();
$admin->deleteForum();
$admin->banMember("Ravi");

?>
</div>

</body>
</html>


      `
    }, 
    {
      id: 16.16,
      question: "16. PHP MySQL Database Connectivity Create a skeleton of SubjectMIS class and define and implement methods to perform following MySQL functions on stored subject details: - Select, Insert, Delete, Update, Connect, Disconnect",
      answer: "",
      codeExample: `
<?php

class SubjectMIS {

    private $conn;

    // -------------------
    // CONNECT
    // -------------------
    function connect(){
        $this->conn = mysqli_connect("localhost","root","","college");
        if($this->conn)
            echo "Connected<br>";
        else
            echo "Connection Failed<br>";
    }

    // -------------------
    // DISCONNECT
    // -------------------
    function disconnect(){
        mysqli_close($this->conn);
        echo "Disconnected<br>";
    }

    // -------------------
    // INSERT SUBJECT
    // -------------------
    function insert($name, $code){
        $q = "INSERT INTO subject(sub_name, sub_code) VALUES('$name','$code')";
        mysqli_query($this->conn, $q);
        echo "Inserted: $name<br>";
    }

    // -------------------
    // SELECT SUBJECTS
    // -------------------
    function select(){
        $q = "SELECT * FROM subject";
        $res = mysqli_query($this->conn, $q);

        echo "<b>Subject List:</b><br>";
        while($row = mysqli_fetch_assoc($res)){
            echo $row['id']." - ".$row['sub_name']." (".$row['sub_code'].")<br>";
        }
    }

    // -------------------
    // UPDATE SUBJECT
    // -------------------
    function update($id, $name){
        $q = "UPDATE subject SET sub_name='$name' WHERE id=$id";
        mysqli_query($this->conn, $q);
        echo "Updated ID $id<br>";
    }

    // -------------------
    // DELETE SUBJECT
    // -------------------
    function delete($id){
        $q = "DELETE FROM subject WHERE id=$id";
        mysqli_query($this->conn, $q);
        echo "Deleted ID $id<br>";
    }
}

# -----------------------------------------
# TESTING THE CLASS (Demo)
# -----------------------------------------

$mis = new SubjectMIS();

$mis->connect();

$mis->insert("Mathematics", "M101");
$mis->insert("Physics", "P102");

$mis->select();

$mis->update(1, "Advanced Maths");

$mis->delete(2);

$mis->disconnect();

?>

      
      `
    }, 
    {
      id: 17.17,
      question: "17. Cricket Application using Interface Define an interface for Cricket Game Activities. Implement this interface in a class. Write necessary class and member function definitions for a cricket player object. The program should accept details from user (player_code, name, runs, innings_played, no_of_times_out). The program should contain following menu. a) Enter details of players. b) Display average runs of a single player. c) Average runs of all players. d) Display the list of players in sorted order as per runs",
      answer: "",
      codeExample: `
<!DOCTYPE html>
<html>
<head>
<title>Cricket Application</title>
<style>
body{font-family:Arial;text-align:center;background:#f2f2f2;padding-top:20px;}
.box{background:white;width:450px;margin:auto;padding:15px;border-radius:8px;box-shadow:0 0 10px gray;text-align:left;}
</style>
</head>
<body>

<h2>Cricket Application using Interface</h2>

<div class="box">
<?php

# -------------------------------------
# 1. Interface
# -------------------------------------
interface CricketActivities {
    public function avgRuns();
    public function showPlayer();
}

# -------------------------------------
# 2. Player Class implementing Interface
# -------------------------------------
class Player implements CricketActivities {

    public $code, $name, $runs, $innings, $out;

    function __construct($c,$n,$r,$i,$o){
        $this->code = $c;
        $this->name = $n;
        $this->runs = $r;
        $this->innings = $i;
        $this->out = $o;
    }

    // Calculate Average Runs
    public function avgRuns(){
        if($this->out == 0)
            return $this->runs;  // Not out → average = total runs
        return $this->runs / $this->out;
    }

    // Display Player Details
    public function showPlayer(){
        echo "Code: $this->code, Name: $this->name, Runs: $this->runs, Avg: ".round($this->avgRuns(),2)."<br>";
    }
}

# -------------------------------------
# Data Storage (array of objects)
# -------------------------------------
$players = [];

# -------------------------------------
# Menu System (Simple Demo)
# -------------------------------------

echo "<h3>Menu:</h3>";
echo "a) Enter Player Details<br>";
echo "b) Average Runs of Single Player<br>";
echo "c) Average of All Players<br>";
echo "d) Players Sorted by Runs<br><br>";

# ----------- (A) Enter Player Details ----------
$p1 = new Player(1, "Virat", 12000, 250, 220);
$p2 = new Player(2, "Rohit", 10000, 230, 200);
$p3 = new Player(3, "Dhoni", 10500, 280, 180);

$players = [$p1, $p2, $p3];

echo "<b>(a) Player Details Entered Successfully!</b><br><br>";

# ----------- (B) Avg of one player --------------
echo "<b>(b) Average Runs of Single Player (Virat):</b><br>";
echo $p1->avgRuns()."<br><br>";

# ----------- (C) Avg of all players -------------
echo "<b>(c) Average Runs of All Players:</b><br>";
$total = 0;
foreach($players as $p){
    $total += $p->avgRuns();
}
echo round($total / count($players),2)."<br><br>";

# ----------- (D) Sort players by runs -----------
echo "<b>(d) Sorted Players by Runs:</b><br>";
usort($players, function($a,$b){
    return $b->runs - $a->runs;     // descending order
});
foreach($players as $p){
    $p->showPlayer();
}

?>
</div>
</body>
</html>

      
      `
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
