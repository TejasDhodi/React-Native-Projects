import { Linking } from "react-native";

const handleEmailPress = (packages = 'e.g., wedding, corporate event, photoshoot, etc') => {
    const email = 'tejasdhodi77@gmail.com';
    const subject = `Booking Request for ${packages}!`;
    const body = `
    Hello Tejas Dhodi,

    I hope you're doing well! I am interested in booking your services for photography and videography for an upcoming [event/project]. Here are the details:

    Event/Project Name: Add Name of event/project here
    Event/Project Date: Add Date here
    Location: Add Venue or address here
    Type of Service: ${packages}
    Specific Requirements: [e.g., candid photography, highlight video, drone footage, etc.]
    Could you please let me know your availability on the mentioned date, as well as your pricing and any packages you offer? I'd love to discuss more about how we can work together to capture some beautiful moments.

    Looking forward to your response!

    Best regards,
    [Your Name]
    [Your Contact Information]
    `;

    // Creating the mailto URL
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the default email client
    Linking.openURL(url).catch((err) => console.error('Failed to open email:', err));
};

export default handleEmailPress;  // Exporting function as default
