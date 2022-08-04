import { ICatCard } from './CatCard';

const base: ICatCard = {
    title: 'Some cool cat',
    author: 'Erik Demchak',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur beatae doloremque laboriosam quis, quas iste vitae distinctio architecto eum sunt.',
    tag: 'Felines',
    time: new Date().toDateString()
}

export const mockCatCardProps = {
    base
};