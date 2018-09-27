import crudReducer from '../../redux/reducers/reducer-crud'
import demoData from '../demoData'
const initialState = {
    data: demoData,
    error: null,
    isLoading: false,

}
describe('Testing Todo Reducer', () => {

    it("Set Default State", () => {
        const result = crudReducer(undefined, { type: '@@INIT' })
        expect(result).toEqual(
            {
                data: [],
                error: null,
                isLoading: false,
            }
        )
    })

    it("Should Add New Todo", () => {
        let data = {
            _id: "1",
            title: "Title",
            place: 'E-Liberary',
            description: "description",
            status: 'pending'
        };
        const result = crudReducer(initialState, {
            type: 'INSERT_DATA',
            payload: { data: data }
        });

        expect(result).toEqual(Object.assign({}, initialState, { data: [...initialState.data, data] }))
    });

    it("should Delete One Data", () => {
        const result = crudReducer(initialState, {
            type: 'DELETE_DATA_BY_ID',
            payload: { _id: '2' }
        })
        expect(result).toEqual({
            data: [demoData[0], demoData[2]],
            error: null,
            isLoading: false
        })
    });

    it("Should not Delete Data as ID is Invalid", () => {
        const result = crudReducer(initialState, {
            type: "DELETE_DATA_BY_ID",
            payload: { _id: "5" }
        });

        expect(result).toEqual(initialState);
    });

    it("Should Update The Data", () => {
        const result = crudReducer(initialState, {
            type: 'UPDATE_DATA',
            payload: { _id: "3", data: demoData[3] }
        });

        expect(result.data[3]).toEqual(demoData[3])
    });

    it("Should not Update the todo as Id is invalid", () => {
        const result = crudReducer(initialState, {
            type: "EDIT_STATUS",
            payload: { _id: "5" }
        });

        expect(result).toEqual(initialState);

    });
})