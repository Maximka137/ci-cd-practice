
import ProfileCard from "./ProfileCard";

const Body = () => {
    return (
        <main style={styles.body}>
            <ProfileCard
                name="Saluk Diana"
                position="Software engineer"
                photoSrc="/diana.png"
                photoAlt="Saluk Diana"
            />
        </main>
    );
};

const styles = {
    body: {
        display: "flex",
        flexWrap: "wrap",
    },
};

export default Body;
