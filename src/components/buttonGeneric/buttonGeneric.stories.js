import { ButtonGenerics } from './index'

export default {
    component: ButtonGenerics,
    title: 'ButtonGenerics',
    argTypes: {
        svgIcon: {
            defaultValue: 'https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f525.gif',
            control: { type: 'text' }
        },
    }
}

export const Default = (args) => <ButtonGenerics {...args} ></ButtonGenerics>
