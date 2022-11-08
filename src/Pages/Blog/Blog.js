import React from "react";

const Blog = () => {
  return (
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Questions And Answer?</h1>
        <p className="py-6">
          Question:-1. Difference between SQL and NoSQL? Answer: The databases
          in SQL are table-based, while the databases in NoSQL are document,
          key-value, graph, or wide-column stores. SQL databases suit multi-row
          transactions, while NoSQL is better for unstructured data like
          documents or JSON.
        </p>
        <p className="py-6">
          Question:-2. What is JWT, and how does it work? Answer: JWT is JSON
          Web Token, is an open standard used to share security information
          between two parties — a client and a server. Each JWT contains encoded
          JSON objects, including a set of claims. JWTs differ from other web
          tokens in that they contain a set of claims. Claims are used to
          transmit information between two parties. What these claims are
          depends on the use case at hand.
        </p>
        <p className="py-6">
          Question:-3. What is the difference between javascript and NodeJS?
          Answer: JavaScript is a widely-used programming language used by all
          web application developers. Node JS is a JavaScript library extension,
          which includes certain undefined utilities, often critical for meeting
          objectives. All browsers have JavaScript engines that run the
          JavaScript of web pages. All JavaScript is not important to the node
          community, but all node projects represent the JavaScript community.
        </p>
        <p className="py-6">
          Question:-4. How does NodeJS handle multiple requests at the same
          time? Answer: NodeJS receives multiple client requests and places them
          into EventQueue. NodeJS is built with the concept of event-driven
          architecture. ... But, it is possible to process multiple requests
          parallelly using the NodeJS cluster module or worker_threads module
        </p>
      </div>
    </div>
  );
};

export default Blog;
