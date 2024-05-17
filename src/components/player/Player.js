import { useEffect, useRef } from "react";
import "./Player.css";

import $ from "jquery";
import "@project-sunbird/sunbird-quml-player-web-component/styles.css";
import "@project-sunbird/sunbird-quml-player-web-component/sunbird-quml-player"


function Player() {
    let trackData = []

  const sectionContent = {
    "copyright": "lifeglobal",
    "keywords": [
        "maths"
    ],
    "subject": [
        "Math"
    ],
    "channel": "01369885294383923244",
    "language": [
        "English"
    ],
    "mimeType": "application/vnd.sunbird.questionset",
    "showHints": "No",
    "objectType": "QuestionSet",
    "gradeLevel": [
        "Grade 6"
    ],
    "appIcon": "",
    "primaryCategory": "Practice Question Set",
    "children": [
        {
            "parent": "do_1140556713363128321676",
            "instructions": {
                "default": "<p>Answer MCQ questions</p>"
            },
            "code": "5c9b6fd2-2eee-0b64-bfbb-8c1972569178",
            "allowSkip": "Yes",
            "keywords": [
                "math"
            ],
            "containsUserData": "No",
            "prevStatus": "Review",
            "channel": "01369885294383923244",
            "description": "This question set targets multiplication and division, aiming to evaluate basic competencies in these areas. It includes three multiple-choice questions to measure the understanding and application of multiplication and division in everyday scenarios.",
            "language": [
                "English"
            ],
            "mimeType": "application/vnd.sunbird.questionset",
            "showHints": "No",
            "createdOn": "2024-05-15T13:42:04.694+0000",
            "objectType": "QuestionSet",
            "primaryCategory": "Practice Question Set",
            "children": [
                {
                    "parent": "do_1140556740582932481677",
                    "copyright": "lifeglobal",
                    "code": "c26bc355-b76a-f5d7-eb9c-3e83a3c6690f",
                    "subject": [
                        "Math"
                    ],
                    "prevStatus": "Review",
                    "channel": "01369885294383923244",
                    "language": [
                        "English"
                    ],
                    "medium": [
                        "Hindi"
                    ],
                    "mimeType": "application/vnd.sunbird.question",
                    "templateId": "mcq-vertical",
                    "createdOn": "2024-05-15T13:44:35.543+0000",
                    "objectType": "Question",
                    "gradeLevel": [
                        "Grade 6"
                    ],
                    "primaryCategory": "Multiple Choice Question",
                    "contentDisposition": "inline",
                    "lastUpdatedOn": "2024-05-16T11:42:00.418+0000",
                    "contentEncoding": "gzip",
                    "showSolutions": "No",
                    "allowAnonymousAccess": "Yes",
                    "identifier": "do_1140556752940482561679",
                    "lastStatusChangedOn": "2024-05-16T11:12:15.700+0000",
                    "audience": [
                        "Student"
                    ],
                    "visibility": "Parent",
                    "showTimer": "No",
                    "author": "Content Creator Pratham",
                    "index": 1,
                    "qType": "MCQ",
                    "languageCode": [
                        "en"
                    ],
                    "version": 1,
                    "versionKey": "1715859720439",
                    "showFeedback": "No",
                    "license": "CC BY 4.0",
                    "interactionTypes": [
                        "choice"
                    ],
                    "framework": "gujaratboardfw",
                    "depth": 2,
                    "createdBy": "84721b4a-6536-4cb0-b8c3-57583ef4cada",
                    "compatibilityLevel": 4,
                    "name": "What is the result of (8 + 2) ?",
                    "board": "Gujarat Secondary and Higher Secondary Education Board",
                    "status": "Draft"
                },
                {
                    "parent": "do_1140556740582932481677",
                    "copyright": "lifeglobal",
                    "code": "19a8a705-fadf-f577-1eb6-b5c42e5a8770",
                    "subject": [
                        "Math"
                    ],
                    "prevStatus": "Review",
                    "channel": "01369885294383923244",
                    "language": [
                        "English"
                    ],
                    "medium": [
                        "Hindi"
                    ],
                    "mimeType": "application/vnd.sunbird.question",
                    "templateId": "mcq-vertical",
                    "createdOn": "2024-05-15T13:46:49.869+0000",
                    "objectType": "Question",
                    "gradeLevel": [
                        "Grade 6"
                    ],
                    "primaryCategory": "Multiple Choice Question",
                    "contentDisposition": "inline",
                    "lastUpdatedOn": "2024-05-16T11:44:36.397+0000",
                    "contentEncoding": "gzip",
                    "showSolutions": "No",
                    "allowAnonymousAccess": "Yes",
                    "identifier": "do_1140556763944386561681",
                    "lastStatusChangedOn": "2024-05-16T11:12:15.700+0000",
                    "audience": [
                        "Student"
                    ],
                    "visibility": "Parent",
                    "showTimer": "No",
                    "author": "Content Creator Pratham",
                    "index": 2,
                    "qType": "MCQ",
                    "languageCode": [
                        "en"
                    ],
                    "version": 1,
                    "versionKey": "1715859876411",
                    "showFeedback": "No",
                    "license": "CC BY 4.0",
                    "interactionTypes": [
                        "choice"
                    ],
                    "framework": "gujaratboardfw",
                    "depth": 2,
                    "createdBy": "84721b4a-6536-4cb0-b8c3-57583ef4cada",
                    "compatibilityLevel": 4,
                    "name": "If you have 5 apples and you buy 7 more, how many apples do you have in total?",
                    "board": "Gujarat Secondary and Higher Secondary Education Board",
                    "status": "Draft"
                },
                {
                    "parent": "do_1140556740582932481677",
                    "copyright": "lifeglobal",
                    "code": "9b4fbc59-69a3-dd29-e099-8be990d6f822",
                    "subject": [
                        "Math"
                    ],
                    "prevStatus": "Review",
                    "channel": "01369885294383923244",
                    "language": [
                        "English"
                    ],
                    "medium": [
                        "Hindi"
                    ],
                    "mimeType": "application/vnd.sunbird.question",
                    "templateId": "mcq-vertical",
                    "createdOn": "2024-05-15T13:49:14.499+0000",
                    "objectType": "Question",
                    "gradeLevel": [
                        "Grade 6"
                    ],
                    "primaryCategory": "Multiple Choice Question",
                    "contentDisposition": "inline",
                    "lastUpdatedOn": "2024-05-16T11:44:53.678+0000",
                    "contentEncoding": "gzip",
                    "showSolutions": "No",
                    "allowAnonymousAccess": "Yes",
                    "identifier": "do_1140556775792558081684",
                    "lastStatusChangedOn": "2024-05-16T11:12:15.700+0000",
                    "audience": [
                        "Student"
                    ],
                    "visibility": "Parent",
                    "showTimer": "No",
                    "author": "Content Creator Pratham",
                    "index": 3,
                    "qType": "MCQ",
                    "languageCode": [
                        "en"
                    ],
                    "version": 1,
                    "versionKey": "1715859893693",
                    "showFeedback": "No",
                    "license": "CC BY 4.0",
                    "interactionTypes": [
                        "choice"
                    ],
                    "framework": "gujaratboardfw",
                    "depth": 2,
                    "createdBy": "84721b4a-6536-4cb0-b8c3-57583ef4cada",
                    "compatibilityLevel": 4,
                    "name": "What is (15 - 6) ?",
                    "board": "Gujarat Secondary and Higher Secondary Education Board",
                    "status": "Draft"
                }
            ],
            "contentDisposition": "inline",
            "lastUpdatedOn": "2024-05-16T11:37:35.130+0000",
            "contentEncoding": "gzip",
            "generateDIALCodes": "No",
            "showSolutions": "No",
            "allowAnonymousAccess": "Yes",
            "identifier": "do_1140556740582932481677",
            "lastStatusChangedOn": "2024-05-16T11:12:15.700+0000",
            "requiresSubmit": "No",
            "visibility": "Parent",
            "showTimer": "No",
            "index": 1,
            "setType": "materialised",
            "languageCode": [
                "en"
            ],
            "version": 1,
            "versionKey": "1715780524694",
            "showFeedback": "Yes",
            "license": "CC BY 4.0",
            "depth": 1,
            "compatibilityLevel": 5,
            "name": "Basic Arithmetic Assessment Set 1",
            "navigationMode": "non-linear",
            "shuffle": false,
            "attributions": [],
            "status": "Draft"
        },
        {
            "parent": "do_1140556713363128321676",
            "instructions": {
                "default": "<p>This question set targets multiplication and division, aiming to evaluate basic competencies in these areas. It includes three multiple-choice questions to measure the understanding and application of multiplication and division in everyday scenarios.</p>"
            },
            "code": "79a84aa4-bf0e-a98e-8984-6b2653e83ddf",
            "allowSkip": "Yes",
            "keywords": [
                "Maths"
            ],
            "containsUserData": "No",
            "prevStatus": "Review",
            "channel": "01369885294383923244",
            "description": "This question set targets multiplication and division, aiming to evaluate basic competencies in these areas. It includes three multiple-choice questions to measure the understanding and application of multiplication and division in everyday scenarios.\n",
            "language": [
                "English"
            ],
            "mimeType": "application/vnd.sunbird.questionset",
            "showHints": "No",
            "createdOn": "2024-05-15T13:52:57.369+0000",
            "objectType": "QuestionSet",
            "primaryCategory": "Practice Question Set",
            "children": [
                {
                    "parent": "do_1140556794050068481686",
                    "copyright": "lifeglobal",
                    "code": "7dc9bfdf-328e-43f0-1d0a-ed3a626f56fc",
                    "subject": [
                        "Math"
                    ],
                    "prevStatus": "Review",
                    "channel": "01369885294383923244",
                    "language": [
                        "English"
                    ],
                    "medium": [
                        "Hindi"
                    ],
                    "mimeType": "application/vnd.sunbird.question",
                    "templateId": "mcq-vertical",
                    "createdOn": "2024-05-15T13:53:57.573+0000",
                    "objectType": "Question",
                    "gradeLevel": [
                        "Grade 6"
                    ],
                    "primaryCategory": "Multiple Choice Question",
                    "contentDisposition": "inline",
                    "lastUpdatedOn": "2024-05-16T11:45:14.866+0000",
                    "contentEncoding": "gzip",
                    "showSolutions": "No",
                    "allowAnonymousAccess": "Yes",
                    "identifier": "do_1140556798981980161688",
                    "lastStatusChangedOn": "2024-05-16T11:12:15.700+0000",
                    "audience": [
                        "Student"
                    ],
                    "visibility": "Parent",
                    "showTimer": "No",
                    "author": "Content Creator Pratham",
                    "index": 1,
                    "qType": "MCQ",
                    "languageCode": [
                        "en"
                    ],
                    "version": 1,
                    "versionKey": "1715859914934",
                    "showFeedback": "No",
                    "license": "CC BY 4.0",
                    "interactionTypes": [
                        "choice"
                    ],
                    "framework": "gujaratboardfw",
                    "depth": 2,
                    "createdBy": "84721b4a-6536-4cb0-b8c3-57583ef4cada",
                    "compatibilityLevel": 4,
                    "name": "What is (15 - 6) ?",
                    "board": "Gujarat Secondary and Higher Secondary Education Board",
                    "status": "Draft"
                },
                {
                    "parent": "do_1140556794050068481686",
                    "copyright": "lifeglobal",
                    "code": "ca24c8a3-9030-fd7b-f803-67cebf587bae",
                    "subject": [
                        "Math"
                    ],
                    "prevStatus": "Review",
                    "channel": "01369885294383923244",
                    "language": [
                        "English"
                    ],
                    "medium": [
                        "Hindi"
                    ],
                    "mimeType": "application/vnd.sunbird.question",
                    "templateId": "mcq-vertical",
                    "createdOn": "2024-05-15T13:55:07.028+0000",
                    "objectType": "Question",
                    "gradeLevel": [
                        "Grade 6"
                    ],
                    "primaryCategory": "Multiple Choice Question",
                    "contentDisposition": "inline",
                    "lastUpdatedOn": "2024-05-16T11:45:33.553+0000",
                    "contentEncoding": "gzip",
                    "showSolutions": "No",
                    "allowAnonymousAccess": "Yes",
                    "identifier": "do_1140556804671733761690",
                    "lastStatusChangedOn": "2024-05-16T11:12:15.700+0000",
                    "audience": [
                        "Student"
                    ],
                    "visibility": "Parent",
                    "showTimer": "No",
                    "author": "Content Creator Pratham",
                    "index": 2,
                    "qType": "MCQ",
                    "languageCode": [
                        "en"
                    ],
                    "version": 1,
                    "versionKey": "1715859933574",
                    "showFeedback": "No",
                    "license": "CC BY 4.0",
                    "interactionTypes": [
                        "choice"
                    ],
                    "framework": "gujaratboardfw",
                    "depth": 2,
                    "createdBy": "84721b4a-6536-4cb0-b8c3-57583ef4cada",
                    "compatibilityLevel": 4,
                    "name": "If you divide 20 cookies among 4 friends equally, how many cookies does each friend get?",
                    "board": "Gujarat Secondary and Higher Secondary Education Board",
                    "status": "Draft"
                },
                {
                    "parent": "do_1140556794050068481686",
                    "copyright": "lifeglobal",
                    "code": "3b33fc50-586a-56af-4c2a-21a7bcbecdd3",
                    "subject": [
                        "Math"
                    ],
                    "prevStatus": "Review",
                    "channel": "01369885294383923244",
                    "language": [
                        "English"
                    ],
                    "medium": [
                        "Hindi"
                    ],
                    "mimeType": "application/vnd.sunbird.question",
                    "templateId": "mcq-vertical",
                    "createdOn": "2024-05-15T13:56:10.811+0000",
                    "objectType": "Question",
                    "gradeLevel": [
                        "Grade 6"
                    ],
                    "primaryCategory": "Multiple Choice Question",
                    "contentDisposition": "inline",
                    "lastUpdatedOn": "2024-05-16T11:46:00.405+0000",
                    "contentEncoding": "gzip",
                    "showSolutions": "No",
                    "allowAnonymousAccess": "Yes",
                    "identifier": "do_1140556809896837121692",
                    "lastStatusChangedOn": "2024-05-16T11:12:15.700+0000",
                    "audience": [
                        "Student"
                    ],
                    "visibility": "Parent",
                    "showTimer": "No",
                    "author": "Content Creator Pratham",
                    "index": 3,
                    "qType": "MCQ",
                    "languageCode": [
                        "en"
                    ],
                    "version": 1,
                    "versionKey": "1715859960430",
                    "showFeedback": "No",
                    "license": "CC BY 4.0",
                    "interactionTypes": [
                        "choice"
                    ],
                    "framework": "gujaratboardfw",
                    "depth": 2,
                    "createdBy": "84721b4a-6536-4cb0-b8c3-57583ef4cada",
                    "compatibilityLevel": 4,
                    "name": "What is the product of (4 times 4) ?",
                    "board": "Gujarat Secondary and Higher Secondary Education Board",
                    "status": "Draft"
                }
            ],
            "contentDisposition": "inline",
            "lastUpdatedOn": "2024-05-16T11:46:11.088+0000",
            "contentEncoding": "gzip",
            "generateDIALCodes": "No",
            "showSolutions": "No",
            "allowAnonymousAccess": "Yes",
            "identifier": "do_1140556794050068481686",
            "lastStatusChangedOn": "2024-05-16T11:12:15.700+0000",
            "requiresSubmit": "No",
            "visibility": "Parent",
            "showTimer": "No",
            "index": 2,
            "setType": "materialised",
            "languageCode": [
                "en"
            ],
            "version": 1,
            "versionKey": "1715781177369",
            "showFeedback": "No",
            "license": "CC BY 4.0",
            "depth": 1,
            "compatibilityLevel": 5,
            "name": "Basic Arithmetic Assessment Set 2",
            "navigationMode": "non-linear",
            "shuffle": true,
            "attributions": [],
            "status": "Draft"
        }
    ],
    "contentEncoding": "gzip",
    "lockKey": "0d16112d-3989-4bb5-bbfc-cc3d9ae9738e",
    "generateDIALCodes": "No",
    "showSolutions": "No",
    "identifier": "do_1140556713363128321676",
    "audience": [
        "Student"
    ],
    "visibility": "Default",
    "showTimer": "Yes",
    "author": "Content Creator Pratham",
    "consumerId": "9bcfb11f-0e3b-4aba-b5da-e72ee8cfd318",
    "childNodes": [
        "do_1140556752940482561679",
        "do_1140556740582932481677",
        "do_1140556763944386561681",
        "do_1140556775792558081684",
        "do_1140556798981980161688",
        "do_1140556794050068481686",
        "do_1140556804671733761690",
        "do_1140556809896837121692"
    ],
    "maxScore": 6,
    "languageCode": [
        "en"
    ],
    "version": 1,
    "license": "CC BY 4.0",
    "name": "Arithmetic QuestionSet May 15",
    "rejectComment": "Need to add program and other fields details",
    "status": "Draft",
    "code": "27f71ae3-3b7c-148e-a9c4-ce4f3e0b481f",
    "allowSkip": "Yes",
    "containsUserData": "No",
    "prevStatus": "Review",
    "description": "test qset",
    "medium": [
        "Hindi"
    ],
    "createdOn": "2024-05-15T13:36:32.427+0000",
    "contentDisposition": "inline",
    "lastUpdatedOn": "2024-05-16T11:46:11.127+0000",
    "allowAnonymousAccess": "Yes",
    "lastStatusChangedOn": "2024-05-16T11:12:15.721+0000",
    "createdFor": [
        "01369885294383923244"
    ],
    "requiresSubmit": "Yes",
    "summaryType": "Score & Duration",
    "setType": "materialised",
    "versionKey": "1715859971127",
    "showFeedback": "Yes",
    "framework": "gujaratboardfw",
    "depth": 0,
    "createdBy": "84721b4a-6536-4cb0-b8c3-57583ef4cada",
    "compatibilityLevel": 5,
    "navigationMode": "non-linear",
    "timeLimits": {
        "maxTime": "1200",
        "warningTime": "900"
    },
    "shuffle": true,
    "board": "Gujarat Secondary and Higher Secondary Education Board"
}

  
  let metadata = sectionContent;
   const playerConfig = {
    context: {
      threshold: 3,
      mode: "play",
      authToken: " ",
      sid: "913b3c6c-2874-26dd-ed0c-c23ddc00b718",
      did: "561c348e631fd225b46a5571cbd42ad1",
      uid: "",
      channel: "01268904781886259221",
      pdata: {
        id: "preprod.diksha.portal",
        ver: "3.3.0",
        pid: "sunbird-portal.contentplayer",
      },
      contextRollup: {
        l1: "string",
        l2: "string",
        l3: "string",
        l4: "string",
      },
      tags: [],
      cdata: [
        {
          id: "c0c9384a82a75f219468d363e1891963",
          type: "ContentSession",
        },
        {
          id: "a12f45a1d7078901adb27b48be4b428d",
          type: "PlaySession",
        },
      ],
      timeDiff: 5,
      objectRollup: {
        l1: "string",
        l2: "string",
        l3: "string",
        l4: "string",
      },
      host: "",
      // endpoint: "/data/v3/telemetry",
      userData: metadata?.userData ? metadata?.userData : {},
    },
    metadata: metadata,
    config: {
      traceId: "1234",
      sideMenu: {
        enable: false,
        showShare: false,
        showDownload: false,
        showReplay: false,
        showPrint: false,
        showExit: false,
      },
    },
  };
  

  const sunbirdQumlPlayerRef = useRef(null);
  window.jQuery = $;
  window.questionListUrl = "https://sunbirdsaas.com/api/question/v1/list";

  useEffect(() => {
    const playerElement = sunbirdQumlPlayerRef.current;
    
    const handleTelemetryEvent = (event) => {

      console.log("Telemetry Event", event?.detail?.edata?.duration);

      const data = event?.detail
      let milliseconds = event?.detail?.edata?.duration
      let seconds = milliseconds / 1000
      localStorage.setItem('totalDuration', seconds)


      let telemetry = {}
      if (data && typeof data?.data === 'string') {
        telemetry = JSON.parse(data.data)
      } else if (data && typeof data === 'string') {
        telemetry = JSON.parse(data)
      } else if (data?.eid) {
        telemetry = data
      }
  
      if (telemetry?.eid === 'EXDATA') {
        try {
          const edata = JSON.parse(telemetry.edata?.data)
          if (edata?.statement?.result) {
            trackData = [...trackData, edata?.statement]
          }
        } catch (e) {
          console.log('telemetry format h5p is wrong', e.message)
        }
      }
      if (telemetry?.eid === 'ASSESS') {
        const edata = telemetry?.edata
        if (trackData.find((e) => e?.item?.id === edata?.item?.id)) {
          const filterData = trackData.filter(
            (e) => e?.item?.id !== edata?.item?.id
          )
          trackData = [
            ...filterData,
            {
              ...edata,
              sectionName: sectionContent?.children?.find(
                (e) => e?.identifier === telemetry?.edata?.item?.sectionId
              )?.name
            }
          ]
        } else {
          trackData = [
            ...trackData,
            {
              ...edata,
              sectionName: sectionContent?.children?.find(
                (e) => e?.identifier === telemetry?.edata?.item?.sectionId
              )?.name
            }
          ]
        }
        console.log(telemetry, trackData)
        localStorage.setItem('trackDATA', JSON.stringify(trackData))
    }else if (telemetry?.eid === 'END') {
        localStorage.setItem('totalDuration', telemetry?.edata?.duration)
    }




   
      const endPageSeen = event?.detail?.edata?.extra?.find(item => item.id === 'endpageseen');
    
    // Check if endpageseen value is 'true'
    if (endPageSeen && endPageSeen.value === 'true') {
        // Proceed with the API call

    let data = {};
    let trackDataold = localStorage.getItem("trackDATA");
    let trackData = JSON.parse(trackDataold);
    let scoreDetails;
    
      const newFormatData = trackData.reduce((oldData, newObj) => {
        const dataExist = oldData.findIndex(
          (e) => e.sectionId === newObj["item"]["sectionId"]
        );
        if (dataExist >= 0) {
          oldData[dataExist]["data"].push(newObj);
        } else {
          oldData = [
            ...oldData,
            {
              sectionId: newObj["item"]["sectionId"],
              sectionName: newObj["sectionName"] ? newObj["sectionName"] : "",
              data: [newObj],
            },
          ];
        }
        return oldData;
      }, []);
      scoreDetails = JSON.stringify(newFormatData);
      const timeSpentString = localStorage.getItem("totalDuration");
      const formattedNumber =
        timeSpentString.slice(0, -3) + "." + timeSpentString.slice(-3);
      const timeSpentInt = parseFloat(formattedNumber);
      const inSeconds = Math.ceil(timeSpentInt);
      console.log(inSeconds);
      console.log(scoreDetails);

        makeApiCall();
    } else {
        console.log('End page not seen, API call not made.');
    }
      
    };

    function makeApiCall() {
      console.log('API call is being made.');
      // Add your API call logic here
  }

    
    playerElement.addEventListener("telemetryEvent", handleTelemetryEvent);

    return () => {
     
      playerElement.removeEventListener("telemetry  Event", handleTelemetryEvent);
    };
  }, []);

  return (
    <div className="App">
      <sunbird-quml-player
        player-config={JSON.stringify(playerConfig)}
        ref={sunbirdQumlPlayerRef}
      ></sunbird-quml-player>
    </div>
  );
}

export default Player;
