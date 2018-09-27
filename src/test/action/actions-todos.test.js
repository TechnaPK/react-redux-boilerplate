import { insertData, deleteAllData, deleteDataById, updateData, fetchData }
    from '../../redux/actions/actions-crud'
import demoData from '../demoData'

describe('Todos Action', () => {
    it('Set Defaul Todos in Redux', () => {
        const result = fetchData([]);
        expect(result).toEqual({
            type: 'FETCH_DATA',
            payload: { data: [] }
        })
    });


    it('Add  new Data in Redux', () => {
        const result = insertData({
            _id: "1",
            titile: 'Front End',
            description: ' i will complete Front Today',
        });

        expect(result).toEqual({
            type: 'INSERT_DATA',
            payload: {
                data: {
                    _id: "1",
                    titile: 'Front End',
                    description: ' i will complete Front Today',
                }
            }
        });
    });


    it('Delete One Data From Redux', () => {
        const result = deleteDataById("1");
        expect(result).toEqual({
            type: 'DELETE_DATA_BY_ID',
            payload: { _id: '1' }
        })
    });


    it('Update Data in Redux', () => {
        const result = updateData("1", demoData[0])
        expect(result).toEqual({
            type: 'UPDATE_DATA',
            payload: { _id: "1", updates: demoData[0] }
        })
    })

    it("Delete all Data from Redux ", () => {
        const result = deleteAllData()
        expect(result).toEqual({
            type: 'DELETE_ALL_DATA',
            payload: {}
        })
    })
})