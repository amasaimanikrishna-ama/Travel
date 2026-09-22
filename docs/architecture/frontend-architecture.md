# Frontend Architecture

The frontend is built with **React 18**, **Vite**, **Tailwind CSS**, and **React Router v6**.

## Design System & Organization
- **Atomic Component Hierarchy**: Reusable atoms/molecules in `src/components/common/`.
- **Domain-Driven Feature Modules**: Feature components partitioned into `cars/`, `destinations/`, `packages/`, and `booking/`.
- **Layout System**: Modular shells (`PublicLayout`, `CustomerLayout`, `AdminLayout`).
- **Global State**: React Context API for lightweight state (`AuthContext`, `BookingContext`, `WishlistContext`).
- **Data Fetching**: Custom hooks wrapping Axios API service singletons with interceptors for JWT injection.
