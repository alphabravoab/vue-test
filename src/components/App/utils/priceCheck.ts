export const priceCheck = {
    "Basis Budget": 1393.26,
    "Basis Zeker": 1483.54,
    "Basis Exclusief (Restitutie)": 1624.62,
}

export const termCheck = {
    maand: 12,
    kwartaal: 4,
    jaar: 1
}

export const additionalCheck = (additional: string): Number => {
    switch (additional) {
        case "additional1":
            return 21.38;
        case "additional2":
            return 85.06;
        case "additional3":
            return 198.63;
        case "additional4":
            return 359.73;
        default:
            return 0;
    }
}
