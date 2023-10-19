import TopBar from "../components/topBar"

const Home = () => {
    return (
        <>
            <TopBar arrayOfComponents={[
                { icon: "https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f525.gif", value: 0, link: "google.com" },
                { icon: "https://media.baamboozle.com/uploads/images/132036/1647805405_18740_gif-url.gif", value: 7, link: "google.com" }
            ]} />
            <h1>Home</h1>
        </>
    )
}

export default Home;
