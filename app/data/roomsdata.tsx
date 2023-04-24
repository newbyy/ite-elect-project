
import room1 from '../images/room_1.jpg';
import room2 from '../images/room_2.jpg';
import room3 from '../images/room_3.jpg';
import room4 from '../images/room_4.jpg';
import room5 from '../images/room_5.jpg';
import room6 from '../images/room_6.jpg'; 

export interface Data  { 
    path: string
    room: string
    price: number
    desc: string
    rating: number
}

const data: Data[] = [
    {
        path: room1,
        room: 'Room 1',
        price: 99,
        desc: 'Ex adipisicing nostrud do officia aliqua duis excepteur nisi consequat sit magna esse sunt anim. Exercitation nisi elit consectetur magna cupidatat dolore incididunt. Cupidatat pariatur adipisicing ullamco cupidatat nulla exercitation reprehenderit duis sunt dolore adipisicing labore consectetur. Ut ea laboris laboris reprehenderit proident officia ea commodo quis et. Magna non minim anim ut ut non laborum cillum fugiat. Labore excepteur proident sit ipsum incididunt excepteur. Reprehenderit exercitation do excepteur consectetur irure occaecat qui sit consectetur.z',
        rating: 4
    },
    {
        path: room2,
        room: 'Room 2',
        price: 125,
        desc: 'Ex adipisicing nostrud do officia aliqua duis excepteur nisi consequat sit magna esse sunt anim. Exercitation nisi elit consectetur magna cupidatat dolore incididunt. Cupidatat pariatur adipisicing ullamco cupidatat nulla exercitation reprehenderit duis sunt dolore adipisicing labore consectetur. Ut ea laboris laboris reprehenderit proident officia ea commodo quis et. Magna non minim anim ut ut non laborum cillum fugiat. Labore excepteur proident sit ipsum incididunt excepteur. Reprehenderit exercitation do excepteur consectetur irure occaecat qui sit consectetur.z',
        rating: 4.5
    }, 
    {
        path: room3,
        room: 'Room 3',
        price: 135,
        desc: 'Ex adipisicing nostrud do officia aliqua duis excepteur nisi consequat sit magna esse sunt anim. Exercitation nisi elit consectetur magna cupidatat dolore incididunt. Cupidatat pariatur adipisicing ullamco cupidatat nulla exercitation reprehenderit duis sunt dolore adipisicing labore consectetur. Ut ea laboris laboris reprehenderit proident officia ea commodo quis et. Magna non minim anim ut ut non laborum cillum fugiat. Labore excepteur proident sit ipsum incididunt excepteur. Reprehenderit exercitation do excepteur consectetur irure occaecat qui sit consectetur.z',
        rating: 5
    }, 
    {
        path: room4,
        room: 'Room 4',
        price: 80,
        desc: 'Ex adipisicing nostrud do officia aliqua duis excepteur nisi consequat sit magna esse sunt anim. Exercitation nisi elit consectetur magna cupidatat dolore incididunt. Cupidatat pariatur adipisicing ullamco cupidatat nulla exercitation reprehenderit duis sunt dolore adipisicing labore consectetur. Ut ea laboris laboris reprehenderit proident officia ea commodo quis et. Magna non minim anim ut ut non laborum cillum fugiat. Labore excepteur proident sit ipsum incididunt excepteur. Reprehenderit exercitation do excepteur consectetur irure occaecat qui sit consectetur.z',
        rating: 3.5
    }, 
    {
        path: room5,
        room: 'Room 5',
        price: 120,
        desc: 'Ex adipisicing nostrud do officia aliqua duis excepteur nisi consequat sit magna esse sunt anim. Exercitation nisi elit consectetur magna cupidatat dolore incididunt. Cupidatat pariatur adipisicing ullamco cupidatat nulla exercitation reprehenderit duis sunt dolore adipisicing labore consectetur. Ut ea laboris laboris reprehenderit proident officia ea commodo quis et. Magna non minim anim ut ut non laborum cillum fugiat. Labore excepteur proident sit ipsum incididunt excepteur. Reprehenderit exercitation do excepteur consectetur irure occaecat qui sit consectetur.z',
        rating: 4
    }, 
    {
        path: room6,
        room: 'Room 6',
        price: 125,
        desc: 'Ex adipisicing nostrud do officia aliqua duis excepteur nisi consequat sit magna esse sunt anim. Exercitation nisi elit consectetur magna cupidatat dolore incididunt. Cupidatat pariatur adipisicing ullamco cupidatat nulla exercitation reprehenderit duis sunt dolore adipisicing labore consectetur. Ut ea laboris laboris reprehenderit proident officia ea commodo quis et. Magna non minim anim ut ut non laborum cillum fugiat. Labore excepteur proident sit ipsum incididunt excepteur. Reprehenderit exercitation do excepteur consectetur irure occaecat qui sit consectetur.z',
        rating: 5
    }, 
]


export default data