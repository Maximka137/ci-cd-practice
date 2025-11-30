import ProfileCard from "./ProfileCard";

const Body = () => {
  return (
    <main style={styles.body}>
      <ProfileCard
        name="Maksym Kostyshyn"
        position="Software engineer"
        photoSrc="/avatar-default.png"
        photoAlt="Maksym Kostyshyn"
      />

      <ProfileCard
        name="Maks Verkhovynets"
        position="Software engineer"
        photoSrc="/avatar-default.png"
        photoAlt="Maks Verkhovynets"
      />
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
};

export default Body;
