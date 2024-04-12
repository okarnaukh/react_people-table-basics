import React from 'react';
import { Gender, Person } from '../../types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  person: Person;
};

export const PersonLink: React.FC<Props> = ({ person }) => {
  const { sex, name, slug } = person;

  return (
    <Link
      to={`/people/${slug}`}
      className={classNames({ 'has-text-danger': sex === Gender.woman })}
    >
      {name}
    </Link>
  );
};