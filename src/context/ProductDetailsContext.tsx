import {  useState } from "react";
import createSafeContext from "../lib/createSafeContext";
export const [useProductDetailsContext, Provider]= createSafeContext();

export function ProductDetailDataProvider({ children }: { children: React.ReactNode }) {
        const [productDetailsdata, setProductDetailsdata] = useState(null);
    
        return (
            <Provider value={{ productDetailsdata, setProductDetailsdata }}>
                {children}
            </Provider>
        );    
    }

