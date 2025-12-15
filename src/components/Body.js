import ProfileCard from "./ProfileCard";

const Body = () => {
  return (
    <main style={styles.body}>
      <ProfileCard
        name="Maksym Kostyshyn"
        position="Software engineer"
        photoSrc="/maks.jpg"
        photoAlt="Maksym Kostyshyn"
      />

      <ProfileCard
        name="Maks Verkhovynets"
        position="Software engineer"
        photoSrc="/maksik.jpg"
        photoAlt="Maks Verkhovynets"
      />

      <ProfileCard
        name="Viktoria Zhyvchyn"
        position="Software engineer"
        photoSrc="/vikaphoto.jpg"
        photoAlt="Viktoria Zhyvchyn"
      />
          
      <ProfileCard
          name="Saluk Diana"
          position="Software engineer"
          photoSrc="/diana.png"
          photoAlt="Saluk Diana"
      />

      <h1>Test header123123213</h1>
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
