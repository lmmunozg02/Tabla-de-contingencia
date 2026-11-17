import {
  COLOR_FONDO,
  COLOR_GUIA,
  COLOR_TEXTO,
  FAMILIA_TIPOGRAFICA,
  TAMANO_TEXTO_MARCADOR,
} from "./styles/tokens";
import {
  BORDE_GUIA,
  MARGENES_ZONAS_SEGURAS,
} from "./styles/zonas-seguras";

type InfograficoProps = {
  showSafeArea?: boolean;
};

export const Infografico: React.FC<InfograficoProps> = ({
  showSafeArea = false,
}) => (
  <div
    style={{
      position: "relative",
      display: "flex",
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      backgroundColor: COLOR_FONDO,
      color: COLOR_TEXTO,
      fontFamily: FAMILIA_TIPOGRAFICA,
    }}
  >
    <span style={{ fontSize: TAMANO_TEXTO_MARCADOR }}>
      Infográfico: pendiente
    </span>
    {showSafeArea ? (
      <>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            height: MARGENES_ZONAS_SEGURAS.superior,
            backgroundColor: COLOR_GUIA,
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            left: 0,
            height: MARGENES_ZONAS_SEGURAS.inferior,
            backgroundColor: COLOR_GUIA,
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: MARGENES_ZONAS_SEGURAS.superior,
            right: 0,
            bottom: MARGENES_ZONAS_SEGURAS.inferior,
            width: MARGENES_ZONAS_SEGURAS.lateralDerecho,
            backgroundColor: COLOR_GUIA,
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: MARGENES_ZONAS_SEGURAS.superior,
            bottom: MARGENES_ZONAS_SEGURAS.inferior,
            left: 0,
            width: MARGENES_ZONAS_SEGURAS.lateralIzquierdo,
            backgroundColor: COLOR_GUIA,
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: MARGENES_ZONAS_SEGURAS.superior,
            right: MARGENES_ZONAS_SEGURAS.lateralDerecho,
            bottom: MARGENES_ZONAS_SEGURAS.inferior,
            left: MARGENES_ZONAS_SEGURAS.lateralIzquierdo,
            border: BORDE_GUIA,
            boxSizing: "border-box",
            pointerEvents: "none",
          }}
        />
      </>
    ) : null}
  </div>
);
