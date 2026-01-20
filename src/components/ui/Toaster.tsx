
import { Toaster as Sonner } from "sonner";

export const Toaster = () => {
    return (
        <Sonner
            position="top-right"
            toastOptions={{
                style: {
                    background: 'black',
                    color: 'white',
                    border: '1px solid #333'
                },
                className: 'font-sans'
            }}
        />
    );
};
