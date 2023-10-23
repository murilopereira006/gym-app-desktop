import PropTypes from "prop-types";
import { Image, Container } from "./styles";

const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/640px-Default_pfp.svg.png"

const ProfileIcon = ({ photo }) => {
    return (
        <Container href={"/profile"}>
            <Image src={photo ? photo : defaultImage} alt={"Foto de perfil"} />
        </Container>
    );
};

export default ProfileIcon

ProfileIcon.propTypes = {
    photo: PropTypes.string
};
