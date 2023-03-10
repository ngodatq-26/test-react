# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install
```
 git clone https://github.com/ngodatq-26/test-react
 ...
 npm install
```

In the project directory, you can run:

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Code structure

The source code is organized in a structure :
<ul>
 <li><strong>config</strong> : define all endpoints and routes of project </li>
 <li><strong>images</strong></li> : images repository
 <li><ul><strong>modules</strong> : contains many modules like common, homepage, auth,... and each module include : 
  <li><strong>components</strong></li>
  <li><strong>page</strong></li>
  <li><strong>redux</strong> : reducer and state of this module</li>
  </ul>
 </li>
 <li><ul><strong>redux</strong> :reducer and state of project
  <li><strong>store</strong> : config store which save all state and reducer</li>
  <li><strong>reducer</strong> : combines all reducer</li>
  </ul></li>
 <li><strong>utils</strong> : contains common function</li>
</ul> 

## UI

### UI test exam below
![Screenshot (415)](https://user-images.githubusercontent.com/66765392/217414198-838ebf5d-f17d-455d-ae2a-024c4301ecbc.png)


![Screenshot (416)](https://user-images.githubusercontent.com/66765392/217414256-41460f92-ef6a-49f3-ae78-57daa40c7676.png)

## Project

<ul> Project reactjs have table which contains 100 users, uses react-router-dom, redux-thunk, typescript,.. </ul>
<ul> By using redux-thunk and redux persist, project saves state in local storage </ul>
<ul> When you reload page, page does not re render component and not call api again </ul>
<ul> Redux state includes : current page, page size, info user list and sort state </ul>
<ul> Username and full name sort when you click them, include ASC and DESC </ul>

## Thank you for reading



