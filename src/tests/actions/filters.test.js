import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from '../../actions/filters'
import moment from 'moment'

test('should generate setStartDate action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate setEndDate action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should setup the sort by date action', () => {
    expect(sortByDate()).toEqual({type: 'SORT_BY_DATE' })
})

test('should setup the sort by amount action', () => {
    expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT' })
})

test('should setup the text filter action object', () => {
    const action = setTextFilter('this is the text')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'this is the text'
    })
})

test('should setup the set text filter default action object', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})