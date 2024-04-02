import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOutputText(inputText);
    setInputText("");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Happy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          The happiest person in the world is <a>{outputText}</a>
        </h1>

        <p>Type your answer below</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Enter text..."
          />
          <button type="submit">Submit</button>
        </form>
        <div className={styles.grid}></div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        
        input[type="text"] {
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-bottom: 1rem;
          width: 200px;
          transition: border-color 0.3s ease;
        }
      
        input[type="text"]:focus {
          outline: none;
          border-color: #007bff; /* Change border color on focus */
        }

        button {
          padding: 0.5rem 1rem;
          border: 0px;
          border-radius: 4px;
          background-color: black;
          color: #fff;
          cursor: pointer;
          display: block;
          margin:auto;
          
        }
      
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
