type InfograficoProps = {
  showSafeArea?: boolean;
};

export const Infografico: React.FC<InfograficoProps> = ({
  showSafeArea = false,
}) => (
  <div
    style={{
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      backgroundColor: "#fff",
    }}
  >
    {showSafeArea ? (
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "10%",
          boxSizing: "border-box",
          border: "2px dashed rgba(0, 120, 255, 0.7)",
          pointerEvents: "none",
        }}
      />
    ) : null}
  </div>
);
