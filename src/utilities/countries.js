export const countries = [
    {
        name: "Nigeria",
        code: "NG",
        states: [
            "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
            "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo",
            "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna",
            "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
            "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo",
            "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
            "Federal Capital Territory"
        ]
    },
    {
        name: "United States",
        code: "US",
        states: [
            "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
            "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
            "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
            "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
            "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
            "New Hampshire", "New Jersey", "New Mexico", "New York",
            "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
            "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
            "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
            "West Virginia", "Wisconsin", "Wyoming", "District of Columbia"
        ]
    },
    {
        name: "United Kingdom",
        code: "GB",
        states: [
            "England", "Scotland", "Wales", "Northern Ireland"
        ]
    },
    {
        name: "Canada",
        code: "CA",
        states: [
            "Alberta", "British Columbia", "Manitoba", "New Brunswick",
            "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia",
            "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan",
            "Yukon"
        ]
    },
    {
        name: "Ghana",
        code: "GH",
        states: [
            "Greater Accra", "Ashanti", "Western", "Central", "Eastern",
            "Volta", "Northern", "Upper East", "Upper West", "Brong Ahafo"
        ]
    },
    {
        name: "South Africa",
        code: "ZA",
        states: [
            "Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal",
            "Limpopo", "Mpumalanga", "North West", "Northern Cape", "Western Cape"
        ]
    }
];

export const getCountryByName = (name) => {
    return countries.find(country => country.name === name);
};

export const getStatesByCountry = (countryName) => {
    const country = getCountryByName(countryName);
    return country ? country.states : [];
};

export const getPhysicalVerificationCountries = () => {
    return countries.filter(country => country.name === "Nigeria");
};

export const getDigitalVerificationCountries = () => {
    return countries;
};