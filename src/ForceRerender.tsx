import { PropsWithChildren, useReducer } from "react";

export function ForceRerender({ children }: PropsWithChildren) {
    const [, forceRerender] = useReducer((count) => count + 1, 0);

    return (
        <>
            <div><button onClick={forceRerender}>Refresh</button></div>
            {children}
        </>
    );
}