# CodingNomads Learning Management System - Front End

[Daniela Carey](https://github.com/danielafcarey) • [Sage Vogt](https://github.com/SageVanGogt) • [Cameron Buscher](https://github.com/YayFiber)

This is the front-end interface for the CodingNomads platform. As it stands, it is an admin-only portal with the ability to easily add a student view.

Administrators can add courses and tasks. They can add tasks to a course and reorganize those tasks. They can add docs and labs to a task.

## Install
1. Clone down this repo
2. `npm install`

## Run locally
1. `npm start`
2. Watchmen will be running and updates will appear real-time
3. Make any .scss file changes while watchmen is running to avoid .css build issues. 

## Production Build
1. `npm run build`
2. Production files will be found in the build directory

This project was built using React, Redux, Router, TravisCI, Jest, Enzyme and hosted on AWS. 

![Courses Page](https://i.imgur.com/A6oCj8U.png)
![Course edit page](http://g.recordit.co/BEPiHV5cfk.gif)
![Tasks page](https://i.imgur.com/FxdIt97.png)
![Task edit page](https://i.imgur.com/ZpKtQeu.png)
