import { ButtonGenerics } from './index'

export default {
    component: ButtonGenerics,
    title: 'ButtonGenerics',
    argTypes: {
        children: {
            defaultValue: 'Button',
            control: { type: 'text' }
        },
        width: {
            defaultValue: 'auto',
            control: { type: 'text' }
        },
        height: {
            defaultValue: 'auto',
            control: { type: 'text' }
        },
        bgColor: {
            defaultValue: '#eb048d',
            control: { type: 'text' }
        },
        margin: {
            defaultValue: '0 5px',
            control: { type: 'text' }
        },
        padding: {
            defaultValue: '5px 10px',
            control: { type: 'text' }
        },
        border: {
            defaultValue: 'solid',
            control: { type: 'text' }
        },
        borderColor: {
            defaultValue: 'black',
            control: { type: 'text' }
        },
        borderWeight: {
            defaultValue: 2,
            control: { type: 'number' }
        },
        borderRadius: {
            defaultValue: 10,
            control: { type: 'number' }
        },
        textColor: {
            defaultValue: '#fff',
            control: { type: 'text' }
        },
        fontFamily: {
            defaultValue: 'Poppins',
            control: { type: 'text' }
        },
        fontSize: {
            defaultValue: '10px',
            control: { type: 'text' }
        },
        fontWeight: {
            defaultValue: 'normal',
            control: { type: 'text' }
        },
        fontStyles: {
            defaultValue: 'font-style: normal;text-decoration: none;',
            control: { type: 'text' }
        },
        outer: {
            defaultValue: false,
            control: { type: 'bool' }
        },
        outerStyle: {
            defaultValue: 'solid',
            control: { type: 'text' }
        },
        outerWeight: {
            defaultValue: 5,
            control: { type: 'number' }
        },
        outerColor: {
            defaultValue: 'red',
            control: { type: 'text' }
        },
        outerPadding: {
            defaultValue: '5px',
            control: { type: 'text' }
        },
    }
}

export const Default = (args) => <ButtonGenerics {...args} >{children}</ButtonGenerics>
