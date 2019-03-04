import React from "react";
import { Link, Route } from "react-router-dom";

function Topic({ match }) {
  return <h3>TOPIC</h3>;
}

export default function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to="/topics/rendering">Rendering With React</Link>
        </li>
        <li>
          <Link to="/topics/components">Components</Link>
        </li>
        <li>
          <Link to="/topics/props-v-state">Props vs State</Link>
        </li>
      </ul>
      <hr />
      <Route to="/topics/:topicId" component={Topic} />
      <Route
        exact
        to="/topics"
        render={() => {
          return <h3>Please select a topic</h3>;
        }}
      />
    </div>
  );
}
