import { useInputValue } from "./useInputValue";
import { act, renderHook } from "@testing-library/react-hooks";

describe('when rendered', () => {
    test('render component', () => {
        const { result } = renderHook(() => useInputValue())
        
        expect(result.current.onChange).toBeInstanceOf(Function)
    })

    test('when rendered initial value', () => {
        const { result } = renderHook(() => useInputValue())

        act(() => {
            result.current.onChange({target : {value : "Initial Value"}})
        })
        expect(result.current.value).toBe("Initial Value")
    })
    test('when rendered initial inner text', () => {
        const { result } = renderHook(() => useInputValue())

        act(() => {
            result.current.onChange({target : {innerText : "Initial Value"}})
        })
        expect(result.current.value).toBe("Initial Value")
    })
})