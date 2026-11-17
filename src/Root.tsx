import { Composition } from "remotion";
import { Infografico } from "./Infografico";
import { ALTO, FPS, ANCHO } from "./styles/formato";
import { DURACION_INICIAL_EN_FRAMES } from "./styles/tiempos";

export const RemotionRoot: React.FC = () => (
  <Composition
    id="Infografico"
    component={Infografico}
    durationInFrames={DURACION_INICIAL_EN_FRAMES}
    fps={FPS}
    width={ANCHO}
    height={ALTO}
    defaultProps={{ showSafeArea: false }}
  />
);
