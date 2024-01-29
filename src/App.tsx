import { PropsWithChildren, useState } from "react";
import "./App.scss";

function App() {
  return (
    <main>
      <menu className="side-bar">
        <h2>Store</h2>
        <SkillToolBar />
        <Companions />
      </menu>
      <CookieTrey />
    </main>
  );
}

function SkillToolBar() {
  return (
    <ul className="skill-toolbar">
      <li>
        <SkillButton>A</SkillButton>
      </li>
      <li>
        <SkillButton>B</SkillButton>
      </li>
      <li>
        <SkillButton>C</SkillButton>
      </li>
      <li>
        <SkillButton>D</SkillButton>
      </li>
      <li>
        <SkillButton>E</SkillButton>
      </li>
    </ul>
  );
}

function SkillButton({ children }: PropsWithChildren) {
  return <button className="skill-button">{children}</button>;
}

function Companions() {
  return (
    <ul>
      <li>Cursor</li>
      <li>Grandma</li>
      <li>Wolf</li>
    </ul>
  );
}

function CookieTrey() {
  const [cookies, setCookies] = useState(0);

  function addCookie() {
    setCookies(cookies + 1);
  }

  return (
    <div className="cookie-trey">
      <div>Cookies: {cookies}</div>
      <button onClick={addCookie}>🍪</button>
    </div>
  );
}

export default App;
