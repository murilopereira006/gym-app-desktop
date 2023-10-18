import PropTypes from 'prop-types'
import { ContainerNavBar } from './styles'

const TopBar = ({arrayOfComponents}) => {
    return (
        <ContainerNavBar>
            {
                arrayOfComponents.map((item, index) => <span key={index}>{item}</span>)
            }
        </ContainerNavBar>
    )
}

export default TopBar

TopBar.propTypes = {
    arrayOfComponents: PropTypes.array.isRequired
}

