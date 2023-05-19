import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
        // Name of the component
        MuiAccordionSummary: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    fontSize: "2px",
                    color: "red",
                },
            },
        },
    },
});
