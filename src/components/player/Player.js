import { useEffect, useRef } from "react";
import "./Player.css";
import { useLocation } from 'react-router-dom';
import $ from "jquery";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "@project-sunbird/sunbird-quml-player-web-component/styles.css";
import "@project-sunbird/sunbird-quml-player-web-component/sunbird-quml-player";
import { assessmentTracking } from "../../apis/assessment";
import { useNavigate } from "react-router-dom";

function Player() {
  let trackData = [];
  let apiCalled = false;
  const location = useLocation();
  const { sectionContent } = location.state || {};
  const navigate = useNavigate();

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

  const maxScore = sectionContent?.maxScore;
  

  const sunbirdQumlPlayerRef = useRef(null);
  window.jQuery = $;
  window.questionListUrl = "https://sunbirdsaas.com/api/question/v1/list";

  useEffect(() => {
    const playerElement = sunbirdQumlPlayerRef.current;

    const handleTelemetryEvent = async (event) => {
      console.log("Telemetry Event", event?.detail);

      const data = event?.detail;
      let telemetry = {};

      if (data && typeof data?.data === "string") {
        telemetry = JSON.parse(data.data);
      } else if (data && typeof data === "string") {
        telemetry = JSON.parse(data);
      } else if (data?.eid) {
        telemetry = data;
      }

      if (telemetry?.eid === "ASSESS") {
        const edata = telemetry?.edata;
        const existingDataIndex = trackData.findIndex(
          (e) => e?.item?.id === edata?.item?.id
        );

        if (existingDataIndex >= 0) {
          trackData[existingDataIndex] = {
            ...edata,
            sectionName: sectionContent?.children?.find(
              (e) => e?.identifier === telemetry?.edata?.item?.sectionId
            )?.name,
          };
        } else {
          trackData.push({
            ...edata,
            sectionName: sectionContent?.children?.find(
              (e) => e?.identifier === telemetry?.edata?.item?.sectionId
            )?.name,
          });
        }

        // console.log(telemetry, trackData);
        localStorage.setItem("trackDATA", JSON.stringify(trackData));
      } else if (telemetry?.eid === "END") {
        let milliseconds = event?.detail?.edata?.duration;
        let seconds = milliseconds / 1000;
        localStorage.setItem("totalDuration", seconds);
      }

      const endPageSeen = telemetry?.edata?.extra?.find(
        (item) => item.id === "endpageseen"
      );

      if (endPageSeen && endPageSeen.value === "true" && !apiCalled) {
        apiCalled = true; // Set the flag to true to prevent multiple API calls

        let trackDataOld = localStorage.getItem("trackDATA");
        let trackDataParsed = JSON.parse(trackDataOld);
        let scoreDetails;

        const newFormatData = trackDataParsed.reduce((acc, obj) => {
          const existingSection = acc.find(
            (e) => e.sectionId === obj["item"]["sectionId"]
          );

          if (existingSection) {
            existingSection.data.push(obj);
          } else {
            acc.push({
              sectionId: obj["item"]["sectionId"],
              sectionName: obj["sectionName"] || "",
              data: [obj],
            });
          }
          return acc;
        }, []);

        scoreDetails = JSON.stringify(newFormatData);
        // console.log(scoreDetails);
        await assessmentTracking(scoreDetails);
        toast.success("Assessment submitted successfully", {
          position: "top-center"
        });
        navigate('/dashboard')
        
      } else {
        console.log("End page not seen, API call not made.");
      }
    };

    playerElement.addEventListener("telemetryEvent", handleTelemetryEvent);

    return () => {
      playerElement.removeEventListener(
        "telemetryEvent",
        handleTelemetryEvent
      );
    };
  }, []);

  return (
    <>
    <div className="App">
      <sunbird-quml-player
        player-config={JSON.stringify(playerConfig)}
        ref={sunbirdQumlPlayerRef}
      ></sunbird-quml-player>
         
    </div>
     <ToastContainer />
     </>
  );
}

export default Player;