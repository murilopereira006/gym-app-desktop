import clickableIconsWithValues from './index'

export default {
    component: clickableIconsWithValues,
    title: 'clickableIconsWithValues',
    argTypes: {
        svgIcon: {
            defaultValue: 'https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f525.gif',
            control: { type: 'text' }
        },
        value: {
            defaultValue: 2,
            control: { type: 'number' }
        },
        link: {
            defaultValue: 'google.com',
            control: { type: 'text' }
        },
    }
}

export const Default = (args) => <clickableIconsWithValues {...args} />
