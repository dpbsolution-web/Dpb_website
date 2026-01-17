/**
 * Form Validation Constants
 * Centralized configuration for form validation rules and error messages
 */

// Validation Rules - Min/Max Character Limits
export const VALIDATION_RULES = {
  NAME: {
    MIN: 2,
    MAX: 100,
  },
  EMAIL: {
    MIN: 5,
    MAX: 255,
  },
  PHONE: {
    MIN: 10,
    MAX: 20,
  },
  MESSAGE: {
    MIN: 50,
    MAX: 1000,
  },
  SUBJECT: {
    MIN: 5,
    MAX: 200,
  },
  COMPANY: {
    MIN: 2,
    MAX: 100,
  },
  ADDRESS: {
    MIN: 10,
    MAX: 500,
  },
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NAME: {
    REQUIRED: "Name is required",
    MIN: `Name must be at least ${VALIDATION_RULES.NAME.MIN} characters`,
    MAX: `Name cannot exceed ${VALIDATION_RULES.NAME.MAX} characters`,
    INVALID: "Please enter a valid name",
  },
  EMAIL: {
    REQUIRED: "Email is required",
    INVALID: "Please enter a valid email address",
    MAX: `Email cannot exceed ${VALIDATION_RULES.EMAIL.MAX} characters`,
  },
  PHONE: {
    REQUIRED: "Phone number is required",
    MIN: `Phone number must be at least ${VALIDATION_RULES.PHONE.MIN} digits`,
    MAX: `Phone number cannot exceed ${VALIDATION_RULES.PHONE.MAX} digits`,
    INVALID: "Please enter a valid phone number",
  },
  MESSAGE: {
    REQUIRED: "Message is required",
    MIN: `Message must be at least ${VALIDATION_RULES.MESSAGE.MIN} characters`,
    MAX: `Message cannot exceed ${VALIDATION_RULES.MESSAGE.MAX} characters`,
  },
  COVER_LETTER: {
    REQUIRED: "Cover letter is required",
    MIN: `Cover letter must be at least ${VALIDATION_RULES.MESSAGE.MIN} characters`,
    MAX: `Cover letter cannot exceed ${VALIDATION_RULES.MESSAGE.MAX} characters`,
  },
  SUBJECT: {
    REQUIRED: "Subject is required",
    MIN: `Subject must be at least ${VALIDATION_RULES.SUBJECT.MIN} characters`,
    MAX: `Subject cannot exceed ${VALIDATION_RULES.SUBJECT.MAX} characters`,
  },
  COMPANY: {
    REQUIRED: "Company name is required",
    MIN: `Company name must be at least ${VALIDATION_RULES.COMPANY.MIN} characters`,
    MAX: `Company name cannot exceed ${VALIDATION_RULES.COMPANY.MAX} characters`,
  },
  FILE: {
    REQUIRED: "File is required",
    SIZE: "File size must not exceed 5MB",
    TYPE: "Only PDF, DOC, and DOCX files are allowed",
    REJECTED: "File rejected. Please upload PDF or DOC (max 5MB)",
  },
  GENERIC: {
    REQUIRED: "This field is required",
    INVALID: "Please enter a valid value",
  },
} as const;

// Button Labels
export const BUTTON_LABELS = {
  // Primary Actions
  SUBMIT: "Submit",
  SUBMIT_APPLICATION: "Submit Application",
  SEND: "Send",
  SEND_MESSAGE: "Send Message",
  APPLY_NOW: "Apply Now",
  SAVE: "Save",
  UPDATE: "Update",
  DELETE: "Delete",
  
  // Secondary Actions
  CANCEL: "Cancel",
  CLOSE: "Close",
  BACK: "Back",
  CONTINUE: "Continue",
  CONTINUE_EDITING: "Continue Editing",
  NEXT: "Next",
  PREVIOUS: "Previous",
  
  // Confirmation Actions
  YES_CONFIRM: "Yes, Confirm",
  YES_CANCEL: "Yes, Cancel",
  YES_DELETE: "Yes, Delete",
  NO_GO_BACK: "No, Go Back",
  
  // Other Actions
  LEARN_MORE: "Learn More",
  VIEW_MORE: "View More",
  READ_MORE: "Read More",
  DOWNLOAD: "Download",
  UPLOAD: "Upload",
  RESET: "Reset",
  CLEAR: "Clear",
  CLEAR_ALL: "Clear All",
  SEARCH: "Search",
  FILTER: "Filter",
  SORT: "Sort",
} as const;

// Toast Messages
export const TOAST_MESSAGES = {
  SUCCESS: {
    APPLICATION_SUBMITTED: "Application submitted successfully! We'll get back to you soon.",
    MESSAGE_SENT: "Message sent successfully! We'll get in touch soon.",
    SAVED: "Saved successfully!",
    UPDATED: "Updated successfully!",
    DELETED: "Deleted successfully!",
    COPIED: "Copied to clipboard!",
    FILE_UPLOADED: "File uploaded successfully!",
  },
  ERROR: {
    SUBMISSION_FAILED: "Failed to submit. Please try again.",
    MESSAGE_FAILED: "Failed to send message. Please try again.",
    NETWORK_ERROR: "An error occurred. Please check your connection and try again.",
    FILE_UPLOAD_FAILED: "File upload failed. Please try again.",
    GENERIC: "Something went wrong. Please try again.",
  },
  INFO: {
    PROCESSING: "Processing...",
    LOADING: "Loading...",
    SUBMITTING: "Submitting application...",
    SENDING: "Sending message...",
  },
} as const;

// Email Pattern for Validation
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone Pattern for Validation (International format)
export const PHONE_PATTERN = /^[\d\s\-\+\(\)]+$/;
