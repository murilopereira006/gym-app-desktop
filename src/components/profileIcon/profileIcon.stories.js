import { ProfileIcon } from './index'

export default {
    component: ProfileIcon,
    title: 'ProfileIcon',
    argTypes: {
        photo: {
            defaultValue: 'https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f525.gif',
            control: { type: 'text' }
        }
    }
}

export const Default = (args) => <ProfileIcon {...args} />
