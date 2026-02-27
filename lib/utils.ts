// Utility functions for CMS and frontend

// Formats price to a string with a currency symbol
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

// Formats a date to a more readable format
function formatDate(date) {
    return new Date(date).toLocaleDateString();
}

// Generates a unique ID
function generateId() {
    return 'id-' + Math.random().toString(36).substr(2, 16);
}

// Calculates discount based on original price and discount rate
function calculateDiscount(price, discountRate) {
    return price - (price * discountRate / 100);
}

// Gets initials from a full name
function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

// Truncates text to a specific length
function truncateText(text, length) {
    return text.length > length ? text.substring(0, length) + '...' : text;
}

// Debounces a function to limit the rate of execution
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Gets a random color in hexadecimal format
function getRandomColor() {
    const rand = Math.floor(Math.random() * 16777215).toString(16);
    return `#${rand.padStart(6, '0')}`;
}

// Validates if an email is in the correct format
function isValidEmail(email) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
}

// Class names concatenation utility
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}

// Permissions object for role-based access control functions
const permissions = {
    canEdit: (userRole) => userRole === 'admin' || userRole === 'editor',
    canDelete: (userRole) => userRole === 'admin',
    canView: (userRole) => ['admin', 'editor', 'viewer'].includes(userRole)
};

export {
    formatPrice,
    formatDate,
    generateId,
    calculateDiscount,
    getInitials,
    truncateText,
    debounce,
    getRandomColor,
    isValidEmail,
    cn,
    permissions
};