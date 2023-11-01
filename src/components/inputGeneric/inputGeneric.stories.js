import { InputGeneric } from './index'

export default {
    component: InputGeneric,
    title: 'InputGeneric',
    argTypes: {
        photo: {
            defaultValue: 'https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f525.gif',
            control: { type: 'text' }
        }
    }
}

export const Default = (args) => <InputGeneric {...args} />
