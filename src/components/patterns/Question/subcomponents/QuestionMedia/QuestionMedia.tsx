import { Box } from "@mui/material";
import Image from "../Image/Image";
import Video from "../Video/Video";
import NoMedia from "../NoMedia/NoMedia";
import { isImage } from "../../../../../utility/utils";
import type { QuestionMode } from "../../types";
import type { QuestionType } from "../../../../../types/globalTypes";
import { flexCenter } from "../../../../../utility/styling";

interface Props {
  mediaFileName: string;
  type: QuestionType;
  mode: QuestionMode;
}

const mediaEndpointUrl = process.env.REACT_APP_SERVER_URL + "media/";
const maxMediaWidth = 900;
const aspectRatio = 0.5625;
const maxMediaHeight = maxMediaWidth * aspectRatio;

export default function QuestionMedia(props: Props) {
  const isMediaPresent = props.mediaFileName !== "";
  const isMediaImage = isImage(props.mediaFileName);

  const mediaUrl = mediaEndpointUrl + props.mediaFileName;

  return (
    <Box
      sx={{
        width: {
          xs: "90vw",
          md: "68vw",
          lg: `clamp(850px, 70vw, ${maxMediaWidth}px)`,
        },
        height: {
          xs: aspectRatio * 90 + "vw",
          md: aspectRatio * 68 + "vw",
          lg: maxMediaHeight + "px",
        },
        gridRow: "2",
        gridColumn: "1",
        bgcolor: "grey.300",
        mx: "auto",
      }}
    >
      {isMediaPresent ? (
        <>
          {isMediaImage ? (
            <Image type={props.type} mode={props.mode} src={mediaUrl} />
          ) : (
            <Video mode={props.mode} src={mediaUrl} />
          )}
        </>
      ) : (
        <NoMedia />
      )}
    </Box>
  );
}
