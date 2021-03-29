import React from "react";
import PropTypes from 'prop-types';
import { useSref } from "@uirouter/react";

export default function Person({ person }) {
  const peopleSref = useSref('people');

  return (
    <div>
      <h3>A person!</h3>
      <div>Name: {person.name}</div>
      <div>Id: {person.id}</div>
      <div>Company: {person.company}</div>
      <div>Email: {person.email}</div>
      <div>Address: {person.address}</div>
      <button {...peopleSref}>Close</button>
    </div>
  );
}

Person.propTypes = {
  resolves: PropTypes.shape({
    person: PropTypes.object
  })
};
