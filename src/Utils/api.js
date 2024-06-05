import reactLogo from '../assets/react.png';
import nodeLogo from '../assets/node.png';
import vueLogo from '../assets/vue.png';
import angularLogo from '../assets/angular.png';
export const fetchSkills = async () => {
    return [
        {
            id: '1',
            name: 'React',
            level: 'Avançado',
            description: 'Biblioteca para construção de interfaces de usuário',
            imageUrl: reactLogo
        },
        {
            id: '2',
            name: 'Node.js',
            level: 'Intermediário',
            description: 'Tempo de execução JavaScript criado no mecanismo V8 do Chrome',
            imageUrl: nodeLogo
        }
    ];
};

export const fetchAvailableSkills = async () => {
    return [
        {
            id: '1',
            name: 'React',
            imageUrl: reactLogo
        },
        {
            id: '2',
            name: 'Node.js',
            imageUrl:  nodeLogo
        },
        {
            id: '3',
            name: 'Vue.js',
            imageUrl:  vueLogo
        },
        {
            id: '4',
            name: 'Angular',
            imageUrl:  angularLogo
        }
    ];
};
