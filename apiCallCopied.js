fetch("https://surveybuilder-api-qa-re.modernsurvey.com/v1/surveys/8677/audiences", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "authorization": "Bearer 2Vhb9gPEDyBqDrAMm-GBCzHj5zgn3B2Cvp0xvQx1JLU",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "timezoneabbr": "Europe/Warsaw"
  },
  "referrer": "https://surveybuilder-qa-re.modernsurvey.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
})
.then((response)=>response.json())
.then((data)=> 
    fetch(`https://surveybuilder-api-qa-re.modernsurvey.com/v1/surveys/8673/audiences/${data[0].audienceId}/surveyparticipants/paged`, {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.9",
                "authorization": "Bearer xxxx",
                "cache-control": "no-cache",
                "content-type": "application/json;charset=UTF-8",
                "pragma": "no-cache",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "timezoneabbr": "Europe/Warsaw"
            },
            "referrer": "https://surveybuilder-qa-re.modernsurvey.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"offSet\":0,\"limit\":25,\"sortedOn\":\"firstName\",\"sortAsc\":true,\"searchText\":\"\",\"columns\":\"\",\"selectedDistributionContactIds\":[],\"getOnlyDuplicates\":false}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
            })
);

