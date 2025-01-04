import React from 'react';
import styles from './Taggered_Users.module.css'
import HTMLReactParser from 'html-react-parser';
const TaggedUsersString = (message, loggedin, tagged) => {
  let replacedMessage = message;
  tagged.forEach(user => {
    const userTag = `@{${user.username}}[${user.user_id}]`;
    const userLink = `<a class=${loggedin ? styles.blue : styles.green} href='/users/${user.user_id}'>@${user.username}</a>`;
    replacedMessage = replacedMessage.replace(userTag, userLink);
  });
  return HTMLReactParser(replacedMessage);
}
export default TaggedUsersString;