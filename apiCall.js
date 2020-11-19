javascript:
var url = window.location.href;
var surveyId = url.match(/\/(\d+)\//)[1];
var env = url.match(/-(\w+)-(\w+)/)[0];

var token = JSON.parse(localStorage.getItem(`oidc.user:https://auth${env}.modernsurvey.com/:SurveyBuilderWeb`)).access_token;

genLinks = (element) =>
    console.log(`https://mresearchsurveyengine${env}.modernsurvey.com/Survey.aspx?cid=${element}`);

fetch(`https://surveybuilder-api${env}.modernsurvey.com/v1/surveys/${surveyId}/audiences`, {
    "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        "authorization": `Bearer ${token}`,
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "timezoneabbr": "Europe/Warsaw"
    },
    "referrer": `https://surveybuilder${env}.modernsurvey.com/survey-admin/4092`,
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
})
.then((response)=>response.json())
.then((json)=>{
    fetch(`https://surveybuilder-api${env}.modernsurvey.com/v1/surveys/${surveyId}/audiences/${json[0].audienceId}/surveyparticipants/paged`, {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            "authorization": `Bearer ${token}`,
            "cache-control": "no-cache",
            "content-type": "application/json;charset=UTF-8",
            "pragma": "no-cache",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "timezoneabbr": "Europe/Warsaw",
            "cookie": "_ga=GA1.2.1581909785.1595849863; _gid=GA1.2.235289562.1595849863; ClientId=8e251a0e-9419-4394-8be6-7efb460689d1; msuite_timeout_time=1595851952586"
        },
        "referrer": `https://surveybuilder${env}.modernsurvey.com/survey-admin/${surveyId}/participants`,
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": "{\"offSet\":0,\"limit\":25,\"sortedOn\":\"firstName\",\"sortAsc\":true,\"searchText\":\"\",\"columns\":\"\",\"selectedDistributionContactIds\":[]}",
        "method": "POST",
        "mode": "cors"
    })
    .then((response)=>response.json())
    .then((responseJSON)=> {
        responseJSON.forEach(e => genLinks(e.externalParticipantId))
    }
    );
}
);
