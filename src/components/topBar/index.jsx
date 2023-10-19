import PropTypes from 'prop-types'
import ClickableIconsWithValues from '../clickableIconsWithValues'
import { ContainerNavBar } from './styles'

const TopBar = ({ arrayOfComponents }) => {
    return (
        <ContainerNavBar>
            {
                arrayOfComponents.map((item, index) => {
                    return (
                        <ClickableIconsWithValues key={index} svgIcon={item.icon} value={item.value} link={item.link} />
                    )
                })
            }
        </ContainerNavBar>
    )
}

export default TopBar

TopBar.propTypes = {
    arrayOfComponents: PropTypes.array.isRequired
}

