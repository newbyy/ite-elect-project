import body from '~/images/body.jpg';
import massage from '~/images/massage.jpg';
import facial from '~/images/facial.jpg';


export interface spa {
    desc: string,
    type: string,
    id?: number,
    price: number,
    img: string
}

const data = [
    {
        desc: 'This involves the manipulation of muscles and soft tissues to promote relaxation, relieve tension and pain, and improve circulation. There are many different types of massage, including Swedish, deep tissue, hot stone, and Thai massage, among others.',
        type: 'Massage Therapy',
        id: 1,
        price: 99,
        img: massage
    },
    {
        desc: 'Body treatments improve skin health and appearance. Examples include body wraps with ingredients like mud or seaweed, and exfoliating scrubs that remove dead skin cells and leave skin feeling smooth.',
        type: 'Body Treatment',
        id: 2,
        price: 130,
        img: body
    },
    {
        desc: 'Facials are skin treatments that involve cleansing, exfoliating, and moisturizing the face to improve its appearance and health. Some facials also include extractions, where a trained esthetician removes blackheads and other impurities from the skin.',
        id: 3,
        type: 'Facial Massage',
        price: 125,
        img: facial
    },
];

export default data;