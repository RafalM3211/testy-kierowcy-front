import { Box } from "@mui/material";
import Image from "../Image/Image";
import Video from "../Video/Video";

interface Props {
  mediaFileName: string;
}

const mediaEndpointUrl = process.env.REACT_APP_SERVER_URL + "media/";
const mediaWidth = 921;
const aspectRatio = 0.5625;
const mediaHeight = mediaWidth * aspectRatio;

function isImage(name: string) {
  const extension = name.slice(name.lastIndexOf(".") + 1);
  return extension === "jpg";
}

export default function QuestionMedia(props: Props) {
  const isMediaImage = isImage(props.mediaFileName);

  const fileUrl = mediaEndpointUrl + props.mediaFileName;

  return (
    <Box
      sx={(theme) => ({
        width: mediaWidth + "px",
        height: mediaHeight + "px",
        bgcolor: "grey.300",
        gridRow: "2",
        gridColumn: "1",
      })}
    >
      {isMediaImage ? (
        <Image src={fileUrl} sx={{ width: "100%", height: "100%" }} />
      ) : (
        <Video src={fileUrl} />
      )}
    </Box>
  );
}