import React from "react";
import PropTypes from 'prop-types';
import { useSrefActive } from "@uirouter/react";

export default function People({ people }) {
  const PersonLink = ({ person }) => {
    const personSref = useSrefActive("person", { personId: person.id }, "active");
    return (
      <li>
        <a {...personSref}>{person.name}</a>
      </li>
    );
  };

  return (
    <div>
      <h3>Some people:</h3>
      <ul>
        {people.map(person => (
          <PersonLink key={person.id} person={person} />
        ))}
      </ul>
    </div>
  );
}

People.propTypes = {
  resolves: PropTypes.shape({
    people: PropTypes.arrayOf(PropTypes.object)
  })
};
