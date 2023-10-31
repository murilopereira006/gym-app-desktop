import ButtonGeneric from "../components/buttonGeneric";

const Login = () => {
    return (
        <>
            <header>
                <img src="" alt="logo" />
                <ButtonGeneric
                    outer={true}
                    outerWeight={1}
                    outerStyle={'solid'}
                    outerColor={'red'}
                    outerPadding={40}
                    padding={'10px 5px'}
                    margin={'10px'}
                >
                    Log in
                </ButtonGeneric>
                <ButtonGeneric>Sing Up</ButtonGeneric>
            </header>
            <main>
                <h1>Bora treinar!</h1>
                <span>Faca o login na sua academia</span>
            </main>
            <footer></footer>
        </>
    )
}

export default Login;
