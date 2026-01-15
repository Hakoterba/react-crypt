import React from "react";

export const useTheme = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    React.useEffect(() => {
        if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
        setIsDarkMode(true);
        }

        const listener = (event: MediaQueryListEvent) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setIsDarkMode(newColorScheme === "dark");
        };

        window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", listener);

        // Cleanup
        return () => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .removeEventListener("change", listener);
        };
    }, []);

    return { isDarkMode };
};
