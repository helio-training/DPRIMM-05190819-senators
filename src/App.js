import React from 'react'
// import logo from './logo.svg'
import SearchForm from './SenatorSearch'
import './App.css'

import senators from './senators'

/*
{
    "caucus": null,
    "congress_numbers": [
      113,
      114,
      115
    ],
    "current": true,
    "description": "Junior Senator from Wisconsin",
    "district": null,
    "enddate": "2019-01-03",
    "extra": {
      "address": "709 Hart Senate Office Building Washington DC 20510",
      "contact_form": "https://www.baldwin.senate.gov/feedback",
      "fax": "202-225-6942",
      "office": "709 Hart Senate Office Building",
      "rss_url": "http://www.baldwin.senate.gov/rss/feeds/?type=all"
    },
    "leadership_title": null,
    "party": "Democrat",
    "person": {
      "bioguideid": "B001230",
      "birthday": "1962-02-11",
      "cspanid": 57884,
      "firstname": "Tammy",
      "gender": "female",
      "gender_label": "Female",
      "lastname": "Baldwin",
      "link": "https://www.govtrack.us/congress/members/tammy_baldwin/400013",
      "middlename": "",
      "name": "Sen. Tammy Baldwin [D-WI]",
      "namemod": "",
      "nickname": "",
      "osid": "N00004367",
      "pvsid": "3470",
      "sortname": "Baldwin, Tammy (Sen.) [D-WI]",
      "twitterid": "SenatorBaldwin",
      "youtubeid": "witammybaldwin"
    },
    "phone": "202-224-5653",
    "role_type": "senator",
    "role_type_label": "Senator",
    "senator_class": "class1",
    "senator_class_label": "Class 1",
    "senator_rank": "junior",
    "senator_rank_label": "Junior",
    "startdate": "2013-01-03",
    "state": "WI",
    "title": "Sen.",
    "title_long": "Senator",
    "website": "https://www.baldwin.senate.gov"
  }
*/

const filterByState = (senators, state) => filterBy(senators, 'state', state)

const filterByParty = (senators, party) => filterBy(senators, 'party', party)

const filterBy = (array, property, value) => array.filter(obj => value && obj[property] === value)


function App() {
  return (
    <div className="App">
      <SearchForm
        onSearched={filter => {
          // const result = senators.filter(
          //   senator => filterByState(senators, filter.state) 
          //   // filterByParty(senators, filter.party)
          //   // senator.person.firstname.indexOf(filter.name) > -1 ||
          //   // senator.person.lastname.indexOf(filter.name) > -1,
          // )

          let results = filterByState(senators, filter.state)
          results = filterByParty(results, filter.party)


          console.log(results)
        }}
      />
    </div>
  )
}

export default App
