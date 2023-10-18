import TopBar from './index'

export default {
  component: TopBar,
  title: 'TopBar',
  argTypes: {
    arrayOfComponents: {
      defaultValue: {
        1: { name: 'Vishal Salunke', sales: 10, display_profile: 'https://www.bu.edu/lernet/artemis/years/2017/projects/StudentWebsites/Dara/images/jim.gif' },
        2: { name: 'Prasanna Sawant', sales: 7, display_profile: 'https://i.pinimg.com/originals/75/29/0c/75290caf21f5a1c92ce7b5d8c1afe66a.png' },
        3: { name: 'Simon Birrel', sales: 5, display_profile: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ0QckiZJVzc1sY44XidrDDnLARbkQT4ppbrScGSxMON6onpRF6' },
        4: { name: 'John Doe', sales: 4, display_profile: 'https://www.bbc.co.uk/comedy/theoffice/characters/images/gareth_rabbit_1024.jpg' },
        5: { name: 'Maria da Silva pereira', sales: 4, display_profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAibFCCECFVbFl59TT61nvailAgIqy5lvjml363vHAHbT4QKGZu812utdMBuNDTbvjVHA&usqp=CAU' },
        6: { name: 'Murilo Pereira', sales: 1, display_profile: 'http://www.bbc.co.uk/comedy/theoffice/wallpaper/images/keith1024.jpg' }
      },
      control: { type: 'object' }
    },
    title: {
      defaultValue: 'Ranking de corretores',
      control: { type: 'text' }
    },
  }
}

export const Default = (args) => <TopBar {...args} />