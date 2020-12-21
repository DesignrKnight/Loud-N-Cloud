[![Starware](https://img.shields.io/badge/Starware-⭐-black?labelColor=f9b00d)](https://github.com/zepfietje/starware)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

# project-manna
Submitted at InOut 2020. This project has been deployed on heroku, and can be accessed from this link. [project-manna](https://project-manna.herokuapp.com/)

![risk estimation](https://github.com/DesignrKnight/Loud-N-Cloud/blob/main/project-manna.gif)
![vaccine requirement](https://github.com/DesignrKnight/Loud-N-Cloud/blob/main/vaccine_requirement.gif)

## Motivation
Vaccine for Covid-19 has been developed in record time. Now, the next big challenge is a logistical one, manufacturing vaccine at scale and mass innoculation. It will be some time before everyone is vaccinated. So we need to make the best out of the limited supply we will be getting initially. By predicting vunerable demographics beforehand, we can vaccinate these people on a priority basis to decrease fatality rate.

## How our model works
We have collected the data from covid19india.org, who are doing an awesome job at crowdsourcing the data!

![backend](https://cdn.discordapp.com/attachments/772028017047764996/790485882834518056/Inout.png)

## Model USP
Normally SIR models are made to model infection-spread of a disease. While Project Manna has been improved to support vaccinationation scenario by considering that vaccinated people can't spread or get affected by covid.

Here follows a simple block view of the compartments of the enhanced SIR model.

![Model](images/model.png)

## Model Validation
We tried comparing graphs for a particular district, by comparing graph fitted by the model and the real data graph for covid cases.

![Case Comparison Graph](images/Screenshot1.png)

## Terminology
* Risk in a district = Predictied new cases after 15 days
* Normalized Risk = Risk normalized [0-1]
* Vaccine Urgency = Normalized Risk * Number of Susceptible cases in district
* Normalized urgency of vaccination = Vaccine urgency normalized [0-1]
* Relative vaccine urgency = Normalized Vaccine urgency of district / Summation of normalized vaccine urgency of all districts
* Vaccine to be provided to district = Relative vaccine urgency * available vaccines

## Tech stack
<p align = "center">
  <img src="https://img.shields.io/badge/Python%20-%23FF9900.svg?&style=for-the-badge&logo=python&logoColor=white"/> 
  <img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/python%20-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white"/>
  <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
  <img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img src="https://img.shields.io/badge/flask%20-%23092E20.svg?&style=for-the-badge&logo=flask&logoColor=white"/>
  <img src="https://img.shields.io/badge/heroku%20-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white"/>
  <img src="https://img.shields.io/badge/d3.js%20-%23323330.svg?&style=for-the-badge&logo=d3.js&logoColor=%23F7DF1E"/>  
</p>

## Features
- [x] General statistics- Active | Confirmed | Recovered cases
- [x] District wise risk estimation
- [x] District wise vaccination urgency estimation
- [x] Risk visualization in different population region (high or low)
- [x] Decision making on distribution of available vaccinations amongst districts (i.e. how many vaccines to deliver to which district in case a limited supply of vaccines)

## Credits
* The SIR model we devised was inspired from this project [infectious_disease_modelling](https://github.com/henrifroese/infectious_disease_modelling)
* We have used the star admin react template for our dashboard.
* We used the following d3.js template to draw the map of India. [choropleth map of India](https://bl.ocks.org/anilnairxyz/11190f144a89b54c6698699f3a83b315)

## Starware

DesignrKnight/Loud-N-Cloud is Starware.  
This means you're free to use the project, as long as you star its GitHub repository.  
Your appreciation makes us grow and glow up. ⭐

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/DesignrKnight"><img src="https://avatars0.githubusercontent.com/u/27865704?v=4" width="100px;" alt=""/><br /><sub><b>Abel Mathew</b></sub></a><br /><a href="https://github.com/DesignrKnight/Loud-N-Cloud/commits?author=DesignrKnight" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/roshankshaw"><img src="https://avatars0.githubusercontent.com/u/31109201?v=4" width="100px;" alt=""/><br /><sub><b>Roshan Kumar Shaw</b></sub></a><br /><a href="https://github.com/DesignrKnight/Loud-N-Cloud/commits?author=roshankshaw" title="Code">💻</a> <a href="#design-roshankshaw" title="Design">🎨</a></td>
    <td align="center"><a href="http://harshsri2208.github.io"><img src="https://avatars2.githubusercontent.com/u/37096649?v=4" width="100px;" alt=""/><br /><sub><b>Harsh Srivastava</b></sub></a><br /><a href="https://github.com/DesignrKnight/Loud-N-Cloud/commits?author=harshsri2208" title="Code">💻</a> <a href="#design-harshsri2208" title="Design">🎨</a></td>
    <td align="center"><a href="https://sayan1999.github.io/"><img src="https://avatars0.githubusercontent.com/u/42580224?v=4" width="100px;" alt=""/><br /><sub><b>Sayan Dey</b></sub></a><br /><a href="https://github.com/DesignrKnight/Loud-N-Cloud/commits?author=sayan1999" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Chinmay-KB"><img src="https://avatars0.githubusercontent.com/u/13520364?v=4" width="100px;" alt=""/><br /><sub><b>Chinmay Kabi</b></sub></a><br /><a href="https://github.com/DesignrKnight/Loud-N-Cloud/commits?author=Chinmay-KB" title="Code">💻</a> <a href="#content-Chinmay-KB" title="Content">🖋</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
