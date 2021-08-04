import React from 'react';

interface IProps {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

export const List = ({ people }: IProps) => {
  return <div>I am a list</div>;
};
