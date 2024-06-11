import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import $ from "jquery";
import "@project-sunbird/sunbird-quml-player-web-component/styles.css";
import "@project-sunbird/sunbird-quml-player-web-component/sunbird-quml-player";
import { assessmentTracking } from "../../apis/assessment";
import { Modal, Box, Button, Typography } from "@mui/material";
import "./Player.css";

const Player = () => {
  const [modalOpen, setModalOpen] = useState(false);

  let trackData = [];
  let apiCalled = false;
  const location = useLocation();
  const { sectionContent } = location.state || {};
  const navigate = useNavigate();

  const identifierWithoutImg = sectionContent.identifier.replace(".img", "");
  const maxScore = sectionContent.maxScore;

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

        if (edata?.resvalues && edata?.resvalues.length > 0) {
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
      }
        localStorage.setItem("trackDATA", JSON.stringify(trackData));
      } else if (telemetry?.eid === "END") {
        let originalDuration = event?.detail?.edata?.duration;
        let newDuration = originalDuration / 10;
        let seconds = (newDuration = Math.round(newDuration * 10) / 10);

        localStorage.setItem("totalDuration", seconds);
      }

      const endPageSeen = telemetry?.edata?.extra?.find(
        (item) => item.id === "endpageseen"
      );

      if (endPageSeen && endPageSeen.value === "true" && !apiCalled) {
        apiCalled = true;

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

        const secondsString = localStorage.getItem("totalDuration");
        const seconds = Number(secondsString);

        try {
          await assessmentTracking(
            scoreDetails,
            identifierWithoutImg,
            maxScore,
            seconds
          );

          setModalOpen(true);
        } catch (error) {
          console.error("Error submitting assessment:", error);
        }
      } else {
        console.log("End page not seen, API call not made.");
      }
    };

    playerElement.addEventListener("telemetryEvent", handleTelemetryEvent);

    return () => {
      playerElement.removeEventListener("telemetryEvent", handleTelemetryEvent);
    };
  }, []);

  const handleClose = () => {
    setModalOpen(false);
    window.location.assign("/");
  };

  return (
    <div className="App">
      <sunbird-quml-player
        player-config={JSON.stringify(playerConfig)}
        ref={sunbirdQumlPlayerRef}
      ></sunbird-quml-player>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",

            boxShadow: 2,
            p: 2,
          }}
        >
          <Typography id="modal-title">Test completed</Typography>
          <Button
            onClick={handleClose}
            variant="fill"
            color="primary"
            sx={{
              width: "100%",
              borderRadius: "50px",
              mt: 2,
              bgcolor: "#fdbe16",
            }}
          >
            OK
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Player;


