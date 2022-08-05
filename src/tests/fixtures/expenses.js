import moment from 'moment'

export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: 'This is rent',
    amount: 109095,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: 'This is for my credit card',
    amount: 200005,
    createdAt: moment(0).add(4, 'days').valueOf()
}]