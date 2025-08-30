export default function Faq() {
  return (
    <div className="faq">
      <h1>FAQ</h1>
      <ul>
        <li>
          <b>What is React?</b><br />
          React is a JavaScript library for building user interfaces.
        </li>
        <li>
          <b>What is a component?</b><br />
          A component is a reusable, independent piece of UI that can be combined with others.
        </li>
        <li>
          <b>What are React Hooks?</b><br />
          Hooks are built-in functions that let you use state and other React features without writing classes.
        </li>
        <li>
          <b>What is JSX?</b><br />
          JSX is a syntax extension that lets you write HTML-like code inside JavaScript.
        </li>
        <li>
          <b>Is React a framework?</b><br />
          No, React is a library. But you can combine it with other tools to create a full framework-like setup.
        </li>
      </ul>
    </div>
  );
}