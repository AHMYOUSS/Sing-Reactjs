import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Home.css';
function Home() {
    return (
        <div className="Home">
           <h1> What is a Script ?</h1>
           <hr/>
           <p> A script is an executable list of commands like macro or batch file created by a scripting language. Scripts (like PHP, Perl) which are executed on a web server are called server-side scripts and scripts (like JavaScript) which are executed on user's computer, interpreted by the browser is called client-side scripts. </p>
            <br/>
            <img className="Home__img" src="https://www.w3resource.com/w3r_images/javascript-logo.png"/>
            <h3 className="Home__h2" > What is JavaScript ? </h3>
            <p> 
                JavaScript is a cross-platform, object-oriented scripting language developed by Netscape. JavaScript was created by Netscape programmer<span> <b>Brendan Eich.</b>  </span>
            </p>
            <p>It was first released under the name of LiveScript as part of Netscape Navigator 2.0 in September 1995. It was renamed JavaScript on December 4, 1995. As JavaScript works on the client side, It is mostly used for client-side web development. </p>
            <p> JavaScript is designed for use on web pages and closely integrated with HTML. JavaScript can create applications which run in the browsers such as IE, Opera, FireFox, Google Chrome and other. Netscape submitted JavaScript to ECMA International for standardization resulting in the standardized version named ECMAScript.</p>

            <h5>JavaScript and Java </h5>
            <p> JavaScript and Java are similar in some ways but fundamentally they are different. Java is a programming language developed by Sun Microsystems, Inc. and JavaScript is a scripting language developed by Netscape. Java is a server-side and static type language. JavaScript is a client-side, dynamically typed language. Java programs are compiled on the server and run on almost every platform without distribution of source code whereas scripts written in JavaScript are placed inside a HTML document and interpreted by the browser. The syntax, reserved-words of JavaScript and Java are also different</p>
            <h5> JavaScript compares to Java</h5>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">JavaScript</th>
      <th scope="col">Java</th>
   
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>JavaScript is used for front-end web development (for example field level validation in a HTML form).</td>
      <td>Java is used as a back-end language within a web environment.</td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Interpreted (not compiled) by the client</td>
      <td>Compiled bytecodes downloaded from the server, executed on the client.</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Object-oriented. No distinction between types of objects. Inheritance is through the prototype mechanism, and properties and methods can be added to any object dynamically.</td>
      <td>Class-based. Objects are divided into classes and instances with all inheritance through the class hierarchy. Classes and instances cannot have properties or methods added dynamically.</td>
      
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Variable data types are not declared (loose typing).  </td>
      <td>Variable data types must be declared as Java maintains strong type checking.</td>
      
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Cannot automatically write to hard disk.</td>
      <td>	Cannot automatically write to hard disk.</td>
      
    </tr>
  </tbody>
</table>
      
        <h5>Features of the w3resource JavaScript Tutorial </h5>
        <p> In this series of tutorials, we have covered JavaScript 1.5+ in detail. While creating this, we have taken care that learners can master the basics of JavaScript.</p>
       
    <ul> 
        <li> We have started with a clear and simple description.</li>
        <li> We have given a Syntax/Usage so that you can remember how to write it.</li>
        <li> Example(s) to show how the associated concept is implemented.</li>
        <li >We have shown the Output of the usage. </li>
        <li> View the example in a browser.</li>
        <li>Exercise to practice with our Online Practice Editor. </li>
        <li>Pictorial presentation to help you to understand the concept better. </li>
        <li>Since the browser is an issue while executing JavaScript, we have shown which browser support which script. </li>
        </ul>
         </div>
    )
}

export default Home
