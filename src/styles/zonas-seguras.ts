// Márgenes provisionales en píxeles para orientar el diseño ante la interfaz de redes.
// No son una especificación oficial; validar los valores para las plataformas elegidas.
export const MARGENES_ZONAS_SEGURAS = {
  superior: 192, // Reserva para encabezado e interfaz superior.
  inferior: 384, // Reserva para descripción, controles e interfaz inferior.
  lateralIzquierdo: 72,
  lateralDerecho: 180, // Reserva para botones laterales.
} as const;

export const BORDE_GUIA = "2px dashed rgba(255, 0, 0, 0.8)";
