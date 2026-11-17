import { Composition } from "remotion";
import { Infografico } from "./Infografico";

export const RemotionRoot: React.FC = () => (
  <Composition
    id="Infografico"
    component={Infografico}
    durationInFrames={300}
    fps={30}
    width={1080}
    height={1920}
    defaultProps={{ showSafeArea: false }}
  />
);
