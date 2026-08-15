export const snippetsData = [
  {
    id: "use-debounce",
    filename: "useDebounce.js",
    language: "javascript",
    category: "React Hooks",
    title: "Performance Debounce Hook",
    description:
      "Prevents excessive API calls during rapid user search input by delaying state updates until typing pauses.",
    highlights: [
      "Reduces network overhead by 80%+ on live search fields",
      "Automatic timer cleanup on unmount or input change",
      "Generic implementation working with any data type",
    ],
    code: `import { useState, useEffect } from 'react';

/**
 * Custom hook to debounce high-frequency input changes.
 * @param {any} value - The input value to debounce
 * @param {number} delay - Delay in milliseconds (default 500ms)
 * @returns {any} Debounced value
 */
export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up timeout if value changes before delay expires
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};`,
  },
  {
    id: "jwt-auth-middleware",
    filename: "authMiddleware.js",
    language: "javascript",
    category: "Backend",
    title: "Express JWT Auth Middleware",
    description:
      "Secure Express route protection verifying Bearer tokens, checking expiration, and attaching decoded user identity.",
    highlights: [
      "Strips Bearer prefix safely",
      "Handles TokenExpiredError & JsonWebTokenError gracefully",
      "Attaches verified user object directly to Express Request",
    ],
    code: `import jwt from 'jsonwebtoken';

/**
 * Protects Express endpoints by verifying Bearer JWT tokens.
 */
export const verifyAuthToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Access denied. No valid token provided.',
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user payload to request
    next();
  } catch (error) {
    const message =
      error.name === 'TokenExpiredError'
        ? 'Session expired. Please log in again.'
        : 'Invalid authentication token.';

    return res.status(403).json({ success: false, message });
  }
};`,
  },
  {
    id: "async-handler-wrapper",
    filename: "asyncHandler.js",
    language: "javascript",
    category: "Backend",
    title: "Async Controller Error Wrapper",
    description:
      "Eliminates boilerplate try/catch blocks in Express controllers by automatically routing rejected promises to global error middleware.",
    highlights: [
      "Zero try-catch repetition across controller endpoints",
      "Ensures unhandled promise rejections never crash the process",
      "Clean higher-order function pattern",
    ],
    code: `/**
 * Wraps asynchronous Express route handlers to capture errors automatically.
 * @param {Function} fn - Async controller function (req, res, next)
 */
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Usage Example:
// export const getUserProfile = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.user.id);
//   res.status(200).json({ success: true, user });
// });`,
  },
  {
    id: "currency-formatter",
    filename: "formatCurrency.js",
    language: "javascript",
    category: "Utilities",
    title: "International Currency Formatter",
    description:
      "Utility helper leveraging the native Intl.NumberFormat API to format numbers into localized currency strings with fallback safety.",
    highlights: [
      "Native browser Intl.NumberFormat optimization",
      "Supports LKR, USD, EUR, and custom currency codes",
      "Handles null/undefined inputs safely without throwing",
    ],
    code: `/**
 * Formats numeric values into currency strings cleanly.
 * @param {number} amount - Numeric value to format
 * @param {string} currency - Currency code (e.g. 'USD', 'LKR', 'EUR')
 * @param {string} locale - BCP 47 language tag (e.g. 'en-US', 'si-LK')
 */
export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {
  if (typeof amount !== 'number' || isNaN(amount)) return '$0.00';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};`,
  },
];
