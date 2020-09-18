import useFilterData from './useFilterData';
import useArrayChunk from './useArrayChunk'
import mockData from '../__mocks__/mock-api'


describe('Test hooks', () => {

    it('should return array chunk', () => {
        expect(useArrayChunk(mockData, 2)).toEqual([
            [mockData[0], mockData[1]], [mockData[2], mockData[3]]
        ])
    })

    it('Should return Filtered array', () => {
        expect(useFilterData(mockData, 'Lise')).toEqual([mockData[0]])
        expect(useFilterData(mockData, '68')).toEqual([mockData[2]])
        expect(useFilterData(mockData, '')).toEqual(mockData)
    })

    it('Should return sorted Data', () => {
        // Need to use mock React component
    })
})