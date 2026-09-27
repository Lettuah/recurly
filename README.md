# Subscription Tracker — React Native

A React Native mobile app for tracking subscriptions, upcoming payments, balances, and spending insights.

This project is currently under development and is being shared publicly to get feedback, suggestions, and advice from other developers — especially around React Native, Expo, UI architecture, component design, and best practices.

## Screenshots

> Screenshots will be added as the project progresses.

## About the Project

The idea behind this app is to help users keep track of their recurring subscriptions and understand where their money is going.

The current dashboard includes:

- Current balance
- Upcoming subscription payments
- All active subscriptions
- Subscription amount and billing frequency
- Payment dates
- Spending insights
- Bottom-tab navigation

The UI is currently focused on simplicity, clean spacing, and a minimal visual style.

## Tech Stack

- **React Native**
- **Expo**
- **Expo Router**
- **TypeScript**
- **React Native StyleSheet**
- **React Navigation**
- **Safe Area Context**

## Project Structure

```text
app/
├── (tabs)/
│   ├── dashboard/
│   ├── subscription/
│   ├── insight/
│   ├── setting/
│   └── _layout.tsx
│
components/
├── tab/
│   └── TabIcon.tsx
│
assets/
├── icons/
└── images/

theme/
└── colors.ts
```
